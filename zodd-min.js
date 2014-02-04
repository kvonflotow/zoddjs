/*
 yepnope1.5.x|WTFPL
 zoddjs v0.0.4 - a tiny loading bar for modernizr/yepnope
 copyright 2014 kevin von flotow - vonflow@gmail.com
 https://github.com/kvonflotow/zoddjs
 MIT license
*/
(function(b,n,x){function t(c){return"[object Function]"==d.call(c)}function v(c){return"string"==typeof c}function w(){}function s(c){return!c||"loaded"==c||"complete"==c||"uninitialized"==c}function l(){var c=u.shift();z=1;c?c.t?g(function(){("c"==c.t?r.injectCss:r.injectJs)(c.s,0,c.a,c.x,c.e,1)},0):(c(),l()):z=0}function A(c,a,f,m,d,b,h){function y(e){if(!D&&s(p.readyState)&&(E.r=D=1,!z&&l(),p.onload=p.onreadystatechange=null,e)){"img"!=c&&g(function(){F.removeChild(p)},50);for(var y in q[a])q[a].hasOwnProperty(y)&&
q[a][y].onload()}}h=h||r.errorTimeout;var p=n.createElement(c),D=0,B=0,E={t:f,s:a,e:d,a:b,x:h};1===q[a]&&(B=1,q[a]=[]);"object"==c?p.data=a:(p.src=a,p.type=c);p.width=p.height="0";p.onerror=p.onload=p.onreadystatechange=function(){y.call(this,B)};u.splice(m,0,E);"img"!=c&&(B||2===q[a]?(F.insertBefore(p,G?null:k),g(y,h)):q[a].push(p))}function a(c,a,k,g,f){return z=0,a=a||"j",v(c)?A("c"==a?M:H,c,a,this.i++,k,g,f):(u.splice(this.i++,0,c),1==u.length&&l()),this}function f(){var c=r;return c.loader={load:a,
i:0},c}var m=n.documentElement,g=b.setTimeout,k=n.getElementsByTagName("script")[0],d={}.toString,u=[],z=0,I="MozAppearance"in m.style,G=I&&!!n.createRange().compareNode,F=G?m:k.parentNode,m=b.opera&&"[object Opera]"==d.call(b.opera),m=!!n.attachEvent&&!m,H=I?"object":m?"script":"img",M=m?"script":H,J=Array.isArray||function(c){return"[object Array]"==d.call(c)},C=[],q={},K={timeout:function(c,a){return a.length&&(c.timeout=a[0]),c}},L,r;r=function(a){function k(a){a=a.split("!");var c=C.length,g=
a.pop(),b=a.length,g={url:g,origUrl:g,prefixes:a},d,e,f;for(e=0;e<b;e++)f=a[e].split("="),(d=K[f.shift()])&&(g=d(g,f));for(e=0;e<c;e++)g=C[e](g);return g}function g(a,c,d,b,m){var e=k(a),h=e.autoCallback;e.url.split(".").pop().split("?").shift();e.bypass||(c&&(c=t(c)?c:c[a]||c[b]||c[a.split("/").pop().split("?")[0]]),e.instead?e.instead(a,c,d,b,m):(q[e.url]?e.noexec=!0:q[e.url]=1,d.load(e.url,e.forceCSS||!e.forceJS&&"css"==e.url.split(".").pop().split("?").shift()?"c":x,e.noexec,e.attrs,e.timeout),
(t(c)||t(h))&&d.load(function(){f();c&&c(e.origUrl,m,b);h&&h(e.origUrl,m,b);q[e.url]=2})))}function m(a,c){function b(a,f){if(a)if(v(a))f||(e=function(){var a=[].slice.call(arguments);k.apply(this,a);h()}),g(a,e,c,0,d);else{if(Object(a)===a)for(l in n=function(){var c=0,g;for(g in a)a.hasOwnProperty(g)&&c++;return c}(),a)a.hasOwnProperty(l)&&(!f&&!--n&&(t(e)?e=function(){var a=[].slice.call(arguments);k.apply(this,a);h()}:e[l]=function(a){return function(){var c=[].slice.call(arguments);a&&a.apply(this,
c);h()}}(k[l])),g(a[l],e,c,l,d))}else!f&&h()}var d=!!a.test,f=a.load||a.both,e=a.callback||w,k=e,h=a.complete||w,n,l;b(d?a.yep:a.nope,!!f);f&&b(f)}var d,b,h=this.yepnope.loader;if(v(a))g(a,0,h,0);else if(J(a))for(d=0;d<a.length;d++)b=a[d],v(b)?g(b,0,h,0):J(b)?r(b):Object(b)===b&&m(b,h);else Object(a)===a&&m(a,h)};r.addPrefix=function(a,g){K[a]=g};r.addFilter=function(a){C.push(a)};r.errorTimeout=1E4;null==n.readyState&&n.addEventListener&&(n.readyState="loading",n.addEventListener("DOMContentLoaded",
L=function(){n.removeEventListener("DOMContentLoaded",L,0);n.readyState="complete"},0));b.yepnope=f();b.yepnope.executeStack=l;b.yepnope.injectJs=function(a,f,d,b,m,u){var h=n.createElement("script"),q,p;b=b||r.errorTimeout;h.src=a;for(p in d)h.setAttribute(p,d[p]);f=u?l:f||w;h.onreadystatechange=h.onload=function(){!q&&s(h.readyState)&&(q=1,f(),h.onload=h.onreadystatechange=null)};g(function(){q||(q=1,f(1))},b);m?h.onload():k.parentNode.insertBefore(h,k)};b.yepnope.injectCss=function(a,f,b,d,m,u){d=
n.createElement("link");var h;f=u?l:f||w;d.href=a;d.rel="stylesheet";d.type="text/css";for(h in b)d.setAttribute(h,b[h]);m||(k.parentNode.insertBefore(d,k),g(f,0))}})(this,document);
(function(b,n){function x(a){return"string"===typeof a||a instanceof String}function t(){var a=arguments;1===a.length&&A(a[0])&&(a=a[0]);var f=a[0]||[];if(2<=a.length)for(var b=1,g=a.length;b<g;b+=1)if("undefined"!==typeof a[b])for(var k in a[b])"undefined"!==typeof k&&(f[k]=a[b][k]);return f}function v(a,b){this.arr=a||[];this.opts=b||{};this.loaderModal=s.createElement("div");this.loadingBar=s.createElement("div");this.loaded=this.loadPercent=0;this.count=this.arr.length;this.noTarget=!1;this.setDefaultOpts();
this.init()}var w=b.yepnope?b.yepnope:b.Modernizr&&b.Modernizr.load?b.Modernizr.load:n;if(!w)return console.error("zodd: modernizr or yepnope is required");var s=b.document,l=function(){var a=s.createElement("div"),b=a.style,m=function(a,b){if(a!==Object(a)||"[object Array]"===Object.prototype.toString.call(a))return console.log("invalid css input");for(var d in a)b(d,a[d])};a.remove&&a.remove();return b.setProperty?function(a,b){m(b,function(b,f){a.style.setProperty(b,f)})}:b.setAttribute?function(a,
b){m(b,function(b,f){a.style.setAttribute(b,f)})}:function(a,b){m(b,function(b,f){a.style[b]=f})}}(),A=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)};v.prototype={setDefaultOpts:function(){this.opts.scrollDuration="undefined"!==typeof this.opts.scrollDuration?this.opts.scrollDuration:0.33;if(this.opts.targetElementById&&x(this.opts.targetElementById))this.opts.targetElement=document.getElementById(this.opts.targetElementById);else{var a=this.opts,b;(b=this.opts.targetElement)||
(b=s.getElementsByTagName("body"),this.noTarget=!0,b=0!==b.length?b[0]:n);a.targetElement=b}this.opts.css=this.opts.css||{};this.opts.css.modal=t({"background-color":"rgb( 233, 233, 233 )",position:this.noTarget?"fixed":"absolute","z-index":"100000",top:"0",bottom:"0",left:"0",right:"0",opacity:"1","-webkit-transition":"opacity 0.5s","-moz-transition":"opacity 0.5s","-o-transition":"opacity 0.5s",transition:"opacity 0.5s"},this.opts.css.modal||{});this.opts.css.loadingBarWrapper=t({position:"absolute",
top:"50%",left:"0",right:"0",width:"80%",height:"5px",margin:"auto","border-radius":"2px"},this.opts.css.loadingBarWrapper||{});this.opts.css.loadingBar=t({"background-color":"rgb( 69, 154, 188 )",width:"0%",height:"100%","border-radius":"2px","-webkit-transition":"width "+this.opts.scrollDuration+"s","-moz-transition":"width "+this.opts.scrollDuration+"s","-o-transition":"width "+this.opts.scrollDuration+"s",transition:"width "+this.opts.scrollDuration+"s"},this.opts.css.loadingBar||{})},init:function(){var a=
s.createElement("div");x(this.arr)?(this.count=1,this.arr=[{load:this.arr}]):A(this.arr)?this.count=this.arr.length:(this.count=1,this.arr=[this.arr]);l(this.loaderModal,this.opts.css.modal);l(a,this.opts.css.loadingBarWrapper);this.loadingBar=s.createElement("div");l(this.loadingBar,this.opts.css.loadingBar);a.appendChild(this.loadingBar);this.loaderModal.appendChild(a);this.noTarget||this.opts.targetElement.style.position||l(this.opts.targetElement,{position:"relative"});this.opts.targetElement.appendChild(this.loaderModal);
var b=this;w(function(){for(var a=[],g=0;g<b.count;g+=1){var k=b.arr[g],d={};if(x(k))d={load:k};else for(var l in k)d[l]=k[l];k=d.hasOwnProperty("complete")?d.complete:n;d.complete=function(a){return function(){b.addOneToLoaded.call(b);a&&a()}}(k);a.push(d)}return a}())},addOneToLoaded:function(){this.loadPercent=100*(this.loaded+=1/this.count)+0.5|0;l(this.loadingBar,{width:this.loadPercent+"%"});if(100===this.loadPercent){this.opts.targetElement.setAttribute("data-loader-loaded",!0);var a=this;
l(a.loaderModal,{opacity:"0"});setTimeout(function(){l(a.loaderModal,{display:"none"});a.loaderModal.remove&&a.loaderModal.remove()},500)}}};b.zodd=v})(window,void 0);
