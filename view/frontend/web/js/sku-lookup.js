define([
    'uiComponent', 
    'ko',
    'mage/storage'
], function(
    Component, 
    ko,
    storage
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
            sku: ko.observable('24-MB01'),
            placeholder: 'This is an input field',
            messageResponse: ko.observable(''),
            // productImg: ko.observable('')
        },
        initialize() {
            this._super();

            console.log('The skuLookup component has been loaded.');
        },
        handleSubmit() {
            this.messageResponse('');
            
            storage.get(`rest/V1/products/${this.sku()}`)
                .done(response => {
                    // this.productImg(`/media/catalog/product/${response.media_gallery_entries[0].file}`);
                    this.messageResponse(`Product found! <strong>${response.name}</strong>`);
                })
                .fail(() => {
                    this.messageResponse('Product not found.');
                });
            console.log(this.sku() + ' SKU confirmed');
        }
    });
});