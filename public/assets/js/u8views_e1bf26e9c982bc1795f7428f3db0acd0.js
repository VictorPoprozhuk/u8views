!function r(o,a,i){function s(t,e){if(!a[t]){if(!o[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}n=a[t]={exports:{}},o[t][0].call(n.exports,function(e){return s(o[t][1][e]||e)},n,n.exports,r,o,a,i)}return a[t].exports}for(var l="function"==typeof require&&require,e=0;e<i.length;e++)s(i[e]);return s}({1:[function(e,t,n){"use strict";var e=e("../functions/querySelector"),r=(0,e.qS)(".js-instruction-toggle-button"),o=(0,e.qS)(".js-instruction"),r=(r&&r.addEventListener("click",function(){o.classList.toggle("active")}),(0,e.qSA)(".step-3__copy-text"));r&&r.forEach(function(r){r.addEventListener("click",function(e){var t=e.target.querySelector(".step-3__copy-img"),n=e.target.querySelector(".step-3__copy-done"),e=(t.style.display="none",n.style.display="block",r.style.animationName="github-button",r);e=r.parentElement.querySelector(".step-3__item-text").textContent.trim(),navigator.clipboard.writeText(e),setTimeout(function(){t.style.display="block",n.style.display="none",r.style.animationName="none"},2e3)})});var r=new Date,a=r.getMonth()+1,i=new Date(r.getFullYear(),r.getMonth(),0).getDate();var s=a<10?".0"+a:a;r=function(){for(var e=[],t=1;t<i;t++)t%2==0&&e.push({x:Math.floor(100*Math.random()),y:10<=t||0==t?t+s:"0"+t+s});return e}(),a={series:[{name:"Views",data:r.map(function(e){return e.x})}],chart:{type:"area",height:340,zoom:{enabled:!1},toolbar:{show:!1}},colors:["#000"],fill:{type:"gradient",colors:["#A0ACFF"],gradient:{shadeIntensity:1,opacityFrom:.7,opacityTo:.9}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},labels:r.map(function(e){return e.y}),xaxis:{type:"datey"},yaxis:{opposite:!0},legend:{horizontalAlign:"left"}},r=(0,e.qS)(".js-chart-views-statistic"),r&&new ApexCharts(r,a).render(),r=(0,e.qS)(".js-chart-referral-registration-statistics");r&&new ApexCharts(r,{series:[{name:"Registaation",data:[35,41,36,26,45,48,52,53,41]}],chart:{type:"bar",height:350,zoom:{enabled:!1},toolbar:{show:!1}},colors:["#13161B"],plotOptions:{bar:{horizontal:!1,columnWidth:"10%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Jan 03","Jan 06","Jan 09","Jan 12","Jan 15","Jan 18","Jan 24","Jan 27","Jan 30"]},yaxis:{opposite:!0},fill:{opacity:1},legend:{horizontalAlign:"left"}}).render()},{"../functions/querySelector":2}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.qSA=n.qS=void 0;var r=document.querySelector.bind(document);n.qS=r;n.qSA=function(e){return Array.from(document.querySelectorAll("".concat(e)))}},{}]},{},[1]);