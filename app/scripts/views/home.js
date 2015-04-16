var app = app || {};

(function ($) {

    app.HomeView = Backbone.View.extend({

        initialize: function (options) {
            this.el = options.el;
            this.collection = options.collection;
            this.render();
        },

        render: function () {
            var template = _.template($('#home-page').html());
            this.$el.html(template);
            this.viewTables();
        },

        viewTables: function () {

            new app.TableView({
                el: '.tableView1',
                collection: this.collection
            });

            new app.TableView({
                el: '.tableView2',
                collection: this.collection
            });

        }

    });

})(jQuery);
