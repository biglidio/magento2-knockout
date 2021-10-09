define(['uiComponent'], function(Component){
    'use strict'

    return Component.extend({
        defaults: {
            /*  Better config it inside layout file. Example:
                <item name="config" xsi:type="array">
                    <item name="template" xsi:type="string">Biglidio_InventoryFulfillment/sku-lookup</item>
                </item>
            */
            // template: 'Biglidio_InventoryFulfillment/sku-lookup',
            sku: '<em>ABC123</em>'
        },
        initialize() {
            this._super();

            console.log('The skuLookup component has been loaded.');
        }
    });
});