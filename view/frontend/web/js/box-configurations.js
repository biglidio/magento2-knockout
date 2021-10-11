define([
    'uiComponent'
], function(
    Component
) {
    'use strict'

    return Component.extend({
        initialize() {
            this._super();

            console.log('Box configurations component setup successfully');
        }
    });
});