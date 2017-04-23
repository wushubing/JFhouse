webpackJsonp([15,18],{

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

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(133)
	__vue_script__ = __webpack_require__(135)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\views\\center\\Addressedit.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(136)
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
	  var id = "_v-54b9794c/Addressedit.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(134);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/.0.23.1@css-loader/index.js?sourceMap!../../../node_modules/.8.7.0@vue-loader/lib/style-rewriter.js!../../../node_modules/.3.2.3@sass-loader/index.js!../../../node_modules/.8.7.0@vue-loader/lib/selector.js?type=style&index=0!./Addressedit.vue", function() {
				var newContent = require("!!../../../node_modules/.0.23.1@css-loader/index.js?sourceMap!../../../node_modules/.8.7.0@vue-loader/lib/style-rewriter.js!../../../node_modules/.3.2.3@sass-loader/index.js!../../../node_modules/.8.7.0@vue-loader/lib/selector.js?type=style&index=0!./Addressedit.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "/* @import '~vux/vux.css'; */\n", "", {"version":3,"sources":["/./src/views/center/Addressedit.vue"],"names":[],"mappings":"AAAA,6BAA6B","file":"Addressedit.vue","sourcesContent":["/* @import '~vux/vux.css'; */\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
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
	            adsId: this.$route.query.adsId,
	            title: '默认为北京',
	            value: [],
	            title2: '手动设定',
	            value2: ['江苏省', '苏州市', '吴中区'],
	            addressData: []
	        };
	    },
	
	    components: {
	        appHeader: _Header2.default
	    },
	    route: {
	        data: function data(transition) {
	            var _self = this;
	
	            console.log(this.adsId);
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
	        },
	
	        delAddress: function delAddress(id) {
	            var _self = this;
	            $.ajax({
	                type: "GET",
	                url: '../../src/data/address.json',
	                data: { ids: id },
	                dataType: "json",
	                success: function success(json) {}
	            });
	        }
	
	    }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),

/***/ 136:
/***/ (function(module, exports) {

	module.exports = "\n<div class=\"login\">\n\n  <app-header title=\"添加地址\" :title-bg=\"true\" header-bg=\"#fff\">\n      <a href=\"javascript:history.back();\" slot=\"left\" ><i class=\"icon\">&#xe60b;</i></a>\n      <p slot=\"right\" >保存</p>\n  </app-header>\n\n  <div class=\"weui_cells\">\n      <div class=\"weui_cell\">\n        <p class=\"weui_cell_hd\">\n           <label class=\"weui_label\" style=\"width: 4.5em;\">收货人</label>\n        </p>\n        <p class=\"weui_cell_bd weui_cell_primary\">\n          <input class=\"weui_input\" placeholder=\"请输入收货人\" type=\"text\">\n        </p>\n      </div>\n      <div class=\"weui_cell\">\n        <p class=\"weui_cell_hd\">\n           <label class=\"weui_label\" style=\"width: 5em;\">手机号码</label>\n        </p>\n        <p class=\"weui_cell_bd weui_cell_primary\">\n          <input class=\"weui_input\" placeholder=\"请输入密码\" type=\"text\">\n        </p>\n      </div>\n      <div class=\"weui_cell\">\n          <p class=\"weui_cell_hd\">\n           <label class=\"weui_label\" style=\"width: 5em;\">详细地址</label>\n          </p>\n          <div class=\"weui_cell_bd weui_cell_primary\">\n              <textarea class=\"weui_textarea\" placeholder=\"请输入评论\" rows=\"3\"></textarea>\n              <!-- <div class=\"weui_textarea_counter\"><span>0</span>/200</div> -->\n          </div>\n      </div>\n  </div>\n\n  <div class=\"weui_cells weui_cells_form\">\n      <div class=\"weui_cell weui_cell_switch\">\n          <div class=\"weui_cell_hd weui_cell_primary\">设置默认</div>\n          <div class=\"weui_cell_ft\">\n              <input class=\"weui_switch\" type=\"checkbox\">\n          </div>\n      </div>\n  </div>\n\n  <div class=\"weui_cells\" v-if=\"adsId != undefined\">\n      <div class=\"weui_cell\" @click=\"delAddress(adsId)\">删除地址</div>\n  </div>\n\n\n\n</div>\n";

/***/ })

});
//# sourceMappingURL=15.ff203d7904c5a6f09455.js.map