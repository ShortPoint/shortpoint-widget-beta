sap["ui"]["define"](["./account","./subscription"],function(m6Q,L6Q){"use strict";var T6Q="publish";var P6Q="hide";var X6Q="sapLicense";var a6Q='</div>';var x6Q="mSubscription";var Y6Q="oSubscriptionTab";var u6Q="#spiSAPSettings";var B6Q="sap-settings";var y6Q,n6Q,R6Q,o6Q,M6Q,t6Q;y6Q=window["shortPointInserter"];n6Q=y6Q["util"];R6Q=y6Q["settings"]["events"];o6Q=y6Q["ko"];M6Q=y6Q["modules"]["getPrototype"]("moduleBase");t6Q=['<div data-shortpoint-bind="stopBinding: true" style="display: none;">','<div id="spiSAPSettings" class="spi-sap-settings-root sp-inserter-full-height sp-inserter-license-module">','<div class="sp-inserter-scroll-wrap sp-inserter-full-height sp-inserter-details spi-scroll-reset">','<div class="sp-inserter-details-wrap sp-inserter-col-xs-12">','<div data-shortpoint-bind="stopBinding: true">',m6Q["template"],L6Q["template"],a6Q,a6Q,a6Q,a6Q,a6Q]["join"]('\n');if(!$(u6Q)["length"]){$(t6Q)["appendTo"](document["body"]);$(u6Q)["appendTo"]($(".sp-inserter-content")["children"]()["eq"](0));}y6Q["module"](B6Q,{'\x6f\x70\x74\x69\x6f\x6e\x73':{'\x69\x6e\x68\x65\x72\x69\x74\x42\x61\x73\x65':! !0},'\x63\x72\x65\x61\x74\x65':function(){M6Q["create"]["apply"](this,arguments);this["mAccount"]=y6Q["start"]("sap-account","#spiSAPAccount");this[x6Q]=y6Q["start"]("sap-subscription","#spiSAPSubscription");this["createTabs"]();},'\x63\x72\x65\x61\x74\x65\x54\x61\x62\x73':function(){var O6Q;O6Q=[];this["oAccountTab"]={'\x6d\x6f\x64\x75\x6c\x65':this["mAccount"],'\x6c\x61\x62\x65\x6c':"Account",'\x69\x64':"account_tab",'\x64\x69\x73\x61\x62\x6c\x65\x64':!{},'\x6f\x72\x64\x65\x72':1,'\x76\x69\x73\x69\x62\x6c\x65':!""};O6Q["push"](this["oAccountTab"]);this[Y6Q]={'\x6d\x6f\x64\x75\x6c\x65':this[x6Q],'\x6c\x61\x62\x65\x6c':"Subscription",'\x69\x64':"subscription_tab",'\x64\x69\x73\x61\x62\x6c\x65\x64':![],'\x6f\x72\x64\x65\x72':2,'\x76\x69\x73\x69\x62\x6c\x65':! ![]};O6Q["push"](this[Y6Q]);n6Q["each"](O6Q,function(V6Q){V6Q["onChange"]=(function(N6Q){if(N6Q){this["module"]["show"]();}else {this["module"][P6Q](!0);}})["bind"](V6Q);},this);y6Q[T6Q](R6Q["subDetailsTabs"],O6Q);},'\x73\x68\x6f\x77':function(U6Q){M6Q["show"]["apply"](this,arguments);shortpoint[T6Q]("settingsDialogShown");this["createTabs"]();if(U6Q){n6Q["defer"](function(){shortPointInserter[T6Q](shortPointInserter["settings"]["events"]["subDetailsShowTabByID"],this[Y6Q]["id"]);;},10,this);}},'\x68\x69\x64\x65':function(){M6Q[P6Q]["apply"](this,arguments);}});if(y6Q[X6Q] == null){y6Q[X6Q]=y6Q["start"](B6Q,u6Q);}return {'\x73\x68\x6f\x77':function(s6Q){var A6Q="$root";y6Q[X6Q]["show"](s6Q);o6Q[A6Q]["main"]["mDashboard"][P6Q]();o6Q[A6Q]["main"]["mSearchBox"][P6Q]();o6Q[A6Q]["main"]["mTabBar"][P6Q]();o6Q[A6Q]["main"]["mSubDetailsTabs"]["show"]();o6Q[A6Q]["details"][P6Q]();o6Q[A6Q]["LayoutManager"]["Title"]("Settings");y6Q["modal"]["open"]($("#sp-inserter-wrapper"),{'\x66\x75\x6c\x6c\x48\x65\x69\x67\x68\x74':!0,'\x73\x68\x6f\x77\x43\x6c\x6f\x73\x65\x42\x74\x6e':!{}});}};});