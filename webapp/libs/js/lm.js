sap.ui.define(["./dm"],function(d0){"use strict";var f0=jQuery.Deferred,j=30*1000,$=shortpoint.dom.lib,m0=shortpoint.util;function n0(){var a0=d0.gtld();w0(a0);if(z0(a0)){G0(a0).then(function(n){var v=null,y2=false;if(!n||n.error){if(!a0){v=I0();}else{v=a0;}}else{y2=true;v=n;}q0(v,y2);});}}function q(){var n=d0.gtld(),v=G0(n);return z(v);}function v0(){var n=d0.al();return z(n);}function q0(n,v){if(v){b0(n);}d0.svd(n).then(w0);}function z(v){var y2=f0();v.done(function(n){if(!n||n.error){y2.reject();}else{q0(n,true);y2.resolve(n);}}).fail(y2.reject);return y2;}function w0(n){var v=true,y2=n||{};if(y2.currentUserExpirationDate&&new Date(y2.currentUserExpirationDate)<new Date()){v=false;for(var a0 in shortPointInserter.display.actions.list){if(a0!=="delete"){delete  shortPointInserter.display.actions.list[a0];}}shortPointInserter.display.destroy();shortPointInserter.display.init();var g=["demoContent","insertSection","insertShortPoint","upgrade","html"];for(a0 in g){delete  $.FroalaEditor.COMMANDS[g[a0]];}$("html").addClass("spi-license-invalid");}if(v){shortpoint.config["font-class"]="serif";}else{delete  shortpoint.config["font-class"];}shortpoint.publish("newLicenseInfo",{isValid:v,licenseType:y2.licenseType,expirationDate:y2.currentUserExpirationDate});}function z0(n){if(!n||!n.lastCheckDate){return true;}var v=1000*60*60*24,y2=(new Date()).getTime()-new Date(n.lastCheckDate).getTime();return y2>v;}function G0(n){var v=null;if(n&&n.currentUserStartDate){v=n.currentUserStartDate;}return d0.gtsd(v,j);}function I0(){var n=new Date(),v=new Date(n.getTime());v.setDate(n.getDate()+30);var y2={currentUserStartDate:n,currentUserExpirationDate:v,licenseType:"trial"};return y2;}function b0(n){if(!n||n.error||!n.licenseType){return null;}n.lastCheckDate=new Date();return n;}return {c:n0,gf:q,a:v0};});