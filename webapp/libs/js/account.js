sap["ui"]["define"](["./dm"],function(L3){"use strict";var w3="apply";var l3='</div>';var i3,u3,o3,S3,d3;i3=window["shortPointInserter"];function J3(W3,I3){return['<div class="sp-inserter-form-group">','	<div class="sp-inserter-col-md-2 sp-inserter-control-label">','		<label>','			<span>'+W3+': </span>','		</label>','	</div>','	<div class="sp-inserter-col-md-10 sp-inserter-control-label">','		<span data-shortpoint-bind="text: '+I3+'"></span>','	</div>',l3]["join"]('\n');}u3=i3["util"];o3=i3["ko"];S3=i3["modules"]["getPrototype"]("moduleBase");d3=['<div id="spiSAPAccount" class="spi-sap-account-root sp-inserter-full-height sp-inserter-account-module">','<div class="sp-inserter-form-horizontal">','<h2>Member Information</h1>',J3('Name','userName'),J3('ID','userId'),J3('Email','userEmail'),'<br />','<h2>Account Information</h1>',J3('Account Name','accountId'),l3,l3]["join"]('\n');i3["module"]("sap-account",{'\x6f\x70\x74\x69\x6f\x6e\x73':{'\x69\x6e\x68\x65\x72\x69\x74\x42\x61\x73\x65':!{}},'\x63\x72\x65\x61\x74\x65':function(){var p3="accountName";var y3="accountId";var Z3="userEmail";var s3="observable";var j3,U3;S3["create"][w3](this,arguments);j3=L3["u"]();U3=L3["ga"]();this["userId"]=o3[s3](j3["userId"]);this["userName"]=o3[s3](j3["userName"]);this[Z3]=o3[s3](j3[Z3]);this[y3]=o3[s3](U3[y3]);this[p3]=o3[s3](U3[p3]);},'\x73\x68\x6f\x77':function(){S3["show"][w3](this,arguments);},'\x68\x69\x64\x65':function(){S3["hide"][w3](this,arguments);}});return{'\x74\x65\x6d\x70\x6c\x61\x74\x65':d3};});