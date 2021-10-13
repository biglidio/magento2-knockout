define([
    'uiComponent',
    'ko',
    'Biglidio_InventoryFulfillment/js/model/box-configurations',
    'Biglidio_InventoryFulfillment/js/model/sku',
    'jquery'
], function(
    Component,
    ko,
    boxConfigurationsModel,
    skuModel,
    $
) {
    'use strict'

    return Component.extend({
        defaults: {
            boxConfigurationsModel: boxConfigurationsModel
        },
        initialize() {
            this._super();

            skuModel.isSuccess.subscribe((value) => {
                console.log('SKU isSuccess value', value);
            });

            skuModel.isSuccess.subscribe((value) => {
                console.log('SKU isSuccess old value', value);
            }, null, 'beforeChange');
        },
        handleAdd() {
            boxConfigurationsModel.add();
        },
        handleDelete(index) {
            boxConfigurationsModel.delete(index);
        },
        handleSubmit() {
            $('.box-configurations form input').removeAttr('aria-invalid');

            if ($('.box-configurations form').valid()) {
                boxConfigurationsModel.isSuccess(true);
            } else {
                boxConfigurationsModel.isSuccess(false);
            }
        }
    });
});