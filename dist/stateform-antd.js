!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t(require("react"),require("antd"),require("moment")):"function"===typeof define&&define.amd?define([,,],t):"object"===typeof exports?exports.stateform=t(require("react"),require("antd"),require("moment")):e.stateform=t(e[void 0],e[void 0],e[void 0])}(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=6)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleInput=function(e){n.setState({value:e}),n.props.onInput(e)},n.handleChange=function(e){n.handleInput(e.target.value)},n.state={value:e.value},n}return a(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){e.value!==this.state.value&&this.setState({value:e.value})}},{key:"render",value:function(){return"Not Implemented"}}]),t}(u.a.Component);t.a=c},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),l=n(1),c=(n.n(l),n(14)),s=n.n(c),f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"render",value:function(){var e=this.props,t=e.cols,n=e.layout,r=e.label,o=e.error,a=e.required,i=e.help,c=e.children,p=e.className,h=t.item,b=t.label,y=t.wrapper;"object"!==("undefined"===typeof h?"undefined":f(h))&&(t.item={span:h}),"object"!==("undefined"===typeof b?"undefined":f(b))&&(t.label={span:b}),"object"!==("undefined"===typeof y?"undefined":f(y))&&(t.wrapper={span:y});var d=u.a.createElement(l.Col,{className:"sf-item__label",span:t.label.span,offset:t.label.offset,xs:t.xsLabel,sm:t.smLabel,md:t.mdLabel,lg:t.lgLabel},r&&u.a.createElement("span",{className:"sf-item__label-text"+(a?" sf-item__label-text--required":"")},r),i&&u.a.createElement(l.Icon,{className:"sf-item__help-icon",type:"question-circle-o",title:i})),m=u.a.createElement(l.Col,{className:"sf-item__wrapper",span:t.wrapper.span,offset:t.wrapper.offset,xs:t.xsWrapper,sm:t.smWrapper,md:t.mdWrapper,lg:t.lgWrapper},c,u.a.createElement("div",{className:"sf-item__error"},o));return"vertical"===n?u.a.createElement("div",{className:s()({"sf-item":!0,"sf-item--vertical":!0,"sf-item--error":o},e.class,p)},u.a.createElement(l.Row,null,d),u.a.createElement(l.Row,null,m)):"inline"===n?u.a.createElement(l.Col,{span:t.item.span,offset:t.item.offset,xs:t.xsItem,sm:t.smItem,md:t.mdItem,lg:t.lgItem,className:s()({"sf-item":!0,"sf-item--inline":!0,"sf-item--error":o},e.class,p)},d,m):u.a.createElement(l.Row,{className:s()({"sf-item":!0,"sf-item--horizontal":!0,"sf-item--error":o},e.class,p)},d,m)}}]),t}(u.a.Component);t.a=h},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),l=n(1),c=(n.n(l),n(11)),s=n.n(c),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));h.call(n);var a=e.value;return n.state=a?{inputValue:n.valueToMoment(a),value:a}:{},n}return a(t,e),f(t,[{key:"valueToMoment",value:function(e){return"second"===this.props.valueType?s.a.unix(e):s()(e)}},{key:"momentToValue",value:function(e){var t=this.props.valueType;return"second"===t?e.unix():"millisecond"===t?e.valueOf():e.toISOString()}},{key:"componentWillReceiveProps",value:function(e){var t=e.value;t!==this.state.value&&(console.log(t),console.log(this.state.value),this.setState({inputValue:this.valueToMoment(t),value:t}))}},{key:"render",value:function(){var e=this.state,t=this.props,n=this.handleInput,r=this.type,o=t.format,a=t.placeholder,i=t.disabled,c=o||("datetime"===r?"YYYY-MM-DD HH:mm:ss":"YYYY-MM-DD");return u.a.createElement(l.DatePicker,{i:!0,allowClear:!0,value:e.inputValue,format:c,showTime:"datetime"===r,placeholder:a,disabled:i,onChange:n})}}]),t}(u.a.Component),h=function(){var e=this;this.type="date",this.handleInput=function(t){var n=null==t?null:e.momentToValue("datetime"===e.type?t:t.startOf("day"));e.setState({inputValue:t,value:n},function(){e.props.onInput(n)})}};t.a=p},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),l=n(1),c=(n.n(l),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),s=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));f.call(n);var a=e.value;return n.fileId=0,n.state={value:a,fileList:n.transformValueToFileList(a)},n}return a(t,e),c(t,[{key:"onUpload",value:function(e,t){}},{key:"onRemove",value:function(e){}},{key:"createUploadCallback",value:function(e){var t=this;return function(n){Object.assign(e,{status:n.status,name:n.name||e.name,value:n.value,url:n.url,thumbUrl:n.thumbUrl,response:n.error}),"done"===e.status?t.handleInput(t.state.fileList):t.forceUpdate()}}},{key:"transformValueToFileList",value:function(e){return e?this.isMultiple?e.map(this.createFileItem):[this.createFileItem(e)]:[]}},{key:"transformFileListToValue",value:function(e){var t=[];return e.forEach(function(e){"done"===e.status&&t.push(e.value||e.url)}),this.isMultiple?t:t[0]}},{key:"handleInput",value:function(e){var t=this.transformFileListToValue(e);this.setState({value:t,fileList:e}),this.props.onInput(t)}},{key:"componentWillReceiveProps",value:function(e){var t=e.value;t!==this.state.value&&this.setState({value:t,fileList:this.transformValueToFileList(t)})}},{key:"render",value:function(){var e=this.state,t=this.props,n=this.handleUpload,r=this.handleRemove,o=this.isMultiple,a=e.fileList,i=t.disabled,c=t.listType,s=t.accept,f=t.uploadText,p=void 0;return p="picture-card"===c?u.a.createElement("div",null,u.a.createElement(l.Icon,{type:"plus"}),u.a.createElement("div",null,f||"Select File")):u.a.createElement(l.Button,null,u.a.createElement(l.Icon,{type:"upload"}),f||"Select File"),u.a.createElement(l.Upload,{action:"_blank",accept:s,listType:c,disabled:i,multiple:o,fileList:a,beforeUpload:n,onRemove:r},p)}}]),t}(u.a.Component),f=function(){var e=this;this.isMultiple=!0,this.handleUpload=function(t){var n=e.createFileItem(t,"uploading");return e.setState(function(e){return{value:e.value,fileList:e.fileList.concat(n)}}),e.onUpload(t,e.props,e.createUploadCallback(n)),!1},this.handleRemove=function(t){e.handleInput(e.state.fileList.filter(function(e){return e!==t})),e.onRemove(t)},this.createFileItem=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"done";t="string"===typeof t?{url:t}:t;var r=t,o=r.uid,a=r.name,i=r.url,u=r.thumbUrl;return o=o||"file"+e.fileId++,a=a||i,{uid:o,name:a,url:i,thumbUrl:u,status:n}}};t.a=s},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.upload,n=void 0===t?{}:t,i=e.components,l=function(e){function t(){var e,a,i,u;r(this,t);for(var l=arguments.length,c=Array(l),s=0;s<l;s++)c[s]=arguments[s];return a=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),i.onUpload=n.handleUpload,i.onRemove=n.handleRemove,u=a,o(i,u)}return a(t,e),t}(u.Upload),c=function(e){function t(){var e,a,i,u;r(this,t);for(var l=arguments.length,c=Array(l),s=0;s<l;s++)c[s]=arguments[s];return a=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),i.onUpload=n.handleUpload,i.onRemove=n.handleRemove,u=a,o(i,u)}return a(t,e),t}(u.UploadList),f=Object.assign({},u,{Upload:l,UploadList:c},i);return function(e){function t(){var e,n,a,i;r(this,t);for(var u=arguments.length,l=Array(u),c=0;c<u;c++)l[c]=arguments[c];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.components=f,i=n,o(a,i)}return a(t,e),t}(s.a)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"createStateForm",function(){return i});var u=n(7),l=n(3),c=n(25),s=(n.n(c),n(26));n.d(t,"FormItemLayout",function(){return l.a}),t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),o=n(9),a=n(10),i=n(12),u=n(13),l=n(15),c=n(16),s=n(17),f=n(18),p=n(19),h=n(20),b=n(21),y=n(22),d=n(23),m=n(24);n.d(t,"BoolCheck",function(){return r.a}),n.d(t,"Checkbox",function(){return o.a}),n.d(t,"DatePicker",function(){return a.a}),n.d(t,"DateTimePicker",function(){return i.a}),n.d(t,"Form",function(){return u.a}),n.d(t,"Input",function(){return l.a}),n.d(t,"InputNumber",function(){return c.a}),n.d(t,"Map",function(){return s.a}),n.d(t,"List",function(){return f.a}),n.d(t,"Radio",function(){return p.a}),n.d(t,"Select",function(){return h.a}),n.d(t,"Switch",function(){return b.a}),n.d(t,"Textarea",function(){return y.a}),n.d(t,"Upload",function(){return d.a}),n.d(t,"UploadList",function(){return m.a})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),l=n(1),c=(n.n(l),n(2)),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){var e=this.state,t=this.props,n=this.handleInput,r=t.content,o=t.disabled,a=!0===e.value?[!0]:[];return u.a.createElement(l.Checkbox.Group,{value:a,disabled:o,onChange:function(e){return n(!0===e[0])}},u.a.createElement(l.Checkbox,{value:!0},u.a.createElement("span",{dangerouslySetInnerHTML:{__html:r}})))}}]),t}(c.a);t.a=f},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),l=n(1),c=(n.n(l),n(2)),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){var e=this.state,t=this.props,n=this.handleInput,r=t.option,o=t.disabled,a=t.disabledItems,i=void 0===a?{}:a;return u.a.createElement(l.Checkbox.Group,{value:e.value,disabled:o,onChange:n},Object.keys(r).map(function(e){return u.a.createElement(l.Checkbox,{key:e,value:r[e],disabled:i[e]},e)}))}}]),t}(c.a);t.a=f},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(4),u=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(i.a);t.a=u},function(e,t){e.exports=n},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(4),u=function(e){function t(){var e,n,a,i;r(this,t);for(var u=arguments.length,l=Array(u),c=0;c<u;c++)l[c]=arguments[c];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.type="datetime",i=n,o(a,i)}return a(t,e),t}(i.a);t.a=u},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),l=n(1),c=(n.n(l),n(3)),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.footer,n=e.cols,r=e.layout;return u.a.createElement(l.Form,{className:"sf-item--Form"},e.children,t&&u.a.createElement(c.a,{className:"sf-footer",layout:r,cols:t.cols||n},!0===t.showSubmit&&u.a.createElement(l.Button,{className:"sf-footer__submit",onClick:e.onSubmit,disabled:t.disableSubmit},t.submitText||"Submit"),!0===t.showReset&&u.a.createElement(l.Button,{className:"sf-footer__reset",onClick:e.onReset,disabled:t.disableReset},t.resetText||"Reset")))}}]),t}(i.Component);t.a=f},function(e,t,n){var r,o;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=n.apply(null,r);i&&e.push(i)}else if("object"===o)for(var u in r)a.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?(n.default=n,e.exports=n):(r=[],void 0!==(o=function(){return n}.apply(t,r))&&(e.exports=o))}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),l=n(1),c=(n.n(l),n(2)),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){var e=this.state,t=this.props,n=this.handleChange,r=t.type,o=t.prepend,a=t.append,i=t.placeholder,c=t.disabled,s=t.readOnly,f=t.autoComplete,p=t.autoFocus;return u.a.createElement(l.Input,{type:r,value:e.value,addonBefore:o,addonAfter:a,placeholder:i,readOnly:s,autoComplete:f,autoFocus:p,onChange:n,disabled:c})}}]),t}(c.a);t.a=f},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),l=n(1),c=(n.n(l),n(2)),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){var e=this.state,t=this.props,n=this.handleInput,r=t.placeholder,o=t.disabled;return u.a.createElement(l.InputNumber,{value:e.value,placeholder:r,onChange:n,disabled:o})}}]),t}(c.a);t.a=f},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return u.a.createElement("div",null,this.props.children)}}]),t}(u.a.Component);t.a=c},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),l=n(1),c=(n.n(l),n(2)),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){var e,n,a,i;r(this,t);for(var u=arguments.length,l=Array(u),c=0;c<u;c++)l[c]=arguments[c];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.addItem=function(){a.handleInput((a.props.value||[]).concat(null))},a.removeItem=function(e){return function(){a.handleInput(a.props.value.filter(function(t,n){return n!==e}),e)}},i=n,o(a,i)}return a(t,e),s(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.isAddable,r=t.addText,o=t.children.map(function(t,n){return u.a.createElement("div",{key:t.key,className:"sf-item-list__item"},t,u.a.createElement("a",{className:"sf-item-list__remove",onClick:e.removeItem(n)},u.a.createElement(l.Icon,{className:"dynamic-delete-button",type:"minus-circle-o"})))});return u.a.createElement("div",null,o,!1!==n&&u.a.createElement(l.Button,{block:!0,type:"dashed",onClick:this.addItem},u.a.createElement(l.Icon,{type:"plus"})," ",r||"Add Item"))}}]),t}(c.a);t.a=f},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),l=n(1),c=(n.n(l),n(2)),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){var e=this.state,t=this.props,n=this.handleChange,r=t.option,o=t.disabled,a=t.disabledItems,i=void 0===a?{}:a;return u.a.createElement(l.Radio.Group,{value:e.value,disabled:o,onChange:n},Object.keys(r).map(function(e){return u.a.createElement(l.Radio,{key:e,value:r[e],disabled:i[e]},e)}))}}]),t}(c.a);t.a=f},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),l=n(1),c=(n.n(l),n(2)),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){var e=this.state,t=this.props,n=this.handleInput,r=t.option,o=t.disabled,a=t.disabledItems,i=void 0===a?{}:a,c=l.Select.Option;return u.a.createElement(l.Select,{value:e.value,placeholder:t.placeholder,disabled:o,onChange:n,mode:t.multiple?"multiple":void 0,allowClear:!0},Object.keys(r).map(function(e){return u.a.createElement(c,{key:e,value:r[e],disabled:i[e]},e)}))}}]),t}(c.a);t.a=f},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),l=n(1),c=(n.n(l),n(2)),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){var e=this.state,t=this.props,n=this.handleInput;return u.a.createElement(l.Switch,{value:e.value,disabled:t.disabled,checkedChildren:t.onText,unCheckedChildren:t.offText,onChange:n})}}]),t}(c.a);t.a=f},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),l=n(1),c=(n.n(l),n(2)),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){var e=this.state,t=this.props,n=this.handleChange,r=t.disabled,o=t.placeholder;return u.a.createElement(l.Input.TextArea,{value:e.value,placeholder:o,disabled:r,onChange:n})}}]),t}(c.a);t.a=f},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(5),u=function(e){function t(){var e,n,a,i;r(this,t);for(var u=arguments.length,l=Array(u),c=0;c<u;c++)l[c]=arguments[c];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.isMultiple=!1,a.handleUpload=function(e){var t=a.state.fileList[0],n=a.createFileItem(e,"uploading");return t&&a.onRemove(t),a.setState(function(e){var t=e.value;e.fileList;return{value:t,fileList:[n]}}),a.onUpload(e,a.props,a.createUploadCallback(n)),!1},i=n,o(a,i)}return a(t,e),t}(i.a);t.a=u},function(e,t,n){"use strict";var r=n(5);t.a=r.a},function(e,t){},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),l=n(3),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e){function t(){var e,n,a,i;r(this,t);for(var u=arguments.length,l=Array(u),c=0;c<u;c++)l[c]=arguments[c];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.handleInput=function(e){return function(t,n){a.props.onInput(e,t,n)}},a.handleSubmit=function(){a.props.onSubmit()},a.handleReset=function(){a.props.onReset()},i=n,o(a,i)}return a(t,e),c(t,[{key:"renderFormItem",value:function(e){var t=this;if(!e.hidden){var n=e.path,r=this.customElements[n],o=void 0,a=void 0,i=void 0;r?(o="Custom",i=r):(o=e.component,i=this.components[o],(a=e.children)&&(a=a.reduce(function(e,n){return n&&(n.cols||(n.cols=t.cols),n.layout||(n.layout=t.layout),e.push(t.renderFormItem(n))),e},[])));var c=Object.assign({},e);return c.key=n,c.onInput=this.handleInput(n),"/"===n?(c.onSubmit=this.handleSubmit,c.onReset=this.handleReset,u.a.createElement(i,c,a)):u.a.createElement(l.a,Object.assign({className:"sf-item--"+o},c),"Custom"===o?i:u.a.createElement(i,c,a))}}},{key:"render",value:function(){var e=this.props.state,t=e.cols,n=e.layout;this.cols=t,this.layout=n;var r=this.customElements={};return u.a.Children.forEach(this.props.children,function(e){r[e.key]=e}),this.renderFormItem(e)}}]),t}(u.a.Component);t.a=s}])});
//# sourceMappingURL=stateform-antd.js.map