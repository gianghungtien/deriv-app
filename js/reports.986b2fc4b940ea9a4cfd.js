(window.webpackJsonp=window.webpackJsonp||[]).push([["reports","wallet-information"],{582:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(0),i=n.n(o),c=n(142),s=c.b.div({enter:{y:0,opacity:1,transition:{y:{type:"spring",stiffness:500,damping:15},default:{duration:300}}},exit:{y:35,opacity:0,transition:{duration:0}}}),l=function(e){var t=e.children,n=e.className,r=e.is_visible,a=e.keyname;return i.a.createElement(c.a,null,r&&i.a.createElement(s,{className:n,key:a},t))};l.propTypes={children:a.a.node,is_visible:a.a.bool,keyname:a.a.string};var u=c.b.div({enter:{y:0,opacity:1,delay:300,transition:{default:{duration:250}}},exit:{y:-50,opacity:0,transition:{duration:250}}}),p=c.b.div({enter:{y:0,opacity:1,delay:300,transition:{default:{duration:250}}},exit:{y:50,opacity:0,transition:{duration:250}}}),d=c.b.div({enter:{opacity:1,transition:{duration:300}},exit:{opacity:0,transition:{duration:300}}}),f=function(e){var t=e.children,n=e.className,r=e.is_visible,a=e.keyname,o=e.type;return"top"===o?i.a.createElement(c.a,null,r&&i.a.createElement(u,{className:n,key:a},t)):"bottom"===o?i.a.createElement(c.a,null,r&&i.a.createElement(p,{className:n,key:a},t)):i.a.createElement(c.a,null,r&&i.a.createElement(d,{className:n,key:a},t))};f.propTypes={children:a.a.node,is_visible:a.a.bool,keyname:a.a.string,type:a.a.string};var y=c.b.div({enter:{y:0,opacity:1,transition:{duration:200}},exit:{y:-20,opacity:0,transition:{duration:100}}}),m=c.b.div({enter:{y:0,opacity:1,transition:{duration:200}},exit:{y:20,opacity:0,transition:{duration:100}}}),b=function(e){var t=e.children,n=e.className,r=e.keyname,a=e.is_visible;return"bottom"===e.type?i.a.createElement(c.a,{flipMove:!1},a&&i.a.createElement(m,{className:n,key:r},t)):i.a.createElement(c.a,{flipMove:!1},a&&i.a.createElement(y,{className:n,key:r},t))};b.propTypes={children:a.a.node,is_visible:a.a.bool,keyname:a.a.string,type:a.a.string},n.d(t,"a",function(){return l}),n.d(t,"b",function(){return f}),n.d(t,"c",function(){return b})},583:function(e,t,n){"use strict";var r=n(4),a=n.n(r),o=n(0),i=n.n(o),c=n(1),s=n.n(c);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=["default","success","warn","danger","info","success-invert","warn-invert"],p=["regular","large"],d=function(e){var t,n=e.mode,r=e.children,o=e.size,c=void 0===o?"regular":o,s=u.some(function(e){return e===n})?n:"default",d=p.some(function(e){return e===c})?c:"regular";return i.a.createElement("span",{className:a()("label",(t={},l(t,"label--".concat(d),d),l(t,"label--".concat(s),s),t))},r)};d.propTypes={children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),mode:s.a.oneOf(u)},t.a=d},591:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(0),i=n.n(o),c=n(7),s=n(583),l=n(19),u=n(74),p=n(11),d=function(e){var t=e.currency;return e.is_virtual?i.a.createElement(l.a,{i18n_default_text:"Practice wallet"}):i.a.createElement(l.a,{i18n_default_text:"{{currency}} wallet",values:{currency:t.toUpperCase()}})},f=function(e){var t=e.currency,n=e.balance,r=e.has_description,a=e.has_loginid,o=e.is_virtual,l=e.is_website_status_ready,p=e.loginid;return i.a.createElement("div",{className:"account-wallet"},!o&&i.a.createElement(c.a,{icon:"IconAccountsCurrency",type:t.toLowerCase()}),o&&i.a.createElement(c.a,{icon:"IconDemo"}),i.a.createElement("span",{className:"description"},r?i.a.createElement(d,{currency:t,is_virtual:o}):i.a.createElement("span",{className:"description__currency"},t.toUpperCase())),a&&i.a.createElement("span",{className:"current-loginid"},p),l&&i.a.createElement(s.a,{mode:"".concat(o?"warn-invert":"success-invert"),size:"large"},i.a.createElement(u.a,{amount:n,currency:t})),!l&&i.a.createElement("div",null))};f.propTypes={has_description:a.a.bool,has_loginid:a.a.bool},t.default=Object(p.b)(function(e){var t=e.client;return{balance:t.balance,currency:t.currency,is_virtual:t.is_virtual,is_website_status_ready:t.is_website_status_ready,loginid:t.loginid}})(f)},593:function(e,t,n){},621:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(0),i=n.n(o),c=n(30),s=n(3),l=n(582),u=n(179),p=n(35),d=n(11),f=n(591);n(593);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=b(this,(e=v(t)).call.apply(e,[this].concat(a)))).setWrapperRef=function(e){n.wrapper_ref=e},n.handleClickOutside=function(e){n.wrapper_ref&&!n.wrapper_ref.contains(e.target)&&n.props.history.push(p.a.trade)},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,i.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){localStorage.removeItem("layout-contract-replay"),this.props.showBlur(),document.addEventListener("mousedown",this.handleClickOutside),this.props.toggleReports(!0)}},{key:"componentWillUnmount",value:function(){this.props.toggleReports(!1),this.props.hideBlur(),document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"render",value:function(){var e,t=this,n=[{onClick:function(){t.props.history.push(p.a.trade),t.props.toggleReports(!1)},icon:"ModalIconClose",title:Object(s.localize)("Close")},{component:function(){return i.a.createElement(f.default,{has_description:!0,has_loginid:!0})},title:""}];return i.a.createElement(l.b,{is_visible:this.props.is_visible,className:"reports-page-wrapper",keyname:"reports-page-wrapper"},i.a.createElement("div",{className:"reports",ref:this.setWrapperRef},i.a.createElement(u.a,{header_title:Object(s.localize)("Reports"),action_bar:n,action_bar_classname:"reports__inset_header",alignment:"center",classNameHeader:"reports__tab-header",current_path:this.props.location.pathname,is_routed:!0,is_full_width:!0,list:(e=[],t.props.routes.forEach(function(t){e.push({default:t.default,icon:t.icon_component,label:t.title,value:t.component,path:t.path})}),e)})))}}])&&m(n.prototype,r),a&&m(n,a),t}();_.propTypes={hideBlur:a.a.func,history:a.a.object,is_visible:a.a.bool,location:a.a.object,routes:a.a.arrayOf(a.a.object),showBlur:a.a.func,toggleReports:a.a.func};var g=Object(d.b)(function(e){var t=e.ui;return{hideBlur:t.hideRouteBlur,is_visible:t.is_reports_visible,showBlur:t.showRouteBlur,toggleReports:t.toggleReports}})(Object(c.g)(_));n.d(t,"default",function(){return g})}}]);
//# sourceMappingURL=reports.986b2fc4b940ea9a4cfd.js.map