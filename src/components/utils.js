define([
    'jquery'
], function($) {

    function _(selector) {
        return $(selector);
    }

    return {
        _: _
    };

});