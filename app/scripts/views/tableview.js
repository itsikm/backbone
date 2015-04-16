var app = app || {};

(function ($) {
    'use strict';

    app.TableView = Backbone.View.extend({

        template: _.template($('#table-view').html()),

        initialize: function (options) {

            this.el = options.el;
            this.collection = options.collection;

            this.render();
            this.$tbody = this.$el.find('tbody');


            this.listenTo(this.collection, 'add', this.addOneRow);
            this.listenTo(this.collection, 'reset', this.addAll);

            this.addAll();
        },

        addAll: function () {
            this.$tbody.html('');
            this.collection.each(this.addOneRow, this);
        },

        addOneRow: function (row) {
            var row = new app.TableViewRow({ model: row });
            this.$tbody.append(row.render().el);
        },

        render: function () {
            this.$el.html(this.template);
        }

    });

    app.TableViewRow = Backbone.View.extend({

        tagName: 'tr',

        template: _.template($('#table-view-row').html()),

        events: {
            'click a.toggle': 'toggle'
        },

        initialize: function () {
            _.bindAll(this, 'render', 'close');
            this.model.bind('change', this.render, this);
            this.model.view = this;

            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.toggleView();
            return this;
        },

        toggle: function () {
            this.model.toggle();
        },

        toggleView: function () {
            this.$el.attr('class', this.model.get('completed') ? 'info' : '');
        },

        /**
         * The method will be execute when the view is closed
         */
        onClose: function () {
            this.model.unbind('change', this.render);
        }

    });

})(jQuery);
