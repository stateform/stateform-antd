!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t(require("react"),require("antd"),require("moment")):"function"===typeof define&&define.amd?define([,,],t):"object"===typeof exports?exports.stateform=t(require("react"),require("antd"),require("moment")):e.stateform=t(e[void 0],e[void 0],e[void 0])}(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=6)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),c=n(2),l=(n.n(c),n(9)),s=n.n(l),f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"render",value:function(){var e=this.props,t=e.cols,n=e.layout,r=e.label,o=e.error,a=e.required,i=e.help,l=e.children,p=e.className,b=t.item,h=t.label,y=t.wrapper;"object"!==("undefined"===typeof item?"undefined":f(item))&&(t.item={span:b}),"object"!==("undefined"===typeof h?"undefined":f(h))&&(t.label={span:h}),"object"!==("undefined"===typeof y?"undefined":f(y))&&(t.wrapper={span:y});var d=u.a.createElement(c.Col,{className:"sf-item__label",span:t.label.span,offset:t.label.offset,xs:t.xsLabel,sm:t.smLabel,md:t.mdLabel,lg:t.lgLabel},r&&u.a.createElement("span",{className:"sf-item__label-text"+(a?" sf-item__label-text--required":"")},r),i&&u.a.createElement(c.Icon,{className:"sf-item__help-icon",type:"question-circle-o",title:i})),m=u.a.createElement(c.Col,{className:"sf-item__wrapper",span:t.wrapper.span,offset:t.wrapper.offset,xs:t.xsWrapper,sm:t.smWrapper,md:t.mdWrapper,lg:t.lgWrapper},l,u.a.createElement("div",{className:"sf-item__error"},o));return"vertical"===n?u.a.createElement("div",{className:s()({"sf-item":!0,"sf-item--vertical":!0,"sf-item--error":o},e.class,p)},u.a.createElement(c.Row,null,d),u.a.createElement(c.Row,null,m)):"inline"===n?u.a.createElement(c.Col,{span:t.item.span,offset:t.item.offset,className:s()({"sf-item":!0,"sf-item--inline":!0,"sf-item--error":o},e.class,p)},d,m):u.a.createElement(c.Row,{className:s()({"sf-item":!0,"sf-item--horizontal":!0,"sf-item--error":o},e.class,p)},d,m)}}]),t}(u.a.Component);t.a=b},function(e,n){e.exports=t},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleInput=function(e){n.setState({value:e}),n.props.onInput(e)},n.handleChange=function(e){n.handleInput(e.target.value)},n.state={value:e.value},n}return a(t,e),c(t,[{key:"componentWillReceiveProps",value:function(e){e.value!==this.state.value&&this.setState({value:e.value})}},{key:"render",value:function(){return"Not Implemented"}}]),t}(u.a.Component);t.a=l},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),c=n(2),l=(n.n(c),n(1)),s=n(12),f=n.n(s),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));h.call(n);var a=e.value;return n.state=a?{inputValue:n.valueToMoment(a),value:a}:{},n}return a(t,e),p(t,[{key:"valueToMoment",value:function(e){return"second"===this.props.valueType?f.a.unix(e):f()(e)}},{key:"momentToValue",value:function(e){var t=this.props.valueType;return"second"===t?e.unix():"millisecond"===t?e.valueOf():e.toISOString()}},{key:"componentWillReceiveProps",value:function(e){var t=e.value;t!==this.state.value&&(console.log(t),console.log(this.state.value),this.setState({inputValue:this.valueToMoment(t),value:t}))}},{key:"render",value:function(){var e=this.state,t=this.props,n=this.handleInput,r=this.type,o=t.format,a=t.placeholder,i=t.disabled,s=o||("datetime"===r?"YYYY-MM-DD HH:mm:ss":"YYYY-MM-DD");return u.a.createElement(l.a,Object.assign({className:"sf-item--datepicker"},t),u.a.createElement(c.DatePicker,{i:!0,allowClear:!0,value:e.inputValue,format:s,showTime:"datetime"===r,placeholder:a,disabled:i,onChange:n}))}}]),t}(u.a.Component),h=function(){var e=this;this.type="date",this.handleInput=function(t){var n=null==t?null:e.momentToValue("datetime"===e.type?t:t.startOf("day"));e.setState({inputValue:t,value:n},function(){e.props.onInput(n)})}};t.a=b},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),c=n(2),l=(n.n(c),n(1)),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));p.call(n);var a=e.value;return n.fileId=0,n.state={value:a,fileList:n.transformValueToFileList(a)},n}return a(t,e),s(t,[{key:"onUpload",value:function(e,t){}},{key:"onRemove",value:function(e){}},{key:"createUploadCallback",value:function(e){var t=this;return function(n){Object.assign(e,{status:n.status,name:n.name||e.name,value:n.value,url:n.url,thumbUrl:n.thumbUrl,response:n.error}),"done"===e.status?t.handleInput(t.state.fileList):t.forceUpdate()}}},{key:"transformValueToFileList",value:function(e){return e?this.isMultiple?e.map(this.createFileItem):[this.createFileItem(e)]:[]}},{key:"transformFileListToValue",value:function(e){var t=[];return e.forEach(function(e){"done"===e.status&&t.push(e.value||e.url)}),this.isMultiple?t:t[0]}},{key:"handleInput",value:function(e){var t=this.transformFileListToValue(e);this.setState({value:t,fileList:e}),this.props.onInput(t)}},{key:"componentWillReceiveProps",value:function(e){var t=e.value;t!==this.state.value&&this.setState({value:t,fileList:this.transformValueToFileList(t)})}},{key:"render",value:function(){var e=this.state,t=this.props,n=this.handleUpload,r=this.handleRemove,o=this.isMultiple,a=e.fileList,i=t.disabled,s=t.listType,f=t.accept,p=t.uploadText,b=void 0;return b="picture-card"===s?u.a.createElement("div",null,u.a.createElement(c.Icon,{type:"plus"}),u.a.createElement("div",null,p||"Select File")):u.a.createElement(c.Button,null,u.a.createElement(c.Icon,{type:"upload"}),p||"Select File"),u.a.createElement(l.a,Object.assign({className:"sf-item--upload"},t),u.a.createElement(c.Upload,{action:"_blank",accept:f,listType:s,disabled:i,multiple:o,fileList:a,beforeUpload:n,onRemove:r},b))}}]),t}(u.a.Component),p=function(){var e=this;this.isMultiple=!0,this.handleUpload=function(t){var n=e.createFileItem(t,"uploading");return e.setState(function(e){return{value:e.value,fileList:e.fileList.concat(n)}}),e.onUpload(t,e.createUploadCallback(n)),!1},this.handleRemove=function(t){e.handleInput(e.state.fileList.filter(function(e){return e!==t})),e.onRemove(t)},this.createFileItem=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"done";t="string"===typeof t?{url:t}:t;var r=t,o=r.uid,a=r.name,i=r.url,u=r.thumbUrl;return o=o||"file"+e.fileId++,a=a||i,{uid:o,name:a,url:i,thumbUrl:u,status:n}}};t.a=f},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.upload,n=void 0===t?{}:t,i=e.components,c=function(e){function t(){var e,a,i,u;r(this,t);for(var c=arguments.length,l=Array(c),s=0;s<c;s++)l[s]=arguments[s];return a=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),i.onUpload=n.handleUpload,i.onRemove=n.handleRemove,u=a,o(i,u)}return a(t,e),t}(u.Upload),l=function(e){function t(){var e,a,i,u;r(this,t);for(var c=arguments.length,l=Array(c),s=0;s<c;s++)l[s]=arguments[s];return a=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),i.onUpload=n.handleUpload,i.onRemove=n.handleRemove,u=a,o(i,u)}return a(t,e),t}(u.UploadList),f=Object.assign({},u,{Upload:c,UploadList:l},i);return function(e){function t(){var e,n,a,i;r(this,t);for(var u=arguments.length,c=Array(u),l=0;l<u;l++)c[l]=arguments[l];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.components=f,i=n,o(a,i)}return a(t,e),t}(s.a)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"createStateForm",function(){return i});var u=n(7),c=n(1),l=n(25),s=(n.n(l),n(26));n.d(t,"FormItemLayout",function(){return c.a}),t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),o=n(10),a=n(11),i=n(13),u=n(14),c=n(15),l=n(16),s=n(17),f=n(18),p=n(19),b=n(20),h=n(21),y=n(22),d=n(23),m=n(24);n.d(t,"BoolCheck",function(){return r.a}),n.d(t,"Checkbox",function(){return o.a}),n.d(t,"DatePicker",function(){return a.a}),n.d(t,"DateTimePicker",function(){return i.a}),n.d(t,"Form",function(){return u.a}),n.d(t,"Input",function(){return c.a}),n.d(t,"InputNumber",function(){return l.a}),n.d(t,"Map",function(){return s.a}),n.d(t,"List",function(){return f.a}),n.d(t,"Radio",function(){return p.a}),n.d(t,"Select",function(){return b.a}),n.d(t,"Switch",function(){return h.a}),n.d(t,"Textarea",function(){return y.a}),n.d(t,"Upload",function(){return d.a}),n.d(t,"UploadList",function(){return m.a})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),c=n(2),l=(n.n(c),n(1)),s=n(3),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),f(t,[{key:"render",value:function(){var e=this.state,t=this.props,n=this.handleInput,r=t.content,o=t.disabled,a=!0===e.value?[!0]:[];return u.a.createElement(l.a,Object.assign({className:"sf-item--boolcheck"},t),u.a.createElement(c.Checkbox.Group,{value:a,disabled:o,onChange:function(e){return n(!0===e[0])}},u.a.createElement(c.Checkbox,{value:!0},u.a.createElement("span",{dangerouslySetInnerHTML:{__html:r}}))))}}]),t}(s.a);t.a=p},function(e,t,n){var r,o;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=n.apply(null,r);i&&e.push(i)}else if("object"===o)for(var u in r)a.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?(n.default=n,e.exports=n):(r=[],void 0!==(o=function(){return n}.apply(t,r))&&(e.exports=o))}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),c=n(2),l=(n.n(c),n(1)),s=n(3),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),f(t,[{key:"render",value:function(){var e=this.state,t=this.props,n=this.handleInput,r=t.option,o=t.disabled,a=t.disabledItems,i=void 0===a?{}:a;return u.a.createElement(l.a,Object.assign({className:"sf-item--checkbox"},t),u.a.createElement(c.Checkbox.Group,{value:e.value,disabled:o,onChange:n},Object.keys(r).map(function(e){return u.a.createElement(c.Checkbox,{key:e,value:r[e],disabled:i[e]},e)})))}}]),t}(s.a);t.a=p},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(4),u=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(i.a);t.a=u},function(e,t){e.exports=n},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(4),u=function(e){function t(){var e,n,a,i;r(this,t);for(var u=arguments.length,c=Array(u),l=0;l<u;l++)c[l]=arguments[l];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.type="datetime",i=n,o(a,i)}return a(t,e),t}(i.a);t.a=u},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),c=n(2),l=(n.n(c),n(1)),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.submitCols,n=e.cols;return u.a.createElement(c.Form,{className:"sf-item--form"},e.children,!1!==e.showSubmit&&u.a.createElement(l.a,{className:"sf-item__submit",cols:t||n},u.a.createElement(c.Button,{onClick:e.onSubmit},e.submitText||"Submit")))}}]),t}(i.Component);t.a=f},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),c=n(2),l=(n.n(c),n(1)),s=n(3),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),f(t,[{key:"render",value:function(){var e=this.state,t=this.props,n=this.handleChange,r=t.type,o=t.prepend,a=t.append,i=t.placeholder,s=t.disabled,f=t.readOnly,p=t.autoComplete,b=t.autoFocus;return u.a.createElement(l.a,Object.assign({className:"sf-item--input"},t),u.a.createElement(c.Input,{type:r,value:e.value,addonBefore:o,addonAfter:a,placeholder:i,readOnly:f,autoComplete:p,autoFocus:b,onChange:n,disabled:s}))}}]),t}(s.a);t.a=p},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),c=n(2),l=(n.n(c),n(1)),s=n(3),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),f(t,[{key:"render",value:function(){var e=this.state,t=this.props,n=this.handleInput,r=t.placeholder,o=t.disabled;return u.a.createElement(l.a,Object.assign({className:"sf-item--input-number"},t),u.a.createElement(c.InputNumber,{value:e.value,placeholder:r,onChange:n,disabled:o}))}}]),t}(s.a);t.a=p},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),c=n(1),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return u.a.createElement(c.a,Object.assign({className:"sf-item--map"},this.props),this.props.children)}}]),t}(u.a.Component);t.a=s},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),c=n(2),l=(n.n(c),n(1)),s=n(3),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(){var e,n,a,i;r(this,t);for(var u=arguments.length,c=Array(u),l=0;l<u;l++)c[l]=arguments[l];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.addItem=function(){a.handleInput((a.props.value||[]).concat(null))},a.removeItem=function(e){return function(){a.handleInput(a.props.value.filter(function(t,n){return n!==e}),e)}},i=n,o(a,i)}return a(t,e),f(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.isAddable,r=t.addText,o=t.children.map(function(t,n){return u.a.createElement("div",{key:t.key,className:"sf-item-list__item"},t,u.a.createElement("a",{className:"sf-item-list__remove",onClick:e.removeItem(n)},u.a.createElement(c.Icon,{className:"dynamic-delete-button",type:"minus-circle-o"})))});return u.a.createElement(l.a,Object.assign({className:"sf-item--list"},t),o,!1!==n&&u.a.createElement(c.Button,{block:!0,type:"dashed",onClick:this.addItem},u.a.createElement(c.Icon,{type:"plus"})," ",r||"Add Item"))}}]),t}(s.a);t.a=p},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),c=n(2),l=(n.n(c),n(1)),s=n(3),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),f(t,[{key:"render",value:function(){var e=this.state,t=this.props,n=this.handleChange,r=t.option,o=t.disabled,a=t.disabledItems,i=void 0===a?{}:a;return u.a.createElement(l.a,Object.assign({className:"sf-item--radio"},t),u.a.createElement(c.Radio.Group,{value:e.value,disabled:o,onChange:n},Object.keys(r).map(function(e){return u.a.createElement(c.Radio,{key:e,value:r[e],disabled:i[e]},e)})))}}]),t}(s.a);t.a=p},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),c=n(2),l=(n.n(c),n(1)),s=n(3),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),f(t,[{key:"render",value:function(){var e=this.state,t=this.props,n=this.handleInput,r=t.option,o=t.disabled,a=t.disabledItems,i=void 0===a?{}:a,s=c.Select.Option;return u.a.createElement(l.a,Object.assign({className:"sf-item--select"},t),u.a.createElement(c.Select,{value:e.value,placeholder:t.placeholder,disabled:o,onChange:n,mode:t.multiple?"multiple":void 0,allowClear:!0},Object.keys(r).map(function(e){return u.a.createElement(s,{key:e,value:r[e],disabled:i[e]},e)})))}}]),t}(s.a);t.a=p},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),c=n(2),l=(n.n(c),n(1)),s=n(3),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),f(t,[{key:"render",value:function(){var e=this.state,t=this.props,n=this.handleInput;return u.a.createElement(l.a,Object.assign({className:"sf-item--switch"},t),u.a.createElement(c.Switch,{value:e.value,disabled:t.disabled,checkedChildren:t.onText,unCheckedChildren:t.offText,onChange:n}))}}]),t}(s.a);t.a=p},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),c=n(2),l=(n.n(c),n(1)),s=n(3),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),f(t,[{key:"render",value:function(){var e=this.state,t=this.props,n=this.handleChange,r=t.disabled,o=t.placeholder;return u.a.createElement(l.a,Object.assign({className:"sf-item--textarea"},t),u.a.createElement(c.Input.TextArea,{value:e.value,placeholder:o,disabled:r,onChange:n}))}}]),t}(s.a);t.a=p},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(5),u=function(e){function t(){var e,n,a,i;r(this,t);for(var u=arguments.length,c=Array(u),l=0;l<u;l++)c[l]=arguments[l];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.isMultiple=!1,a.handleUpload=function(e){var t=a.state.fileList[0],n=a.createFileItem(e,"uploading");return t&&a.onRemove(t),a.setState(function(e){var t=e.value;e.fileList;return{value:t,fileList:[n]}}),a.onUpload(e,a.createUploadCallback(n)),!1},i=n,o(a,i)}return a(t,e),t}(i.a);t.a=u},function(e,t,n){"use strict";var r=n(5);t.a=r.a},function(e,t){},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e){function t(){var e,n,a,i;r(this,t);for(var u=arguments.length,c=Array(u),l=0;l<u;l++)c[l]=arguments[l];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.handleInput=function(e){return function(t,n){a.props.onInput(e,t,n)}},a.handleSubmit=function(){a.props.onSubmit()},i=n,o(a,i)}return a(t,e),c(t,[{key:"renderFormItem",value:function(e){var t=this;if(!e.hidden){var n=e.children;n&&(n=n.reduce(function(e,n){return n&&(n.cols||(n.cols=t.cols),n.layout||(n.layout=t.layout),e.push(t.renderFormItem(n))),e},[]));var r=e.path,o=Object.assign({},e);o.key=r,o.onInput=this.handleInput(r),"/"===r&&(n=n.concat(this.props.children),o.onSubmit=this.handleSubmit);var a=this.components[e.component];return u.a.createElement(a,o,n)}}},{key:"render",value:function(){var e=this.props.state,t=e.cols,n=e.layout;return this.cols=t,this.layout=n,this.renderFormItem(e)}}]),t}(u.a.Component);t.a=l}])});
//# sourceMappingURL=stateform-antd.js.map