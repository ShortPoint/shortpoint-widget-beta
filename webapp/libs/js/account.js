sap["ui"]["define"](["./dm"],function(j6){"use strict";var I6="apply";var L6='</div>';var s6,y6,U6,H6,Q6;s6=window["shortPointInserter"];y6=s6["util"];U6=s6["ko"];function Y6(g6,T6){return['<div class="sp-inserter-form-group">','	<div class="sp-inserter-col-md-2 sp-inserter-control-label">','		<label>','			<span>'+g6+': </span>','		</label>','	</div>','	<div class="sp-inserter-col-md-10 sp-inserter-control-label">','		<span data-shortpoint-bind="text: '+T6+'"></span>','	</div>',L6]["join"]('\n');}H6=s6["modules"]["getPrototype"]("moduleBase");Q6=['<div id="spiSAPAccount" class="spi-sap-account-root sp-inserter-full-height sp-inserter-account-module">','<div class="sp-inserter-form-horizontal">','<h2>Member Information</h1>',Y6('Name','userName'),Y6('ID','userId'),Y6('Email','userEmail'),'<br />','<h2>Account Information</h1>',Y6('Account Name','accountId'),L6,L6]["join"]('\n');s6["module"]("sap-account",{'\x6f\x70\x74\x69\x6f\x6e\x73':{'\x69\x6e\x68\x65\x72\x69\x74\x42\x61\x73\x65':!!""},'\x63\x72\x65\x61\x74\x65':function(){var E6="accountName";var J6="accountId";var P6="userEmail";var a6="observable";var F6,X6;H6["create"][I6](this,arguments);F6=j6["u"]();X6=j6["ga"]();this["userId"]=U6[a6](F6["userId"]);this["userName"]=U6[a6](F6["userName"]);this[P6]=U6[a6](F6[P6]);this[J6]=U6[a6](X6[J6]);this[E6]=U6[a6](X6[E6]);},'\x73\x68\x6f\x77':function(){H6["show"][I6](this,arguments);},'\x68\x69\x64\x65':function(){H6["hide"][I6](this,arguments);}});return{'\x74\x65\x6d\x70\x6c\x61\x74\x65':Q6};});