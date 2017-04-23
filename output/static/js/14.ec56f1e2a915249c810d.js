webpackJsonp([14,18],{

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(124)
	__vue_script__ = __webpack_require__(126)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\views\\center\\Addresslist.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(131)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7349c824/Addresslist.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(125);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/.0.23.1@css-loader/index.js?sourceMap!../../../node_modules/.8.7.0@vue-loader/lib/style-rewriter.js!../../../node_modules/.3.2.3@sass-loader/index.js!../../../node_modules/.8.7.0@vue-loader/lib/selector.js?type=style&index=0!./Addresslist.vue", function() {
				var newContent = require("!!../../../node_modules/.0.23.1@css-loader/index.js?sourceMap!../../../node_modules/.8.7.0@vue-loader/lib/style-rewriter.js!../../../node_modules/.3.2.3@sass-loader/index.js!../../../node_modules/.8.7.0@vue-loader/lib/selector.js?type=style&index=0!./Addresslist.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, ".ads-list {\n  overflow: hidden;\n  font-size: 14px; }\n  .ads-list .adsItem {\n    display: block;\n    background: #fff;\n    padding: 10px 15px;\n    margin-top: 10px; }\n    .ads-list .adsItem .adsheader {\n      clear: both;\n      overflow: hidden; }\n      .ads-list .adsItem .adsheader p {\n        width: 50%;\n        float: left;\n        text-align: left; }\n    .ads-list .adsItem .adsinfo {\n      clear: both;\n      overflow: hidden;\n      margin-top: 10px;\n      text-align: left; }\n      .ads-list .adsItem .adsinfo label {\n        display: inline-block;\n        color: red;\n        margin-right: 5px; }\n", "", {"version":3,"sources":["/./src/views/center/Addresslist.vue"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,gBAAgB,EAAE;EAClB;IACE,eAAe;IACf,iBAAiB;IACjB,mBAAmB;IACnB,iBAAiB,EAAE;IACnB;MACE,YAAY;MACZ,iBAAiB,EAAE;MACnB;QACE,WAAW;QACX,YAAY;QACZ,iBAAiB,EAAE;IACvB;MACE,YAAY;MACZ,iBAAiB;MACjB,iBAAiB;MACjB,iBAAiB,EAAE;MACnB;QACE,sBAAsB;QACtB,WAAW;QACX,kBAAkB,EAAE","file":"Addresslist.vue","sourcesContent":[".ads-list {\n  overflow: hidden;\n  font-size: 14px; }\n  .ads-list .adsItem {\n    display: block;\n    background: #fff;\n    padding: 10px 15px;\n    margin-top: 10px; }\n    .ads-list .adsItem .adsheader {\n      clear: both;\n      overflow: hidden; }\n      .ads-list .adsItem .adsheader p {\n        width: 50%;\n        float: left;\n        text-align: left; }\n    .ads-list .adsItem .adsinfo {\n      clear: both;\n      overflow: hidden;\n      margin-top: 10px;\n      text-align: left; }\n      .ads-list .adsItem .adsinfo label {\n        display: inline-block;\n        color: red;\n        margin-right: 5px; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(127);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _ref;
	
	var _mockjs = __webpack_require__(13);
	
	var _mockjs2 = _interopRequireDefault(_mockjs);
	
	var _Header = __webpack_require__(14);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_mockjs2.default.mock('address.json', {
	    retcode: 1,
	    retmsg: '查询成功',
	    data: {
	        'total': 1,
	        'records': 10,
	        'page': 1,
	        'addressList|3': [(_ref = {
	            'aid|+1': 1
	        }, (0, _defineProperty3.default)(_ref, 'aid|+1', 88801), (0, _defineProperty3.default)(_ref, 'name', '@name()'), (0, _defineProperty3.default)(_ref, 'country', 1), (0, _defineProperty3.default)(_ref, 'province', 1), (0, _defineProperty3.default)(_ref, 'city', 1), (0, _defineProperty3.default)(_ref, 'district', 1), (0, _defineProperty3.default)(_ref, 'address', '@county(true)'), (0, _defineProperty3.default)(_ref, 'zipcode|+100', 518000), (0, _defineProperty3.default)(_ref, 'tel+19090', "075525252522"), (0, _defineProperty3.default)(_ref, 'mobile+19090', 12452154822), (0, _defineProperty3.default)(_ref, 'isdefault', 0), _ref)]
	    }
	});
	exports.default = {
	    data: function data() {
	        return {
	            title: '地址管理',
	            isIndex: true,
	            lists: []
	        };
	    },
	
	    components: {
	        appHeader: _Header2.default
	    },
	    route: {
	        data: function data(transition) {
	            var _self = this;
	            _self.getAjaxData();
	        },
	        deactivate: function deactivate(transition) {
	            transition.next();
	        }
	    },
	    methods: {
	        getAjaxData: function getAjaxData() {
	            var self = this;
	            self.$http.get('address.json').then(function (response) {
	                var data = response.data;
	                if (data.retcode == 1) {
	                    self.lists = data.data.addressList;
	                }
	            }, function (response) {});
	        }
	    }
	};

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(128);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(129), __esModule: true };

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(130);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

	module.exports = "\n<div class=\"adsList\">\n\n  <app-header title=\"地址管理\" :title-bg=\"true\" header-bg=\"#fff\">\n      <a href=\"javascript:history.back();\" slot=\"left\" ><i class=\"icon\">&#xe60b;</i></a>\n      <a v-link=\"{ path: '/center/addressEdit' }\" slot=\"right\" >添加</a>\n  </app-header>\n\n\n  <div class=\"ads-list\">\n      <a class=\"adsItem\" v-link=\"{ name:'addressEdit', query:{adsId:item.aid} }\" v-for=\"item in lists\">\n         <div class=\"adsheader\">\n           <p class=\"name\">{{item.name}}</p>\n           <p class=\"mobile\">{{item.mobile}}</p>\n         </div>\n         <div class=\"adsinfo\">\n           <p class=\"msg\"><label v-if=\"item.isdefault == 1\">[默认]</label>{{item.province}}{{item.city}}{{item.address}}</p>\n         </div>\n      </a>\n  </div>\n</div>\n";

/***/ })

});
//# sourceMappingURL=14.ec56f1e2a915249c810d.js.map