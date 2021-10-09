define([
    'uiComponent', 
    'ko'
], function(
    Component, 
    ko
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
            sku: ko.observable('ABC123'),
            placeholder: 'This is an input field'
        },
        initialize() {
            this._super();

            console.log('The skuLookup component has been loaded.');
        },
        handleSubmit() {
            console.log(this.sku() + ' SKU confirmed')
        }
    });
});