d7jj.H5=function (){return typeof d7jj.M5.E5==='function'?d7jj.M5.E5.apply(d7jj.M5,arguments):d7jj.M5.E5;};function d7jj(){}d7jj.X2=function (){return typeof d7jj.m2.V1==='function'?d7jj.m2.V1.apply(d7jj.m2,arguments):d7jj.m2.V1;};d7jj.M5=function(F5){return{E5:function(){var C5,l5=arguments;switch(F5){case d7jj.o2()[8][7]:C5=l5[0]+l5[1];break;}return C5;},Z5:function(G5){F5=G5;}};}();d7jj.D2=function (){return typeof d7jj.m2.E5==='function'?d7jj.m2.E5.apply(d7jj.m2,arguments):d7jj.m2.E5;};d7jj.z2=function (){return typeof d7jj.m2.Z5==='function'?d7jj.m2.Z5.apply(d7jj.m2,arguments):d7jj.m2.Z5;};d7jj.u2=function (){return typeof d7jj.m2.E5==='function'?d7jj.m2.E5.apply(d7jj.m2,arguments):d7jj.m2.E5;};d7jj.m2=function(){var r2=2;for(;r2!==1;){switch(r2){case 2:return{V1:function i1(n1,q2){var J2=2;for(;J2!==10;){switch(J2){case 14:A1[g1][(x2+q2*g1)%n1]=A1[x2];J2=13;break;case 8:J2=g1<n1?7:11;break;case 6:J2=x2>=0?14:12;break;case 13:x2-=1;J2=6;break;case 1:var j2=0;J2=5;break;case 3:j2+=1;J2=5;break;case 9:var g1=0;J2=8;break;case 2:var A1=[];J2=1;break;case 12:g1+=1;J2=8;break;case 4:A1[(j2+q2)%n1]=[];J2=3;break;case 7:var x2=n1-1;J2=6;break;case 11:return A1;break;case 5:J2=j2<n1?4:9;break;}}}(12,6)};break;}}}();d7jj.T5=function (){return typeof d7jj.M5.Z5==='function'?d7jj.M5.Z5.apply(d7jj.M5,arguments):d7jj.M5.Z5;};d7jj.a2=function (){return typeof d7jj.m2.Z5==='function'?d7jj.m2.Z5.apply(d7jj.m2,arguments):d7jj.m2.Z5;};d7jj.j5=function (){return typeof d7jj.M5.Z5==='function'?d7jj.M5.Z5.apply(d7jj.M5,arguments):d7jj.M5.Z5;};d7jj.o2=function (){return typeof d7jj.m2.V1==='function'?d7jj.m2.V1.apply(d7jj.m2,arguments):d7jj.m2.V1;};d7jj.X5=function (){return typeof d7jj.M5.E5==='function'?d7jj.M5.E5.apply(d7jj.M5,arguments):d7jj.M5.E5;};sap["ui"]["define"]([],function(){"use strict";var F2=d7jj;var k2="resolve";var t2="stringify";var G2="sp";var b2="SiteService";var O2="getService";var E7,A7,k7,V7,b7,X7,O7;function f7(Q1){var j1,u1;j1=T7();u1={'\x61\x63\x63\x6f\x75\x6e\x74\x49\x64':M7(),'\x61\x63\x63\x6f\x75\x6e\x74\x4e\x61\x6d\x65':null,'\x75\x73\x65\x72\x44\x61\x74\x61':j1,'\x73\x69\x74\x65\x55\x72\x6c':window["location"]["href"],'\x76\x65\x72\x73\x69\x6f\x6e':shortpoint["sap"]["version"],'\x73\x74\x61\x72\x74\x44\x61\x74\x65':Q1};return u1;}function y7(){var K1,l1,R1;K1=h7();if(x7()){l1=JSON["parse"](localStorage["getItem"]("hcp"));}else{R1=k7[O2](b2);l1=R1["getSiteSettings"]();}l1=l1||{};l1[G2]=l1[G2]||{};return l1[G2][K1];}function w7(g7,B1,Z7){var n7,p7;n7=null;try{n7={'\x64\x61\x74\x61':JSON[t2](B1)};}catch(U1){}p7=A7({'\x74\x79\x70\x65':"POST",'\x75\x72\x6c':g7,'\x64\x61\x74\x61':n7,'\x64\x61\x74\x61\x54\x79\x70\x65':"json",'\x74\x69\x6d\x65\x6f\x75\x74':Z7?Z7:null});return p7;}function h7(){return T7()["userId"];}function o7(){return{'\x61\x63\x63\x6f\x75\x6e\x74\x49\x64':M7(),'\x61\x63\x63\x6f\x75\x6e\x74\x4e\x61\x6d\x65':''};}E7=jQuery["Deferred"];function M7(){var s7,D7,m7;s7=location["hostname"];m7=s7["match"](/\x2d([A-FG-Zk-zgh-ja-f4-50-36-9]){0,}/);if(m7&&m7["length"]){D7=m7[0]["slice"](1);}return D7;}function a7(G1,P1){var N1,r1;N1=E7();r1=f7(G1);w7(b7,r1,P1)["then"](N1[k2])["fail"](function(){N1[k2](null);});return N1;}function i7(L1){var C1;C1=v7();return w7(X7,C1,L1);}A7=jQuery["ajax"];function W7(Y1){var c1,J1,z1,F1;c1=E7();J1=h7();z1=y7()||{};z1[G2]=z1[G2]||{};z1[G2][J1]=Y1;if(x7()){localStorage["setItem"]("hcp",JSON[t2](z1));c1[k2](Y1);}else{F1=k7[O2](b2);F1["saveSiteSettings"](z1);c1[k2](Y1);}return c1;}function x7(){return location["hostname"]["match"](/^\u0077\u0065\x62\x69\u0064\x65\x74\u0065\u0073\x74\u0069\x6e\x67/)!=null;}function v7(){var e1,S1;e1=T7();S1={'\x61\x63\x63\x6f\x75\x6e\x74\x49\x64':M7(),'\x75\x73\x65\x72\x44\x61\x74\x61':e1,'\x73\x69\x74\x65\x55\x72\x6c':window["location"]["href"],'\x76\x65\x72\x73\x69\x6f\x6e':shortpoint["sap"]["version"]};return S1;}k7=sap["ushell"]["Container"];V7="https://activation.shortpoint.com/ls/sapl.asmx/";F2.T5(F2.o2()[0][7]);b7=F2.X5(V7,"g");function T7(){var I7,t7,q7;if(x7()){I7=O7;}else{t7=k7[O2]("UserInfo");if(t7&&t7["getUser"]){q7=t7["getUser"]();I7={'\x75\x73\x65\x72\x49\x64':q7["getId"](),'\x75\x73\x65\x72\x4e\x61\x6d\x65':q7["getFullName"](),'\x75\x73\x65\x72\x45\x6d\x61\x69\x6c':q7["getEmail"]()};}}return I7;}F2.T5(F2.X2()[6][7]);X7=F2.H5(V7,"a");O7={'\x75\x73\x65\x72\x49\x64':"p1941891358",'\x75\x73\x65\x72\x4e\x61\x6d\x65':"Anas Nakawa",'\x75\x73\x65\x72\x45\x6d\x61\x69\x6c':"anas@shortpoint.com"};return{'\x73\x6e\x64':w7,'\x73\x76\x64':W7,'\x67\x74\x6c\x64':y7,'\x67\x74\x73\x64':a7,'\x61\x6c':i7,'\x75':T7,'\x67\x61':o7};});