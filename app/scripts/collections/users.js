var app = app || {};

(function () {

    app.UsersCollection = Backbone.Collection.extend({

        model: app.UsersModel

    });

})();
