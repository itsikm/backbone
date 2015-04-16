var app = app || {};

(function ($) {

    app.addView = Backbone.View.extend({

        events: {
            'submit .add-member-form': 'addMember',
            'keydown input': 'pressEnter'
        },

        initialize: function (options) {
            this.el = options.el;
            this.collection = options.collection;
            this.render();
        },

        render: function () {
            var template = _.template($('#add-page').html());
            this.$el.html(template);
            this.$('input:first-of-type').focus();
        },

        pressEnter: function (ev) {
              if(ev.which === 13) {
                  this.addMember(ev);
              }
        },

        addMember: function(ev) {
            var form = $(ev.currentTarget).serializeArray();
            var user = _.reduce(form, function(obj, item){
                obj[item.name] = item.value;
                return obj;
            }, {});

            this.collection.add(new app.UsersModel(user));

            app.Router.navigate('', { trigger: true });

            return false;
        }

    });

})(jQuery);
