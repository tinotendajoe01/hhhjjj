(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9136],{765:function(e,n,t){"use strict";t.d(n,{M:function(){return c}});var r=t(67294),o=t(96637),u=!1,i=0,a=function(){return++i};function c(e){var n=e||(u?a():null),t=(0,r.useState)(n),i=t[0],c=t[1];return(0,o.L)((function(){null===i&&c(a())}),[]),(0,r.useEffect)((function(){!1===u&&(u=!0)}),[]),null!=i?String(i):void 0}},28274:function(e,n,t){"use strict";t.d(n,{w_:function(){return p},nm:function(){return f},Yf:function(){return l},Dv:function(){return h},Ak:function(){return v},f5:function(){return s}});var r=t(67294),o=t(12459),u=t(96637),i=t(45558),a=t(69695);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var d=["element","index"];function f(e,n){void 0===n&&(n={});return(0,i.o)(e,c({descendants:[],registerDescendant:a.Z,unregisterDescendant:a.Z},n))}function l(e,n,t){var i=(0,o.N)(),a=(0,r.useContext)(n),d=a.registerDescendant,f=a.unregisterDescendant,l=a.descendants,s=null!=t?t:l.findIndex((function(n){return n.element===e.element}));return(0,u.L)((function(){return e.element||i(),d(c({},e,{index:s})),function(){f(e.element)}}),[e,i,s,d,f].concat(Object.values(e))),s}function s(){return(0,r.useState)([])}function v(e){return(0,r.useContext)(e).descendants}function p(e){var n=e.context,t=e.children,o=e.items,u=e.set,i=(0,r.useCallback)((function(e){var n=e.element,t=e.index,r=function(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,d);n&&u((function(e){var o;if(null!=t)return[].concat(e,[c({},r,{element:n,index:t})]).sort((function(e,n){return e.index-n.index}));if(0===e.length)o=[c({},r,{element:n,index:0})];else if(e.find((function(e){return e.element===n})))o=e;else{var u=e.findIndex((function(e){return!(!e.element||!n)&&Boolean(e.element.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING)})),i=c({},r,{element:n,index:u});o=-1===u?[].concat(e,[i]):[].concat(e.slice(0,u),[i],e.slice(u))}return o.map((function(e,n){return c({},e,{index:n})}))}))}),[]),a=(0,r.useCallback)((function(e){e&&u((function(n){return n.filter((function(n){return e!==n.element}))}))}),[]);return(0,r.createElement)(n.Provider,{value:(0,r.useMemo)((function(){return{descendants:o,registerDescendant:i,unregisterDescendant:a}}),[o,i,a])},t)}function h(e,n){var t=(0,r.useContext)(e).descendants,o=n.callback,u=n.currentIndex,i=n.filter,a=n.key,c=void 0===a?"index":a,d=n.orientation,f=void 0===d?"vertical":d,l=n.rotate,s=void 0===l||l,v=n.rtl,p=void 0!==v&&v;return function(e){if(["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"].includes(e.key)){var n=null!=u?u:-1,r=i?t.filter(i):t;if(r.length){var a=r.findIndex((function(e){return e.index===u}));switch(e.key){case"ArrowDown":if("vertical"===f||"both"===f){e.preventDefault();var d=b();o("option"===c?d:d[c])}break;case"ArrowUp":if("vertical"===f||"both"===f){e.preventDefault();var l=w();o("option"===c?l:l[c])}break;case"ArrowLeft":if("horizontal"===f||"both"===f){e.preventDefault();var v=(p?b:w)();o("option"===c?v:v[c])}break;case"ArrowRight":if("horizontal"===f||"both"===f){e.preventDefault();var h=(p?w:b)();o("option"===c?h:h[c])}break;case"PageUp":e.preventDefault();var m=(e.ctrlKey?w:x)();o("option"===c?m:m[c]);break;case"Home":e.preventDefault();var g=x();o("option"===c?g:g[c]);break;case"PageDown":e.preventDefault();var y=(e.ctrlKey?b:D)();o("option"===c?y:y[c]);break;case"End":e.preventDefault();var E=D();o("option"===c?E:E[c])}}}function b(){return n===D().index?s?x():r[a]:r[(a+1)%r.length]}function w(){return n===x().index?s?D():r[a]:r[(a-1+r.length)%r.length]}function x(){return r[0]}function D(){return r[r.length-1]}}}},45028:function(e,n,t){"use strict";t.d(n,{v2:function(){return ve},j2:function(){return pe},sN:function(){return me},Uk:function(){return ye},qy:function(){return Ee},uF:function(){return we}});var r=t(67294),o=t(14921),u=t(5977),i=t(55152),a=t(61331),c=t(34760),d=t.n(c);function f(){return(f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var l=["as","targetRef","position","unstable_observableRefs"],s=(0,r.forwardRef)((function(e,n){return(0,r.createElement)(o.h,null,(0,r.createElement)(v,f({ref:n},e)))}));var v=(0,r.forwardRef)((function(e,n){var t=e.as,o=void 0===t?"div":t,c=e.targetRef,s=e.position,v=void 0===s?m:s,h=e.unstable_observableRefs,g=void 0===h?[]:h,y=function(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,l),E=(0,r.useRef)(null),b=(0,u.EL)(E,{observe:!y.hidden}),w=(0,u.EL)(c,{observe:!y.hidden}),x=(0,a.e)(E,n);return function(e,n){var t=(0,i.r)(e.current);function o(e){"Tab"===e.key&&n.current&&0===d()(n.current).length||("Tab"===e.key&&e.shiftKey?s(e)?v(e):p(e)?h(e):g(e)&&E():"Tab"===e.key&&(a()?c(e):f()?l(e):m(e)&&E()))}function u(){var r=d()(t),o=r&&e.current?r.indexOf(e.current):-1,u=r&&r[o+1];return(!n.current||!n.current.contains(u||null))&&u}function a(){return!!e.current&&e.current===t.activeElement}function c(e){var t=n.current&&d()(n.current);t&&t[0]&&(e.preventDefault(),t[0].focus())}function f(){if(!!n.current&&n.current.contains(t.activeElement||null)){var e=n.current&&d()(n.current);return Boolean(e&&e[e.length-1]===t.activeElement)}return!1}function l(e){var n=u();n&&(e.preventDefault(),n.focus())}function s(e){if(e.shiftKey){var n=u();return e.target===n}}function v(e){var t=n.current&&d()(n.current),r=t&&t[t.length-1];r&&(e.preventDefault(),r.focus())}function p(e){var t=n.current&&d()(n.current);return!!t&&(0!==t.length&&e.target===t[0])}function h(n){var t;n.preventDefault(),null==(t=e.current)||t.focus()}function m(e){var r=n.current?d()(t).filter((function(e){return!n.current.contains(e)})):null;return!!r&&e.target===r[r.length-1]}function g(e){return e.target===d()(t)[0]}(0,r.useEffect)((function(){return t.addEventListener("keydown",o),function(){t.removeEventListener("keydown",o)}}),[]);var y=[];function E(){var e=n.current&&d()(n.current);e&&(e.forEach((function(e){y.push([e,e.tabIndex]),e.tabIndex=-1})),t.addEventListener("focusin",b))}function b(){t.removeEventListener("focusin",b),y.forEach((function(e){var n=e[0],t=e[1];n.tabIndex=t}))}}(c,E),(0,r.createElement)(o,f({"data-reach-popover":"",ref:x},y,{style:f({position:"absolute"},p.apply(void 0,[v,w,b].concat(g)),y.style)}))}));function p(e,n,t){for(var r=arguments.length,o=new Array(r>3?r-3:0),u=3;u<r;u++)o[u-3]=arguments[u];return t?e.apply(void 0,[n,t].concat(o.map((function(e){return e.current})))):{visibility:"hidden"}}function h(e,n,t){return{top:t?e.top-n.height+window.pageYOffset+"px":e.top+e.height+window.pageYOffset+"px"}}var m=function(e,n){if(!e||!n)return{};var t=g(e,n),r=t.directionRight,o=t.directionUp;return f({left:r?e.right-n.width+window.pageXOffset+"px":e.left+window.pageXOffset+"px"},h(e,n,o))};function g(e,n,t,r){void 0===t&&(t=0),void 0===r&&(r=0);var o={top:e.top-n.height<0,right:window.innerWidth<e.left+n.width-t,bottom:window.innerHeight<e.bottom+n.height-r,left:e.left+e.width-n.width<0};return{directionRight:o.right&&!o.left,directionLeft:o.left&&!o.right,directionUp:o.bottom&&!o.top,directionDown:o.top&&!o.bottom}}var y=t(765),E=t(28274);function b(e){return"which"in e?3===e.which:"button"in e&&2===e.button}var w=t(49725),x=t(45558),D=t(85777),k=t(94411),R=t(12837),I=t(24683);function M(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}function C(){return(C=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var O=["onKeyDown","onMouseDown","id","ref"],L=["index","isLink","onClick","onDragStart","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseUp","onSelect","disabled","onFocus","valueText","ref"],_=["id","onKeyDown","ref"],T=["onBlur","portal","position","ref"],S="CLEAR_SELECTION_INDEX",A="CLICK_MENU_ITEM",N="CLOSE_MENU",P="OPEN_MENU_AT_INDEX",U="OPEN_MENU_CLEARED",j="SEARCH_FOR_ITEM",F="SELECT_ITEM_AT_INDEX",Z="SET_BUTTON_ID",q=(0,E.nm)("DropdownDescendantContext"),B=(0,x.o)("DropdownContext",{}),K={triggerId:null,isExpanded:!1,typeaheadQuery:"",selectionIndex:-1},Y=function(e){var n=e.id,t=e.children,o=(0,r.useRef)(null),u=(0,r.useRef)(null),i=(0,r.useRef)(null),a=(0,E.f5)(),c=a[0],d=a[1],f=(0,y.M)(n),l=n||(0,k.q)("menu",f),s=(0,k.q)("menu-button",l),v=(0,r.useReducer)(W,C({},K,{triggerId:s})),p=v[0],h=v[1],m=(0,r.useRef)(!1),g=(0,r.useRef)([]),b=(0,r.useRef)(!1),w=(0,r.useRef)({x:0,y:0}),x={dispatch:h,dropdownId:l,dropdownRef:u,mouseDownStartPosRef:w,popoverRef:i,readyToSelect:b,selectCallbacks:g,state:p,triggerClickedRef:m,triggerRef:o};return(0,r.useEffect)((function(){p.isExpanded?(window.__REACH_DISABLE_TOOLTIPS=!0,window.requestAnimationFrame((function(){G(u.current)}))):window.__REACH_DISABLE_TOOLTIPS=!1}),[p.isExpanded]),(0,r.createElement)(E.w_,{context:q,items:c,set:d},(0,r.createElement)(B.Provider,{value:x},(0,D.mf)(t)?t({isExpanded:p.isExpanded,isOpen:p.isExpanded}):t))};function z(e){var n=e.onKeyDown,t=e.onMouseDown,o=e.id,u=e.ref,i=M(e,O),c=V(),d=c.dispatch,f=c.dropdownId,l=c.mouseDownStartPosRef,s=c.triggerClickedRef,v=c.triggerRef,p=c.state,h=p.triggerId,m=p.isExpanded,g=(0,a.e)(v,u),y=J(),E=(0,r.useMemo)((function(){return y.findIndex((function(e){return!e.disabled}))}),[y]);return(0,r.useEffect)((function(){null!=o&&o!==h&&d({type:Z,payload:o})}),[h,d,o]),{data:{isExpanded:m,controls:f},props:C({},i,{ref:g,id:h||void 0,onKeyDown:(0,I.M)(n,(function(e){switch(e.key){case"ArrowDown":case"ArrowUp":e.preventDefault(),d({type:P,payload:{index:E}});break;case"Enter":case" ":d({type:P,payload:{index:E}})}})),onMouseDown:(0,I.M)(t,(function(e){b(e.nativeEvent)||(l.current={x:e.clientX,y:e.clientY},m||(s.current=!0),d(m?{type:N}:{type:U}))})),type:"button"})}}function H(e){var n=e.index,t=e.isLink,o=void 0!==t&&t,u=e.onClick,c=e.onDragStart,d=e.onMouseDown,f=e.onMouseEnter,l=e.onMouseLeave,s=e.onMouseMove,v=e.onMouseUp,p=e.onSelect,h=e.disabled,m=e.onFocus,g=e.valueText,y=e.ref,w=M(e,L),x=V(),D=x.dispatch,k=x.dropdownRef,O=x.mouseDownStartPosRef,_=x.readyToSelect,T=x.selectCallbacks,N=x.triggerRef,P=x.state,U=P.selectionIndex,j=P.isExpanded,Z=(0,r.useRef)(null),B=(0,r.useState)(g||""),K=B[0],Y=B[1],z=(0,r.useCallback)((function(e){!g&&null!=e&&e.textContent&&Y(e.textContent)}),[g]),H=(0,r.useRef)(!1),X=(0,R.B)(Z,null),$=X[0],W=X[1],J=(0,r.useMemo)((function(){return{element:$,key:K,disabled:h,isLink:o}}),[h,$,o,K]),ee=(0,E.Yf)(J,q,n),ne=ee===U&&!h,te=(0,a.e)(y,W,z);function re(){G(N.current),p&&p(),D({type:A})}return T.current[ee]=p,(0,r.useEffect)((function(){if(j){var e=window.setTimeout((function(){_.current=!0}),400);return function(){window.clearTimeout(e)}}_.current=!1}),[j,_]),(0,r.useEffect)((function(){var e=(0,i.r)(Z.current);return e.addEventListener("mouseup",n),function(){e.removeEventListener("mouseup",n)};function n(){H.current=!1}}),[]),{data:{disabled:h},props:C({id:Q(ee),tabIndex:-1},w,{ref:te,"data-disabled":h?"":void 0,"data-selected":ne?"":void 0,"data-valuetext":K,onClick:(0,I.M)(u,(function(e){b(e.nativeEvent)||o&&(h?e.preventDefault():re())})),onDragStart:(0,I.M)(c,(function(e){o&&e.preventDefault()})),onMouseDown:(0,I.M)(d,(function(e){b(e.nativeEvent)||(o?H.current=!0:e.preventDefault())})),onMouseEnter:(0,I.M)(f,(function(e){var n=(0,i.r)(k.current);ne||null==ee||h||(null!=k&&k.current&&k.current!==n.activeElement&&Z.current!==n.activeElement&&k.current.focus(),D({type:F,payload:{index:ee}}))})),onMouseLeave:(0,I.M)(l,(function(e){D({type:S})})),onMouseMove:(0,I.M)(s,(function(e){if(!_.current){var n=Math.abs(e.clientX-O.current.x),t=Math.abs(e.clientY-O.current.y);(n>8||t>8)&&(_.current=!0)}ne||null==ee||h||D({type:F,payload:{index:ee,dropdownRef:k}})})),onFocus:(0,I.M)(m,(function(){_.current=!0,ne||null==ee||h||D({type:F,payload:{index:ee}})})),onMouseUp:(0,I.M)(v,(function(e){b(e.nativeEvent)||(_.current?o?H.current?H.current=!1:Z.current&&Z.current.click():h||re():_.current=!0)}))})}}function X(e){e.id;var n=e.onKeyDown,t=e.ref,o=M(e,_),u=V(),i=u.dispatch,c=u.triggerRef,d=u.dropdownRef,f=u.selectCallbacks,l=u.dropdownId,s=u.state,v=s.isExpanded,p=s.triggerId,h=s.selectionIndex,m=s.typeaheadQuery,g=J(),y=(0,a.e)(d,t);(0,r.useEffect)((function(){var e=function(e,n){void 0===n&&(n="");if(!n)return null;var t=e.find((function(e){var t,r,o;return!e.disabled&&(null==(t=e.element)||null==(r=t.dataset)||null==(o=r.valuetext)?void 0:o.toLowerCase().startsWith(n))}));return t?e.indexOf(t):null}(g,m);m&&null!=e&&i({type:F,payload:{index:e,dropdownRef:d}});var n=window.setTimeout((function(){return m&&i({type:j,payload:""})}),1e3);return function(){return window.clearTimeout(n)}}),[i,g,m,d]);var b=(0,w.D)(g.length),x=(0,w.D)(g[h]),k=(0,w.D)(h);(0,r.useEffect)((function(){h>g.length-1?i({type:F,payload:{index:g.length-1,dropdownRef:d}}):b!==g.length&&h>-1&&x&&k===h&&g[h]!==x&&i({type:F,payload:{index:g.findIndex((function(e){return e.key===(null==x?void 0:x.key)})),dropdownRef:d}})}),[d,i,g,b,x,k,h]);var R=(0,I.M)((function(e){var n=e.key;if(v)switch(n){case"Enter":case" ":var t=g.find((function(e){return e.index===h}));t&&!t.disabled&&(e.preventDefault(),t.isLink&&t.element?t.element.click():(G(c.current),f.current[t.index]&&f.current[t.index](),i({type:A})));break;case"Escape":G(c.current),i({type:N});break;case"Tab":e.preventDefault();break;default:if((0,D.HD)(n)&&1===n.length){var r=m+n.toLowerCase();i({type:j,payload:r})}}}),(0,E.Dv)(q,{currentIndex:h,orientation:"vertical",rotate:!1,filter:function(e){return!e.disabled},callback:function(e){i({type:F,payload:{index:e,dropdownRef:d}})},key:"index"}));return{data:{activeDescendant:Q(h)||void 0,triggerId:p},props:C({tabIndex:-1},o,{ref:y,id:l,onKeyDown:(0,I.M)(n,R)})}}function $(e){var n=e.onBlur,t=e.portal,o=void 0===t||t,u=e.position,c=e.ref,d=M(e,T),f=V(),l=f.triggerRef,s=f.triggerClickedRef,v=f.dispatch,p=f.dropdownRef,h=f.popoverRef,m=f.state.isExpanded,g=(0,a.e)(h,c);return(0,r.useEffect)((function(){if(m){var e=(0,i.r)(h.current);return e.addEventListener("mousedown",n),function(){e.removeEventListener("mousedown",n)}}function n(e){var n,t;s.current?s.current=!1:(n=h.current,t=e.target,n&&n.contains(t)||v({type:N}))}}),[s,l,v,p,h,m]),{data:{portal:o,position:u,targetRef:l,isExpanded:m},props:C({ref:g,hidden:!m,onBlur:(0,I.M)(n,(function(e){e.currentTarget.contains(e.relatedTarget)||v({type:N})}))},d)}}function Q(e){var n=(0,r.useContext)(B).dropdownId;return null!=e&&e>-1?(0,k.q)("option-"+e,n):void 0}function G(e){e&&e.focus()}function W(e,n){switch(void 0===n&&(n={}),n.type){case A:case N:return C({},e,{isExpanded:!1,selectionIndex:-1});case"OPEN_MENU_AT_FIRST_ITEM":return C({},e,{isExpanded:!0,selectionIndex:0});case P:return C({},e,{isExpanded:!0,selectionIndex:n.payload.index});case U:return C({},e,{isExpanded:!0,selectionIndex:-1});case F:var t=n.payload.dropdownRef,r=void 0===t?{current:null}:t;if(n.payload.index>=0&&n.payload.index!==e.selectionIndex){if(r.current){var o=(0,i.r)(r.current);r.current!==(null==o?void 0:o.activeElement)&&r.current.focus()}return C({},e,{selectionIndex:null!=n.payload.max?Math.min(Math.max(n.payload.index,0),n.payload.max):Math.max(n.payload.index,0)})}return e;case S:return C({},e,{selectionIndex:-1});case Z:return C({},e,{triggerId:n.payload});case j:return"undefined"!==typeof n.payload?C({},e,{typeaheadQuery:n.payload}):e;default:return e}}function V(){return(0,r.useContext)(B)}function J(){return(0,E.Ak)(q)}var ee=t(69695),ne=t(40884),te=t(59864);function re(){return(re=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function oe(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}var ue=["as","id","children"],ie=["as"],ae=["as"],ce=["as"],de=["as"],fe=["as","component","onSelect"],le=["portal"],se=["as"],ve=(0,r.forwardRef)((function(e,n){var t=e.as,o=void 0===t?r.Fragment:t,u=e.id,i=e.children,a=oe(e,ue);(0,ne.kG)("menu-button");var c=(0,r.useMemo)((function(){try{return(0,te.isFragment)((0,r.createElement)(o,null))}catch(e){return!1}}),[o])?{}:re({ref:n,id:u,"data-reach-menu":""},a);return(0,r.createElement)(o,c,(0,r.createElement)(Y,{id:u,children:i}))}));var pe=(0,r.forwardRef)((function(e,n){var t=e.as,o=void 0===t?"button":t,u=z(re({},oe(e,ie),{ref:n})),i=u.data,a=i.isExpanded,c=i.controls,d=u.props;return(0,r.createElement)(o,re({"aria-expanded":!!a||void 0,"aria-haspopup":!0,"aria-controls":c},d,{"data-reach-menu-button":""}))}));var he=(0,r.forwardRef)((function(e,n){var t=e.as,o=void 0===t?"div":t,u=H(re({},oe(e,ae),{ref:n})),i=u.data.disabled,a=u.props;return(0,r.createElement)(o,re({role:"menuitem"},a,{"aria-disabled":i||void 0,"data-reach-menu-item":""}))})),me=(0,r.forwardRef)((function(e,n){var t=e.as,o=void 0===t?"div":t,u=oe(e,ce);return(0,r.createElement)(he,re({},u,{ref:n,as:o}))}));var ge=(0,r.forwardRef)((function(e,n){var t=e.as,o=void 0===t?"div":t,u=X(re({},oe(e,de),{ref:n})),i=u.data,a=i.activeDescendant,c=i.triggerId,d=u.props;return(0,r.createElement)(o,re({"aria-activedescendant":a,"aria-labelledby":c||void 0,role:"menu"},d,{"data-reach-menu-items":""}))}));var ye=(0,r.forwardRef)((function(e,n){var t=e.as,o=void 0===t?"a":t,u=(e.component,e.onSelect),i=oe(e,fe);return(0,r.createElement)(he,re({},i,{ref:n,"data-reach-menu-link":"",as:o,isLink:!0,onSelect:u||ee.Z}))}));var Ee=(0,r.forwardRef)((function(e,n){var t=e.portal,o=void 0===t||t,u=oe(e,le);return(0,r.createElement)(be,{portal:o},(0,r.createElement)(ge,re({},u,{ref:n,"data-reach-menu-list":""})))}));var be=(0,r.forwardRef)((function(e,n){var t=e.as,o=void 0===t?"div":t,u=$(re({},oe(e,se),{ref:n})),i=u.data,a=i.portal,c=i.targetRef,d=i.position,f=u.props,l={"data-reach-menu-popover":""};return a?(0,r.createElement)(s,re({},f,l,{as:o,targetRef:c,position:d})):(0,r.createElement)(o,re({},f,l))}));function we(){var e=V().state.isExpanded;return(0,r.useMemo)((function(){return{isExpanded:e}}),[e])}},14921:function(e,n,t){"use strict";t.d(n,{h:function(){return a}});var r=t(67294),o=t(96637),u=t(12459),i=t(73935),a=function(e){var n=e.children,t=e.type,a=void 0===t?"reach-portal":t,c=e.containerRef,d=(0,r.useRef)(null),f=(0,r.useRef)(null),l=(0,u.N)();return(0,o.L)((function(){if(d.current){var e=d.current.ownerDocument,n=(null==c?void 0:c.current)||e.body;return f.current=null==e?void 0:e.createElement(a),n.appendChild(f.current),l(),function(){f.current&&n&&n.removeChild(f.current)}}}),[a,l,c]),f.current?(0,i.createPortal)(n,f.current):(0,r.createElement)("span",{ref:d})}},5977:function(e,n,t){"use strict";t.d(n,{EL:function(){return l}});var r,o=t(67294),u=["bottom","height","left","right","top","width"],i=new Map,a=function e(){var n=[];i.forEach((function(e,t){var r,o,i=t.getBoundingClientRect();r=i,o=e.rect,void 0===r&&(r={}),void 0===o&&(o={}),u.some((function(e){return r[e]!==o[e]}))&&(e.rect=i,n.push(e))})),n.forEach((function(e){e.callbacks.forEach((function(n){return n(e.rect)}))})),r=window.requestAnimationFrame(e)};var c=function(e,n){return{observe:function(){var t=0===i.size;i.has(e)?i.get(e).callbacks.push(n):i.set(e,{rect:void 0,hasRectChanged:!1,callbacks:[n]}),t&&a()},unobserve:function(){var t=i.get(e);if(t){var o=t.callbacks.indexOf(n);o>=0&&t.callbacks.splice(o,1),t.callbacks.length||i.delete(e),i.size||cancelAnimationFrame(r)}}}},d=t(96637),f=t(85777);function l(e,n,t){var r,u,i;(0,f.jn)(n)?r=n:(r=null==(i=null==n?void 0:n.observe)||i,u=null==n?void 0:n.onChange);(0,f.mf)(t)&&(u=t);var a=(0,o.useState)(e.current),l=a[0],s=a[1],v=(0,o.useRef)(!1),p=(0,o.useRef)(!1),h=(0,o.useState)(null),m=h[0],g=h[1],y=(0,o.useRef)(u);return(0,d.L)((function(){y.current=u,e.current!==l&&s(e.current)})),(0,d.L)((function(){l&&!v.current&&(v.current=!0,g(l.getBoundingClientRect()))}),[l]),(0,d.L)((function(){if(r){var n=l;if(p.current||(p.current=!0,n=e.current),n){var t=c(n,(function(e){null==y.current||y.current(e),g(e)}));return t.observe(),function(){t.unobserve()}}}}),[r,l,e]),m}},24683:function(e,n,t){"use strict";function r(e,n){return function(t){if(e&&e(t),!t.defaultPrevented)return n(t)}}t.d(n,{M:function(){return r}})},94411:function(e,n,t){"use strict";function r(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return null!=e})).join("--")}t.d(n,{q:function(){return r}})},69695:function(e,n,t){"use strict";function r(){}t.d(n,{Z:function(){return r}})},55152:function(e,n,t){"use strict";t.d(n,{r:function(){return o},k:function(){return u}});var r=t(12769);function o(e){return(0,r.N)()?e?e.ownerDocument:document:null}function u(e){var n=o(e);return n?n.defaultView||window:null}},24725:function(e,n,t){"use strict";t.d(n,{v2:function(){return h},sN:function(){return y},Uk:function(){return E},qy:function(){return g}});var r=t(87462),o=t(86854),u=t(45987),i=t(90022),a=t(45028),c=t(5773),d=t(67294),f=t(70917),l=t(59124),s=["children"],v=["children"];var p={name:"1r54ni4",styles:":root{--reach-menu-button:1;}"},h=function(e){var n=e.children,t=(0,u.Z)(e,s);return d.createElement(a.v2,t,n,d.createElement(f.xB,{styles:p}))},m=(0,i.Z)(a.qy,{target:"eeo5yzu2"})("background-color:",c.$_.nova,";border-radius:",c.q0.lg,";box-shadow:",c.AF.strong,";padding-top:",c.Dh[16],";padding-bottom:",c.Dh[16],";margin-top:",c.Dh[8],";margin-bottom:",c.Dh[8],";[data-reach-menu-item][data-selected]{background-color:",c.$_.stardust,";}[data-reach-menu-item]{:focus,:active{outline:none;box-shadow:0 0 0 ",c.Dh[4]," ",c.$_.earthLightestAlpha,";}}:focus,:active{outline:none;box-shadow:0 0 0 ",c.Dh[4]," ",c.$_.earthLightestAlpha,";}opacity:",(function(e){return"entering"===e.state||"entered"===e.state?1:0}),";transform:",(function(e){return"entering"===e.state||"entered"===e.state||"exiting"===e.state?"translateY(0)":"translateY(1rem)"}),";transition:opacity ",200,"ms ",c.Ui.easeInOutCubic,",transform ",200,"ms ",c.Ui.easeInOutCubic,";"),g=function(e){var n=e.children,t=(0,u.Z)(e,v),i=(0,a.uF)().isExpanded,c=(0,l.Y)({in:i,timeout:200}),f=(0,o.Z)(c,1)[0];return d.createElement(m,(0,r.Z)({state:f},t),n)},y=(0,i.Z)(a.sN,{target:"eeo5yzu1"})("padding:",c.Dh[8]," ",c.Dh[16],";cursor:pointer;"),E=(0,i.Z)(a.Uk,{target:"eeo5yzu0"})("padding:",c.Dh[8]," ",c.Dh[16],";display:block;")},17250:function(e,n,t){"use strict";t.d(n,{s:function(){return i}});var r=t(87462),o=t(67294),u=t(57464),i=function(e){return o.createElement(u.t,(0,r.Z)({a11yTitle:"Play"},e),o.createElement("path",{d:"M8.00190181,28 C7.6675842,28 7.33426755,27.9169622 7.03198038,27.7498863 C6.39537561,27.3977261 6,26.7274213 6,25.9990901 L6,6.00199694 C6,5.27366575 6.39537561,4.60336095 7.03198038,4.25120081 C7.66858516,3.89804022 8.44732496,3.91804932 9.06290976,4.30622583 L25.0591062,14.3047724 C25.6476653,14.6719394 26,15.3062278 26,16.0005435 C26,16.6948593 25.6466643,17.3291477 25.0581052,17.6963146 L9.06290976,27.6948612 C8.73960262,27.8989541 8.37025174,28 8.00190181,28 Z"}))}},34760:function(e){var n=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],t=n.join(","),r="undefined"===typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function o(e,n){n=n||{};var o,i,a,f=[],l=[],s=e.querySelectorAll(t);for(n.includeContainer&&r.call(e,t)&&(s=Array.prototype.slice.apply(s)).unshift(e),o=0;o<s.length;o++)u(i=s[o])&&(0===(a=c(i))?f.push(i):l.push({documentOrder:o,tabIndex:a,node:i}));return l.sort(d).map((function(e){return e.node})).concat(f)}function u(e){return!(!i(e)||function(e){return function(e){return f(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var n=function(e){for(var n=0;n<e.length;n++)if(e[n].checked)return e[n]}(e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'));return!n||n===e}(e)}(e)||c(e)<0)}function i(e){return!(e.disabled||function(e){return f(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}o.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==r.call(e,t)&&u(e)},o.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==r.call(e,a)&&i(e)};var a=n.concat("iframe").join(",");function c(e){var n=parseInt(e.getAttribute("tabindex"),10);return isNaN(n)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:n}function d(e,n){return e.tabIndex===n.tabIndex?e.documentOrder-n.documentOrder:e.tabIndex-n.tabIndex}function f(e){return"INPUT"===e.tagName}e.exports=o}}]);
//# sourceMappingURL=9136-7999a3f7c138d4cb.js.map