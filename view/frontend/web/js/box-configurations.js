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
            console.log('Submitted box configuration form');
        }
    });
});