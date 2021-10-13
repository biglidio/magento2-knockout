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
            boxConfigurationsModel: boxConfigurationsModel
        },
        initialize() {
            this._super();

            this.canSubmit = ko.computed(() => {
                return skuModel.isSuccess()
                    && boxConfigurationsModel.isSuccess()
                    && this.isTermsChecked();
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