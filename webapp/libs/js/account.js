sap.ui.define(["./dm"],function(q){"use strict";var v=window.shortPointInserter,z=v.util,a0=v.ko,d0=v.modules.getPrototype("moduleBase"),g0=['<div id="spiSAPAccount" class="spi-sap-account-root sp-inserter-full-height sp-inserter-account-module">','<div class="sp-inserter-form-horizontal">','<h2>Member Information</h1>',e0('Name','userName'),e0('ID','userId'),e0('Email','userEmail'),'<br />','<h2>Account Information</h1>',e0('Account Name','accountId'),'</div>','</div>'].join('\n');v.module("sap-account",{options:{inheritBase:false},create:function(){d0.create.apply(this,arguments);var k=q.u(),n=q.ga();this.userId=a0.observable(k.userId);this.userName=a0.observable(k.userName);this.userEmail=a0.observable(k.userEmail);this.accountId=a0.observable(n.accountId);this.accountName=a0.observable(n.accountName);},show:function(){d0.show.apply(this,arguments);},hide:function(){d0.hide.apply(this,arguments);}});return {template:g0};function e0(k,n){return ['<div class="sp-inserter-form-group">','	<div class="sp-inserter-col-md-2 sp-inserter-control-label">','		<label>','			<span>'+k+': </span>','		</label>','	</div>','	<div class="sp-inserter-col-md-10 sp-inserter-control-label">','		<span data-shortpoint-bind="text: '+n+'"></span>','	</div>','</div>'].join('\n');}});