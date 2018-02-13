(function() {
	var version = "4.5.1";
	var sNamespace = "shortpoint-widget-beta";

	var versionBuster = version.replace(/\./g, "00");
	var prefix = jQuery.sap.getModulePath( sNamespace );
	if (prefix === ".") {
	    prefix = "";
	}

	var webapp = "";
	if(!sap.ushell || !sap.ushell.Container){
	    // required only in Web IDE testing
	    webapp = "webapp";
	}

	var root = prefix + "/~" + versionBuster + "~/" + webapp;
	jQuery.sap.registerModulePath("shortpoint-root", root);
	jQuery.sap.registerModulePath("shortpoint-libs", root + "/libs");

	sap.ui.define(["./connections"], function (connections) {
		"use strict";

		// map connections
		var oConnectionTypes = connections.map(function (item) {
			return {
				name: item.name,
				adapter: "rest",
				data: { url: prefix + item.url },
				id: item.id
			};
		});

		/**
		 * ShortPoint configuration
		 */
		var oShortpointPreConfig = {
			autoInit: false,
			scrollWrapperSelector: ".shortpoint-scroll-container",
			platform: "sap",
			version: version,
			connectionTypes: oConnectionTypes
		};

		window.shortpoint_pre_config = oShortpointPreConfig; // eslint-disable-line camelcase

		/**
		 * expose all configurations
		 */
		return {
			namespace: sNamespace,
			shortpointPreConfig: oShortpointPreConfig,
			appVersion: version
		};
	});
})();