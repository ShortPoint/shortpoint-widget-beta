n0tt.l1=function (){return typeof n0tt.x4.R4==='function'?n0tt.x4.R4.apply(n0tt.x4,arguments):n0tt.x4.R4;};n0tt.W1=function (){return typeof n0tt.x4.R4==='function'?n0tt.x4.R4.apply(n0tt.x4,arguments):n0tt.x4.R4;};n0tt.R9=function (){return typeof n0tt.U9.g9==='function'?n0tt.U9.g9.apply(n0tt.U9,arguments):n0tt.U9.g9;};n0tt.v9=function (){return typeof n0tt.U9.g9==='function'?n0tt.U9.g9.apply(n0tt.U9,arguments):n0tt.U9.g9;};n0tt.G1=function (){return typeof n0tt.x4.g9==='function'?n0tt.x4.g9.apply(n0tt.x4,arguments):n0tt.x4.g9;};n0tt.I1=function (){return typeof n0tt.x4.e9==='function'?n0tt.x4.e9.apply(n0tt.x4,arguments):n0tt.x4.e9;};n0tt.r9=function (){return typeof n0tt.U9.e9==='function'?n0tt.U9.e9.apply(n0tt.U9,arguments):n0tt.U9.e9;};n0tt.L1=function (){return typeof n0tt.x4.g9==='function'?n0tt.x4.g9.apply(n0tt.x4,arguments):n0tt.x4.g9;};n0tt.J1=function (){return typeof n0tt.x4.e9==='function'?n0tt.x4.e9.apply(n0tt.x4,arguments):n0tt.x4.e9;};n0tt.l9=function (){return typeof n0tt.U9.e9==='function'?n0tt.U9.e9.apply(n0tt.U9,arguments):n0tt.U9.e9;};n0tt.x4=function(){var k4=2;for(;k4!==1;){switch(k4){case 2:return{R4:function C4(e4,T4){var t4=2;for(;t4!==10;){switch(t4){case 5:t4=v4<e4?4:9;break;case 9:var K4=0;t4=8;break;case 12:K4+=1;t4=8;break;case 11:return M4;break;case 6:t4=F4>=0?14:12;break;case 1:var v4=0;t4=5;break;case 2:var M4=[];t4=1;break;case 13:F4-=1;t4=6;break;case 7:var F4=e4-1;t4=6;break;case 3:v4+=1;t4=5;break;case 14:M4[K4][(F4+T4*K4)%e4]=M4[F4];t4=13;break;case 8:t4=K4<e4?7:11;break;case 4:M4[(v4+T4)%e4]=[];t4=3;break;}}}(18,6)};break;}}}();n0tt.U9=function(M9){return{e9:function(){var c9,i9=arguments;switch(M9){case n0tt.l1()[7][6]:c9=i9[1]+i9[0];break;}return c9;},g9:function(b9){M9=b9;}};}();function n0tt(){}sap["ui"]["define"]([],function(){"use strict";var B1=n0tt;var U1="resolve";var X1="stringify";var O1="sp";var N1="SiteService";var i1="getService";var G0,W0,y0,B0,Q0,X0,E0;G0=jQuery["Deferred"];function V0(J3){var p3,k3;p3=A0();k3={'\x61\x63\x63\x6f\x75\x6e\x74\x49\x64':U0(),'\x61\x63\x63\x6f\x75\x6e\x74\x4e\x61\x6d\x65':null,'\x75\x73\x65\x72\x44\x61\x74\x61':p3,'\x73\x69\x74\x65\x55\x72\x6c':window["location"]["href"],'\x76\x65\x72\x73\x69\x6f\x6e':shortpoint["sap"]["version"],'\x73\x74\x61\x72\x74\x44\x61\x74\x65':J3};return k3;}W0=jQuery["ajax"];function b0(){var Z3,w3,y3;Z3=i0();if(I0()){w3=JSON["parse"](localStorage["getItem"]("hcp"));}else{y3=y0[i1](N1);w3=y3["getSiteSettings"]();}w3=w3||{};w3[O1]=w3[O1]||{};return w3[O1][Z3];}y0=sap["ushell"]["Container"];B0="https://activation.shortpoint.com/ls/sapl.asmx/";B1.R9(B1.W1()[12][0]);Q0=B1.r9("g",B0);function i0(){return A0()["userId"];}function t0(e3){var x3;x3=v0();return s0(X0,x3,e3);}function R0(){return{'\x61\x63\x63\x6f\x75\x6e\x74\x49\x64':U0(),'\x61\x63\x63\x6f\x75\x6e\x74\x4e\x61\x6d\x65':''};}function s0(P3,j3,o3){var q3,M3;q3=null;try{q3={'\x64\x61\x74\x61':JSON[X1](j3)};}catch(S3){}M3=W0({'\x74\x79\x70\x65':"POST",'\x75\x72\x6c':P3,'\x64\x61\x74\x61':q3,'\x64\x61\x74\x61\x54\x79\x70\x65':"json",'\x74\x69\x6d\x65\x6f\x75\x74':o3?o3:null});return M3;}function I0(){return location["hostname"]["match"](/^\x77\u0065\u0062\x69\x64\x65\x74\x65\u0073\u0074\u0069\u006e\x67/)!=null;}function A0(){var F3,n3,C3;if(I0()){F3=E0;}else{n3=y0[i1]("UserInfo");if(n3&&n3["getUser"]){C3=n3["getUser"]();F3={'\x75\x73\x65\x72\x49\x64':C3["getId"](),'\x75\x73\x65\x72\x4e\x61\x6d\x65':C3["getFullName"](),'\x75\x73\x65\x72\x45\x6d\x61\x69\x6c':C3["getEmail"]()};}}return F3;}function g0(r3,K3){var L3,O3;L3=G0();O3=V0(r3);s0(Q0,O3,K3)["then"](L3[U1])["fail"](function(){L3[U1](null);});return L3;}function v0(){var l3,D3;l3=A0();D3={'\x61\x63\x63\x6f\x75\x6e\x74\x49\x64':U0(),'\x75\x73\x65\x72\x44\x61\x74\x61':l3,'\x73\x69\x74\x65\x55\x72\x6c':window["location"]["href"],'\x76\x65\x72\x73\x69\x6f\x6e':shortpoint["sap"]["version"]};return D3;}B1.v9(B1.W1()[1][6]);X0=B1.l9("a",B0);function N0(B3){var U3,I3,A3,z3;U3=G0();I3=i0();A3=b0()||{};A3[O1]=A3[O1]||{};A3[O1][I3]=B3;if(I0()){localStorage["setItem"]("hcp",JSON[X1](A3));U3[U1](B3);}else{z3=y0[i1](N1);z3["saveSiteSettings"](A3);U3[U1](B3);}return U3;}function U0(){var m0,u0,Y0;m0=location["hostname"];Y0=m0["match"](/\x2d([O-ZJ-NG-HI-IC-FA-Bmn-ou-xy-zhc-gp-ti-la-b0-56-9]){0,}/);if(Y0&&Y0["length"]){u0=Y0[0]["slice"](1);}return u0;}E0={'\x75\x73\x65\x72\x49\x64':"p1941891358",'\x75\x73\x65\x72\x4e\x61\x6d\x65':"Anas Nakawa",'\x75\x73\x65\x72\x45\x6d\x61\x69\x6c':"anas@shortpoint.com"};return{'\x73\x6e\x64':s0,'\x73\x76\x64':N0,'\x67\x74\x6c\x64':b0,'\x67\x74\x73\x64':g0,'\x61\x6c':t0,'\x75':A0,'\x67\x61':R0};});