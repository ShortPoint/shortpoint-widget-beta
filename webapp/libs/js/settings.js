sap["ui"]["define"](["./account","./subscription"],function(A4,j4){"use strict";var n0="sapLicense";var z0="publish";var h0="hide";var E0="show";var w0="oSubscriptionTab";var S0="createTabs";var y0="mSubscription";var N0="start";var x0="apply";var e0="sap-settings";var T0="module";var m0="#spiSAPSettings";var Q0='</div>';var O4,i4,a4,D4,K4,l4;O4=window["shortPointInserter"];i4=O4["util"];a4=O4["settings"]["events"];D4=O4["ko"];K4=O4["modules"]["getPrototype"]("moduleBase");l4=['<div data-shortpoint-bind="stopBinding: true" style="display: none;">','<div id="spiSAPSettings" class="spi-sap-settings-root sp-inserter-full-height sp-inserter-license-module">','<div class="sp-inserter-scroll-wrap sp-inserter-full-height sp-inserter-details spi-scroll-reset">','<div class="sp-inserter-details-wrap sp-inserter-col-xs-12">','<div data-shortpoint-bind="stopBinding: true">',A4["template"],j4["template"],Q0,Q0,Q0,Q0,Q0]["join"]('\n');if(!$(m0)["length"]){$(l4)["appendTo"](document["body"]);$(m0)["appendTo"]($(".sp-inserter-content")["children"]()["eq"](0));}O4[T0](e0,{'\x6f\x70\x74\x69\x6f\x6e\x73':{'\x69\x6e\x68\x65\x72\x69\x74\x42\x61\x73\x65':![]},'\x63\x72\x65\x61\x74\x65':function(){K4["create"][x0](this,arguments);this["mAccount"]=O4[N0]("sap-account","#spiSAPAccount");this[y0]=O4[N0]("sap-subscription","#spiSAPSubscription");this[S0]();},'\x63\x72\x65\x61\x74\x65\x54\x61\x62\x73':function(){var X0="oAccountTab";var v4;v4=[];this[X0]={'\x6d\x6f\x64\x75\x6c\x65':this["mAccount"],'\x6c\x61\x62\x65\x6c':"Account",'\x69\x64':"account_tab",'\x64\x69\x73\x61\x62\x6c\x65\x64':!1,'\x6f\x72\x64\x65\x72':1,'\x76\x69\x73\x69\x62\x6c\x65':!!{}};v4["push"](this[X0]);this[w0]={'\x6d\x6f\x64\x75\x6c\x65':this[y0],'\x6c\x61\x62\x65\x6c':"Subscription",'\x69\x64':"subscription_tab",'\x64\x69\x73\x61\x62\x6c\x65\x64':!{},'\x6f\x72\x64\x65\x72':2,'\x76\x69\x73\x69\x62\x6c\x65':!![]};v4["push"](this[w0]);i4["each"](v4,function(Z4){Z4["onChange"]=function(C4){if(C4){this[T0][E0]();}else{this[T0][h0](!"");}}["bind"](Z4);},this);O4[z0](a4["subDetailsTabs"],v4);},'\x73\x68\x6f\x77':function(o0){K4[E0][x0](this,arguments);shortpoint[z0]("settingsDialogShown");this[S0]();if(o0){i4["defer"](function(){shortPointInserter[z0](shortPointInserter["settings"]["events"]["subDetailsShowTabByID"],this[w0]["id"]);},10,this);}},'\x68\x69\x64\x65':function(){K4[h0][x0](this,arguments);}});if(O4[n0]==null){O4[n0]=O4[N0](e0,m0);}return{'\x73\x68\x6f\x77':function(V0){var U0="main";var M0="$root";O4[n0][E0](V0);D4[M0][U0]["mDashboard"][h0]();D4[M0][U0]["mSearchBox"][h0]();D4[M0][U0]["mTabBar"][h0]();D4[M0][U0]["mSubDetailsTabs"][E0]();D4[M0]["details"][h0]();D4[M0]["LayoutManager"]["Title"]("Settings");O4["modal"]["open"]($("#sp-inserter-wrapper"),{'\x66\x75\x6c\x6c\x48\x65\x69\x67\x68\x74':!!"1",'\x73\x68\x6f\x77\x43\x6c\x6f\x73\x65\x42\x74\x6e':!{}});}};});