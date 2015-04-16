var app = app || {};

(function () {
    'use strict';

    app.UsersModel = Backbone.Model.extend({

        defaults: {
            name: '',
            completed: false
        },

        initialize: function () {
            // console.log('New users model is initialize!');
        },

        toggle: function () {
            this.set({
                completed: !this.get('completed')
            });
        }

    });


})();
