sap["ui"]["define"](["./dm"],function(k8){"use strict";var u8="apply";var t8='</div>';var n8,z8,K8,D8,M8;n8=window["shortPointInserter"];z8=n8["util"];K8=n8["ko"];D8=n8["modules"]["getPrototype"]("moduleBase");function Z8(Q8,d8){return['<div class="sp-inserter-form-group">','	<div class="sp-inserter-col-md-2 sp-inserter-control-label">','		<label>','			<span>'+Q8+': </span>','		</label>','	</div>','	<div class="sp-inserter-col-md-10 sp-inserter-control-label">','		<span data-shortpoint-bind="text: '+d8+'"></span>','	</div>',t8]["join"]('\n');}M8=['<div id="spiSAPAccount" class="spi-sap-account-root sp-inserter-full-height sp-inserter-account-module">','<div class="sp-inserter-form-horizontal">','<h2>Member Information</h1>',Z8('Name','userName'),Z8('ID','userId'),Z8('Email','userEmail'),'<br />','<h2>Account Information</h1>',Z8('Account Name','accountId'),t8,t8]["join"]('\n');n8["module"]("sap-account",{'\x6f\x70\x74\x69\x6f\x6e\x73':{'\x69\x6e\x68\x65\x72\x69\x74\x42\x61\x73\x65':!!0},'\x63\x72\x65\x61\x74\x65':function(){var I8="accountName";var N8="accountId";var w8="userEmail";var r8="observable";var j8,y8;D8["create"][u8](this,arguments);j8=k8["u"]();y8=k8["ga"]();this["userId"]=K8[r8](j8["userId"]);this["userName"]=K8[r8](j8["userName"]);this[w8]=K8[r8](j8[w8]);this[N8]=K8[r8](y8[N8]);this[I8]=K8[r8](y8[I8]);},'\x73\x68\x6f\x77':function(){D8["show"][u8](this,arguments);},'\x68\x69\x64\x65':function(){D8["hide"][u8](this,arguments);}});return{'\x74\x65\x6d\x70\x6c\x61\x74\x65':M8};});