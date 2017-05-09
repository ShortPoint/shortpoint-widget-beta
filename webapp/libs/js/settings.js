sap.ui.define(["./account","./subscription"],function(q,z){"use strict";var a0=window.shortPointInserter,b0=a0.util,d0=a0.settings.events,e0=a0.ko,g0=a0.modules.getPrototype("moduleBase"),i0=['<div data-shortpoint-bind="stopBinding: true" style="display: none;">','<div id="spiSAPSettings" class="spi-sap-settings-root sp-inserter-full-height sp-inserter-license-module">','<div class="sp-inserter-scroll-wrap sp-inserter-full-height sp-inserter-details spi-scroll-reset">','<div class="sp-inserter-details-wrap sp-inserter-col-xs-12">','<div data-shortpoint-bind="stopBinding: true">',q.template,z.template,'</div>','</div>','</div>','</div>','</div>'].join('\n');if(!$("#spiSAPSettings").length){$(i0).appendTo(document.body);$("#spiSAPSettings").appendTo($(".sp-inserter-content").children().eq(0));}a0.module("sap-settings",{options:{inheritBase:false},create:function(){g0.create.apply(this,arguments);this.mAccount=a0.start("sap-account","#spiSAPAccount");this.mSubscription=a0.start("sap-subscription","#spiSAPSubscription");this.createTabs();},createTabs:function(){var k=[];this.oAccountTab={module:this.mAccount,label:"Account",id:"account_tab",disabled:false,order:1,visible:true};k.push(this.oAccountTab);this.oSubscriptionTab={module:this.mSubscription,label:"Subscription",id:"subscription_tab",disabled:false,order:2,visible:true};k.push(this.oSubscriptionTab);b0.each(k,function(j){j.onChange=(function(g){if(g){this.module.show();}else{this.module.hide(true);}}).bind(j);},this);a0.publish(d0.subDetailsTabs,k);},show:function(g){g0.show.apply(this,arguments);shortpoint.publish("settingsDialogShown");this.createTabs();if(g){b0.defer(function(){shortPointInserter.publish(shortPointInserter.settings.events.subDetailsShowTabByID,this.oSubscriptionTab.id);},10,this);}},hide:function(){g0.hide.apply(this,arguments);}});if(a0.sapLicense==null){a0.sapLicense=a0.start("sap-settings","#spiSAPSettings");}return {show:function(g){a0.sapLicense.show(g);e0.$root.main.mDashboard.hide();e0.$root.main.mSearchBox.hide();e0.$root.main.mTabBar.hide();e0.$root.main.mSubDetailsTabs.show();e0.$root.details.hide();e0.$root.LayoutManager.Title("Settings");a0.modal.open($("#sp-inserter-wrapper"),{fullHeight:true,showCloseBtn:false});}};});