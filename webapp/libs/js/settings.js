sap["ui"]["define"](["./account","./subscription"],function(b4,l4){"use strict";var t6="sapLicense";var f4="publish";var U4="hide";var T4="show";var a4="oSubscriptionTab";var x4="createTabs";var C4="mSubscription";var g4="start";var M4="apply";var y4="sap-settings";var B4="module";var R4="#spiSAPSettings";var z4='</div>';var E4,Y4,Q4,d4,k4,I4;E4=window["shortPointInserter"];Y4=E4["util"];Q4=E4["settings"]["events"];d4=E4["ko"];k4=E4["modules"]["getPrototype"]("moduleBase");I4=['<div data-shortpoint-bind="stopBinding: true" style="display: none;">','<div id="spiSAPSettings" class="spi-sap-settings-root sp-inserter-full-height sp-inserter-license-module">','<div class="sp-inserter-scroll-wrap sp-inserter-full-height sp-inserter-details spi-scroll-reset">','<div class="sp-inserter-details-wrap sp-inserter-col-xs-12">','<div data-shortpoint-bind="stopBinding: true">',b4["template"],l4["template"],z4,z4,z4,z4,z4]["join"]('\n');if(!$(R4)["length"]){$(I4)["appendTo"](document["body"]);$(R4)["appendTo"]($(".sp-inserter-content")["children"]()["eq"](0));}E4[B4](y4,{'\x6f\x70\x74\x69\x6f\x6e\x73':{'\x69\x6e\x68\x65\x72\x69\x74\x42\x61\x73\x65':!{}},'\x63\x72\x65\x61\x74\x65':function(){k4["create"][M4](this,arguments);this["mAccount"]=E4[g4]("sap-account","#spiSAPAccount");this[C4]=E4[g4]("sap-subscription","#spiSAPSubscription");this[x4]();},'\x63\x72\x65\x61\x74\x65\x54\x61\x62\x73':function(){var G4="oAccountTab";var j4;j4=[];this[G4]={'\x6d\x6f\x64\x75\x6c\x65':this["mAccount"],'\x6c\x61\x62\x65\x6c':"Account",'\x69\x64':"account_tab",'\x64\x69\x73\x61\x62\x6c\x65\x64':!!"",'\x6f\x72\x64\x65\x72':1,'\x76\x69\x73\x69\x62\x6c\x65':!!{}};j4["push"](this[G4]);this[a4]={'\x6d\x6f\x64\x75\x6c\x65':this[C4],'\x6c\x61\x62\x65\x6c':"Subscription",'\x69\x64':"subscription_tab",'\x64\x69\x73\x61\x62\x6c\x65\x64':!"1",'\x6f\x72\x64\x65\x72':2,'\x76\x69\x73\x69\x62\x6c\x65':!![]};j4["push"](this[a4]);Y4["each"](j4,function(n4){n4["onChange"]=function(V4){if(V4){this[B4][T4]();}else{this[B4][U4](!!1);}}["bind"](n4);},this);E4[f4](Q4["subDetailsTabs"],j4);},'\x73\x68\x6f\x77':function(s4){k4[T4][M4](this,arguments);shortpoint[f4]("settingsDialogShown");this[x4]();if(s4){Y4["defer"](function(){shortPointInserter[f4](shortPointInserter["settings"]["events"]["subDetailsShowTabByID"],this[a4]["id"]);},10,this);}},'\x68\x69\x64\x65':function(){k4[U4][M4](this,arguments);}});if(E4[t6]==null){E4[t6]=E4[g4](y4,R4);}return{'\x73\x68\x6f\x77':function(S4){var w6="main";var E6="$root";E4[t6][T4](S4);d4[E6][w6]["mDashboard"][U4]();d4[E6][w6]["mSearchBox"][U4]();d4[E6][w6]["mTabBar"][U4]();d4[E6][w6]["mSubDetailsTabs"][T4]();d4[E6]["details"][U4]();d4[E6]["LayoutManager"]["Title"]("Settings");E4["modal"]["open"]($("#sp-inserter-wrapper"),{'\x66\x75\x6c\x6c\x48\x65\x69\x67\x68\x74':!!{},'\x73\x68\x6f\x77\x43\x6c\x6f\x73\x65\x42\x74\x6e':!{}});}};});