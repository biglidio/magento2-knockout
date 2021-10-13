define([
    'ko',
    'Biglidio_InventoryFulfillment/js/ko/extenders/numeric'
], function(
    ko
) {
    
    const boxConfiguration = () => {
        const divisor = 139;

        const data = {
            length: ko.observable('16').extend({numeric: true}),
            width: ko.observable('16').extend({numeric: true}),
            height: ko.observable('16').extend({numeric: true}),
            weight: ko.observable('10').extend({numeric: true}),
            unitsPerBox: ko.observable('100').extend({numeric: true}),
            numberOfBoxes: ko.observable('1').extend({numeric: true}),
        }

        data.dimensionalWeight = ko.computed(() => {
            const result = data.length() * data.width() * data.height() / divisor;
            return Math.round(result * data.numberOfBoxes());
        });

        data.totalWeight = ko.computed(() => {
            return data.numberOfBoxes() * data.weight();
        });

        data.billableWeight = ko.computed(() => {
            return (data.totalWeight() > data.dimensionalWeight()) 
                ? data.totalWeight() 
                : data.dimensionalWeight();
        });

        return data;
    };

    return {
        boxConfigurations: ko.observableArray([boxConfiguration()]),
        isSuccess: ko.observable(false),
        add: function() {
            this.boxConfigurations.push(boxConfiguration());
        },
        delete: function(index) {
            this.boxConfigurations.splice(index, 1);
        }
    };
});