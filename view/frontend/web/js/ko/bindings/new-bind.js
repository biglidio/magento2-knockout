define([
    'ko',
], function (ko) {
    'use strict';

    ko.bindingHandlers.i18n = {
        init: function (element, valueAccessor) {
            execute(element, valueAccessor);
        },
        update: function (element, valueAccessor) {
            execute(element, valueAccessor, true);
        }
    };
});
