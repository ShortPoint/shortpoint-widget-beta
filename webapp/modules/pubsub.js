sap.ui.define(["./util"],function(a){"use strict";function b(b,c,d){var e=a.prefixEventName(b);d.fireEvent(e,c)}function c(b,c,d,e){null==e&&null!=d&&(e=d);var f=a.prefixEventName(b);e.attachEvent(f,c,d)}function d(b,c,d,e){null==e&&null!=d&&(e=d);var f=a.prefixEventName(b);e.detachEvent(f,c,d)}return{publish:b,subscribe:c,unsubscribe:d}});