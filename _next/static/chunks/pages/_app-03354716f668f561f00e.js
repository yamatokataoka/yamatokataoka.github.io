(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2167:function(e,r,n){"use strict";var t=n(3848);r.default=void 0;var a,o=(a=n(7294))&&a.__esModule?a:{default:a},c=n(1063),i=n(4651),s=n(7426);var l={};function u(e,r,n,t){if(e&&c.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[r+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var r,n=!1!==e.prefetch,a=i.useRouter(),f=o.default.useMemo((function(){var r=c.resolveHref(a,e.href,!0),n=t(r,2),o=n[0],i=n[1];return{href:o,as:e.as?c.resolveHref(a,e.as):i||o}}),[a,e.href,e.as]),p=f.href,d=f.as,v=e.children,h=e.replace,_=e.shallow,b=e.scroll,m=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var j=(r=o.default.Children.only(v))&&"object"===typeof r&&r.ref,y=s.useIntersection({rootMargin:"200px"}),g=t(y,2),x=g[0],O=g[1],k=o.default.useCallback((function(e){x(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,x]);o.default.useEffect((function(){var e=O&&n&&c.isLocalURL(p),r="undefined"!==typeof m?m:a&&a.locale,t=l[p+"%"+d+(r?"%"+r:"")];e&&!t&&u(a,p,d,{locale:r})}),[d,p,O,m,n,a]);var w={ref:k,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,a,o,i,s){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==i&&t.indexOf("#")>=0&&(i=!1),r[a?"replace":"push"](n,t,{shallow:o,locale:s,scroll:i}))}(e,a,p,d,h,_,b,m)},onMouseEnter:function(e){c.isLocalURL(p)&&(r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),u(a,p,d,{priority:!0}))}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var E="undefined"!==typeof m?m:a&&a.locale,N=a&&a.isLocaleDomain&&c.getDomainLocale(d,E,a&&a.locales,a&&a.domainLocales);w.href=N||c.addBasePath(c.addLocale(d,E,a&&a.defaultLocale))}return o.default.cloneElement(r,w)};r.default=f},7426:function(e,r,n){"use strict";var t=n(3848);Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,n=e.disabled||!c,s=a.useRef(),l=a.useState(!1),u=t(l,2),f=u[0],p=u[1],d=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,r,n){var t=function(e){var r=e.rootMargin||"",n=i.get(r);if(n)return n;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=t.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return i.set(r,n={id:r,observer:a,elements:t}),n}(n),a=t.id,o=t.observer,c=t.elements;return c.set(e,r),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&p(e)}),{rootMargin:r}))}),[n,r,f]);return a.useEffect((function(){if(!c&&!f){var e=o.requestIdleCallback((function(){return p(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),[d,f]};var a=n(7294),o=n(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},7840:function(e,r,n){"use strict";function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}n.r(r),n.d(r,{default:function(){return O}});var a=n(9008),o=n(5893);function c(){return(0,o.jsx)(a.default,{children:(0,o.jsx)("meta",{name:"color-scheme",content:"dark"})})}var i=n(1664),s=n(6402),l=n.n(s);function u(e){var r=e.src,n=e.alt;return(0,o.jsx)("div",{className:l().avatar,children:(0,o.jsx)("img",{src:r,alt:n,width:"40",height:"40"})})}var f=n(4238),p=n.n(f);function d(e){var r=e.name,n=e.description,t=e.avatarSrc;return(0,o.jsx)("header",{className:p().container,children:(0,o.jsx)(i.default,{href:"/",passHref:!0,children:(0,o.jsxs)("a",{href:"replace by passHref",className:p().profile,children:[(0,o.jsx)(u,{src:t,alt:r}),(0,o.jsxs)("div",{className:p().profileContent,children:[(0,o.jsx)(i.default,{href:"/",passHref:!0,children:(0,o.jsx)("a",{href:"replace by passHref",className:p().name,children:r})}),(0,o.jsx)(i.default,{href:"/",passHref:!0,children:(0,o.jsx)("a",{href:"replace by passHref",className:p().description,children:n})})]})]})})})}var v=n(4906),h=n.n(v);function _(e){var r=e.name,n=e.github;return(0,o.jsxs)("footer",{className:h().container,children:[(0,o.jsxs)("p",{className:h().copyright,children:["\xa92021 ",r]}),(0,o.jsxs)("div",{className:h().links,children:[(0,o.jsx)(i.default,{href:"/",children:"Home"}),(0,o.jsx)("span",{children:" | "}),(0,o.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:"GitHub"})]})]})}var b=n(4253),m=n.n(b);function j(e){var r=e.children,n=e.name,t=e.description,a=e.avatarSrc,i=e.githubLink;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsxs)("div",{className:m().container,children:[(0,o.jsx)(d,{name:n,description:t,avatarSrc:a}),(0,o.jsx)("main",{className:m().content,children:r}),(0,o.jsx)(_,{name:n,github:i})]})]})}n(6657);var y=JSON.parse('{"u2":"Yamato Kataoka","WL":"Software Engineer","qQ":"/images/avatar.svg","TU":"https://github.com/yamatokataoka"}');function g(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function x(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?g(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function O(e){var r=e.Component,n=e.pageProps;return(0,o.jsxs)(j,{name:y.u2,description:y.WL,avatarSrc:y.qQ,githubLink:y.TU,children:[(0,o.jsx)(a.default,{children:(0,o.jsxs)("title",{children:[y.u2," - ",y.WL]})}),(0,o.jsx)(r,x({},n))]})}},6363:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7840)}])},6402:function(e){e.exports={avatar:"avatar_avatar__1jw4O"}},4906:function(e){e.exports={container:"footer_container__3aq8W",copyright:"footer_copyright__1fCV_",links:"footer_links__1fO1I"}},4253:function(e){e.exports={container:"layout_container__126y6",content:"layout_content__2V5t2"}},4238:function(e){e.exports={container:"navbar_container__28GFO",profile:"navbar_profile__XhlJK",profileContent:"navbar_profileContent__23E6l",name:"navbar_name__2zrRM",description:"navbar_description__30TqX"}},6657:function(){},9008:function(e,r,n){e.exports=n(639)},1664:function(e,r,n){e.exports=n(2167)}},function(e){var r=function(r){return e(e.s=r)};e.O(0,[774,179],(function(){return r(6363),r(4651)}));var n=e.O();_N_E=n}]);