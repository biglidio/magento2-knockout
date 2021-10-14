define([
    'uiComponent',
    'ko',
    'Biglidio_InventoryFulfillment/js/model/box-configurations',
    'Biglidio_InventoryFulfillment/js/model/sku'
], function(
    Component,
    ko,
    boxConfigurationsModel,
    skuModel
) {
    'use strict';

    return Component.extend({
        defaults : {
            isTermsChecked: ko.observable(false),
        },
        initialize() {
            this._super();

            this.canSubmit = ko.computed(() => {
                return skuModel.isSuccess()
                    && boxConfigurationsModel.isSuccess()
                    && this.isTermsChecked();
            });

            this.numberOfBoxes = ko.computed(() => {
                return boxConfigurationsModel.boxConfigurations().reduce(function(runningTotal, boxConfiguration) {
                    return runningTotal + (boxConfiguration.numberOfBoxes() || 0);
                }, 0);
            });

            this.totalWeight = ko.computed(() => {
                return boxConfigurationsModel.boxConfigurations().reduce(function(runningTotal, boxConfiguration) {
                    return runningTotal + (boxConfiguration.totalWeight() || 0);
                }, 0);
            });

            this.billableWeight = ko.computed(() => {
                return boxConfigurationsModel.boxConfigurations().reduce(function(runningTotal, boxConfiguration) {
                    return runningTotal + (boxConfiguration.billableWeight() || 0);
                }, 0);
            });
        },
        handleSubmit() {
            if (this.canSubmit()) {
                console.log('The Review Submit form has been submitted.');
            } else {
                console.log('The Review Submit form has an error.');
            }
        }
    });
});