sap["ui"]["define"](["./dm"],function(A0){"use strict";var s0="apply";var v0='</div>';var U0,g0,x0,N0,a0;U0=window["shortPointInserter"];g0=U0["util"];x0=U0["ko"];N0=U0["modules"]["getPrototype"]("moduleBase");a0=['<div id="spiSAPAccount" class="spi-sap-account-root sp-inserter-full-height sp-inserter-account-module">','<div class="sp-inserter-form-horizontal">','<h2>Member Information</h1>',V0('Name','userName'),V0('ID','userId'),V0('Email','userEmail'),'<br />','<h2>Account Information</h1>',V0('Account Name','accountId'),v0,v0]["join"]('\n');U0["module"]("sap-account",{'\x6f\x70\x74\x69\x6f\x6e\x73':{'\x69\x6e\x68\x65\x72\x69\x74\x42\x61\x73\x65':!{}},'\x63\x72\x65\x61\x74\x65':function(){var n0="accountId";var E0="observable";var M0="userEmail";var e0="accountName";var R0,L0;N0["create"][s0](this,arguments);R0=A0["u"]();L0=A0["ga"]();this["userId"]=x0[E0](R0["userId"]);this["userName"]=x0[E0](R0["userName"]);this[M0]=x0[E0](R0[M0]);this[n0]=x0[E0](L0[n0]);this[e0]=x0[E0](L0[e0]);;},'\x73\x68\x6f\x77':function(){N0["show"][s0](this,arguments);},'\x68\x69\x64\x65':function(){N0["hide"][s0](this,arguments);}});function V0(O0,B0){return ['<div class="sp-inserter-form-group">','	<div class="sp-inserter-col-md-2 sp-inserter-control-label">','		<label>','			<span>' + O0 + ': </span>','		</label>','	</div>','	<div class="sp-inserter-col-md-10 sp-inserter-control-label">','		<span data-shortpoint-bind="text: ' + B0 + '"></span>','	</div>',v0]["join"]('\n');}return {'\x74\x65\x6d\x70\x6c\x61\x74\x65':a0};});