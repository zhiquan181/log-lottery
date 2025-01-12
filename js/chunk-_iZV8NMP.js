var e="top",t="bottom",n="right",r="left",o="auto",i=[e,t,n,r],a="start",s="end",f="viewport",c="popper",p=i.reduce((function(e,t){return e.concat([t+"-"+a,t+"-"+s])}),[]),u=[].concat(i,[o]).reduce((function(e,t){return e.concat([t,t+"-"+a,t+"-"+s])}),[]),l=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function d(e){return e?(e.nodeName||"").toLowerCase():null}function h(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function m(e){return e instanceof h(e).Element||e instanceof Element}function v(e){return e instanceof h(e).HTMLElement||e instanceof HTMLElement}function g(e){return"undefined"!=typeof ShadowRoot&&(e instanceof h(e).ShadowRoot||e instanceof ShadowRoot)}const y={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];v(o)&&d(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});v(r)&&d(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};function b(e){return e.split("-")[0]}var x=Math.max,w=Math.min,O=Math.round;function j(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function E(){return!/^((?!chrome|android).)*safari/i.test(j())}function D(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&v(e)&&(o=e.offsetWidth>0&&O(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&O(r.height)/e.offsetHeight||1);var a=(m(e)?h(e):window).visualViewport,s=!E()&&n,f=(r.left+(s&&a?a.offsetLeft:0))/o,c=(r.top+(s&&a?a.offsetTop:0))/i,p=r.width/o,u=r.height/i;return{width:p,height:u,top:c,right:f+p,bottom:c+u,left:f,x:f,y:c}}function A(e){var t=D(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function k(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&g(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function L(e){return h(e).getComputedStyle(e)}function W(e){return["table","td","th"].indexOf(d(e))>=0}function M(e){return((m(e)?e.ownerDocument:e.document)||window.document).documentElement}function P(e){return"html"===d(e)?e:e.assignedSlot||e.parentNode||(g(e)?e.host:null)||M(e)}function B(e){return v(e)&&"fixed"!==L(e).position?e.offsetParent:null}function H(e){for(var t=h(e),n=B(e);n&&W(n)&&"static"===L(n).position;)n=B(n);return n&&("html"===d(n)||"body"===d(n)&&"static"===L(n).position)?t:n||function(e){var t=/firefox/i.test(j());if(/Trident/i.test(j())&&v(e)&&"fixed"===L(e).position)return null;var n=P(e);for(g(n)&&(n=n.host);v(n)&&["html","body"].indexOf(d(n))<0;){var r=L(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function R(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function T(e,t,n){return x(e,w(t,n))}function S(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function V(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function q(e){return e.split("-")[1]}var C={top:"auto",right:"auto",bottom:"auto",left:"auto"};function N(o){var i,a=o.popper,f=o.popperRect,c=o.placement,p=o.variation,u=o.offsets,l=o.position,d=o.gpuAcceleration,m=o.adaptive,v=o.roundOffsets,g=o.isFixed,y=u.x,b=void 0===y?0:y,x=u.y,w=void 0===x?0:x,j="function"==typeof v?v({x:b,y:w}):{x:b,y:w};b=j.x,w=j.y;var E=u.hasOwnProperty("x"),D=u.hasOwnProperty("y"),A=r,k=e,W=window;if(m){var P=H(a),B="clientHeight",R="clientWidth";if(P===h(a)&&"static"!==L(P=M(a)).position&&"absolute"===l&&(B="scrollHeight",R="scrollWidth"),c===e||(c===r||c===n)&&p===s)k=t,w-=(g&&P===W&&W.visualViewport?W.visualViewport.height:P[B])-f.height,w*=d?1:-1;if(c===r||(c===e||c===t)&&p===s)A=n,b-=(g&&P===W&&W.visualViewport?W.visualViewport.width:P[R])-f.width,b*=d?1:-1}var T,S=Object.assign({position:l},m&&C),V=!0===v?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:O(n*o)/o||0,y:O(r*o)/o||0}}({x:b,y:w},h(a)):{x:b,y:w};return b=V.x,w=V.y,d?Object.assign({},S,((T={})[k]=D?"0":"",T[A]=E?"0":"",T.transform=(W.devicePixelRatio||1)<=1?"translate("+b+"px, "+w+"px)":"translate3d("+b+"px, "+w+"px, 0)",T)):Object.assign({},S,((i={})[k]=D?w+"px":"",i[A]=E?b+"px":"",i.transform="",i))}var I={passive:!0};var F={left:"right",right:"left",bottom:"top",top:"bottom"};function U(e){return e.replace(/left|right|bottom|top/g,(function(e){return F[e]}))}var z={start:"end",end:"start"};function _(e){return e.replace(/start|end/g,(function(e){return z[e]}))}function X(e){var t=h(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Y(e){return D(M(e)).left+X(e).scrollLeft}function G(e){var t=L(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function J(e){return["html","body","#document"].indexOf(d(e))>=0?e.ownerDocument.body:v(e)&&G(e)?e:J(P(e))}function K(e,t){var n;void 0===t&&(t=[]);var r=J(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=h(r),a=o?[i].concat(i.visualViewport||[],G(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(K(P(a)))}function Q(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Z(e,t,n){return t===f?Q(function(e,t){var n=h(e),r=M(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,f=0;if(o){i=o.width,a=o.height;var c=E();(c||!c&&"fixed"===t)&&(s=o.offsetLeft,f=o.offsetTop)}return{width:i,height:a,x:s+Y(e),y:f}}(e,n)):m(t)?function(e,t){var n=D(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):Q(function(e){var t,n=M(e),r=X(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=x(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=x(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+Y(e),f=-r.scrollTop;return"rtl"===L(o||n).direction&&(s+=x(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(M(e)))}function $(e,t,n,r){var o="clippingParents"===t?function(e){var t=K(P(e)),n=["absolute","fixed"].indexOf(L(e).position)>=0&&v(e)?H(e):e;return m(n)?t.filter((function(e){return m(e)&&k(e,n)&&"body"!==d(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=Z(e,n,r);return t.top=x(o.top,t.top),t.right=w(o.right,t.right),t.bottom=w(o.bottom,t.bottom),t.left=x(o.left,t.left),t}),Z(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ee(o){var i,f=o.reference,c=o.element,p=o.placement,u=p?b(p):null,l=p?q(p):null,d=f.x+f.width/2-c.width/2,h=f.y+f.height/2-c.height/2;switch(u){case e:i={x:d,y:f.y-c.height};break;case t:i={x:d,y:f.y+f.height};break;case n:i={x:f.x+f.width,y:h};break;case r:i={x:f.x-c.width,y:h};break;default:i={x:f.x,y:f.y}}var m=u?R(u):null;if(null!=m){var v="y"===m?"height":"width";switch(l){case a:i[m]=i[m]-(f[v]/2-c[v]/2);break;case s:i[m]=i[m]+(f[v]/2-c[v]/2)}}return i}function te(r,o){void 0===o&&(o={});var a=o,s=a.placement,p=void 0===s?r.placement:s,u=a.strategy,l=void 0===u?r.strategy:u,d=a.boundary,h=void 0===d?"clippingParents":d,v=a.rootBoundary,g=void 0===v?f:v,y=a.elementContext,b=void 0===y?c:y,x=a.altBoundary,w=void 0!==x&&x,O=a.padding,j=void 0===O?0:O,E=S("number"!=typeof j?j:V(j,i)),A=b===c?"reference":c,k=r.rects.popper,L=r.elements[w?A:b],W=$(m(L)?L:L.contextElement||M(r.elements.popper),h,g,l),P=D(r.elements.reference),B=ee({reference:P,element:k,strategy:"absolute",placement:p}),H=Q(Object.assign({},k,B)),R=b===c?H:P,T={top:W.top-R.top+E.top,bottom:R.bottom-W.bottom+E.bottom,left:W.left-R.left+E.left,right:R.right-W.right+E.right},q=r.modifiersData.offset;if(b===c&&q){var C=q[p];Object.keys(T).forEach((function(r){var o=[n,t].indexOf(r)>=0?1:-1,i=[e,t].indexOf(r)>=0?"y":"x";T[r]+=C[i]*o}))}return T}function ne(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function re(o){return[e,n,t,r].some((function(e){return o[e]>=0}))}function oe(e,t,n){void 0===n&&(n=!1);var r,o,i=v(t),a=v(t)&&function(e){var t=e.getBoundingClientRect(),n=O(t.width)/e.offsetWidth||1,r=O(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),s=M(t),f=D(e,a,n),c={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(i||!i&&!n)&&(("body"!==d(t)||G(s))&&(c=(r=t)!==h(r)&&v(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:X(r)),v(t)?((p=D(t,!0)).x+=t.clientLeft,p.y+=t.clientTop):s&&(p.x=Y(s))),{x:f.left+c.scrollLeft-p.x,y:f.top+c.scrollTop-p.y,width:f.width,height:f.height}}function ie(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var ae={placement:"bottom",modifiers:[],strategy:"absolute"};function se(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function fe(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?ae:o;return function(e,t,n){void 0===n&&(n=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},ae,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],c=!1,p={state:s,setOptions:function(n){var o="function"==typeof n?n(s.options):n;u(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:m(e)?K(e):e.contextElement?K(e.contextElement):[],popper:K(t)};var a,c,d=function(e){var t=ie(e);return l.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((a=[].concat(r,s.options.modifiers),c=a.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(c).map((function(e){return c[e]}))));return s.orderedModifiers=d.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:p,options:r}),a=function(){};f.push(i||a)}})),p.update()},forceUpdate:function(){if(!c){var e=s.elements,t=e.reference,n=e.popper;if(se(t,n)){s.rects={reference:oe(t,H(n),"fixed"===s.options.strategy),popper:A(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options,f=void 0===a?{}:a,u=o.name;"function"==typeof i&&(s=i({state:s,options:f,name:u,instance:p})||s)}else s.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){p.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){u(),c=!0}};if(!se(e,t))return p;function u(){f.forEach((function(e){return e()})),f=[]}return p.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),p}}var ce=fe({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=h(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,I)})),s&&f.addEventListener("resize",n.update,I),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,I)})),s&&f.removeEventListener("resize",n.update,I)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ee({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:b(t.placement),variation:q(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,N(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,N(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},y,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var o=t.state,i=t.options,a=t.name,s=i.offset,f=void 0===s?[0,0]:s,c=u.reduce((function(t,i){return t[i]=function(t,o,i){var a=b(t),s=[r,e].indexOf(a)>=0?-1:1,f="function"==typeof i?i(Object.assign({},o,{placement:t})):i,c=f[0],p=f[1];return c=c||0,p=(p||0)*s,[r,n].indexOf(a)>=0?{x:p,y:c}:{x:c,y:p}}(i,o.rects,f),t}),{}),p=c[o.placement],l=p.x,d=p.y;null!=o.modifiersData.popperOffsets&&(o.modifiersData.popperOffsets.x+=l,o.modifiersData.popperOffsets.y+=d),o.modifiersData[a]=c}},{name:"flip",enabled:!0,phase:"main",fn:function(s){var f=s.state,c=s.options,l=s.name;if(!f.modifiersData[l]._skip){for(var d=c.mainAxis,h=void 0===d||d,m=c.altAxis,v=void 0===m||m,g=c.fallbackPlacements,y=c.padding,x=c.boundary,w=c.rootBoundary,O=c.altBoundary,j=c.flipVariations,E=void 0===j||j,D=c.allowedAutoPlacements,A=f.options.placement,k=b(A),L=g||(k===A||!E?[U(A)]:function(e){if(b(e)===o)return[];var t=U(e);return[_(e),t,_(t)]}(A)),W=[A].concat(L).reduce((function(e,t){return e.concat(b(t)===o?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,a=n.rootBoundary,s=n.padding,f=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?u:c,d=q(r),h=d?f?p:p.filter((function(e){return q(e)===d})):i,m=h.filter((function(e){return l.indexOf(e)>=0}));0===m.length&&(m=h);var v=m.reduce((function(t,n){return t[n]=te(e,{placement:n,boundary:o,rootBoundary:a,padding:s})[b(n)],t}),{});return Object.keys(v).sort((function(e,t){return v[e]-v[t]}))}(f,{placement:t,boundary:x,rootBoundary:w,padding:y,flipVariations:E,allowedAutoPlacements:D}):t)}),[]),M=f.rects.reference,P=f.rects.popper,B=new Map,H=!0,R=W[0],T=0;T<W.length;T++){var S=W[T],V=b(S),C=q(S)===a,N=[e,t].indexOf(V)>=0,I=N?"width":"height",F=te(f,{placement:S,boundary:x,rootBoundary:w,altBoundary:O,padding:y}),z=N?C?n:r:C?t:e;M[I]>P[I]&&(z=U(z));var X=U(z),Y=[];if(h&&Y.push(F[V]<=0),v&&Y.push(F[z]<=0,F[X]<=0),Y.every((function(e){return e}))){R=S,H=!1;break}B.set(S,Y)}if(H)for(var G=function(e){var t=W.find((function(t){var n=B.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return R=t,"break"},J=E?3:1;J>0;J--){if("break"===G(J))break}f.placement!==R&&(f.modifiersData[l]._skip=!0,f.placement=R,f.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(o){var i=o.state,s=o.options,f=o.name,c=s.mainAxis,p=void 0===c||c,u=s.altAxis,l=void 0!==u&&u,d=s.boundary,h=s.rootBoundary,m=s.altBoundary,v=s.padding,g=s.tether,y=void 0===g||g,O=s.tetherOffset,j=void 0===O?0:O,E=te(i,{boundary:d,rootBoundary:h,padding:v,altBoundary:m}),D=b(i.placement),k=q(i.placement),L=!k,W=R(D),M="x"===W?"y":"x",P=i.modifiersData.popperOffsets,B=i.rects.reference,S=i.rects.popper,V="function"==typeof j?j(Object.assign({},i.rects,{placement:i.placement})):j,C="number"==typeof V?{mainAxis:V,altAxis:V}:Object.assign({mainAxis:0,altAxis:0},V),N=i.modifiersData.offset?i.modifiersData.offset[i.placement]:null,I={x:0,y:0};if(P){if(p){var F,U="y"===W?e:r,z="y"===W?t:n,_="y"===W?"height":"width",X=P[W],Y=X+E[U],G=X-E[z],J=y?-S[_]/2:0,K=k===a?B[_]:S[_],Q=k===a?-S[_]:-B[_],Z=i.elements.arrow,$=y&&Z?A(Z):{width:0,height:0},ee=i.modifiersData["arrow#persistent"]?i.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ne=ee[U],re=ee[z],oe=T(0,B[_],$[_]),ie=L?B[_]/2-J-oe-ne-C.mainAxis:K-oe-ne-C.mainAxis,ae=L?-B[_]/2+J+oe+re+C.mainAxis:Q+oe+re+C.mainAxis,se=i.elements.arrow&&H(i.elements.arrow),fe=se?"y"===W?se.clientTop||0:se.clientLeft||0:0,ce=null!=(F=null==N?void 0:N[W])?F:0,pe=X+ae-ce,ue=T(y?w(Y,X+ie-ce-fe):Y,X,y?x(G,pe):G);P[W]=ue,I[W]=ue-X}if(l){var le,de="x"===W?e:r,he="x"===W?t:n,me=P[M],ve="y"===M?"height":"width",ge=me+E[de],ye=me-E[he],be=-1!==[e,r].indexOf(D),xe=null!=(le=null==N?void 0:N[M])?le:0,we=be?ge:me-B[ve]-S[ve]-xe+C.altAxis,Oe=be?me+B[ve]+S[ve]-xe-C.altAxis:ye,je=y&&be?(De=T(we,me,Ee=Oe))>Ee?Ee:De:T(y?we:ge,me,y?Oe:ye);P[M]=je,I[M]=je-me}var Ee,De;i.modifiersData[f]=I}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(o){var a,s=o.state,f=o.name,c=o.options,p=s.elements.arrow,u=s.modifiersData.popperOffsets,l=b(s.placement),d=R(l),h=[r,n].indexOf(l)>=0?"height":"width";if(p&&u){var m=function(e,t){return S("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:V(e,i))}(c.padding,s),v=A(p),g="y"===d?e:r,y="y"===d?t:n,x=s.rects.reference[h]+s.rects.reference[d]-u[d]-s.rects.popper[h],w=u[d]-s.rects.reference[d],O=H(p),j=O?"y"===d?O.clientHeight||0:O.clientWidth||0:0,E=x/2-w/2,D=m[g],k=j-v[h]-m[y],L=j/2-v[h]/2+E,W=T(D,L,k),M=d;s.modifiersData[f]=((a={})[M]=W,a.centerOffset=W-L,a)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&k(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=te(t,{elementContext:"reference"}),s=te(t,{altBoundary:!0}),f=ne(a,r),c=ne(s,o,i),p=re(f),u=re(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}}]});export{ce as c};
