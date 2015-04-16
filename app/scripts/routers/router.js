var app = app || {};

(function () {
    'use strict';

    var userCollection = new app.UsersCollection([
        new app.UsersModel({ name: 'Issac Moo', completed: true }),
        new app.UsersModel({ name: 'John Hoo' }),
        new app.UsersModel({ name: 'Carmel Boo', completed: false })
    ]);

    var Router = Backbone.Router.extend({

        routes: {
            '': 'home',
            'add': 'add'
        },

        home: function () {
            this.showView(
                new app.HomeView({
                    el: '.page',
                    collection: userCollection
                })
            );
        },

        add: function () {
            this.showView(
                new app.addView({
                    el: '.page',
                    collection: userCollection
                })
            );
        }

    });

    app.Router = new Router();
    Backbone.history.start();
})();
