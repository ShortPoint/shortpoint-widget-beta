sap.ui.define(["./account","./subscription"],function(v,z){"use strict";var a0=window.shortPointInserter,d0=a0.util,g0=a0.settings.events,e0=a0.ko,p0=a0.modules.getPrototype("moduleBase"),s0=['<div data-shortpoint-bind="stopBinding: true" style="display: none;">','<div id="spiSAPSettings" class="spi-sap-settings-root sp-inserter-full-height sp-inserter-license-module">','<div class="sp-inserter-scroll-wrap sp-inserter-full-height sp-inserter-details spi-scroll-reset">','<div class="sp-inserter-details-wrap sp-inserter-col-xs-12">','<div data-shortpoint-bind="stopBinding: true">',v.template,z.template,'</div>','</div>','</div>','</div>','</div>'].join('\n');if(!$("#spiSAPSettings").length){$(s0).appendTo(document.body);$("#spiSAPSettings").appendTo($(".sp-inserter-content").children().eq(0));}a0.module("sap-settings",{options:{inheritBase:false},create:function(){p0.create.apply(this,arguments);this.mAccount=a0.start("sap-account","#spiSAPAccount");this.mSubscription=a0.start("sap-subscription","#spiSAPSubscription");this.createTabs();},createTabs:function(){var q=[];this.oAccountTab={module:this.mAccount,label:"Account",id:"account_tab",disabled:false,order:1,visible:true};q.push(this.oAccountTab);this.oSubscriptionTab={module:this.mSubscription,label:"Subscription",id:"subscription_tab",disabled:false,order:2,visible:true};q.push(this.oSubscriptionTab);d0.each(q,function(n){n.onChange=(function(k){if(k){this.module.show();}else{this.module.hide(true);}}).bind(n);},this);a0.publish(g0.subDetailsTabs,q);},show:function(k){p0.show.apply(this,arguments);shortpoint.publish("settingsDialogShown");this.createTabs();if(k){d0.defer(function(){shortPointInserter.publish(shortPointInserter.settings.events.subDetailsShowTabByID,this.oSubscriptionTab.id);},10,this);}},hide:function(){p0.hide.apply(this,arguments);}});if(a0.sapLicense==null){a0.sapLicense=a0.start("sap-settings","#spiSAPSettings");}return {show:function(k){a0.sapLicense.show(k);e0.$root.main.mDashboard.hide();e0.$root.main.mSearchBox.hide();e0.$root.main.mTabBar.hide();e0.$root.main.mSubDetailsTabs.show();e0.$root.details.hide();e0.$root.LayoutManager.Title("Settings");a0.modal.open($("#sp-inserter-wrapper"),{fullHeight:true,showCloseBtn:false});}};});