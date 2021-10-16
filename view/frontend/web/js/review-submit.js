define([
    'uiComponent',
    'ko',
    'Biglidio_InventoryFulfillment/js/model/box-configurations',
    'Biglidio_InventoryFulfillment/js/model/sku',
    'mage/url'
], function(
    Component,
    ko,
    boxConfigurationsModel,
    skuModel,
    url
) {
    'use strict';

    return Component.extend({
        defaults : {
            isTermsChecked: ko.observable(false),
            numberOfBoxes: boxConfigurationsModel.numberOfBoxes(),
            shipmentWeight: boxConfigurationsModel.shipmentWeight(),
            billableWeight: boxConfigurationsModel.billableWeight(),
            boxConfigurationsIsSuccess: boxConfigurationsModel.isSuccess,
            boxConfigurations: boxConfigurationsModel.boxConfigurations,
            sku: skuModel.sku
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
                return true;
            } else {
                console.log('The Review Submit form has an error.');
            }
        },
        getUrl() {
            return url.build('inventory-fulfillment/index/post');
        }
    });
});