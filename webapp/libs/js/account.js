sap["ui"]["define"](["./dm"],function(Z5){"use strict";var k5="apply";var M5='</div>';var K5,t5,X5,w5,e5;K5=window["shortPointInserter"];t5=K5["util"];X5=K5["ko"];function Q5(x5,N5){return ['<div class="sp-inserter-form-group">','	<div class="sp-inserter-col-md-2 sp-inserter-control-label">','		<label>','			<span>' + x5 + ': </span>','		</label>','	</div>','	<div class="sp-inserter-col-md-10 sp-inserter-control-label">','		<span data-shortpoint-bind="text: ' + N5 + '"></span>','	</div>',M5]["join"]('\n');}w5=K5["modules"]["getPrototype"]("moduleBase");e5=['<div id="spiSAPAccount" class="spi-sap-account-root sp-inserter-full-height sp-inserter-account-module">','<div class="sp-inserter-form-horizontal">','<h2>Member Information</h1>',Q5('Name','userName'),Q5('ID','userId'),Q5('Email','userEmail'),'<br />','<h2>Account Information</h1>',Q5('Account Name','accountId'),M5,M5]["join"]('\n');K5["module"]("sap-account",{'\x6f\x70\x74\x69\x6f\x6e\x73':{'\x69\x6e\x68\x65\x72\x69\x74\x42\x61\x73\x65':!1},'\x63\x72\x65\x61\x74\x65':function(){var O5="accountId";var U5="accountName";var n5="userEmail";var b5="observable";var v5,s5;w5["create"][k5](this,arguments);v5=Z5["u"]();s5=Z5["ga"]();this["userId"]=X5[b5](v5["userId"]);this["userName"]=X5[b5](v5["userName"]);this[n5]=X5[b5](v5[n5]);this[O5]=X5[b5](s5[O5]);this[U5]=X5[b5](s5[U5]);;},'\x73\x68\x6f\x77':function(){w5["show"][k5](this,arguments);},'\x68\x69\x64\x65':function(){w5["hide"][k5](this,arguments);}});return {'\x74\x65\x6d\x70\x6c\x61\x74\x65':e5};});