sap["ui"]["define"](["./account","./subscription"],function(N6P,I6P){"use strict";var x0P="mSubscription";var r0P="publish";var p0P="sap-settings";var z0P="oSubscriptionTab";var s0P="#spiSAPSettings";var f0P="sapLicense";var Z0P='</div>';var c0P="hide";var M6P,F6P,R6P,W6P,q6P,T6P;M6P=window["shortPointInserter"];F6P=M6P["util"];R6P=M6P["settings"]["events"];W6P=M6P["ko"];q6P=M6P["modules"]["getPrototype"]("moduleBase");T6P=['<div data-shortpoint-bind="stopBinding: true" style="display: none;">','<div id="spiSAPSettings" class="spi-sap-settings-root sp-inserter-full-height sp-inserter-license-module">','<div class="sp-inserter-scroll-wrap sp-inserter-full-height sp-inserter-details spi-scroll-reset">','<div class="sp-inserter-details-wrap sp-inserter-col-xs-12">','<div data-shortpoint-bind="stopBinding: true">',N6P["template"],I6P["template"],Z0P,Z0P,Z0P,Z0P,Z0P]["join"]('\n');if(!$(s0P)["length"]){$(T6P)["appendTo"](document["body"]);$(s0P)["appendTo"]($(".sp-inserter-content")["children"]()["eq"](0));}M6P["module"](p0P,{'\x6f\x70\x74\x69\x6f\x6e\x73':{'\x69\x6e\x68\x65\x72\x69\x74\x42\x61\x73\x65':!{}},'\x63\x72\x65\x61\x74\x65':function(){q6P["create"]["apply"](this,arguments);this["mAccount"]=M6P["start"]("sap-account","#spiSAPAccount");this[x0P]=M6P["start"]("sap-subscription","#spiSAPSubscription");this["createTabs"]();},'\x63\x72\x65\x61\x74\x65\x54\x61\x62\x73':function(){var k6P;k6P=[];this["oAccountTab"]={'\x6d\x6f\x64\x75\x6c\x65':this["mAccount"],'\x6c\x61\x62\x65\x6c':"Account",'\x69\x64':"account_tab",'\x64\x69\x73\x61\x62\x6c\x65\x64':!{},'\x6f\x72\x64\x65\x72':1,'\x76\x69\x73\x69\x62\x6c\x65':!""};k6P["push"](this["oAccountTab"]);this[z0P]={'\x6d\x6f\x64\x75\x6c\x65':this[x0P],'\x6c\x61\x62\x65\x6c':"Subscription",'\x69\x64':"subscription_tab",'\x64\x69\x73\x61\x62\x6c\x65\x64':![],'\x6f\x72\x64\x65\x72':2,'\x76\x69\x73\x69\x62\x6c\x65':!0};k6P["push"](this[z0P]);F6P["each"](k6P,function(Q6P){Q6P["onChange"]=(function(u6P){if(u6P){this["module"]["show"]();}else {this["module"][c0P](!"");}})["bind"](Q6P);},this);M6P[r0P](R6P["subDetailsTabs"],k6P);},'\x73\x68\x6f\x77':function(H6P){q6P["show"]["apply"](this,arguments);shortpoint[r0P]("settingsDialogShown");this["createTabs"]();if(H6P){F6P["defer"](function(){shortPointInserter[r0P](shortPointInserter["settings"]["events"]["subDetailsShowTabByID"],this[z0P]["id"]);;},10,this);}},'\x68\x69\x64\x65':function(){q6P[c0P]["apply"](this,arguments);}});if(M6P[f0P] == null){M6P[f0P]=M6P["start"](p0P,s0P);}return {'\x73\x68\x6f\x77':function(E0P){var t0P="$root";M6P[f0P]["show"](E0P);W6P[t0P]["main"]["mDashboard"][c0P]();W6P[t0P]["main"]["mSearchBox"][c0P]();W6P[t0P]["main"]["mTabBar"][c0P]();W6P[t0P]["main"]["mSubDetailsTabs"]["show"]();W6P[t0P]["details"][c0P]();W6P[t0P]["LayoutManager"]["Title"]("Settings");M6P["modal"]["open"]($("#sp-inserter-wrapper"),{'\x66\x75\x6c\x6c\x48\x65\x69\x67\x68\x74':! !"1",'\x73\x68\x6f\x77\x43\x6c\x6f\x73\x65\x42\x74\x6e':! !""});}};});