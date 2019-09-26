(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{627:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r.n(n),o=r(0),c=r.n(o),s=r(17),i=r(6),l=r.n(i),u=r(61),f=r.n(u),p=(r(97),r(573)),m=r.n(p),_=(r(574),r(568)),b=r.n(_),h=(r(569),r(577)),y=r(13),d=r(14),v=r(199),g=r(98),w=r(3),E=r(23),O=r(124),j=r(564);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(r,!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e,t,r,n,a,o,c){try{var s=e[o](c),i=s.value}catch(e){return void r(e)}s.done?t(i):Promise.resolve(i).then(n,a)}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function k(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=function(e,t){var r=t.balance,n=t.currency,a=t.transfer_limit,o={};return e.amount?Object(O.b)(e.amount,{type:"float",decimals:Object(y.getDecimalPlaces)(n),min:a.min,max:a.max})?+r<+e.amount&&(o.amount=Object(w.localize)("Insufficient balance.")):o.amount=Object(O.a)().number.message:o.amount=Object(w.localize)("This field is required."),o},F=function(e){var t=e.account,r=e.idx;return c.a.createElement(c.a.Fragment,{key:r},(t.currency||t.mt_icon)&&c.a.createElement(E.a,{icon:"IconAccountsCurrency",className:"account-transfer__currency-icon",type:t.mt_icon||t.currency.toLowerCase(),height:16,width:16}),c.a.createElement("span",{className:"account-transfer__currency"},t.text),c.a.createElement("span",{className:"account-transfer__balance"},"(",c.a.createElement(v.a,{amount:t.balance,currency:t.currency}),")"))},z=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=k(this,(e=D(t)).call.apply(e,[this].concat(a)))).validateTransferPassthrough=function(e){return I(e,{balance:r.props.selected_from.balance,currency:r.props.selected_from.currency,transfer_limit:r.props.transfer_limit})},r.onTransferPassthrough=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.props.requestTransferBetweenAccounts({amount:t.amount});case 2:e.sent.error&&n.setSubmitting(!1);case 4:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function c(e){S(o,n,a,c,s,"next",e)}function s(e){S(o,n,a,c,s,"throw",e)}c(void 0)}))});return function(e,r){return t.apply(this,arguments)}}(),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this,t=[],r=[],n=[],a=[];this.props.accounts_list.forEach((function(o,s){var i=c.a.createElement(F,{idx:s,account:o}),l=o.value;(o.is_mt?r:t).push({text:i,value:l});var u=o.value===e.props.selected_from.value,f=e.props.selected_from.is_mt&&o.is_mt,p=e.props.selected_from.is_crypto&&o.is_crypto,m=f||u||p;(o.is_mt?a:n).push({text:i,value:l,disabled:m})}));var o=P(C({},Object(w.localize)("Deriv accounts"),t),r.length&&C({},Object(w.localize)("DMT5 accounts"),r)),s=P(C({},Object(w.localize)("Deriv accounts"),n),a.length&&C({},Object(w.localize)("DMT5 accounts"),a));return c.a.createElement("div",{className:"cashier__wrapper--align-left"},c.a.createElement(c.a.Fragment,null,c.a.createElement(h.c,{initialValues:{amount:""},validate:this.validateTransferPassthrough,onSubmit:this.onTransferPassthrough},(function(t){var r=t.errors,n=t.isSubmitting,a=t.isValid,i=t.touched,u=t.handleChange;return c.a.createElement(c.a.Fragment,null,n?c.a.createElement("div",{className:"cashier__loader-wrapper"},c.a.createElement(j.a,{className:"cashier__loader"})):c.a.createElement(h.b,null,c.a.createElement(m.a,{id:"transfer_from",className:"cashier__drop-down account-transfer__drop-down",classNameDisplay:"cashier__drop-down-display",classNameDisplaySpan:"cashier__drop-down-display-span",classNameItems:"cashier__drop-down-items",classNameLabel:"cashier__drop-down-label",list:o,name:"transfer_from",value:e.props.selected_from.value,onChange:e.props.onChangeTransferFrom}),c.a.createElement(E.a,{className:"cashier__transferred-icon account-transfer__transfer-icon",icon:"IconBack"}),c.a.createElement(m.a,{id:"transfer_to",className:"cashier__drop-down account-transfer__drop-down",classNameDisplay:"cashier__drop-down-display",classNameDisplaySpan:"cashier__drop-down-display-span",classNameItems:"cashier__drop-down-items",classNameLabel:"cashier__drop-down-label",list:s,name:"transfer_to",value:e.props.selected_to.value,onChange:e.props.onChangeTransferTo}),c.a.createElement(h.a,{name:"amount"},(function(t){var n=t.field;return c.a.createElement(b.a,T({},n,{onChange:function(t){e.props.setErrorMessage(""),u(t)},className:"cashier__input-long dc-input--no-placeholder",type:"text",label:Object(w.localize)("Amount"),error:i.amount&&r.amount,required:!0,leading_icon:e.props.selected_from.currency?c.a.createElement("span",{className:l()("symbols","symbols--".concat(e.props.selected_from.currency.toLowerCase()))}):void 0,autoComplete:"off",maxLength:"30",hint:e.props.transfer_limit.max&&c.a.createElement(d.a,{i18n_default_text:"Transfer limit: <0 />",components:[c.a.createElement(v.a,{key:0,amount:e.props.transfer_limit.max,currency:e.props.selected_from.currency})]})}))})),c.a.createElement("div",null,c.a.createElement("div",{className:"account-transfer__notes"},c.a.createElement("div",{className:"account-transfer__bullet-wrapper"},c.a.createElement("div",{className:"account-transfer__bullet"}),c.a.createElement("span",null,c.a.createElement(d.a,{i18n_default_text:"Transfer limits may vary depending on changes in exchange rates."}))),c.a.createElement("div",{className:"account-transfer__bullet-wrapper"},c.a.createElement("div",{className:"account-transfer__bullet"}),c.a.createElement("span",null,c.a.createElement(d.a,{i18n_default_text:"Transfers are subject to a {{transfer_fee}}% transfer fee or {{currency}} {{minimum_fee}}, whichever is higher.",values:{transfer_fee:e.props.transfer_fee,currency:e.props.selected_from.currency,minimum_fee:e.props.minimum_fee}}))),c.a.createElement("div",{className:"account-transfer__bullet-wrapper"},c.a.createElement("div",{className:"account-transfer__bullet"}),c.a.createElement("span",null,c.a.createElement(d.a,{i18n_default_text:"Transfers are possible only between your fiat and cryptocurrency accounts (and vice versa), or between your {{website_name}} account and your {{website_name}} MT5 (DMT5) account (or vice versa).",values:{website_name:g.website_name}}))),c.a.createElement("div",{className:"account-transfer__bullet-wrapper"},c.a.createElement("div",{className:"account-transfer__bullet"}),c.a.createElement("span",null,c.a.createElement(d.a,{i18n_default_text:"Transfers may be unavailable at times such as when the market is closed (weekends or holidays), periods of high volatility, or when there are technical issues."}))))),c.a.createElement("div",{className:"cashier__form-submit"},e.props.error.message&&c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,{icon:"IconEmergency",className:"cashier__form-error-icon"}),c.a.createElement(E.a,{icon:"IconError",className:"cashier__form-error-small-icon"}),c.a.createElement("p",{className:"cashier__form-error"},e.props.error.message)),c.a.createElement(f.a,{className:"cashier__form-submit-button btn--primary btn--primary--orange",type:"submit",is_disabled:!a||n},c.a.createElement(d.a,{i18n_default_text:"Transfer"})))))}))))}}])&&M(r.prototype,n),a&&M(r,a),t}(c.a.Component);z.propTypes={accounts_list:a.a.array,error:a.a.object,minimum_fee:a.a.string,onChangeTransferFrom:a.a.func,onChangeTransferTo:a.a.func,requestTransferBetweenAccounts:a.a.func,selected_from:a.a.object,selected_to:a.a.object,setErrorMessage:a.a.func,transfer_fee:a.a.number,transfer_limit:a.a.object};var B=Object(s.b)((function(e){var t=e.modules;return{accounts_list:t.cashier.config.account_transfer.accounts_list,minimum_fee:t.cashier.config.account_transfer.minimum_fee,onChangeTransferFrom:t.cashier.onChangeTransferFrom,onChangeTransferTo:t.cashier.onChangeTransferTo,requestTransferBetweenAccounts:t.cashier.requestTransferBetweenAccounts,selected_from:t.cashier.config.account_transfer.selected_from,selected_to:t.cashier.config.account_transfer.selected_to,setErrorMessage:t.cashier.setErrorMessage,transfer_fee:t.cashier.config.account_transfer.transfer_fee,transfer_limit:t.cashier.config.account_transfer.transfer_limit}}))(z);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var J=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=R(this,(e=q(t)).call.apply(e,[this].concat(a)))).render=function(){return c.a.createElement("div",{className:"cashier__wrapper account-transfer__no-balance"},c.a.createElement(E.a,{icon:"IconNoBalance",className:"account-transfer__no-balance-icon"}),c.a.createElement("h2",{className:"withdraw__header"},c.a.createElement(d.a,{i18n_default_text:"You need at least two accounts"})),c.a.createElement("p",{className:"cashier__text"},c.a.createElement(d.a,{i18n_default_text:"Please create a second account (Deriv or DMT5) to enable fund transfers."})))},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(t,e),t}(c.a.Component);function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){return!t||"object"!==V(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var H=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=U(this,(e=W(t)).call.apply(e,[this].concat(a)))).onClickDeposit=function(){r.props.setModalIndex(0)},r.render=function(){return c.a.createElement("div",{className:"cashier__wrapper account-transfer__no-balance"},c.a.createElement(E.a,{icon:"IconNoBalance",className:"account-transfer__no-balance-icon"}),c.a.createElement("h2",{className:"withdraw__header"},c.a.createElement(d.a,{i18n_default_text:"You have no funds in your {{website_name}} account",values:{website_name:g.website_name}})),c.a.createElement("p",{className:"cashier__text"},c.a.createElement(d.a,{i18n_default_text:"Please make a deposit to enable fund transfers."})),c.a.createElement(f.a,{className:"btn--primary btn--primary--orange account-transfer__no-balance-button",has_effect:!0,text:Object(w.localize)("Deposit now"),onClick:r.onClickDeposit}))},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(t,e),t}(c.a.Component);H.propTypes={setModalIndex:a.a.func};var K=H,Q=r(27);function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Z(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function $(e,t){return!t||"object"!==X(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function te(e,t){return(te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var re=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),$(this,ee(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&te(e,t)}(t,e),r=t,(n=[{key:"componentWillUnmount",value:function(){this.props.resetAccountTransfer()}},{key:"render",value:function(){var e=this.props,t=e.receipt,r=e.selected_from,n=e.selected_to;return c.a.createElement("div",{className:"cashier__wrapper account-transfer__receipt"},c.a.createElement(E.a,{icon:"IconTransferDone",className:"account-transfer__receipt-icon"}),c.a.createElement("h2",{className:"cashier__header"},c.a.createElement(d.a,{i18n_default_text:"Your funds have been transferred."})),c.a.createElement("div",{className:"cashier__transferred-amount cashier__text--bold"},c.a.createElement("span",{className:l()("symbols","symbols--".concat(r.currency.toLowerCase()))}),t.amount_transferred),c.a.createElement("div",{className:"cashier__transferred-details-wrapper"},c.a.createElement("span",{className:"account-transfer__transfer-details-from"},c.a.createElement(E.a,{icon:"IconAccountsCurrency",type:r.mt_icon||r.currency.toLowerCase(),height:16,width:16}),c.a.createElement("span",{className:"cashier__transferred-details"},c.a.createElement("span",{className:"cashier__text--bold"},r.text))),c.a.createElement(E.a,{className:"cashier__transferred-icon",icon:"IconBack"}),c.a.createElement("span",{className:"account-transfer__transfer-details-to"},c.a.createElement(E.a,{icon:"IconAccountsCurrency",type:n.mt_icon||n.currency.toLowerCase(),height:16,width:16}),c.a.createElement("span",{className:"cashier__transferred-details"},c.a.createElement("span",{className:"cashier__text--bold"},n.text)))),c.a.createElement(f.a,{className:"btn--primary btn--primary--orange account-transfer__button-done",has_effect:!0,text:Object(w.localize)("Done"),onClick:this.props.resetAccountTransfer}))}}])&&Z(r.prototype,n),a&&Z(r,a),t}(c.a.Component);re.propTypes={receipt:a.a.object,resetAccountTransfer:a.a.func,selected_from:a.a.object,selected_to:a.a.object,toggleCashierModal:a.a.func};var ne=Object(Q.g)(Object(s.b)((function(e){var t=e.modules,r=e.ui;return{receipt:t.cashier.config.account_transfer.receipt,resetAccountTransfer:t.cashier.resetAccountTransfer,selected_from:t.cashier.config.account_transfer.selected_from,selected_to:t.cashier.config.account_transfer.selected_to,toggleCashierModal:r.toggleCashierModal}}))(re)),ae=r(565);function oe(e){return(oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ce(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function se(e,t){return!t||"object"!==oe(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ie(e){return(ie=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function le(e,t){return(le=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ue=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),se(this,ie(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&le(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){this.props.setActiveTab(this.props.container),this.props.onMount()}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,this.props.is_loading?c.a.createElement(j.a,{className:"cashier__loader"}):c.a.createElement(c.a.Fragment,null,this.props.error.button_text?c.a.createElement(ae.a,{error:this.props.error}):this.props.has_no_account?c.a.createElement(J,null):this.props.has_no_balance?c.a.createElement(K,{setModalIndex:this.props.setModalIndex}):this.props.is_transfer_successful?c.a.createElement(ne,null):c.a.createElement(B,{error:this.props.error})))}}])&&ce(r.prototype,n),a&&ce(r,a),t}(c.a.Component);ue.propTypes={container:a.a.string,error:a.a.object,has_no_account:a.a.bool,has_no_balance:a.a.bool,is_loading:a.a.bool,is_transfer_successful:a.a.bool,onMount:a.a.func,setActiveTab:a.a.func,setModalIndex:a.a.func};t.default=Object(s.b)((function(e){var t=e.modules,r=e.ui;return{container:t.cashier.config.account_transfer.container,error:t.cashier.config.account_transfer.error,has_no_account:t.cashier.config.account_transfer.has_no_account,has_no_balance:t.cashier.config.account_transfer.has_no_balance,is_loading:t.cashier.is_loading,is_transfer_successful:t.cashier.config.account_transfer.is_transfer_successful,onMount:t.cashier.onMountAccountTransfer,setActiveTab:t.cashier.setActiveTab,setModalIndex:r.setModalIndex}}))(ue)}}]);
//# sourceMappingURL=6.41f84f2d8cf9395c9a1c.js.map