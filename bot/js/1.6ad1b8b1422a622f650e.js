(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{658:function(e,t,n){"use strict";var r=n(6),o=n.n(r),a=n(0),i=n.n(a);t.a=function(e){var t=e.className,n=e.is_invisible,r=e.theme,a=e.id;return i.a.createElement("div",{id:a,className:o()("barspinner","barspinner--".concat(r||"dark"),{invisible:n},t)},Array.from(new Array(5)).map((function(e,t){return i.a.createElement("div",{key:t,className:"barspinner__rect barspinner__rect--".concat(t+1," rect").concat(t+1)})})))}},660:function(e,t,n){"use strict";var r=n(2),o=n.n(r),a=n(0),i=n.n(a),c=n(35),s=n.n(c),l=(n(87),n(7)),u=n(110),f=n(3),p=n(9),m=n(16),h=n(11);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){y(a,r,o,i,c,"next",e)}function c(e){y(a,r,o,i,c,"throw",e)}i(void 0)}))}}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){var t=e.header,n=e.message,r=e.button_link,o=e.onClickButton,a=e.button_text,c=e.footer;return i.a.createElement("div",{className:"cashier__wrapper"},i.a.createElement(p.a,{icon:"IconCashierError",className:"cashier-error__icon"}),t&&i.a.createElement("h2",{className:"cashier-error__header"},t),n&&i.a.createElement("p",{className:"cashier__paragraph"},n),r&&i.a.createElement(u.a,{className:"cashier-error__button",to:r,onClick:o},i.a.createElement("span",{className:"btn__text"},a)),!r&&a&&i.a.createElement(s.a,{className:"cashier-error__button",onClick:o,text:a,primary:!0}),c&&i.a.createElement("h2",{className:"cashier-error__footer"},c))},O=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=w(this,(e=v(t)).call.apply(e,[this].concat(o)))).error_fields={address_city:Object(f.localize)("Town/City"),address_line_1:Object(f.localize)("First line of home address"),address_postcode:Object(f.localize)("Postal Code/ZIP"),address_state:Object(f.localize)("State/Province"),email:Object(f.localize)("Email address"),phone:Object(f.localize)("Telephone"),residence:Object(f.localize)("Country of Residence")},n.onClickButton=function(){"function"==typeof n.props.error.onClickButton&&n.props.error.onClickButton(),n.clearErrorMessage()},n.closeCashierModal=function(){n.onClickButton(),n.props.toggleCashierModal()},n.clearErrorMessage=function(){n.props.setErrorMessage("")},n.acceptTNC=d(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.b.tncApproval();case 2:n.onClickButton();case 3:case"end":return e.stop()}}),e)}))),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e,t=this;switch(this.props.error.code){case"InvalidToken":e=i.a.createElement(E,{header:Object(f.localize)("Identity confirmation failed"),message:i.a.createElement(l.a,{i18n_default_text:"It looks like your link is incorrect or no longer valid."}),onClickButton:this.onClickButton,button_text:Object(f.localize)("Request a new link")});break;case"ASK_TNC_APPROVAL":e=i.a.createElement(E,{header:Object(f.localize)("Our terms and conditions have changed"),message:i.a.createElement(l.a,{i18n_default_text:"Please accept our updated <0>terms and conditions</0> to continue.",components:[i.a.createElement("a",{key:0,className:"link",target:"_blank",rel:"noopener noreferrer",href:"https://www.deriv.com/terms-and-conditions/#general"})]}),onClickButton:this.acceptTNC,button_text:Object(f.localize)("I accept")});break;case"ASK_FIX_DETAILS":e=i.a.createElement(E,{header:Object(f.localize)("Update your personal details"),message:i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{i18n_default_text:"We can't validate your personal details because there is some information missing."})," ",this.props.error.fields?i.a.createElement(l.a,{i18n_default_text:"Please update your {{details}} to continue.",values:{details:this.props.error.fields.map((function(e){return t.error_fields[e]||e})).join(", "),interpolation:{escapeValue:!1}}}):i.a.createElement(l.a,{i18n_default_text:"Please update your details to continue."})),button_link:"/account/personal-details",onClickButton:this.closeCashierModal,button_text:Object(f.localize)("Update my details"),footer:i.a.createElement(l.a,{i18n_default_text:"Need help? <0>Contact us</0>.",components:[i.a.createElement("a",{key:0,className:"link",target:"_blank",rel:"noopener noreferrer",href:"https://www.deriv.com/help-centre/"})]})});break;case"WrongResponse":e=i.a.createElement(E,{header:this.props.error.message,onClickButton:this.onClickButton,button_text:Object(f.localize)("Try again")});break;default:e=i.a.createElement(E,{header:this.props.error.message})}return e}}])&&b(n.prototype,r),o&&b(n,o),t}(i.a.Component);O.propTypes={error:o.a.object,setErrorMessage:o.a.func,toggleCashierModal:o.a.func},t.a=Object(h.b)((function(e){var t=e.modules,n=e.ui;return{setErrorMessage:t.cashier.setErrorMessage,toggleCashierModal:n.toggleCashierModal}}))(O)},661:function(e,t,n){"use strict";var r=n(2),o=n.n(r),a=n(0),i=n.n(a),c=n(35),s=n.n(c),l=(n(87),n(7)),u=n(3),f=n(11);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=m(this,(e=h(t)).call.apply(e,[this].concat(o)))).onClickSignup=function(){n.props.toggleCashierModal(),setTimeout(n.props.openRealAccountSignup,500)},n.render=function(){return i.a.createElement("div",{className:"cashier__wrapper cashier__center-align-wrapper"},i.a.createElement("div",{className:"cashier__center-align-content"},i.a.createElement("h2",{className:"cashier-error__header cashier__virtual-header"},i.a.createElement(l.a,{i18n_default_text:"You're currently using a demo account"})),n.props.has_real_account?i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"cashier__paragraph cashier__text"},i.a.createElement(l.a,{i18n_default_text:"You need to switch to a real money account to use this feature."}),i.a.createElement("br",null),i.a.createElement(l.a,{i18n_default_text:"You can do this by selecting a real account from the Account Switcher."})),i.a.createElement("div",{className:"cashier__account-switch-icon"})):i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"cashier__paragraph cashier__text"},i.a.createElement(l.a,{i18n_default_text:"You need a real money account to use this feature. It's easy to create a real money account and start trading."})),i.a.createElement(s.a,{className:"cashier-error__button",has_effect:!0,text:Object(u.localize)("Create my real account"),onClick:n.onClickSignup,primary:!0}))))},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),t}(i.a.Component);y.propTypes={has_real_account:o.a.bool,openRealAccountSignup:o.a.func,toggleCashierModal:o.a.func},t.a=Object(f.b)((function(e){var t=e.client,n=e.ui;return{has_real_account:t.has_real_account,openRealAccountSignup:n.openRealAccountSignup,toggleCashierModal:n.toggleCashierModal}}))(y)},664:function(e,t,n){"use strict";var r=n(2),o=n.n(r),a=n(0),i=n.n(a),c=n(35),s=n.n(c),l=(n(87),n(9)),u=n(7),f=n(3),p=n(11);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=h(this,(e=_(t)).call.apply(e,[this].concat(o)))).onClickDeposit=function(){n.props.setModalIndex(0)},n.render=function(){return i.a.createElement("div",{className:"cashier__wrapper cashier__no-balance"},i.a.createElement(l.a,{icon:"IconNoBalance",className:"cashier__no-balance-icon"}),i.a.createElement("h2",{className:"withdraw__header"},i.a.createElement(u.a,{i18n_default_text:"You have no funds in your {{currency}} account",values:{currency:n.props.currency.toUpperCase()}})),i.a.createElement("p",{className:"cashier__text"},i.a.createElement(u.a,{i18n_default_text:"Please make a deposit to use this feature."})),i.a.createElement(s.a,{className:"cashier__no-balance-button",has_effect:!0,text:Object(f.localize)("Deposit now"),onClick:n.onClickDeposit,primary:!0}))},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),t}(i.a.Component);d.propTypes={currency:o.a.string,setModalIndex:o.a.func},t.a=Object(p.b)((function(e){var t=e.client,n=e.ui;return{currency:t.currency,setModalIndex:n.setModalIndex}}))(d)},667:function(e,t,n){"use strict";var r=n(2),o=n.n(r),a=n(0),i=n.n(a),c=n(48),s=n.n(c),l=(n(88),n(658));function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,h(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.props.is_loading&&i.a.createElement(l.a,null),this.props.iframe_url&&i.a.createElement(s.a,{autoHeight:!0,autoHide:!0,autoHeightMax:550,renderTrackHorizontal:function(e){return i.a.createElement("div",f({},e,{className:"track-horizontal",style:{display:"none"}}))},renderThumbHorizontal:function(e){return i.a.createElement("div",f({},e,{className:"thumb-horizontal",style:{display:"none"}}))}},i.a.createElement("iframe",{className:"cashier__content",height:this.props.iframe_height,src:this.props.iframe_url,frameBorder:"0",scrolling:"auto"})))}}])&&p(n.prototype,r),o&&p(n,o),t}(i.a.Component);y.propTypes={className:o.a.string,iframe_height:o.a.oneOfType([o.a.number,o.a.string]),iframe_url:o.a.string,is_loading:o.a.bool},t.a=y},668:function(e,t,n){"use strict";var r=n(2),o=n.n(r),a=n(0),i=n.n(a),c=n(35),s=n.n(c),l=(n(87),n(7)),u=n(37),f=n(3),p=n(9),m=n(11);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=y(this,(e=d(t)).call.apply(e,[this].concat(o)))).onClickVerification=function(){n.props.setVerificationResendClicked(!0)},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return i.a.createElement("div",{className:"withdraw__email-sent"},i.a.createElement(p.a,{icon:"IconEmailSent",className:"withdraw__icon"}),i.a.createElement("p",{className:"withdraw__email-sent-title"},i.a.createElement(l.a,{i18n_default_text:"We've sent you an email."})),i.a.createElement("p",{className:"withdraw__email-sent-text"},i.a.createElement(l.a,{i18n_default_text:"Please click on the link in the email to access withdrawal."})),i.a.createElement("div",{className:"withdraw__email-resend"},this.props.is_resend_clicked?i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"withdraw__email-sent-title withdraw__email-sent-title-sub"},i.a.createElement(l.a,{i18n_default_text:"Didn't receive the email?"})),i.a.createElement("p",{className:"withdraw__email-sent-text"},i.a.createElement(l.a,{i18n_default_text:"Check your spam or junk folder. If it's not there, try resending the email."})),i.a.createElement(s.a,{className:"withdraw__resend-button",classNameSpan:"withdraw__resend-button-text",is_disabled:this.props.resend_timeout<60,has_effect:!0,text:this.props.resend_timeout<60?Object(f.localize)("Resend email in {{seconds}}s",{seconds:this.props.resend_timeout}):Object(f.localize)("Resend email"),onClick:this.props.resendVerificationEmail,primary:!0})):i.a.createElement(u.a,{className:"withdraw__email-resend-text",onClick:this.onClickVerification},i.a.createElement(l.a,{i18n_default_text:"Didn't receive the email?"}))))}}])&&_(n.prototype,r),o&&_(n,o),t}(i.a.Component);w.propTypes={is_resend_clicked:o.a.bool,resend_timeout:o.a.number,resendVerificationEmail:o.a.func,setVerificationResendClicked:o.a.func},t.a=Object(m.b)((function(e){var t=e.modules;return{resendVerificationEmail:t.cashier.resendVerificationEmail,sendVerificationEmail:t.cashier.sendVerificationEmail,setVerificationResendClicked:t.cashier.setVerificationResendClicked}}))(w)},721:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(0),i=n.n(a),c=n(11),s=n(660),l=n(664),u=n(35),f=n.n(u),p=(n(87),n(7)),m=n(3),h=n(9),_=n(668);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,w(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return i.a.createElement("div",{className:"cashier__wrapper"},this.props.is_email_sent?i.a.createElement(_.a,{is_email_sent:this.props.is_email_sent,is_resend_clicked:this.props.is_resend_clicked,resend_timeout:this.props.resend_timeout}):i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{icon:"IconAuthenticateWithdrawals",className:"withdraw__icon"}),i.a.createElement("p",{className:"withdraw__header"},i.a.createElement(p.a,{i18n_default_text:"To initiate withdrawal, we need to authenticate you via email."})),i.a.createElement("p",{className:"withdraw__text"},i.a.createElement(p.a,{i18n_default_text:"This is a safeguard against unauthorised withdrawals from your account."})),i.a.createElement(f.a,{className:"withdraw__verify-button",classNameSpan:"withdraw__verify-button-text",has_effect:!0,text:Object(m.localize)("Request authentication email"),onClick:this.props.sendVerificationEmail,primary:!0})))}}])&&d(n.prototype,r),o&&d(n,o),t}(i.a.Component);g.propTypes={is_email_sent:o.a.bool,is_resend_clicked:o.a.bool,resend_timeout:o.a.number,sendVerificationEmail:o.a.func};var E=Object(c.b)((function(e){var t=e.modules;return{is_email_sent:t.cashier.config.withdraw.verification.is_email_sent,is_resend_clicked:t.cashier.config.withdraw.verification.is_resend_clicked,resend_timeout:t.cashier.config.withdraw.verification.resend_timeout,sendVerificationEmail:t.cashier.sendVerificationEmail}}))(g),O=n(661),j=n(667);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var N=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),S(this,x(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.props.setActiveTab(this.props.container),this.props.onMount(this.props.verification_code)}},{key:"render",value:function(){return i.a.createElement(j.a,{iframe_height:this.props.iframe_height,iframe_url:this.props.iframe_url,is_loading:this.props.is_loading})}}])&&C(n.prototype,r),o&&C(n,o),t}(i.a.Component);N.propTypes={container:o.a.string,iframe_height:o.a.oneOfType([o.a.number,o.a.string]),iframe_url:o.a.string,is_loading:o.a.bool,onMount:o.a.func,setActiveTab:o.a.func,verification_code:o.a.string};var T=Object(c.b)((function(e){var t=e.client,n=e.modules;return{verification_code:t.verification_code.payment_withdraw,container:n.cashier.config.withdraw.container,iframe_height:n.cashier.config.withdraw.iframe_height,iframe_url:n.cashier.config.withdraw.iframe_url,is_loading:n.cashier.is_loading,setActiveTab:n.cashier.setActiveTab,onMount:n.cashier.onMount}}))(N);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),R(this,z(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.props.setActiveTab(this.props.container)}},{key:"componentWillUnmount",value:function(){this.props.setErrorMessage("")}},{key:"render",value:function(){return this.props.is_virtual?i.a.createElement(O.a,null):this.props.has_no_balance?i.a.createElement(l.a,null):this.props.error.message?i.a.createElement(s.a,{error:this.props.error,container:"withdraw"}):this.props.verification_code||this.props.iframe_url?i.a.createElement(T,null):i.a.createElement(E,null)}}])&&A(n.prototype,r),o&&A(n,o),t}(i.a.Component);I.propTypes={container:o.a.string,error:o.a.object,has_no_balance:o.a.bool,iframe_url:o.a.string,is_virtual:o.a.bool,setActiveTab:o.a.func,verification_code:o.a.string};t.default=Object(c.b)((function(e){var t=e.client,n=e.modules;return{is_virtual:t.is_virtual,verification_code:t.verification_code.payment_withdraw,container:n.cashier.config.withdraw.container,error:n.cashier.config.withdraw.error,has_no_balance:n.cashier.has_no_balance,iframe_url:n.cashier.config.withdraw.iframe_url,setActiveTab:n.cashier.setActiveTab,setErrorMessage:n.cashier.setErrorMessage}}))(I)}}]);
//# sourceMappingURL=1.6ad1b8b1422a622f650e.js.map