(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2510],{9491:function(e,t,n){"use strict";n.d(t,{H1:function(){return a},H2:function(){return i},H3:function(){return c},H4:function(){return l},H5:function(){return u},H6:function(){return f}});var r=n(90022),o=n(5773),a=(0,r.Z)("h1",{target:"eloqthd5"})("font-weight:",o.Ue.bold,";font-size:",o.JB[28],";line-height:",o.Nv.title,";@media ",o.Uh.tablet,"{font-size:",o.JB[56],";line-height:",o.Nv.titleLg,";}"),i=(0,r.Z)("h2",{target:"eloqthd4"})("font-weight:",o.Ue.bold,";font-size:",o.JB[24],";line-height:",o.Nv.title,";@media ",o.Uh.tablet,"{font-size:",o.JB[32],";}"),c=(0,r.Z)("h3",{target:"eloqthd3"})("font-weight:",o.Ue.regular,";font-size:",o.JB[20],";line-height:",o.Nv.title,";@media ",o.Uh.tablet,"{font-size:",o.JB[24],";}"),l=(0,r.Z)("h4",{target:"eloqthd2"})("font-weight:",o.Ue.regular,";font-size:",o.JB[18],";line-height:",o.Nv.copy,";@media ",o.Uh.tablet,"{font-size:",o.JB[20],";}"),u=(0,r.Z)("h5",{target:"eloqthd1"})("font-weight:",o.Ue.regular,";font-size:",o.JB[14],";@media ",o.Uh.tablet,"{font-size:",o.JB[16],";}"),f=(0,r.Z)("h6",{target:"eloqthd0"})("font-weight:",o.Ue.semiBold,";font-size:",o.JB[12],";text-transform:uppercase;letter-spacing:0.0375rem;color:",o.$_.spaceLight,";@media ",o.Uh.tablet,"{font-size:",o.JB[12],";}")},89660:function(e,t,n){"use strict";n.d(t,{$:function(){return m}});var r,o=n(87462),a=n(45987),i=n(30168),c=n(90022),l=n(67294),u=n(70917),f=n(5773),s=n(57464),d=function(e){return l.createElement(s.t,(0,o.Z)({a11yTitle:"Spinner"},e),l.createElement("g",null,l.createElement("path",{d:"M25 16a9 9 0 1 0-18 0 9 9 0 0 0 18 0zm4 0c0 7.18-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3s13 5.82 13 13z",fillOpacity:".25"}),l.createElement("path",{d:"M16 7V3c3.423 0 6.722 1.338 9.192 3.808l-2.828 2.828A8.964 8.964 0 0 0 15.999 7z"})))},h=["size"],p=(0,c.Z)(d,{target:"e1a3z9451"})("[data-theme='dark'] &{color:",f.$_.space,";}"),v=(0,u.F4)(r||(r=(0,i.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]))),g=(0,c.Z)("div",{target:"e1a3z9450"})("animation:",v," 1s cubic-bezier(0.65, 0.25, 0.25, 0.75) infinite;display:flex;justify-content:center;align-items:center;"),m=function(e){var t=e.size,n=void 0===t?32:t,r=(0,a.Z)(e,h);return l.createElement(g,(0,o.Z)({},r,{role:"status"}),l.createElement(p,{size:n}))}},7942:function(e,t,n){"use strict";var r=n(85696);t.default=void 0;var o,a=(o=n(67294))&&o.__esModule?o:{default:o},i=n(64957),c=n(69898),l=n(90639);var u={};function f(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var s=function(e){var t,n=!1!==e.prefetch,o=c.useRouter(),s=a.default.useMemo((function(){var t=i.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?i.resolveHref(o,e.as):c||a}}),[o,e.href,e.as]),d=s.href,h=s.as,p=e.children,v=e.replace,g=e.shallow,m=e.scroll,b=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var z=(t=a.default.Children.only(p))&&"object"===typeof t&&t.ref,y=l.useIntersection({rootMargin:"200px"}),E=r(y,2),U=E[0],w=E[1],L=a.default.useCallback((function(e){U(e),z&&("function"===typeof z?z(e):"object"===typeof z&&(z.current=e))}),[z,U]);a.default.useEffect((function(){var e=w&&n&&i.isLocalURL(d),t="undefined"!==typeof b?b:o&&o.locale,r=u[d+"%"+h+(t?"%"+t:"")];e&&!r&&f(o,d,h,{locale:t})}),[h,d,w,b,n,o]);var B={ref:L,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:c}))}(e,o,d,h,v,g,m,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&f(o,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof b?b:o&&o.locale,Z=o&&o.isLocaleDomain&&i.getDomainLocale(h,M,o&&o.locales,o&&o.domainLocales);B.href=Z||i.addBasePath(i.addLocale(h,M,o&&o.defaultLocale))}return a.default.cloneElement(t,B)};t.default=s},90639:function(e,t,n){"use strict";var r=n(85696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,l=e.disabled||!i,u=o.useRef(),f=o.useState(!1),s=r(f,2),d=s[0],h=s[1],p=o.useState(t?t.current:null),v=r(p,2),g=v[0],m=v[1],b=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),l||d||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&h(e)}),{root:g,rootMargin:n}))}),[l,g,n,d]);return o.useEffect((function(){if(!i&&!d){var e=a.requestIdleCallback((function(){return h(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&m(t.current)}),[t]),[b,d]};var o=n(67294),a=n(26286),i="undefined"!==typeof IntersectionObserver;var c=new Map},41664:function(e,t,n){e.exports=n(7942)},30168:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=2510-1c2c24d803abcefd.js.map