(this["webpackJsonprecipe-planner"]=this["webpackJsonprecipe-planner"]||[]).push([[0],{26:function(n,e,a){},27:function(n,e,a){},32:function(n,e,a){"use strict";a.r(e);var t=a(1),r=a.n(t),o=a(15),i=a.n(o),c=(a(26),a(10)),u=a(3),s=a(4),l=a(5),k=(a(27),a(2)),p=a.n(k),g=a(14),b=a.n(g),j=a(16);function m(){return(m=Object(j.a)(b.a.mark((function n(e){var a,t;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 2:return a=n.sent,n.next=5,a.json();case 5:return t=n.sent,n.abrupt("return",t);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var h={"nabia\u0142":["smietana UHT 18%","ser \u017c\xf3\u0142ty (krojony)","mleko","jajka","mas\u0142o"],"mi\u0119so":["mi\u0119so mielone wo\u0142owe","pier\u015b kurczaka","kie\u0142basa ~15cm","sucha krakowka","\u017ceberka w\u0119dzone","mi\u0119so na gulasz","kabanosy chili","kark\xf3wka","w\u0119dzony boczek","pol\u0119dwiczki wieprzowe","\u017ceberka surowe"],warzywa:["cytryna","marchew","ziemniaki myte","kapusty (g\u0142\xf3wka)","cebula","pieczarki","natka pietruszki","pomidory","ziemniaki","czerwona papryka","suchego grochu \u0142uskanego (po\u0142\xf3wki)","kapusta kiszona"],pieczywo:["bu\u0142ka kajzerka","pod\u0142u\u017cne bu\u0142ki do currywurst","chleb bia\u0142y krojony","tortilla"],przetwory:["ketchup ostry","majonez jalapenos","jalapenos","og\xf3rki konserwowe","cebulka pra\u017cona","olej rzepakowy","makaron tagliatelle","kasza gryczana","makaron spagetti","chocopuffs","cini minis","pomidory krojone puszka / przecier pomidorowy","rum do grogu","czekolada go\u017cka","czerwona fasola puszka","kukurydza puszka","suszone \u015bliwki","zakwasu \u017cytniego do \u017curku","\u017curawina","m\u0105ka","Chrzan","kawa"],akcesoria:["mokre chustki","papier toaletowy","p\u0142yn do mycia naczy\u0144","worki na \u015bmieci 60L"],przyprawy:["curry/kurkuma","czosnek granulowany","zio\u0142a prowansalskie","s\xf3l","cukier","czosnek granulowany/p\u0142atki","go\u017adziki","majeranek","ziarna ja\u0142owca","chilli","oregano","pieprz","proszek do pieczenia","kmin rzymski"],leki:["apap/ibuprom","helsi / Porost Islandzki / isla","reni"]};function d(n){for(var e in h)if(h[e].includes(n))return e}var f=a(0);function z(n){return Object(f.jsx)("table",{children:Object(f.jsx)("tbody",{children:n.values.map((function(n){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{type:"checkbox",name:n.label})," ",n.label]})}),Object(f.jsx)("td",{style:{textAlign:"right"},children:p.a.round(n.amount,2)}),Object(f.jsx)("td",{children:n.unit}),Object(f.jsx)("td",{children:d(n.label)})]},n.label)}))})})}function y(n){return Object(f.jsx)("ul",{children:n.values.map((function(n){return Object(f.jsx)("li",{children:n},n)}))})}var w=a(17),O=a(18),v=a(7),x=a(19),A=a(20),C=a(21);function S(n,e,a){return a=a||" ",n.length>e?n:(e-=n.length,n+(a+=a.repeat(e)).slice(0,e))}var q=function(n){Object(x.a)(a,n);var e=Object(A.a)(a);function a(n,t,r,o){var i;return Object(w.a)(this,a),(i=e.call(this)).message=void 0,i.expected=void 0,i.found=void 0,i.location=void 0,i.name=void 0,i.message=n,i.expected=t,i.found=r,i.location=o,i.name="SyntaxError","function"===typeof Object.setPrototypeOf?Object.setPrototypeOf(Object(v.a)(i),a.prototype):Object(v.a)(i).__proto__=a.prototype,"function"===typeof Error.captureStackTrace&&Error.captureStackTrace(Object(v.a)(i),a),i}return Object(O.a)(a,[{key:"format",value:function(n){var e="Error: "+this.message;if(this.location){var a,t=null;for(a=0;a<n.length;a++)if(n[a].source===this.location.source){t=n[a].text.split(/\r\n|\n|\r/g);break}var r=this.location.start,o=this.location.source+":"+r.line+":"+r.column;if(t){var i=this.location.end,c=S("",r.line.toString().length," "),u=t[r.line-1],s=r.line===i.line?i.column:u.length+1;e+="\n --\x3e "+o+"\n"+c+" |\n"+r.line+" | "+u+"\n"+c+" | "+S("",r.column-1," ")+S("",s-r.column,"^")}else e+="\n at "+o}return e}}],[{key:"buildMessage",value:function(n,e){function a(n){return n.charCodeAt(0).toString(16).toUpperCase()}function t(n){return n.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(n){return"\\x0"+a(n)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(n){return"\\x"+a(n)}))}function r(n){return n.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(n){return"\\x0"+a(n)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(n){return"\\x"+a(n)}))}function o(n){switch(n.type){case"literal":return'"'+t(n.text)+'"';case"class":var e=n.parts.map((function(n){return Array.isArray(n)?r(n[0])+"-"+r(n[1]):r(n)}));return"["+(n.inverted?"^":"")+e+"]";case"any":return"any character";case"end":return"end of input";case"other":return n.description}}return"Expected "+function(n){var e,a,t=n.map(o);if(t.sort(),t.length>0){for(e=1,a=1;e<t.length;e++)t[e-1]!==t[e]&&(t[a]=t[e],a++);t.length=a}switch(t.length){case 1:return t[0];case 2:return t[0]+" or "+t[1];default:return t.slice(0,-1).join(", ")+", or "+t[t.length-1]}}(n)+" but "+(((i=e)?'"'+t(i)+'"':"end of input")+" found.");var i}}]),a}(Object(C.a)(Error));var F=function(n,e){var a,t={},r=(e=void 0!==e?e:{}).grammarSource,o={Doc:U},i=U,c="\n",u=P("\n",!1),s=P("#",!1),l=/^[^\n]/,k=T(["\n"],!0,!1),p=P("*",!1),g=/^[^:\n]/,b=T([":","\n"],!0,!1),j=P(":",!1),m=P("+",!1),h=(T([",","\n"],!0,!1),M("number")),d=/^[0-9]/,f=T([["0","9"]],!1,!1),z=P(".",!1),y=M("whitespace"),w=/^[ \t]/,O=T([" ","\t"],!1,!1),v=0,x=0,A=[{line:1,column:1}],C=0,S=[],F=0;if(void 0!==e.startRule){if(!(e.startRule in o))throw new Error("Can't start parsing from rule \""+e.startRule+'".');i=o[e.startRule]}function E(){return n.substring(x,v)}function P(n,e){return{type:"literal",text:n,ignoreCase:e}}function T(n,e,a){return{type:"class",parts:n,inverted:e,ignoreCase:a}}function M(n){return{type:"other",description:n}}function N(e){var a,t=A[e];if(t)return t;for(a=e-1;!A[a];)a--;for(t={line:(t=A[a]).line,column:t.column};a<e;)10===n.charCodeAt(a)?(t.line++,t.column=1):t.column++,a++;return A[e]=t,t}function B(n,e){var a=N(n),t=N(e);return{source:r,start:{offset:n,line:a.line,column:a.column},end:{offset:e,line:t.line,column:t.column}}}function L(n){v<C||(v>C&&(C=v,S=[]),S.push(n))}function I(n,e,a){return new q(q.buildMessage(n,e),n,e,a)}function U(){var n,e;if(n=[],(e=J())!==t)for(;e!==t;)n.push(e),e=J();else n=t;return n}function J(){var e,a,r,o,i,p;if(e=v,a=function(){var e,a,r,o;e=v,35===n.charCodeAt(v)?(a="#",v++):(a=t,0===F&&L(s));if(a!==t)if(_()!==t){if(r=[],l.test(n.charAt(v))?(o=n.charAt(v),v++):(o=t,0===F&&L(k)),o!==t)for(;o!==t;)r.push(o),l.test(n.charAt(v))?(o=n.charAt(v),v++):(o=t,0===F&&L(k));else r=t;r!==t?(10===n.charCodeAt(v)?(o=c,v++):(o=t,0===F&&L(u)),o!==t?(x=e,e=a=r.join("")):(v=e,e=t)):(v=e,e=t)}else v=e,e=t;else v=e,e=t;return e}(),a!==t){if(r=[],(o=R())!==t)for(;o!==t;)r.push(o),o=R();else r=t;if(r!==t){for(o=[],i=D();i!==t;)o.push(i),i=D();if(o!==t){if(i=[],10===n.charCodeAt(v)?(p=c,v++):(p=t,0===F&&L(u)),p!==t)for(;p!==t;)i.push(p),10===n.charCodeAt(v)?(p=c,v++):(p=t,0===F&&L(u));else i=t;i!==t?(x=e,e=a={title:a,ingredients:r,equipment:o}):(v=e,e=t)}else v=e,e=t}else v=e,e=t}else v=e,e=t;return e}function R(){var e,a,r,o,i,s,m,y;if(e=v,42===n.charCodeAt(v)?(a="*",v++):(a=t,0===F&&L(p)),a!==t)if(_()!==t){if(r=[],g.test(n.charAt(v))?(o=n.charAt(v),v++):(o=t,0===F&&L(b)),o!==t)for(;o!==t;)r.push(o),g.test(n.charAt(v))?(o=n.charAt(v),v++):(o=t,0===F&&L(b));else r=t;if(r!==t)if(58===n.charCodeAt(v)?(o=":",v++):(o=t,0===F&&L(j)),o!==t)if(_()!==t)if(i=function(){var e,a,r,o,i,c;if(F++,e=v,_()!==t){if(a=[],d.test(n.charAt(v))?(r=n.charAt(v),v++):(r=t,0===F&&L(f)),r!==t)for(;r!==t;)a.push(r),d.test(n.charAt(v))?(r=n.charAt(v),v++):(r=t,0===F&&L(f));else a=t;if(a!==t){if(r=v,46===n.charCodeAt(v)?(o=".",v++):(o=t,0===F&&L(z)),o!==t){if(i=[],d.test(n.charAt(v))?(c=n.charAt(v),v++):(c=t,0===F&&L(f)),c!==t)for(;c!==t;)i.push(c),d.test(n.charAt(v))?(c=n.charAt(v),v++):(c=t,0===F&&L(f));else i=t;i!==t?r=o=[o,i]:(v=r,r=t)}else v=r,r=t;r===t&&(r=null),r!==t?(x=e,e=parseFloat(E())):(v=e,e=t)}else v=e,e=t}else v=e,e=t;F--,e===t&&(t,0===F&&L(h));return e}(),i!==t){if(s=[],l.test(n.charAt(v))?(m=n.charAt(v),v++):(m=t,0===F&&L(k)),m!==t)for(;m!==t;)s.push(m),l.test(n.charAt(v))?(m=n.charAt(v),v++):(m=t,0===F&&L(k));else s=t;s!==t&&(m=_())!==t?(10===n.charCodeAt(v)?(y=c,v++):(y=t,0===F&&L(u)),y!==t?(x=e,a=function(n,e,a){return{text:n.join(""),amount:e,unit:a.join("").trim()}}(r,i,s),e=a):(v=e,e=t)):(v=e,e=t)}else v=e,e=t;else v=e,e=t;else v=e,e=t;else v=e,e=t}else v=e,e=t;else v=e,e=t;return e}function D(){var e,a,r,o,i;if(e=v,43===n.charCodeAt(v)?(a="+",v++):(a=t,0===F&&L(m)),a!==t)if(_()!==t){if(r=[],l.test(n.charAt(v))?(o=n.charAt(v),v++):(o=t,0===F&&L(k)),o!==t)for(;o!==t;)r.push(o),l.test(n.charAt(v))?(o=n.charAt(v),v++):(o=t,0===F&&L(k));else r=t;r!==t&&(o=_())!==t?(10===n.charCodeAt(v)?(i=c,v++):(i=t,0===F&&L(u)),i!==t?(x=e,a=function(n){return n.join("")}(r),e=a):(v=e,e=t)):(v=e,e=t)}else v=e,e=t;else v=e,e=t;return e}function _(){var e,a;for(F++,e=[],w.test(n.charAt(v))?(a=n.charAt(v),v++):(a=t,0===F&&L(O));a!==t;)e.push(a),w.test(n.charAt(v))?(a=n.charAt(v),v++):(a=t,0===F&&L(O));return F--,e===t&&(a=t,0===F&&L(y)),e}if((a=i())!==t&&v===n.length)return a;throw a!==t&&v<n.length&&L({type:"end"}),I(S,C<n.length?n.charAt(C):null,C<n.length?B(C,C+1):B(C,C))}("\n# makaron z kurczakiem w \u015bmietanowym sosie pieczarkowym\n* smietana UHT 18%: 60 g\n* pier\u015b kurczaka: 150 g\n* makaron tagliatelle: 125 g\n* cebula: 40 g\n* pieczarki: 80 g\n* natka pietruszki: 0.2 szt\n* s\xf3l: 10 g\n+ kocio\u0142ek,\u0142y\u017cka,druciak\n\n# hamburgery\n* bu\u0142ka kajzerka: 2.3 szt\n* mi\u0119so mielone wo\u0142owe: 200 g\n* ser \u017c\xf3\u0142ty (krojony): 30 g\n* ketchup ostry: 30 g\n* majonez jalapenos: 30 g\n* og\xf3rki konserwowe: 30 g\n* jalapenos: 30 g\n* pomidory: 0.5 szt\n+ Toster\n\n# curry wurst\n* pod\u0142u\u017cne bu\u0142ki do currywurst: 2 szt\n* kie\u0142basa ~15cm: 2 szt\n* cebulka pra\u017cona: 40 g\n* curry/kurkuma: 5 g\n* ketchup ostry: 50 g\n* jalapenos: 30 g\n\n# pra\u017conka\n* kie\u0142basa ~15cm: 0.5 szt\n* czosnek granulowany: 5 g\n* zio\u0142a prowansalskie: 0.2 opakowanie\n* olej rzepakowy: 50 ml\n* marchew: 0.15 kg\n* ziemniaki: 0.3 kg\n* kapusty (g\u0142\xf3wka): 200 g\n* cebula: 150 g\n* s\xf3l: 20 g\n+ kocio\u0142ek,\u0142y\u017cka,druciak\n+ obieraczka do warzyw\n\n# quesadilla\n* tortilla: 2 szt\n* ser \u017c\xf3\u0142ty (krojony): 60 g\n* jalapenos: 50 g\n* sucha krakowka: 60 g\n+ p\u0142yta \u017celiwna, szpachla\n\n# gulasz z kasz\u0105\n* chleb bia\u0142y krojony: 3 kromki\n* mi\u0119so na gulasz: 300 g\n* czosnek granulowany: 4 g\n* zio\u0142a prowansalskie: 0.2 opakowanie\n* ziarna ja\u0142owca: 0.2 opakowanie\n* s\xf3l: 10 g\n* pomidory krojone puszka / przecier pomidorowy: 100 g\n* olej rzepakowy: 50 ml\n* kasza gryczana: 100\tg\n* marchew: 0.15 kg\n* cebula: 0.10 g\n* czerwona papryka: 0.1 g\n+ kocio\u0142ek,\u0142y\u017cka,druciak\n+ obieraczka do warzyw\n\n# groch\xf3wka\n* chleb bia\u0142y krojony: 3 kromki\n* \u017ceberka w\u0119dzone: 150 g\n* majeranek: 0.2 opakowanie\n* s\xf3l: 10 g\n* suchego grochu \u0142uskanego (po\u0142\xf3wki): 60 g\n* marchew: 0.04 kg\n* ziemniaki: 0.12 kg\n* cebula: 0.05 g\n+ kocio\u0142ek,\u0142y\u017cka,druciak\n+ obieraczka do warzyw\n\n# p\u0142atki z mlekiem\n* chocopuffs: 40 g\n* cini minis: 40 g\n* mleko: 0.3 L\n\n# grog\n* go\u017adziki: 0.01 g\n* rum do grogu: 0.125 L\n* cukier: 4 g\n* cytryna: 40g\n+ wyciskarka do cytryn\n+ termos\n\n# spaghetti\n* mi\u0119so mielone wo\u0142owe: 100 g\n* czosnek granulowany: 4 g\n* zio\u0142a prowansalskie: 0.2 opakowanie\n* s\xf3l: 10 g\n* cebula: 0.10 g\n* pomidory krojone puszka / przecier pomidorowy: 150 g\n* makaron spagetti: 100 g\n+ kocio\u0142ek,\u0142y\u017cka,druciak\n\n# tosty\n* chleb bia\u0142y krojony: 6 kromki\n* ser \u017c\xf3\u0142ty (krojony): 75 g\n* sucha krakowka: 75 g\n* jalapenos: 40 g\n* ketchup ostry: 60 g\n* og\xf3rki konserwowe: 30 g\n+ p\u0142yta \u017celiwna, szpachla\n\n# kwa\u015bnica\n* \u017ceberka surowe:\t175\tg\n* w\u0119dzony boczek:\t75\tg\n* \u017ceberka w\u0119dzone:\t150\tg\n* majeranek: 0.2 opakowanie\n* kapusta kiszona:\t100\tg\n* ziemniaki:\t0.2\tkg\n* czosnek granulowany: 4 g\n+ kocio\u0142ek,\u0142y\u017cka,druciak\n+ obieraczka do warzyw\n\n# bigos\n* kie\u0142basa ~15cm: 1 szt\n* kark\xf3wka:\t125\tg\n* majeranek: 0.2 opakowanie\n* ziarna ja\u0142owca: 0.2 opakowanie\n* kapusta kiszona:\t150\tg\n* kapusty (g\u0142\xf3wka): 100 g\n* pomidory krojone puszka / przecier pomidorowy: 50\tg\n* cebula:   50 g\n* suszone \u015bliwki: 7 g\n+ kocio\u0142ek,\u0142y\u017cka,druciak\n\n# pol\u0119dwiczki z grilla\n* chleb bia\u0142y krojony: 4 kromki\n* pol\u0119dwiczki wieprzowe: 350\tg\n* \u017curawina:\t80 g\n+ p\u0142yta \u017celiwna, szpachla\n\n# jajko sadzone\n* chleb bia\u0142y krojony: 2 kromki\n* jajka: 2 szt\n* s\xf3l: 10 g\n+ p\u0142yta \u017celiwna, szpachla\n\n# pankejki\n* jajka: 1 szt\n* proszek do pieczenia:\t4 g\n* m\u0105ka:\t100\tg\n* mleko: 0.1 L\n* cukier: 10 g\n* olej rzepakowy: 35 ml\n+ p\u0142yta \u017celiwna, szpachla\n\n# \u017curek\n* zakwasu \u017cytniego do \u017curku: 125ml\n* majeranek: 0.2 opakowanie\n* s\xf3l: 10 g\n* pieprz: 10 g\n* kie\u0142basa ~15cm: 1 szt\n* w\u0119dzony boczek: 50 g\n* smietana UHT 18%: 25 g\n* Chrzan: 10 g\n* jajka: 2 szt\n+ kocio\u0142ek,\u0142y\u017cka,druciak\n\n# chili con carne\n* tortilla: 2 szt\n* mi\u0119so mielone wo\u0142owe:\t125\tg\n* czosnek granulowany: 4 g\n* chilli: 0.1\topakowanie\n* oregano: 0.2 opakowanie\n* kmin rzymski: 0.2 opakowanie\n* s\xf3l: 10 g\n* kukurydza puszka: 50g\n* czerwona fasola puszka: 50g\n* pomidory krojone puszka / przecier pomidorowy:\t100\tg\n* olej rzepakowy: 35 ml\n* jalapenos:\t50\tg\n* czerwona papryka:\t100 g\n* cebula: \t120 g\n* czekolada gorzka: 0.1 tabliczki\n+ kocio\u0142ek,\u0142y\u017cka,druciak\n\n# chili sin carne\n* tortilla: 2 szt\n* czosnek granulowany: 4 g\n* chilli: 0.1\topakowanie\n* oregano: 0.2 opakowanie\n* kmin rzymski: 0.2 opakowanie\n* s\xf3l: 10 g\n* kukurydza puszka: 50g\n* czerwona fasola puszka: 150g\n* pomidory krojone puszka / przecier pomidorowy:\t100\tg\n* olej rzepakowy: 35 ml\n* jalapenos:\t50\tg\n* czerwona papryka:\t100 g\n* cebula: \t120 g\n* czekolada gorzka: 0.1 tabliczki\n+ kocio\u0142ek,\u0142y\u017cka,druciak\n\n# fasolka po breto\u0144sku\n* pomidory krojone puszka / przecier pomidorowy: 100 g\n* czerwona fasola puszka: 80 g\n* kie\u0142basa ~15cm: 0.5 szt\n* w\u0119dzony boczek: 50 g\n* cebula: 25 g\n* czosnek granulowany: 2 g\n* majeranek: 0.2 opakowanie\n* zio\u0142a prowansalskie: 0.2 opakowanie\n\n# przek\u0105ski\n* kabanosy chili: 0.5 opakowania\n* czekolada gorzka: 0.25 tabliczki\n* woda: 1 L\n\n# kawa\n* kawa: 12 g\n\n# akcesoria\n* papier toaletowy: 0.25 rolka\n* reni: 2 tabletki\n* mokre chustki: 10 listk\xf3w\n* p\u0142yn do mycia naczy\u0144: 10 ml\n* worki na \u015bmieci 60L: 1 szt\n* helsi / Porost Islandzki / isla: 2 tabletki\n* apap/ibuprom: 2 tabletki\n+ druciak\n+ g\u0105bka do zmywania\n+ szmaty\n\n# jajecznica z pomidorami\n* jajka: 3 szt\n* pomidory: 1 szt\n* w\u0119dzony boczek: 25 g\n* s\xf3l: 4 g\n* mas\u0142o: 10 g\n\n# frytki\n* ziemniaki: 0.15 kg\n* s\xf3l: 2 g\n* olej rzepakowy: 250 ml\n+ Metalowe sitko\n+ Durszlak\n\n".trimStart());function E(n){var e=n.basket,a=n.count,t=p.a.chain(F).filter((function(n){return e[n.title]>0}));return{groceries:t.map((function(n){return Object(u.a)(Object(u.a)({},n),{},{ingredients:n.ingredients.map((function(a){return Object(u.a)(Object(u.a)({},a),{},{amount:a.amount*e[n.title]})}))})})).flatMap((function(n){return n.ingredients})).groupBy((function(n){return n.text})).mapValues((function(n){return{value:p.a.sum(n.map((function(n){return n.amount}))),unit:p.a.chain(n).map((function(n){return n.unit})).uniq().join("!=").value()}})).toPairs().map((function(n){var e=Object(l.a)(n,2),t=e[0],r=e[1];return{label:t,amount:r.value*a,unit:r.unit}})).sortBy((function(n){return[d(n.label),n.label]})).value(),equipment:t.flatMap((function(n){return n.equipment})).sort().sortedUniq().value()}}function P(n){return Object(f.jsxs)("tr",{className:n.value>0?"active":void 0,children:[Object(f.jsx)("td",{children:n.title}),Object(f.jsx)("td",{align:"right",children:n.value}),Object(f.jsxs)("td",{children:[Object(f.jsx)("button",{onClick:function(){return n.onChange(-1)},children:"-"}),Object(f.jsx)("button",{onClick:function(){return n.onChange(1)},children:"+"})]})]})}function T(n){return p.a.sortedUniq(n.sort())}function M(n,e){var a=function(n,e){var a;return(null===(a=n.find((function(n){return n.label===e})))||void 0===a?void 0:a.amount)||0},t=p.a.uniqBy([].concat(Object(s.a)(n),Object(s.a)(e)),(function(n){return n.label}));return p.a.sortBy(t.map((function(t){var r=t.label,o=t.unit;return{amount:a(n,r)+a(e,r),label:r,unit:o}})),(function(n){return[d(n.label),n.label]}))}function N(){for(var n=arguments.length,e=new Array(n),a=0;a<n;a++)e[a]=arguments[a];return e.map((function(n){return E(n)})).reduce((function(n,e){return{groceries:M(n.groceries,e.groceries),equipment:T([].concat(Object(s.a)(n.equipment),Object(s.a)(e.equipment)))}}),{groceries:[],equipment:[]})}var B=function(){var n=Object(t.useState)({basket:{},count:4}),e=Object(l.a)(n,2),a=e[0],r=e[1],o=Object(t.useState)(),i=Object(l.a)(o,2),k=i[0],g=i[1],b=Object(t.useState)([]),j=Object(l.a)(b,2),h=j[0],d=j[1],w=Object(t.useState)({groceries:[],equipment:[]}),O=Object(l.a)(w,2),v=O[0],x=O[1];return Object(t.useEffect)((function(){x(N.apply(void 0,[a].concat(Object(s.a)(h))))}),[a,h]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"noprint",children:[Object(f.jsxs)("select",{onChange:function(n){return function(e){try{""===e&&(r({basket:{},count:4}),d([]));var a=window.localStorage.getItem(e)||"",t=JSON.parse(a),o=t.current,i=t.baskets;r(o),d(i)}catch(n){alert("".concat(n))}}(n.target.value)},children:[Object(f.jsx)("option",{value:"",children:"Otw\xf3rz..."}),Object.keys(window.localStorage).map((function(n){return Object(f.jsx)("option",{value:n,children:n},n)}))]}),Object(f.jsx)("button",{onClick:function(){return function(){var n=prompt("Nazwa");n&&window.localStorage.setItem(n,JSON.stringify({current:a,baskets:h}))}()},children:"Zapisz"}),Object(f.jsx)("button",{onClick:function(){d([].concat(Object(s.a)(h),[{basket:p.a.pickBy(a.basket),count:a.count}])),r((function(n){return{count:n.count,basket:{}}}))},children:"Kolejne"}),Object(f.jsx)("table",{children:Object(f.jsxs)("tbody",{children:[Object(f.jsx)(P,{value:a.count,title:"Os\xf3b",onChange:function(n){return r((function(e){return Object(u.a)(Object(u.a)({},e),{},{count:Math.max(e.count+n,0)})}))}}),F.map((function(n){return n.title})).sort().map((function(n){return Object(f.jsx)(P,{value:a.basket[n]||0,title:n,onChange:function(e){return function(n,e){r((function(a){return{count:a.count,basket:Object(u.a)(Object(u.a)({},a.basket),{},Object(c.a)({},n,Math.max(0,(a.basket[n]||0)+e)))}}))}(n,e)}},n)}))]})})]}),Object(f.jsx)("ul",{children:h.map((function(n,e){return Object(f.jsxs)("li",{children:[Object(f.jsx)("button",{className:"noprint",onClick:function(){return function(n){d((function(e){return e.filter((function(e,a){return a!==n}))}))}(e)},children:"X"}),"Os\xf3b ",n.count,": ",p.a.toPairs(n.basket).map((function(n){var e=Object(l.a)(n,2),a=e[0],t=e[1];return"".concat(a," (").concat(t,")")})).join(", ")]})}))})]}),Object(f.jsxs)("div",{style:{overflow:"auto"},children:[Object(f.jsxs)("div",{className:"noprint",children:[Object(f.jsx)("button",{onClick:function(){return function(n){return m.apply(this,arguments)}(v.groceries).then(g)},children:"Zam\xf3w"}),"\xa0",Object(f.jsx)("a",{href:"https://github.com/rzymek/recipe-planner/blob/master/README.md",children:"Przepisy"})]}),Object(f.jsx)(z,{values:v.groceries}),Object(f.jsx)(y,{values:v.equipment}),k&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{children:"Brakuje:"}),Object(f.jsx)(z,{values:k})]})]})]})},L=function(n){n&&n instanceof Function&&a.e(3).then(a.bind(null,33)).then((function(e){var a=e.getCLS,t=e.getFID,r=e.getFCP,o=e.getLCP,i=e.getTTFB;a(n),t(n),r(n),o(n),i(n)}))};i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(B,{})}),document.getElementById("root")),L()}},[[32,1,2]]]);
//# sourceMappingURL=main.5798df3e.chunk.js.map