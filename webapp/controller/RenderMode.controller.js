sap.ui.define(["../controller/Base.controller","../modules/assetLoader","../modules/platform","../config","shortpoint-libs/js/shortpoint.min"],function(a,b,c,d,e){"use strict";var f=e.util;return a.extend(d.namespace+".controller.RenderMode",{onInit:function(){a.prototype.onInit.apply(this,arguments),this.oRender=jQuery.Deferred(),this._spID=this._spID||f.id.next("render-controller-"),this.fnDebouncedRefreshContent=f.fn.debounce(this.refreshContent.bind(this),300),this.oRender.done(this.initShortPoint.bind(this)),this.subscribe("configChange",function(){this.fnDebouncedRefreshContent()},this),this.subscribe("renderReady",function(){this.fnDebouncedRefreshContent()},this),this.subscribe("refreshRender",this.fnDebouncedRefreshContent,this),c.onThemeChanged(this.fnDebouncedRefreshContent,this),c.onAppNavigation(this.fnDebouncedRefreshContent,this),window.render=window.render||[],window.render.push(this)},get$Wrapper:function(){var a=this.getView().byId("shortpoint");if(null!=a){var b=a.getDomRef();return jQuery(b).find(".shortpoint-viewer")}return jQuery()},onAfterRendering:function(){var a=jQuery(this.getView().byId("shortpoint").getDomRef()).html();null!=a&&(this.sViewInitialState=a),this.setWrapperInitialState(),this.renderWidget(),this.publish("renderReady"),this.oRender.resolve()},setWrapperInitialState:function(){var a=this.get$Wrapper();a.addClass("data-shortpoint-wrap"),a.css("visibility","hidden"),a.addClass("shortpoint-scroll-container")},renderWidget:function(){var a=this.oComponent.getModelData();a&&this.setContent(a)},refreshContent:function(){this.oComponent.updateThemeParameters();var a=this.get$Wrapper();if(0===a.length){var b=jQuery(this.getView().byId("shortpoint").getDomRef());b.html(this.sViewInitialState),a=this.get$Wrapper()}this.setWrapperInitialState(),this.setContent(this.getContent()),this.initShortPoint()},initShortPoint:function(){var a=this.get$Wrapper();e.engine.replace(a.parent()),e.init(),a.css("visibility","")},getContent:function(){var a=this.oComponent.getModelData();return a},setContent:function(a){var b=this.get$Wrapper();b.html(a)}})});