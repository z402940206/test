define(['jquery'],function(require, exports, module) {  
(function(e){e.fn.extend({tableExport:function(u){function aa(b,a,g){var f=null;e.each(b,function(){if(this.rowIndex==g&&this.key==a)return f=this,!1});return f}function Q(b){var a=[];e(b).find("thead").first().find("th").each(function(b,f){void 0!==e(f).attr("data-field")&&(a[b]=e(f).attr("data-field"))});return a}function B(b,q,g,f,I){if(-1==e.inArray(g,a.ignoreRow)&&-1==e.inArray(g-f,a.ignoreRow)){var m=e(b).filter(function(){return"none"!=e(this).data("tableexport-display")&&(e(this).is(":visible")||
"always"==e(this).data("tableexport-display")||"always"==e(this).closest("table").data("tableexport-display"))}).find(q),n=0;m.each(function(b){if("always"==e(this).data("tableexport-display")||"none"!=e(this).css("display")&&"hidden"!=e(this).css("visibility")&&"none"!=e(this).data("tableexport-display")){var f=b,q=!1;0<a.ignoreColumn.length&&("string"==typeof a.ignoreColumn[0]?H.length>f&&"undefined"!=typeof H[f]&&-1!=e.inArray(H[f],a.ignoreColumn)&&(q=!0):"number"!=typeof a.ignoreColumn[0]||-1==
e.inArray(f,a.ignoreColumn)&&-1==e.inArray(f-m.length,a.ignoreColumn)||(q=!0));if(0==q&&"function"===typeof I){var q=0,d,h=0;if("undefined"!=typeof y[g]&&0<y[g].length)for(f=0;f<=b;f++)"undefined"!=typeof y[g][f]&&(I(null,g,f),delete y[g][f],b++);e(this).is("[colspan]")&&(q=parseInt(e(this).attr("colspan")),n+=0<q?q-1:0);e(this).is("[rowspan]")&&(h=parseInt(e(this).attr("rowspan")));I(this,g,b);for(f=0;f<q-1;f++)I(null,g,b+f);if(h)for(d=1;d<h;d++)for("undefined"==typeof y[g+d]&&(y[g+d]=[]),y[g+d][b+
n]="",f=1;f<q;f++)y[g+d][b+n-f]=""}}});if("undefined"!=typeof y[g]&&0<y[g].length)for(c=0;c<=y[g].length;c++)"undefined"!=typeof y[g][c]&&(I(null,g,c),delete y[g][c])}}function S(b){!0===a.consoleLog&&console.log(b.output());if("string"===a.outputMode)return b.output();if("base64"===a.outputMode)return F(b.output());try{var q=b.output("blob");saveAs(q,a.fileName+".pdf")}catch(g){G(a.fileName+".pdf","data:application/pdf;base64,",b.output())}}function T(b,a,g){var f=0;"undefined"!=typeof g&&(f=g.colspan);
if(0<=f){for(var e=b.width,m=b.textPos.x,n=a.table.columns.indexOf(a.column),d=1;d<f;d++)e+=a.table.columns[n+d].width;1<f&&("right"===b.styles.halign?m=b.textPos.x+e-b.width:"center"===b.styles.halign&&(m=b.textPos.x+(e-b.width)/2));b.width=e;b.textPos.x=m;"undefined"!=typeof g&&1<g.rowspan&&(b.height*=g.rowspan);if("middle"===b.styles.valign||"bottom"===b.styles.valign)g=("string"===typeof b.text?b.text.split(/\r\n|\r|\n/g):b.text).length||1,2<g&&(b.textPos.y-=(2-1.15)/2*a.row.styles.fontSize*(g-
2)/3);return!0}return!1}function U(b,q,g){q.each(function(){var f=e(this).children();if(e(this).is("div")){var q=M(E(this,"background-color"),[255,255,255]),m=M(E(this,"border-top-color"),[0,0,0]),n=N(this,"border-top-width",a.jspdf.unit),d=this.getBoundingClientRect(),h=this.offsetLeft*g.dw,k=this.offsetTop*g.dh,l=d.width*g.dw,d=d.height*g.dh;g.doc.setDrawColor.apply(void 0,m);g.doc.setFillColor.apply(void 0,q);g.doc.setLineWidth(n);g.doc.rect(b.x+h,b.y+k,l,d,n?"FD":"F")}"undefined"!=typeof f&&0<
f.length&&U(b,f,g)})}function R(b,a,g){return b.replace(new RegExp(a.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"),g)}function ba(b){b=R(b||"0",a.numbers.html.decimalMark,".");b=R(b,a.numbers.html.thousandsSeparator,"");return"number"===typeof b||!1!==jQuery.isNumeric(b)?b:!1}function z(b,q,g){var f="";if(null!=b){b=e(b);var d;d=b[0].hasAttribute("data-tableexport-value")?b.data("tableexport-value"):b.html();"function"===typeof a.onCellHtmlData&&(d=a.onCellHtmlData(b,q,g,d));if(!0===a.htmlContent)f=
e.trim(d);else{var m=d.replace(/\n/g,"\u2028").replace(/<br\s*[\/]?>/gi,"\u2060");d=e("<div/>").html(m).contents();m="";e.each(d.text().split("\u2028"),function(b,a){0<b&&(m+=" ");m+=e.trim(a)});e.each(m.split("\u2060"),function(b,a){0<b&&(f+="\n");f+=e.trim(a).replace(/\u00AD/g,"")});if(a.numbers.html.decimalMark!=a.numbers.output.decimalMark||a.numbers.html.thousandsSeparator!=a.numbers.output.thousandsSeparator)if(d=ba(f),!1!==d){var n=(""+d).split(".");1==n.length&&(n[1]="");var h=3<n[0].length?
n[0].length%3:0,f=(0>d?"-":"")+(a.numbers.output.thousandsSeparator?(h?n[0].substr(0,h)+a.numbers.output.thousandsSeparator:"")+n[0].substr(h).replace(/(\d{3})(?=\d)/g,"$1"+a.numbers.output.thousandsSeparator):n[0])+(n[1].length?a.numbers.output.decimalMark+n[1]:"")}}!0===a.escape&&(f=escape(f));"function"===typeof a.onCellData&&(f=a.onCellData(b,q,g,f))}return f}function ca(b,a,g){return a+"-"+g.toLowerCase()}function M(b,a){var g=/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/.exec(b),f=a;g&&(f=
[parseInt(g[1]),parseInt(g[2]),parseInt(g[3])]);return f}function V(b){var a=E(b,"text-align"),g=E(b,"font-weight"),f=E(b,"font-style"),d="";"start"==a&&(a="rtl"==E(b,"direction")?"right":"left");700<=g&&(d="bold");"italic"==f&&(d+=f);""==d&&(d="normal");a={style:{align:a,bcolor:M(E(b,"background-color"),[255,255,255]),color:M(E(b,"color"),[0,0,0]),fstyle:d},colspan:parseInt(e(b).attr("colspan"))||0,rowspan:parseInt(e(b).attr("rowspan"))||0};null!==b&&(b=b.getBoundingClientRect(),a.rect={width:b.width,
height:b.height});return a}function E(b,a){try{return window.getComputedStyle?(a=a.replace(/([a-z])([A-Z])/,ca),window.getComputedStyle(b,null).getPropertyValue(a)):b.currentStyle?b.currentStyle[a]:b.style[a]}catch(g){}return""}function N(b,a,g){a=E(b,a).match(/\d+/);if(null!==a){a=a[0];b=b.parentElement;var f=document.createElement("div");f.style.overflow="hidden";f.style.visibility="hidden";b.appendChild(f);f.style.width=100+g;g=100/f.offsetWidth;b.removeChild(f);return a*g}return 0}function G(a,
e,g){var f=window.navigator.userAgent;if(0<f.indexOf("MSIE ")||f.match(/Trident.*rv\:11\./)){if(e=document.createElement("iframe"))document.body.appendChild(e),e.setAttribute("style","display:none"),e.contentDocument.open("txt/html","replace"),e.contentDocument.write(g),e.contentDocument.close(),e.focus(),e.contentDocument.execCommand("SaveAs",!0,a),document.body.removeChild(e)}else if(f=document.createElement("a")){f.style.display="none";f.download=a;0<=e.toLowerCase().indexOf("base64,")?f.href=
e+F(g):f.href=e+encodeURIComponent(g);document.body.appendChild(f);if(document.createEvent)null==O&&(O=document.createEvent("MouseEvents")),O.initEvent("click",!0,!1),f.dispatchEvent(O);else if(document.createEventObject)f.fireEvent("onclick");else if("function"==typeof f.onclick)f.onclick();document.body.removeChild(f)}}function F(a){var e="",g,f,d,m,n,h,k=0;a=a.replace(/\x0d\x0a/g,"\n");f="";for(d=0;d<a.length;d++)m=a.charCodeAt(d),128>m?f+=String.fromCharCode(m):(127<m&&2048>m?f+=String.fromCharCode(m>>
6|192):(f+=String.fromCharCode(m>>12|224),f+=String.fromCharCode(m>>6&63|128)),f+=String.fromCharCode(m&63|128));for(a=f;k<a.length;)g=a.charCodeAt(k++),f=a.charCodeAt(k++),d=a.charCodeAt(k++),m=g>>2,g=(g&3)<<4|f>>4,n=(f&15)<<2|d>>6,h=d&63,isNaN(f)?n=h=64:isNaN(d)&&(h=64),e=e+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(m)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(n)+
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h);return e}var a={consoleLog:!1,csvEnclosure:'"',csvSeparator:",",csvUseBOM:!0,displayTableName:!1,escape:!1,excelstyles:["border-bottom","border-top","border-left","border-right"],fileName:"tableExport",htmlContent:!1,ignoreColumn:[],ignoreRow:[],jspdf:{orientation:"p",unit:"pt",format:"a4",margins:{left:20,right:10,top:10,bottom:10},autotable:{styles:{cellPadding:2,rowHeight:12,fontSize:8,fillColor:255,textColor:50,fontStyle:"normal",
overflow:"ellipsize",halign:"left",valign:"middle"},headerStyles:{fillColor:[52,73,94],textColor:255,fontStyle:"bold",halign:"center"},alternateRowStyles:{fillColor:245},tableExport:{onAfterAutotable:null,onBeforeAutotable:null,onTable:null}}},numbers:{html:{decimalMark:".",thousandsSeparator:","},output:{decimalMark:".",thousandsSeparator:","}},onCellData:null,onCellHtmlData:null,outputMode:"file",tbodySelector:"tr",theadSelector:"tr",tableName:"myTableName",type:"csv",worksheetName:"xlsWorksheetName"},
v=this,O=null,t=[],r=[],p=0,y=[],h="",H=[];e.extend(!0,a,u);H=Q(v);if("csv"==a.type||"txt"==a.type){u=function(b,d,g,f){r=e(v).find(b).first().find(d);r.each(function(){h="";B(this,g,p,f+r.length,function(b,f,g){var e=h,d="";if(null!=b)if(b=z(b,f,g),f=null===b||""==b?"":b.toString(),b instanceof Date)d=a.csvEnclosure+b.toLocaleString()+a.csvEnclosure;else if(d=R(f,a.csvEnclosure,a.csvEnclosure+a.csvEnclosure),0<=d.indexOf(a.csvSeparator)||/[\r\n ]/g.test(d))d=a.csvEnclosure+d+a.csvEnclosure;h=e+(d+
a.csvSeparator)});h=e.trim(h).substring(0,h.length-1);0<h.length&&(0<A.length&&(A+="\n"),A+=h);p++});return r.length};var A="",C=0,p=0,C=C+u("thead",a.theadSelector,"th,td",C),C=C+u("tbody",a.tbodySelector,"td",C);u("tfoot",a.tbodySelector,"td",C);A+="\n";!0===a.consoleLog&&console.log(A);if("string"===a.outputMode)return A;if("base64"===a.outputMode)return F(A);try{var D=new Blob([A],{type:"text/"+("csv"==a.type?"csv":"plain")+";charset=utf-8"});saveAs(D,a.fileName+"."+a.type,"csv"!=a.type||!1===
a.csvUseBOM)}catch(b){G(a.fileName+"."+a.type,"data:text/"+("csv"==a.type?"csv":"plain")+";charset=utf-8,"+("csv"==a.type&&a.csvUseBOM?"\ufeff":""),A)}}else if("sql"==a.type){var p=0,l="INSERT INTO `"+a.tableName+"` (",t=e(v).find("thead").first().find(a.theadSelector);t.each(function(){B(this,"th,td",p,t.length,function(a,e,g){l+="'"+z(a,e,g)+"',"});p++;l=e.trim(l);l=e.trim(l).substring(0,l.length-1)});l+=") VALUES ";r=e(v).find("tbody").first().find(a.tbodySelector);r.each(function(){h="";B(this,
"td",p,t.length+r.length,function(a,e,g){h+="'"+z(a,e,g)+"',"});3<h.length&&(l+="("+h,l=e.trim(l).substring(0,l.length-1),l+="),");p++});l=e.trim(l).substring(0,l.length-1);l+=";";!0===a.consoleLog&&console.log(l);if("string"===a.outputMode)return l;if("base64"===a.outputMode)return F(l);try{D=new Blob([l],{type:"text/plain;charset=utf-8"}),saveAs(D,a.fileName+".sql")}catch(b){G(a.fileName+".sql","data:application/sql;charset=utf-8,",l)}}else if("json"==a.type){var J=[],t=e(v).find("thead").first().find(a.theadSelector);
t.each(function(){var a=[];B(this,"th,td",p,t.length,function(e,g,f){a.push(z(e,g,f))});J.push(a)});var W=[],r=e(v).find("tbody").first().find(a.tbodySelector);r.each(function(){var a={};B(this,"td",p,t.length+r.length,function(e,g,f){J.length?a[J[J.length-1][f]]=z(e,g,f):a[f]=z(e,g,f)});0==e.isEmptyObject(a)&&W.push(a);p++});u=JSON.stringify({header:J,data:W});!0===a.consoleLog&&console.log(u);if("string"===a.outputMode)return u;if("base64"===a.outputMode)return F(u);try{D=new Blob([u],{type:"application/json;charset=utf-8"}),
saveAs(D,a.fileName+".json")}catch(b){G(a.fileName+".json","data:application/json;charset=utf-8;base64,",u)}}else if("xml"===a.type){var p=0,w='<?xml version="1.0" encoding="utf-8"?>',w=w+"<tabledata><fields>",t=e(v).find("thead").first().find(a.theadSelector);t.each(function(){B(this,"th,td",p,r.length,function(a,e,g){w+="<field>"+z(a,e,g)+"</field>"});p++});var w=w+"</fields><data>",X=1,r=e(v).find("tbody").first().find(a.tbodySelector);r.each(function(){var a=1;h="";B(this,"td",p,t.length+r.length,
function(e,g,f){h+="<column-"+a+">"+z(e,g,f)+"</column-"+a+">";a++});0<h.length&&"<column-1></column-1>"!=h&&(w+='<row id="'+X+'">'+h+"</row>",X++);p++});w+="</data></tabledata>";!0===a.consoleLog&&console.log(w);if("string"===a.outputMode)return w;if("base64"===a.outputMode)return F(w);try{D=new Blob([w],{type:"application/xml;charset=utf-8"}),saveAs(D,a.fileName+".xml")}catch(b){G(a.fileName+".xml","data:application/xml;charset=utf-8;base64,",w)}}else if("excel"==a.type||"xls"==a.type||"word"==
a.type||"doc"==a.type){u="excel"==a.type||"xls"==a.type?"excel":"word";var C="excel"==u?"xls":"doc",d="xls"==C?'xmlns:x="urn:schemas-microsoft-com:office:excel"':'xmlns:w="urn:schemas-microsoft-com:office:word"',x="";e(v).filter(function(){return"none"!=e(this).data("tableexport-display")&&(e(this).is(":visible")||"always"==e(this).data("tableexport-display"))}).each(function(){p=0;H=Q(this);x+="<table><thead>";t=e(this).find("thead").first().find(a.theadSelector);t.each(function(){h="";B(this,"th,td",
p,t.length,function(b,d,g){if(null!=b){h+='<th style="';for(var f in a.excelstyles)a.excelstyles.hasOwnProperty(f)&&(h+=a.excelstyles[f]+": "+e(b).css(a.excelstyles[f])+";");e(b).is("[colspan]")&&(h+='" colspan="'+e(b).attr("colspan"));e(b).is("[rowspan]")&&(h+='" rowspan="'+e(b).attr("rowspan"));h+='">'+z(b,d,g)+"</th>"}});0<h.length&&(x+="<tr>"+h+"</tr>");p++});x+="</thead><tbody>";r=e(this).find("tbody").first().find(a.tbodySelector);r.each(function(){h="";B(this,"td",p,t.length+r.length,function(b,
d,g){if(null!=b){h+='<td style="';for(var f in a.excelstyles)a.excelstyles.hasOwnProperty(f)&&(h+=a.excelstyles[f]+": "+e(b).css(a.excelstyles[f])+";");e(b).is("[colspan]")&&(h+='" colspan="'+e(b).attr("colspan"));e(b).is("[rowspan]")&&(h+='" rowspan="'+e(b).attr("rowspan"));h+='">'+z(b,d,g)+"</td>"}});0<h.length&&(x+="<tr>"+h+"</tr>");p++});a.displayTableName&&(x+="<tr><td></td></tr><tr><td></td></tr><tr><td>"+z(e("<p>"+a.tableName+"</p>"))+"</td></tr>");x+="</tbody></table>";!0===a.consoleLog&&
console.log(x)});d='<html xmlns:o="urn:schemas-microsoft-com:office:office" '+d+' xmlns="http://www.w3.org/TR/REC-html40">'+('<meta http-equiv="content-type" content="application/vnd.ms-'+u+'; charset=UTF-8">');d+="<head>";"excel"===u&&(d+="\x3c!--[if gte mso 9]>",d+="<xml>",d+="<x:ExcelWorkbook>",d+="<x:ExcelWorksheets>",d+="<x:ExcelWorksheet>",d+="<x:Name>",d+=a.worksheetName,d+="</x:Name>",d+="<x:WorksheetOptions>",d+="<x:DisplayGridlines/>",d+="</x:WorksheetOptions>",d+="</x:ExcelWorksheet>",
d+="</x:ExcelWorksheets>",d+="</x:ExcelWorkbook>",d+="</xml>",d+="<![endif]--\x3e");d+="</head>";d+="<body>";d+=x;d+="</body>";d+="</html>";!0===a.consoleLog&&console.log(d);if("string"===a.outputMode)return d;if("base64"===a.outputMode)return F(d);try{D=new Blob([d],{type:"application/vnd.ms-"+a.type}),saveAs(D,a.fileName+"."+C)}catch(b){G(a.fileName+"."+C,"data:application/vnd.ms-"+u+";base64,",d)}}else if("png"==a.type)html2canvas(e(v)[0],{allowTaint:!0,background:"#fff",onrendered:function(b){b=
b.toDataURL();b=b.substring(22);for(var e=atob(b),g=new ArrayBuffer(e.length),f=new Uint8Array(g),d=0;d<e.length;d++)f[d]=e.charCodeAt(d);!0===a.consoleLog&&console.log(e);if("string"===a.outputMode)return e;if("base64"===a.outputMode)return F(b);try{var m=new Blob([g],{type:"image/png"});saveAs(m,a.fileName+".png")}catch(n){G(a.fileName+".png","data:image/png;base64,",b)}}});else if("pdf"==a.type)if(!1===a.jspdf.autotable){var D={dim:{w:N(e(v).first().get(0),"width","mm"),h:N(e(v).first().get(0),
"height","mm")},pagesplit:!1},Y=new jsPDF(a.jspdf.orientation,a.jspdf.unit,a.jspdf.format);Y.addHTML(e(v).first(),a.jspdf.margins.left,a.jspdf.margins.top,D,function(){S(Y)})}else{var k=a.jspdf.autotable.tableExport;if("string"===typeof a.jspdf.format&&"bestfit"===a.jspdf.format.toLowerCase()){var K={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89]},P="",L="",Z=0;e(v).filter(":visible").each(function(){if("none"!=e(this).css("display")){var a=N(e(this).get(0),
"width","pt");if(a>Z){a>K.a0[0]&&(P="a0",L="l");for(var d in K)K.hasOwnProperty(d)&&K[d][1]>a&&(P=d,L="l",K[d][0]>a&&(L="p"));Z=a}}});a.jspdf.format=""==P?"a4":P;a.jspdf.orientation=""==L?"w":L}k.doc=new jsPDF(a.jspdf.orientation,a.jspdf.unit,a.jspdf.format);e(v).filter(function(){return"none"!=e(this).data("tableexport-display")&&(e(this).is(":visible")||"always"==e(this).data("tableexport-display"))}).each(function(){var b,d=0;H=Q(this);k.columns=[];k.rows=[];k.rowoptions={};if("function"===typeof k.onTable&&
!1===k.onTable(e(this),a))return!0;a.jspdf.autotable.tableExport=null;var g=e.extend(!0,{},a.jspdf.autotable);a.jspdf.autotable.tableExport=k;g.margin={};e.extend(!0,g.margin,a.jspdf.margins);g.tableExport=k;"function"!==typeof g.beforePageContent&&(g.beforePageContent=function(a){1==a.pageCount&&a.table.rows.concat(a.table.headerRow).forEach(function(b){0<b.height&&(b.height+=(2-1.15)/2*b.styles.fontSize,a.table.height+=(2-1.15)/2*b.styles.fontSize)})});"function"!==typeof g.createdHeaderCell&&(g.createdHeaderCell=
function(a,b){a.styles=e.extend({},b.row.styles);if("undefined"!=typeof k.columns[b.column.dataKey]){var d=k.columns[b.column.dataKey];if("undefined"!=typeof d.rect){var f;a.contentWidth=d.rect.width;if("undefined"==typeof k.heightRatio||0==k.heightRatio)f=b.row.raw[b.column.dataKey].rowspan?b.row.raw[b.column.dataKey].rect.height/b.row.raw[b.column.dataKey].rowspan:b.row.raw[b.column.dataKey].rect.height,k.heightRatio=a.styles.rowHeight/f;f=b.row.raw[b.column.dataKey].rect.height*k.heightRatio;f>
a.styles.rowHeight&&(a.styles.rowHeight=f)}"undefined"!=typeof d.style&&!0!==d.style.hidden&&(a.styles.halign=d.style.align,"inherit"===g.styles.fillColor&&(a.styles.fillColor=d.style.bcolor),"inherit"===g.styles.textColor&&(a.styles.textColor=d.style.color),"inherit"===g.styles.fontStyle&&(a.styles.fontStyle=d.style.fstyle))}});"function"!==typeof g.createdCell&&(g.createdCell=function(a,b){var d=k.rowoptions[b.row.index+":"+b.column.dataKey];"undefined"!=typeof d&&"undefined"!=typeof d.style&&!0!==
d.style.hidden&&(a.styles.halign=d.style.align,"inherit"===g.styles.fillColor&&(a.styles.fillColor=d.style.bcolor),"inherit"===g.styles.textColor&&(a.styles.textColor=d.style.color),"inherit"===g.styles.fontStyle&&(a.styles.fontStyle=d.style.fstyle))});"function"!==typeof g.drawHeaderCell&&(g.drawHeaderCell=function(a,b){var d=k.columns[b.column.dataKey];return(1!=d.style.hasOwnProperty("hidden")||!0!==d.style.hidden)&&0<=d.rowIndex?T(a,b,d):!1});"function"!==typeof g.drawCell&&(g.drawCell=function(a,
b){var d=k.rowoptions[b.row.index+":"+b.column.dataKey];if(T(a,b,d)){k.doc.rect(a.x,a.y,a.width,a.height,a.styles.fillStyle);if("undefined"!=typeof d&&"undefined"!=typeof d.kids&&0<d.kids.length){var e=a.height/d.rect.height;if(e>k.dh||"undefined"==typeof k.dh)k.dh=e;k.dw=a.width/d.rect.width;U(a,d.kids,k)}k.doc.autoTableText(a.text,a.textPos.x,a.textPos.y,{halign:a.styles.halign,valign:a.styles.valign})}return!1});var f=[];t=e(this).find("thead").find(a.theadSelector);t.each(function(){b=0;B(this,
"th,td",d,t.length,function(a,e,g){var h=V(a);h.title=z(a,e,g);h.key=b++;h.rowIndex=d;f.push(h)});d++});0<d&&e.each(f,function(){this.rowIndex==d-1&&(obj=1<d&&null==this.rect?aa(f,this.key,d-2):this,null!=obj&&k.columns.push(obj))});var h=0;r=e(this).find("tbody").find(a.tbodySelector);r.each(function(){var a=[];b=0;B(this,"td",d,t.length+r.length,function(d,f,g){if("undefined"===typeof k.columns[b]){var l={title:"",key:b,style:{hidden:!0}};k.columns.push(l)}"undefined"!==typeof d&&null!=d?(l=V(d),
l.kids=e(d).children()):(l=e.extend(!0,{},k.rowoptions[h+":"+(b-1)]),l.colspan=-1);k.rowoptions[h+":"+b++]=l;a.push(z(d,f,g))});a.length&&(k.rows.push(a),h++);d++});if("function"===typeof k.onBeforeAutotable)k.onBeforeAutotable(e(this),k.columns,k.rows,g);k.doc.autoTable(k.columns,k.rows,g);if("function"===typeof k.onAfterAutotable)k.onAfterAutotable(e(this),g);a.jspdf.autotable.startY=k.doc.autoTableEndPosY()+g.margin.top});S(k.doc);k.columns.length=0;k.rows.length=0;delete k.doc;k.doc=null}return this}})})(jQuery);
});