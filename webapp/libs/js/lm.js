sap.ui.define(["./dm"],function(Z4){"use strict";var c0=jQuery.Deferred,j=30*1000,$=shortpoint.dom.lib,F6=shortpoint.util;function f0(){var v=Z4.gtld();U5(v);if(w0(v)){p0(v).then(function(n){var a2=null,I2=false;if(!n||n.error){if(!v){a2=Y5();}else{a2=v;}}else{I2=true;a2=n;}m0(a2,I2);});}}function q(){var n=Z4.gtld(),a2=p0(n);return z(a2);}function l0(){var n=Z4.al();return z(n);}function m0(n,a2){if(a2){a0(n);}Z4.svd(n).then(U5);}function z(a2){var I2=c0();a2.done(function(n){if(!n||n.error){I2.reject();}else{m0(n,true);I2.resolve(n);}}).fail(I2.reject);return I2;}function U5(n){var a2=true,I2=n||{};if(I2.currentUserExpirationDate&&new Date(I2.currentUserExpirationDate)<new Date()){a2=false;for(var v in shortPointInserter.display.actions.list){if(v!=="delete"){delete  shortPointInserter.display.actions.list[v];}}shortPointInserter.display.destroy();shortPointInserter.display.init();var g=["demoContent","insertSection","insertShortPoint","upgrade","html"];for(v in g){delete  $.FroalaEditor.COMMANDS[g[v]];}$("html").addClass("spi-license-invalid");}if(a2){shortpoint.config["font-class"]="serif";}else{delete  shortpoint.config["font-class"];}shortpoint.publish("newLicenseInfo",{isValid:a2,licenseType:I2.licenseType,expirationDate:I2.currentUserExpirationDate});}function w0(n){if(!n||!n.lastCheckDate){return true;}var a2=1000*60*60*24,I2=(new Date()).getTime()-new Date(n.lastCheckDate).getTime();return I2>a2;}function p0(n){var a2=null;if(n&&n.currentUserStartDate){a2=n.currentUserStartDate;}return Z4.gtsd(a2,j);}function Y5(){var n=new Date(),a2=new Date(n.getTime());a2.setDate(n.getDate()+30);var I2={currentUserStartDate:n,currentUserExpirationDate:a2,licenseType:"trial"};return I2;}function a0(n){if(!n||n.error||!n.licenseType){return null;}n.lastCheckDate=new Date();return n;}return {c:f0,gf:q,a:l0};});