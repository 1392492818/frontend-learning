!function(e){if("function"==typeof define&&window.define.amd)window.define([],e);else e()}(function(){var e={},t={},i={},n={},r=[],o=0;if(!Function.prototype.bind)Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),i=this,n=function(){},r=function(){return i.apply(this instanceof n&&e?this:e,t.concat(Array.prototype.slice.call(arguments)))};n.prototype=this.prototype;r.prototype=new n;return r};var a=function(e,t,i){if(window.addEventListener)e.addEventListener(t,i,!1);else e.attachEvent("on"+t,i)};var s=function(e,t,i){if(window.removeEventListener)e.removeEventListener(t,i);else e.detachEvent("on"+t,i)};var c=function(e){e=e||"";if(e.indexOf("passport.126.com/webzj")>=0||e.indexOf("passport.yeah.net/webzj")>=0||e.indexOf("dl.reg.163.com/webzj")>=0)e=e.replace(/\:\/\/[^\/]+\/webzj\//,function(e){return e+"b/"});else e=e.replace(/\:\/\/([^\/]+)/,function(e){return e+"/b"});return e};var l=[];var f=function(e){var t="";var n=i[e];if(n.__coverBackground&&m("animation"))t=n.__coverBackground.indexOf("background:")!=-1?n.__coverBackground:"";return"position:fixed;_position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;background:rgb(0,0,0); filter:progid:DXImageTransform.Microsoft.Alpha(opacity=60);-moz-opacity:0.6;-khtml-opacity:0.6;opacity:0.6;z-index:1000;"+t};var u=function(e,t){return"position:fixed;_position:absolute;z-index:10000;left:50%;top:50%;width:"+e+"px;margin-left:-"+e/2+"px;height:"+t+"px;margin-top:-"+t/2+"px;"};var h=function(e){var t=i[e];var n=null;if(t.__iframeShowAnimation)n="-webkit-animation:"+t.__iframeShowAnimation+";-moz-animation:"+t.__iframeShowAnimation+";-ms-animation:"+t.__iframeShowAnimation+";-o-animation:"+t.__iframeShowAnimation+";animation:"+t.__iframeShowAnimation+";";return"width:100%;height:100%;border:none;background:none;"+(n?n:"")};var d=function(){var e=setInterval(function(){for(var t=0;t<r.length;t++)if(r[t].readyDone){e=clearInterval(e);r.shift();p(1);break}},200)};var p=function(e){if(e||!o){o=1;var t=setInterval(function(){for(var e=0;e<r.length;e++)if(!r[e].readyDone){t=clearInterval(t);v.call(r[e]);d();break}},200)}};var g=function(e,t,n){var o=n.id;var a="x-URS-iframe"+o;var s=i[o];var c=document.getElementById(a),l=s._name||"";if(!c){try{c=document.createElement('<iframe  name="'+l+'" allowTransparency=true ></iframe>')}catch(d){c=document.createElement("iframe");c.allowTransparency=!0;c.name=l}c.frameBorder=0;c.id=a;c.scrolling="no";c.style.cssText=h(o)}if(t)e.appendChild(c);else{var g=420,w=408;if(s.frameSize){g=s.frameSize.width;w=s.frameSize.height}var m=document.getElementById("x-discover"+o);if(!m){m=document.createElement("div");m.id="x-discover"+o;m.style.cssText=f(o)}var _=document.getElementById("x-panel"+o);if(!_){_=document.createElement("div");_.id="x-panel"+o;s._panel=_;_.style.cssText=u(g,w)}_.appendChild(c);e.appendChild(m);e.appendChild(_);e.style.display="none"}if(!window.postMessage){r.push(this);p(0)}};var w=function(e){var t="x-URS-iframe"+this.MGID;var i=document.getElementById(t);if(this._urs_options&&this._urs_options.afterSetIframeSrc)this._urs_options.afterSetIframeSrc(i);window.setTimeout(function(){this.__loadTime=(new Date).getTime();i.src=this._url_cache}.bind(this),0);this.sto=clearTimeout(this.sto);if(window._$needUrsBgp)if(1!=e)this.sto=setTimeout(function(){this.sto=clearTimeout(this.sto);this._url_cache=this._url_cache.replace("webzj.reg.163.com","webzj2.reg.163.com");if(window._$passportNeedUrsBgp)this._url_cache=this._url_cache.replace("passport.","passport2.").replace("reg.icourse163.org","reg2.icourse163.org");if(this._urs_options.wdaId)this._url_cache=this._url_cache.replace(/wdaId=([^&]+)/,"wdaId=UA1482833332087");w.call(this,1)}.bind(this),this._urs_options.bgpTime)};var m=function(e){var t=["webkit","Moz","ms","o"],i,n=[],r=document.documentElement.style,o=function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})};for(i in t)n.push(o(t[i]+"-"+e));n.push(o(e));for(i in n)if(n[i]in r)return!0;return!1};var _=function(e,t){var i=document.getElementById("x-URS-iframe"+e);var n=window.name||"_parent";var r={};r.data=t;r.data.from="URS|";r.data.topURL=location.href||"";r.origin="*";r.source=n;r.data.loadTime=(new Date).getTime()-this.__loadTime;I(i.contentWindow,r)};var v=function(){_.call(this,this.MGID,this._urs_options)};var y=function(){var e=/^([\w]+?:\/\/.*?(?=\/|$))/i;return function(t){t=t||"";if(e.test(t))return RegExp.$1;else return"*"}}();var b=function(e,t){try{t=t.toLowerCase();if(null===e)return"null"==t;if(void 0===e)return"undefined"==t;else return Object.prototype.toString.call(e).toLowerCase()=="[object "+t+"]"}catch(i){return!1}};var S=function(e,t,i){if(!e)return"";var n=[];for(var r in e)if(e.hasOwnProperty(r)){var o=e[r];if(o)if(!b(o,"function")){if(b(o,"date"))o=o.getTime();else if(b(o,"array"))o=o.join(",");else if(b(o,"object"))o=JSON.stringify(o);if(i)o=encodeURIComponent(o);n.push(encodeURIComponent(r)+"="+o)}else;else;}else;return n.join(t||",")};var I=function(){var e="MSG|";var t=function(t){var i={};t=t||{};i.origin=t.origin||"";i.ref=location.href;i.self=t.source;i.data=JSON.stringify(t.data);return e+S(i,"|",!0)};return function(e,i){if(window.postMessage){i=i||{};e.postMessage(JSON.stringify(i.data),y(i.origin))}else l.unshift({w:e,d:escape(t(i))})}}();var U=function(){var e=navigator.appName;if("Netscape"==e){var t=window.open("about:blank","_self");t.opener=null;t.close()}else if("Microsoft Internet Explorer"==e){window.opener=null;window.open("","_self");window.close()}};window.URS=function(){var r=function(){var e=(new Date).getTime()+Math.random();if(!n[e]){n[e]=e;return e}else return r()};var o=function(e){if("0"==e.needUrsBgp){e.passportNeedUrsBgp=0;window._$needUrsBgp=0;window._$passportNeedUrsBgp=0}else{if(e.crossDomainUrl||e.cookieDomain){window._$passportNeedUrsBgp=1;e.passportNeedUrsBgp=1}window._$needUrsBgp=1;e.needUrsBgp=1}this.MGID=r();i[this.MGID]={};this._$COM_NUM=1==this._$COM_NUM?1:2;var t=i[this.MGID];t.frameSize=e.frameSize;t.__coverBackground=e.coverBackground;t.__iframeShowAnimation=e.iframeShowAnimation;window.PTDOM=0!=e.isHttps?"https://":"http://";if(e.cssDomain&&e.cssFiles){t.__cssStr="cd="+e.cssDomain+"&cf="+e.cssFiles;if(t.__cssStr.indexOf("http://")!=-1)window.PTDOM="http://";t.__cssStr=encodeURIComponent(t.__cssStr)}this.isInclude=0;if(e.includeBox)if("string"==typeof e.includeBox)this.isInclude=document.getElementById(e.includeBox)||0;else this.isInclude=e.includeBox;t.needPrepare=e.needPrepare||0;if("string"==typeof e.eventType)this._type=e.eventType;if("string"==typeof e.bid)this._btn=document.getElementById(e.bid);else this._btn=e.bid;if(e.logincb)this.logincb=e.logincb;if(e.closecb)this.closecb=e.closecb;if(e.regcb)this.regcb=e.regcb;if(e.loginCheckLock)this.loginCheckLock=e.loginCheckLock;if(e.regCheckLock)this.regCheckLock=e.regCheckLock;if(e.initReady)this.initReady=e.initReady;if(e.statecb)this.statecb=e.statecb;if(e.resize)this.resize=e.resize;if(e.changepage)this.changepage=e.changepage;if(e.loginstate)this.loginstate=e.loginstate;if(e.otherRegSuccess)this.otherRegSuccess=e.otherRegSuccess;var n=document.createElement("div");n.id="x-URS"+this.MGID;document.body.appendChild(n);this.box=n;var o="index.html";if(e.single){o="index_dl.html";if("register"==e.page)o="index_reg.html"}var s=e.crossDomainUrl||"webzj.reg.163.com/v1.0.1/pub/";this._url_cache=window.PTDOM+s+o;var l=parseInt(1e3*Math.random());e.pathB=0;if(window.URS._$pathBPercent)if(l<=window.URS._$pathBPercent)e.pathB=1;if(e.pathB)this._url_cache=c(this._url_cache);if(t.__cssStr)this._url_cache+="?"+t.__cssStr+"&MGID="+this.MGID+"&wdaId="+(e.wdaId||"");else this._url_cache+="?MGID="+this.MGID+"&wdaId="+(e.wdaId||"");this._urs_options=e||{};this._urs_options.bgpTime=e.bgpTime||1e4;this._url_cache+="&pkid="+(this._urs_options.promark||"")+"&product="+(this._urs_options.product||"");try{JSON.stringify(this._urs_options)}catch(f){return null}if(!this.isInclude){if(this._btn&&this._type)a(this._btn,this._type,this.showIframe.bind(this))}else this.includeBox=this.isInclude};var f=function(e){if(e)e.stopPropagation?e.stopPropagation():e.cancelBubble=!0};var u=function(t){f(t);var i=t.data||"{}";if("string"==typeof i)try{i=JSON.parse(i)}catch(n){i={}}if(e[i.MGID])e[i.MGID]({data:i,origin:y(t.origin)})};var h=function(e){var n=e.data,r,o,a;if(n){if("string"==typeof n)try{n=JSON.parse(n)}catch(c){n={}}if(n.MGID){r=t[n.MGID];o=i[n.MGID];if(r.isInclude)a=r.includeBox;else a=o._panel;if(n["URS-READY-DONE"]){r.readyDone=1;r.sto=clearTimeout(r.sto);if(r.initReady)r.initReady()}if(n["URS-READY"])r.ursReady=1;if(!window.postMessage||!n["URS-READY"]||!r.isInclude&&o.needPrepare){if(n["URS-READY"]&&!o._initReady)o._initReady=!0;if(!n["URS-CM-STATE"])if(!n||!n.fromOutLogin||n.toOpener){if("otherRegSuccess"==n.type){if(r.otherRegSuccess)r.otherRegSuccess(n)}else if("success"==n.type){if(r.logincb)r.logincb(n["username"],n["isOther"],n);if(!this.isInclude){if(r._btn&&r._type)s(r._btn,r._type,r.showIframe.bind(r));r.closeIframe()}}else if("close"==n.type){if(r.closecb)r.closecb();r.closeIframe()}else if("resize"==n.type||"init"==n.type){a.style.width=n.width+"px";a.style.height=n.height+"px";if(!r.isInclude)a.style.marginLeft=-1*n.width/2+"px";if(r.resize)r.resize(n)}else if("register-success"==n.type){if(r.regcb)r.regcb(n["username"],n["url"])}else if("lockLoginState"==n.type){if(r.loginCheckLock)r.loginCheckLock(n.value)}else if("lockRegState"==n.type){if(r.regCheckLock)r.regCheckLock(n.value)}else if("changepage"==n.type){if(r.changepage)r.changepage(n.page)}else if("loginstate"==n.type)if(r.loginstate)r.loginstate(n)}else{try{window.opener.$outLogin(n)}catch(c){}setTimeout(function(){U()},200)}else if(r.statecb)r.statecb(n["URS-CM-STATENAME"],n["URS-CM-STATE"])}else v.call(r)}}};var d=function(){var e="MSG|";var t=function(e,t){var i=b(t,"function")?t:function(e){
return e===t},n=null;for(var r=0,o=e.length-1,a;r<o;r++){a=e[r];if(i(a))n=r}return null!=n?n:-1};var i=function(){var e;var i=function(i,n,r){if(t(e,i.w)<0){e.push(i.w);r.splice(n,1);i.w.name=i.d}};return function(){e=[];if(l&&l.length)for(var t=l.length,n;t--;t>=0){n=l[t];i(n,t,l)}e=null}}();var n=function(){var t=unescape(window.name||"");if(t&&0==t.indexOf(e)){window.name="";var i=t.replace(e,""),n=i.split("|"),r=n.length,o={};for(var a=0;a<r;a++){var s=n[a].split("=");if(!s||!s.length)return;var c=s.shift();if(!c)return;o[decodeURIComponent(c)]=decodeURIComponent(s.join("="))}i=o;var l=(i.origin||"").toLowerCase();if(!l||"*"==l||0==location.href.toLowerCase().indexOf(l))h({data:i.data||"null",origin:y(i.ref||document.referrer)})}};return function(){setInterval(i,100);setInterval(n,20)}}();var p=function(){if(!window.__hasRun){if(window.postMessage)a(window,"message",u);else d();window.__hasRun=1}};return function(n){o.call(this,n);var r=i[this.MGID];if(r.needPrepare||this.isInclude)this.prepareIframe();e[this.MGID]=h.bind(this);t[this.MGID]=this;return p()}}();window.URS.prototype.prepareIframe=function(){if(this.isInclude){g.call(this,this.includeBox,1,{id:this.MGID});w.call(this);this.showIframe()}else{g.call(this,this.box,0,{id:this.MGID});w.call(this)}};window.URS.prototype.showIframe=function(e){var t=i[this.MGID];if(!this.isInclude)if(!t.needPrepare){g.call(this,this.box,0,{id:this.MGID});w.call(this)}else if(!t._initReady)return;e=e||{};if(e.page){if(e.page!=this._urs_options.page&&this._urs_options.single){var n="index_dl.html";if("register"==e.page)n="index_reg.html";this._url_cache=window.PTDOM+"webzj.reg.163.com/v1.0.1/pub/"+n;var r=parseInt(1e3*Math.random());e.pathB=0;if(window.URS._$pathBPercent)if(r<=window.URS._$pathBPercent)e.pathB=1;if(e.pathB)this._url_cache=c(this._url_cache);if(t.__cssStr)this._url_cache+="?"+t.__cssStr+"&MGID="+this.MGID;else this._url_cache+="?MGID="+this.MGID;this._url_cache+="&pkid="+(e.promark||"")+"&product="+(e.product||"")}w.call(this);this._urs_options.page=e.page}if(t.needPrepare&&!this.isInclude)v.call(this);this.box.style.display="block";if(this._urs_options.afterShow)this._urs_options.afterShow.call(this)};window.URS.prototype.closeIframe=function(){var e=i[this.MGID];if(!this.isInclude){this.box.style.display="none";w.call(this);if(!e.needPrepare){if(navigator.userAgent.indexOf("MSIE")>0){var t=document.getElementById("x-URS-iframe"+this.MGID),n=t.contentWindow;if(t){t.src="about:blank";try{n.document.write("");n.document.clear()}catch(r){}}var o=document.getElementById("x-panel"+this.MGID);o.removeChild(t);window.CollectGarbage()}this.box.innerHTML=""}}else;};window.URS.prototype.loginUnlock=function(){var e={fromLoginLock:1,lock:0};_.call(this,this.MGID,e)};window.URS.prototype.loginDolock=function(){var e={fromLoginLock:1,lock:1};_.call(this,this.MGID,e)};window.URS.prototype.regUnlock=function(){var e={fromRegLock:1,lock:0};_.call(this,this.MGID,e)};window.URS.prototype.regDolock=function(){var e={fromRegLock:1,lock:1};_.call(this,this.MGID,e)};window.URS.prototype.doLoginProxy=function(e){var t={username:e.username,pwd:e.pwd,defaultUnLogin:e.defaultUnLogin,doLoginProxy:1};_.call(this,this.MGID,t)};window.URS.setPkidAndPd=function(){var e=function(e){var t;if(e&&e.lgs){t=e.lgs||"0";window.URS._$pathBPercent=parseInt(t)}};var t=function(t){var i=t.pkid||"";var n=t.pd||"";var r;if(void 0===t.mode)r="3";else r=t.mode;if("3"!=r&&"0"!=r){var o="URSJSONP"+(new Date).getTime();window[o]=e;var a="//dl.reg.163.com/getConf?callback="+o+"&pkid="+i+"&pd="+n+"&mode="+r;var s=document.createElement("script");s.type="text/javascript";s.id="urs-script-"+o;s.src=a;document.getElementsByTagName("head")[0].appendChild(s);setTimeout(function(){document.getElementsByTagName("head")[0].removeChild(s)},5e3)}};return function(e){t(e)}}();return window.URS});(function(){function e(t,n){function o(e){if(o[e]!==m)return o[e];var t;if("bug-string-char-index"==e)t="a"!="a"[0];else if("json"==e)t=o("json-stringify")&&o("json-parse");else{var i;if("json-stringify"==e){t=n.stringify;var r="function"==typeof t&&_;if(r){(i=function(){return 1}).toJSON=i;try{r="0"===t(0)&&"0"===t(new a)&&'""'==t(new s)&&t(p)===m&&t(m)===m&&t()===m&&"1"===t(i)&&"[1]"==t([i])&&"[null]"==t([m])&&"null"==t(null)&&"[null,null,null]"==t([m,p,null])&&'{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'==t({a:[i,!0,!1,null,"\0\b\n\f\r\t"]})&&"1"===t(null,i)&&"[\n 1,\n 2\n]"==t([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==t(new l((-864e13)))&&'"+275760-09-13T00:00:00.000Z"'==t(new l(864e13))&&'"-000001-01-01T00:00:00.000Z"'==t(new l((-621987552e5)))&&'"1969-12-31T23:59:59.999Z"'==t(new l((-1)))}catch(c){r=!1}}t=r}if("json-parse"==e){t=n.parse;if("function"==typeof t)try{if(0===t("0")&&!t(!1)){i=t('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');var f=5==i.a.length&&1===i.a[0];if(f){try{f=!t('"\t"')}catch(u){}if(f)try{f=1!==t("01")}catch(h){}if(f)try{f=1!==t("1.")}catch(d){}}}}catch(g){f=!1}t=f}}return o[e]=!!t}t||(t=r.Object());n||(n=r.Object());var a=t.Number||r.Number,s=t.String||r.String,c=t.Object||r.Object,l=t.Date||r.Date,f=t.SyntaxError||r.SyntaxError,u=t.TypeError||r.TypeError,h=t.Math||r.Math,d=t.JSON||r.JSON;"object"==typeof d&&d&&(n.stringify=d.stringify,n.parse=d.parse);var c=c.prototype,p=c.toString,g,w,m,_=new l((-0xc782b5b800cec));try{_=-109252==_.getUTCFullYear()&&0===_.getUTCMonth()&&1===_.getUTCDate()&&10==_.getUTCHours()&&37==_.getUTCMinutes()&&6==_.getUTCSeconds()&&708==_.getUTCMilliseconds()}catch(v){}if(!o("json")){var y=o("bug-string-char-index");if(!_)var b=h.floor,S=[0,31,59,90,120,151,181,212,243,273,304,334],I=function(e,t){return S[t]+365*(e-1970)+b((e-1969+(t=+(1<t)))/4)-b((e-1901+t)/100)+b((e-1601+t)/400)};(g=c.hasOwnProperty)||(g=function(e){var t={},i;(t.__proto__=null,t.__proto__={toString:1},t).toString!=p?g=function(e){var t=this.__proto__;e=e in(this.__proto__=null,this);this.__proto__=t;return e}:(i=t.constructor,g=function(e){var t=(this.constructor||i).prototype;return e in this&&!(e in t&&this[e]===t[e])});t=null;return g.call(this,e)});w=function(e,t){var n=0,r,o,a;(r=function(){this.valueOf=0}).prototype.valueOf=0;o=new r;for(a in o)g.call(o,a)&&n++;r=o=null;n?w=2==n?function(e,t){var i={},n="[object Function]"==p.call(e),r;for(r in e)n&&"prototype"==r||g.call(i,r)||!(i[r]=1)||!g.call(e,r)||t(r)}:function(e,t){var i="[object Function]"==p.call(e),n,r;for(n in e)i&&"prototype"==n||!g.call(e,n)||(r="constructor"===n)||t(n);(r||g.call(e,n="constructor"))&&t(n)}:(o="valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "),w=function(e,t){var n="[object Function]"==p.call(e),r,a=!n&&"function"!=typeof e.constructor&&i[typeof e.hasOwnProperty]&&e.hasOwnProperty||g;for(r in e)n&&"prototype"==r||!a.call(e,r)||t(r);for(n=o.length;r=o[--n];a.call(e,r)&&t(r));});return w(e,t)};if(!o("json-stringify")){var U={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},C=function(e,t){return("000000"+(t||0)).slice(-e)},M=function(e){for(var t='"',i=0,n=e.length,r=!y||10<n,o=r&&(y?e.split(""):e);i<n;i++){var a=e.charCodeAt(i);switch(a){case 8:case 9:case 10:case 12:case 13:case 34:case 92:t+=U[a];break;default:if(32>a){t+="\\u00"+C(2,a.toString(16));break}t+=r?o[i]:e.charAt(i)}}return t+'"'},k=function(e,t,i,n,r,o,a){var s,c,l,f,h,d,_,v,y;try{s=t[e]}catch(S){}if("object"==typeof s&&s)if(c=p.call(s),"[object Date]"!=c||g.call(s,"toJSON"))"function"==typeof s.toJSON&&("[object Number]"!=c&&"[object String]"!=c&&"[object Array]"!=c||g.call(s,"toJSON"))&&(s=s.toJSON(e));else if(s>-1/0&&s<1/0){if(I){f=b(s/864e5);for(c=b(f/365.2425)+1970-1;I(c+1,0)<=f;c++);for(l=b((f-I(c,0))/30.42);I(c,l+1)<=f;l++);f=1+f-I(c,l);h=(s%864e5+864e5)%864e5;d=b(h/36e5)%24;_=b(h/6e4)%60;v=b(h/1e3)%60;h%=1e3}else c=s.getUTCFullYear(),l=s.getUTCMonth(),f=s.getUTCDate(),d=s.getUTCHours(),_=s.getUTCMinutes(),v=s.getUTCSeconds(),h=s.getUTCMilliseconds();s=(0>=c||1e4<=c?(0>c?"-":"+")+C(6,0>c?-c:c):C(4,c))+"-"+C(2,l+1)+"-"+C(2,f)+"T"+C(2,d)+":"+C(2,_)+":"+C(2,v)+"."+C(3,h)+"Z"}else s=null;i&&(s=i.call(t,e,s));if(null===s)return"null";c=p.call(s);if("[object Boolean]"==c)return""+s;if("[object Number]"==c)return s>-1/0&&s<1/0?""+s:"null";if("[object String]"==c)return M(""+s);if("object"==typeof s){for(e=a.length;e--;)if(a[e]===s)throw u();a.push(s);y=[];t=o;o+=r;if("[object Array]"==c){l=0;for(e=s.length;l<e;l++)c=k(l,s,i,n,r,o,a),y.push(c===m?"null":c);e=y.length?r?"[\n"+o+y.join(",\n"+o)+"\n"+t+"]":"["+y.join(",")+"]":"[]"}else w(n||s,function(e){var t=k(e,s,i,n,r,o,a);t!==m&&y.push(M(e)+":"+(r?" ":"")+t)}),e=y.length?r?"{\n"+o+y.join(",\n"+o)+"\n"+t+"}":"{"+y.join(",")+"}":"{}";a.pop();return e}};n.stringify=function(e,t,n){var r,o,a,s;if(i[typeof t]&&t)if("[object Function]"==(s=p.call(t)))o=t;else if("[object Array]"==s){a={};for(var c=0,l=t.length,f;c<l;f=t[c++],(s=p.call(f),"[object String]"==s||"[object Number]"==s)&&(a[f]=1));}if(n)if("[object Number]"==(s=p.call(n))){if(0<(n-=n%1))for(r="",10<n&&(n=10);r.length<n;r+=" ");}else"[object String]"==s&&(r=10>=n.length?n:n.slice(0,10));return k("",(f={},f[""]=e,f),o,a,r,"",[])}}if(!o("json-parse")){var x=s.fromCharCode,D={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},T,R,j=function(){T=R=null;throw f()},O=function(){for(var e=R,t=e.length,i,n,r,o,a;T<t;)switch(a=e.charCodeAt(T),a){case 9:case 10:case 13:case 32:T++;break;case 123:case 125:case 91:case 93:case 58:case 44:return i=y?e.charAt(T):e[T],T++,i;case 34:i="@";for(T++;T<t;)if(a=e.charCodeAt(T),32>a)j();else if(92==a)switch(a=e.charCodeAt(++T),a){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:i+=D[a];T++;break;case 117:n=++T;for(r=T+4;T<r;T++)a=e.charCodeAt(T),48<=a&&57>=a||97<=a&&102>=a||65<=a&&70>=a||j();i+=x("0x"+e.slice(n,T));break;default:j()}else{if(34==a)break;a=e.charCodeAt(T);for(n=T;32<=a&&92!=a&&34!=a;)a=e.charCodeAt(++T);i+=e.slice(n,T)}if(34==e.charCodeAt(T))return T++,i;j();default:n=T;45==a&&(o=!0,
a=e.charCodeAt(++T));if(48<=a&&57>=a){for(48==a&&(a=e.charCodeAt(T+1),48<=a&&57>=a)&&j();T<t&&(a=e.charCodeAt(T),48<=a&&57>=a);T++);if(46==e.charCodeAt(T)){for(r=++T;r<t&&(a=e.charCodeAt(r),48<=a&&57>=a);r++);r==T&&j();T=r}a=e.charCodeAt(T);if(101==a||69==a){a=e.charCodeAt(++T);43!=a&&45!=a||T++;for(r=T;r<t&&(a=e.charCodeAt(r),48<=a&&57>=a);r++);r==T&&j();T=r}return+e.slice(n,T)}o&&j();if("true"==e.slice(T,T+4))return T+=4,!0;if("false"==e.slice(T,T+5))return T+=5,!1;if("null"==e.slice(T,T+4))return T+=4,null;j()}return"$"},B=function(e){var t,i;"$"==e&&j();if("string"==typeof e){if("@"==(y?e.charAt(0):e[0]))return e.slice(1);if("["==e){for(t=[];;i||(i=!0)){e=O();if("]"==e)break;i&&(","==e?(e=O(),"]"==e&&j()):j());","==e&&j();t.push(B(e))}return t}if("{"==e){for(t={};;i||(i=!0)){e=O();if("}"==e)break;i&&(","==e?(e=O(),"}"==e&&j()):j());","!=e&&"string"==typeof e&&"@"==(y?e.charAt(0):e[0])&&":"==O()||j();t[e.slice(1)]=B(O())}return t}j()}return e},A=function(e,t,i){i=E(e,t,i);i===m?delete e[t]:e[t]=i},E=function(e,t,i){var n=e[t],r;if("object"==typeof n&&n)if("[object Array]"==p.call(n))for(r=n.length;r--;)A(n,r,i);else w(n,function(e){A(n,e,i)});return i.call(e,t,n)};n.parse=function(e,t){var i,n;T=0;R=""+e;i=B(O());"$"!=O()&&j();T=R=null;return t&&"[object Function]"==p.call(t)?E((n={},n[""]=i,n),"",t):i}}}n.runInContext=e;return n}var t="function"==typeof define&&define.amd,i={"function":!0,object:!0},n=i[typeof exports]&&exports&&!exports.nodeType&&exports,r=i[typeof window]&&window||this,o=n&&i[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;!o||o.global!==o&&o.window!==o&&o.self!==o||(r=o);if(n&&!t)e(r,n);else{var a=r.JSON,s=r.JSON3,c=!1,l=e(r,r.JSON3={noConflict:function(){c||(c=!0,r.JSON=a,r.JSON3=s,a=s=null);return l}});r.JSON={parse:l.parse,stringify:l.stringify}}t&&define("URS-JSON3",function(){return l})}).call(this);