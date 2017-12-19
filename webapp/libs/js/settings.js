sap.ui.define(["./account","./subscription"],function(W5,X5){"use strict";var v=window.shortPointInserter,g=v.util,Y5=v.settings.events,c0=v.ko,j=v.modules.getPrototype("moduleBase"),k=['<div data-shortpoint-bind="stopBinding: true" style="display: none;">','<div id="spiSAPSettings" class="spi-sap-settings-root sp-inserter-full-height sp-inserter-license-module">','<div class="sp-inserter-scroll-wrap sp-inserter-full-height sp-inserter-details spi-scroll-reset">','<div class="sp-inserter-details-wrap sp-inserter-col-xs-12">','<div data-shortpoint-bind="stopBinding: true">',W5.template,X5.template,'</div>','</div>','</div>','</div>','</div>'].join('\n');if(!$("#spiSAPSettings").length){$(k).appendTo(document.body);$("#spiSAPSettings").appendTo($(".sp-inserter-content").children().eq(0));}v.module("sap-settings",{options:{inheritBase:false},create:function(){j.create.apply(this,arguments);this.mAccount=v.start("sap-account","#spiSAPAccount");this.mSubscription=v.start("sap-subscription","#spiSAPSubscription");this.createTabs();},createTabs:function(){var l5=[];this.oAccountTab={module:this.mAccount,label:"Account",id:"account_tab",disabled:false,order:1,visible:true};l5.push(this.oAccountTab);this.oSubscriptionTab={module:this.mSubscription,label:"Subscription",id:"subscription_tab",disabled:false,order:2,visible:true};l5.push(this.oSubscriptionTab);g.each(l5,function(n){n.onChange=(function(X4){if(X4){this.module.show();}else{this.module.hide(true);}}).bind(n);},this);v.publish(Y5.subDetailsTabs,l5);},show:function(X4){j.show.apply(this,arguments);shortpoint.publish("settingsDialogShown");this.createTabs();if(X4){g.defer(function(){shortPointInserter.publish(shortPointInserter.settings.events.subDetailsShowTabByID,this.oSubscriptionTab.id);},10,this);}},hide:function(){j.hide.apply(this,arguments);}});if(v.sapLicense==null){v.sapLicense=v.start("sap-settings","#spiSAPSettings");}return {show:function(X4){v.sapLicense.show(X4);c0.$root.main.mDashboard.hide();c0.$root.main.mSearchBox.hide();c0.$root.main.mTabBar.hide();c0.$root.main.mSubDetailsTabs.show();c0.$root.details.hide();c0.$root.LayoutManager.Title("Settings");v.modal.open($("#sp-inserter-wrapper"),{fullHeight:true,showCloseBtn:false});}};});