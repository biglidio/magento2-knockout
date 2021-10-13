define([
    'uiComponent', 
    'ko',
    'mage/storage',
    'jquery',
    'mage/translate',
    'Biglidio_InventoryFulfillment/js/model/sku'
], function(
    Component, 
    ko,
    storage,
    $,
    $t,
    skuModel
){
    'use strict'

    return Component.extend({
        defaults: {
            /*  Better config it inside layout file. Example:
                <item name="config" xsi:type="array">
                    <item name="template" xsi:type="string">Biglidio_InventoryFulfillment/sku-lookup</item>
                </item>
            */
            // template: 'Biglidio_InventoryFulfillment/sku-lookup',
            sku: skuModel.sku,
            placeholder: $t('Example: %1').replace('%1', '24-MB01'),
            messageResponse: ko.observable(''),
            isSuccess: skuModel.isSuccess,
            // productImg: ko.observable('')
        },
        initialize() {
            this._super();

            console.log('The skuLookup component has been loaded.');
        },
        handleSubmit() {
            $('body').trigger('processStart');
            this.messageResponse('');
            this.isSuccess(false);
            
            storage.get(`rest/V1/products/${this.sku()}`)
                .done(response => {
                    // this.productImg(`/media/catalog/product/${response.media_gallery_entries[0].file}`);
                    this.messageResponse($t('Product found! %1').replace('%1', `<strong>${response.name}</strong>`));
                    this.isSuccess(true);
                })
                .fail(() => {
                    this.messageResponse($t('Product not found.'));
                    this.isSuccess(false);
                })
                .always(() => {
                    $('body').trigger('processStop');
                });
        }
    });
});