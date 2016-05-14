sap.ui.define([], function () {
	"use strict";

	/**
	 * ShortPoint Connection
	 */
	var oConnectionTypes = [
		{
			name: 'SharePoint List',
			adapter: 'sharePointList',
			id: 'sharePointList'
		},
		{
			name: 'Yammer Group Funny Kittens',
			adapter: 'rest',
			data: { url: '...' },
			id: 'rest_1'
		},
		{
			name: 'Some Posts',
			adapter: 'rest',
			data: { url: 'http://jsonplaceholder.typicode.com/posts' },
			id: 'rest_2'
		}
	];

	/**
	 * ShortPoint configuration
	 */
	var oShortpointPreConfig = { 
		autoInit: false,
		scrollWrapperSelector: ".shortpoint-scroll-container",
		platform: "sap",
		connectionTypes: oConnectionTypes
	};

	window.shortpoint_pre_config = oShortpointPreConfig; // eslint-disable-line camelcase

	/**
	 * expose all configurations
	 */
	return {
		namespace: "shortpoint-widget-beta",
		shortpointPreConfig: oShortpointPreConfig
	};
});