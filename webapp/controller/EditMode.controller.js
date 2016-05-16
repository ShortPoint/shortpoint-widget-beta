sap.ui.define(["../controller/RichEditorBase.controller","../modules/assetLoader","../modules/platform","../config","../libs/js/shortpoint.min","../libs/js/shortpoint.inserter.min"],function(a,b,c,d,e,f){"use strict";var g=e.util;return a.extend(d.namespace+".controller.EditMode",{onInit:function(){a.prototype.onInit.apply(this,arguments),this.retrieveContent(),this.oRender=jQuery.Deferred();var d=c.getSAPModulePath(),e=c.isRtl();b.loadCss(d+"/libs/css/shortpoint.inserter-{dir}.min.css".replace(/{dir}/,e?"rtl":"ltr")),this.oRender.done(this.initInserter.bind(this)),this.subscribe("renderReady",function(){this.setContent(this.oComponent.getModelData())},this),this.subscribe("editStart",function(){this.get$Element("shortpoint").addClass("shortpoint-editor-on")},this),this.subscribe("editEnd",function(){this.get$Element("shortpoint").removeClass("shortpoint-editor-on")},this),window.edit=window.edit||[],window.edit.push(this)},get$Editor:function(){return this.get$Element("shortpointEditor")},getContent:function(){return null==f._isInitiated?"":f.platform.adapter.getContent()},setContent:function(a){null!=f._isInitiated&&f.platform.adapter.setContent(a)},onAfterRendering:function(){this.oRootElement=this.getElement("shortpoint"),this.get$Editor().prop("disabled",!0),this.renderWidget(),setTimeout(function(){this.oRender.resolve()}.bind(this),1e3),this.publish("renderReady")},exitEditMode:function(a){var b=this,c=f.$;jQuery(a).closest(".widget").removeClass("hide-menu-force"),f.display.destroyAllDisplayWithin(c(a)),this.publish("insert"),this.oComponent.saveContent(b.getContent()).done(function(){b.oComponent.navigateTo("render").done(function(){b.publish("refreshRender")})})},onEditButtonPress:function(){this.publish("editStart"),"undefined"!=typeof f&&(f.display.init(),g.defer(function(){f.display.replace()},100)),this.get$Editor().focus(),jQuery(this.oRootElement).closest(".widget").addClass("hide-menu-force")},initInserter:function(){var a=f.$;a.FroalaEditor.DefineIconTemplate("feedback_icon",'<a class="shortpoint-feedback-cmd" href="http://support.shortpoint.com/support/tickets/new" target="_blank"><i class="shortpoint-icon shortpoint-icon-simple-earphones-alt"></i>Feedback &nbsp;&nbsp;</a>'),a.FroalaEditor.DefineIcon("feedbackIcon",{NAME:"feedbackIcon",template:"feedback_icon"}),a.FroalaEditor.RegisterCommand("feedback",{title:"We are listening, tell us your Feedback",icon:"feedbackIcon",focus:!1,undo:!1}),a.FroalaEditor.DefineIconTemplate("preview_icon",'<i class="shortpoint-icon-fa shortpoint-icon-fa-eye"></i>'),a.FroalaEditor.DefineIcon("previewShortPoint",{NAME:"previewShortPoint",template:"preview_icon"}),a.FroalaEditor.RegisterCommand("previewShortPoint",{title:"Preview ShortPoint",icon:"previewShortPoint",focus:!0,undo:!0,refreshAfterCallback:!0,callback:function(){var a=this.$box;try{var b=jQuery(a).closest(".shortpoint-root-view").parent(),c=sap.ui.getCore().byId(b.attr("id")),d=c.getController();d.exitEditMode(a)}catch(e){f.error("could not get a reference to view from a DOM element"),f.error(e)}}}),this.editor=new f.Editor(this.get$Editor(),{heightMin:100,logo:{link:"http://www.shortpoint.com/",extra:" v"+c.getProductVersion(this.oComponent)+" Beta"},toolbarButtons:["insertShortPoint","previewShortPoint","feedback","|","bold","italic","underline","strikeThrough","color","fontFamily","fontSize","|","inlineStyle","paragraphStyle","|","paragraphFormat","align","formatOL","formatUL","outdent","indent","|","insertLink","insertImage","insertVideo","insertFile","insertTable","|","undo","redo","clearFormatting","html"],toolbarButtonsMD:["insertShortPoint","previewShortPoint","feedback","|","bold","italic","underline","strikeThrough","subscript","superscript","fontFamily","fontSize","|","color","undo","redo","clearFormatting","html"],toolbarButtonsSM:["insertShortPoint","previewShortPoint","feedback","|","color","undo","redo","clearFormatting","html"],toolbarButtonsXS:["insertShortPoint","previewShortPoint","feedback","|"]}),a(this.get$Editor()).on("froalaEditor.initialized",function(){setTimeout(function(){a(window).trigger("resize")},100)}),null==f._isInitiated&&(f.init(),f._isInitiated=!0),this.setContent(this.oComponent.getModelData())},renderWidget:function(){var a=this.oComponent.getModelData();a&&this.setContent(a)}})});