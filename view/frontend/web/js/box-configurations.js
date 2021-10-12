define([
    'uiComponent',
    'ko'
], function(
    Component,
    ko
) {
    'use strict'

    var boxConfiguration = () => {
        return {
            length: ko.observable(),
            width: ko.observable(),
            height: ko.observable(),
            weight: ko.observable(),
            unitsPerBox: ko.observable(),
            numberOfBoxes: ko.observable(),
        }
    }

    return Component.extend({
        defaults: {
            boxConfigurations: ko.observableArray([boxConfiguration()])
        },
        initialize() {
            this._super();

            console.log('Box configurations component setup successfully');
        },
        handleAdd() {
            this.boxConfigurations.push(boxConfiguration());
        }
    });
});