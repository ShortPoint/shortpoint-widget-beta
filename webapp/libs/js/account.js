sap["ui"]["define"](["./dm"],function(o9){"use strict";var S9="apply";var B9='</div>';var H9,f9,e9,U9,N9;H9=window["shortPointInserter"];f9=H9["util"];e9=H9["ko"];U9=H9["modules"]["getPrototype"]("moduleBase");N9=['<div id="spiSAPAccount" class="spi-sap-account-root sp-inserter-full-height sp-inserter-account-module">','<div class="sp-inserter-form-horizontal">','<h2>Member Information</h1>',V9('Name','userName'),V9('ID','userId'),V9('Email','userEmail'),'<br />','<h2>Account Information</h1>',V9('Account Name','accountId'),B9,B9]["join"]('\n');H9["module"]("sap-account",{'\x6f\x70\x74\x69\x6f\x6e\x73':{'\x69\x6e\x68\x65\x72\x69\x74\x42\x61\x73\x65':!{}},'\x63\x72\x65\x61\x74\x65':function(){var C9="accountName";var b9="accountId";var g9="userEmail";var J9="observable";var l9,I9;U9["create"][S9](this,arguments);l9=o9["u"]();I9=o9["ga"]();this["userId"]=e9[J9](l9["userId"]);this["userName"]=e9[J9](l9["userName"]);this[g9]=e9[J9](l9[g9]);this[b9]=e9[J9](I9[b9]);this[C9]=e9[J9](I9[C9]);},'\x73\x68\x6f\x77':function(){U9["show"][S9](this,arguments);},'\x68\x69\x64\x65':function(){U9["hide"][S9](this,arguments);}});function V9(w9,L9){return['<div class="sp-inserter-form-group">','	<div class="sp-inserter-col-md-2 sp-inserter-control-label">','		<label>','			<span>'+w9+': </span>','		</label>','	</div>','	<div class="sp-inserter-col-md-10 sp-inserter-control-label">','		<span data-shortpoint-bind="text: '+L9+'"></span>','	</div>',B9]["join"]('\n');}return{'\x74\x65\x6d\x70\x6c\x61\x74\x65':N9};});