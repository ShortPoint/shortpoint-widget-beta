sap["ui"]["define"](["./account","./subscription"],function(X3F,R3F){"use strict";var I3F='</div>';var E1F="mSubscription";var V1F="hide";var P1F="publish";var J1F="sapLicense";var Z3F="sap-settings";var U3F="#spiSAPSettings";var o1F="oSubscriptionTab";var f3F,i3F,s3F,z3F,m3F,e3F;f3F=window["shortPointInserter"];i3F=f3F["util"];s3F=f3F["settings"]["events"];z3F=f3F["ko"];m3F=f3F["modules"]["getPrototype"]("moduleBase");e3F=['<div data-shortpoint-bind="stopBinding: true" style="display: none;">','<div id="spiSAPSettings" class="spi-sap-settings-root sp-inserter-full-height sp-inserter-license-module">','<div class="sp-inserter-scroll-wrap sp-inserter-full-height sp-inserter-details spi-scroll-reset">','<div class="sp-inserter-details-wrap sp-inserter-col-xs-12">','<div data-shortpoint-bind="stopBinding: true">',X3F["template"],R3F["template"],I3F,I3F,I3F,I3F,I3F]["join"]('\n');if(!$(U3F)["length"]){$(e3F)["appendTo"](document["body"]);$(U3F)["appendTo"]($(".sp-inserter-content")["children"]()["eq"](0));}f3F["module"](Z3F,{'\x6f\x70\x74\x69\x6f\x6e\x73':{'\x69\x6e\x68\x65\x72\x69\x74\x42\x61\x73\x65':!1},'\x63\x72\x65\x61\x74\x65':function(){m3F["create"]["apply"](this,arguments);this["mAccount"]=f3F["start"]("sap-account","#spiSAPAccount");this[E1F]=f3F["start"]("sap-subscription","#spiSAPSubscription");this["createTabs"]();},'\x63\x72\x65\x61\x74\x65\x54\x61\x62\x73':function(){var M3F;M3F=[];this["oAccountTab"]={'\x6d\x6f\x64\x75\x6c\x65':this["mAccount"],'\x6c\x61\x62\x65\x6c':"Account",'\x69\x64':"account_tab",'\x64\x69\x73\x61\x62\x6c\x65\x64':!"1",'\x6f\x72\x64\x65\x72':1,'\x76\x69\x73\x69\x62\x6c\x65':! !{}};M3F["push"](this["oAccountTab"]);this[o1F]={'\x6d\x6f\x64\x75\x6c\x65':this[E1F],'\x6c\x61\x62\x65\x6c':"Subscription",'\x69\x64':"subscription_tab",'\x64\x69\x73\x61\x62\x6c\x65\x64':!{},'\x6f\x72\x64\x65\x72':2,'\x76\x69\x73\x69\x62\x6c\x65':! !{}};M3F["push"](this[o1F]);i3F["each"](M3F,function(Q3F){Q3F["onChange"]=(function(k3F){if(k3F){this["module"]["show"]();}else {this["module"][V1F](! ![]);}})["bind"](Q3F);},this);f3F[P1F](s3F["subDetailsTabs"],M3F);},'\x73\x68\x6f\x77':function(A3F){m3F["show"]["apply"](this,arguments);shortpoint[P1F]("settingsDialogShown");this["createTabs"]();if(A3F){i3F["defer"](function(){shortPointInserter[P1F](shortPointInserter["settings"]["events"]["subDetailsShowTabByID"],this[o1F]["id"]);;},10,this);}},'\x68\x69\x64\x65':function(){m3F[V1F]["apply"](this,arguments);}});if(f3F[J1F] == null){f3F[J1F]=f3F["start"](Z3F,U3F);}return {'\x73\x68\x6f\x77':function(g3F){var Y1F="$root";f3F[J1F]["show"](g3F);z3F[Y1F]["main"]["mDashboard"][V1F]();z3F[Y1F]["main"]["mSearchBox"][V1F]();z3F[Y1F]["main"]["mTabBar"][V1F]();z3F[Y1F]["main"]["mSubDetailsTabs"]["show"]();z3F[Y1F]["details"][V1F]();z3F[Y1F]["LayoutManager"]["Title"]("Settings");f3F["modal"]["open"]($("#sp-inserter-wrapper"),{'\x66\x75\x6c\x6c\x48\x65\x69\x67\x68\x74':! !{},'\x73\x68\x6f\x77\x43\x6c\x6f\x73\x65\x42\x74\x6e':!1});}};});