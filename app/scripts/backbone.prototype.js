'use strict';

/**
 * Custom remove method to remove view from the DOM
 * @returns {Backbone.View}
 */
Backbone.View.prototype.remove = function () {
    this.undelegateEvents();
    this.$el.empty();
    this.stopListening();
    return this;
};

/**
 * Close view to prevent zombies on backbone
 * This method should be called when view is no longer displayed
 */
Backbone.View.prototype.close = function () {

    /**
     * Remove the view from the DOM and unbind jQuery element
     */
    this.remove();

    /**
     * Unbind any event attached by this view
     */
    this.unbind();

    /**
     * When onClose exist, execute it
     * The purpose of this code is to enable a custom on close method
     */
    if(this.onClose) {
        this.onClose();
    }

    return this;
};

/**
 * It helps you to prevent zombies by applying a close method
 * You should use it to wrap any high level view using the router object
 *
 * Example:
 *      this.showView(
 *          YOUR VIEW CODE HERE
 *      );
 *
 * @param view
 */
Backbone.Router.prototype.showView = function (view) {

    /**
     * Check for existing view and execute close method
     */
    if(this.currentView) {
        this.currentView.close();
    }

    /**
     * Append the current view to the currentView,
     * so we can use it for the next iteration
     */
    this.currentView = view;

    /**
     * Render the current view so it will be displayed,
     * otherwise the view will not appear on the page
     */
    this.currentView.render();

    return this;
};
