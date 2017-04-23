webpackJsonp([1,18],{

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(52)
	__vue_script__ = __webpack_require__(54)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\views\\Announced.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(55)
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
	  var id = "_v-3b68a848/Announced.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(53);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/.0.23.1@css-loader/index.js?sourceMap!../../node_modules/.8.7.0@vue-loader/lib/style-rewriter.js!../../node_modules/.3.2.3@sass-loader/index.js!../../node_modules/.8.7.0@vue-loader/lib/selector.js?type=style&index=0!./Announced.vue", function() {
				var newContent = require("!!../../node_modules/.0.23.1@css-loader/index.js?sourceMap!../../node_modules/.8.7.0@vue-loader/lib/style-rewriter.js!../../node_modules/.3.2.3@sass-loader/index.js!../../node_modules/.8.7.0@vue-loader/lib/selector.js?type=style&index=0!./Announced.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, ".indiana {\n  bottom: 55px; }\n\n.floatBox > li:nth-child(even):after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  border-right: 1px solid #d9d9d9;\n  color: #d9d9d9;\n  -webkit-transform-origin: 0 0;\n  -ms-transform-origin: 0 0;\n      transform-origin: 0 0;\n  -webkit-transform: scaleX(0.5);\n  -ms-transform: scaleX(0.5);\n      transform: scaleX(0.5);\n  left: 0; }\n\n.floatBox > li {\n  position: relative;\n  width: 50%;\n  -ms-box-sizing: border-box;\n  -o-box-sizing: border-box;\n  box-sizing: border-box;\n  float: left; }\n  .floatBox > li:before {\n    content: \" \";\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 1px;\n    border-top: 1px solid #d9d9d9;\n    color: #d9d9d9;\n    -webkit-transform-origin: 0 0;\n    -ms-transform-origin: 0 0;\n        transform-origin: 0 0;\n    -webkit-transform: scaleY(0.5);\n    -ms-transform: scaleY(0.5);\n        transform: scaleY(0.5);\n    left: 0; }\n  .floatBox > li a {\n    display: block;\n    color: #333;\n    background: #fff;\n    padding: 10px; }\n  .floatBox > li img {\n    width: 100%;\n    min-height: 125px; }\n  .floatBox > li .info {\n    background: #fff;\n    min-height: 93px; }\n    .floatBox > li .info .title {\n      font-size: 14px;\n      line-height: 1.4; }\n    .floatBox > li .info .issue {\n      font-size: 12px; }\n    .floatBox > li .info .msg {\n      height: 60px; }\n      .floatBox > li .info .msg .time {\n        display: block;\n        font-weight: 600;\n        font-size: 18px;\n        margin-top: 5px; }\n      .floatBox > li .info .msg .btn {\n        position: relative;\n        display: inline-block;\n        border-style: solid;\n        border-width: 1px;\n        width: 65px;\n        padding: 2px 0;\n        font-size: 12px;\n        text-align: center;\n        border-radius: 3px; }\n      .floatBox > li .info .msg .btn.reds {\n        color: #ff6666;\n        border-color: #ff6666; }\n      .floatBox > li .info .msg .btn.greens {\n        color: #39b939;\n        border-color: #39b939; }\n      .floatBox > li .info .msg .match {\n        display: block;\n        font-weight: 600;\n        line-height: 25px; }\n      .floatBox > li .info .msg .txt {\n        display: block;\n        font-size: 12px;\n        line-height: 1.2; }\n", "", {"version":3,"sources":["/./src/views/Announced.vue"],"names":[],"mappings":"AAAA;EACE,aAAa,EAAE;;AAEjB;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,WAAW;EACX,aAAa;EACb,gCAAgC;EAChC,eAAe;EACf,8BAA8B;EAC9B,0BAAsB;MAAtB,sBAAsB;EACtB,+BAA+B;EAC/B,2BAAuB;MAAvB,uBAAuB;EACvB,QAAQ,EAAE;;AAEZ;EACE,mBAAmB;EACnB,WAAW;EAEX,2BAA2B;EAC3B,0BAA0B;EAC1B,uBAAuB;EACvB,YAAY,EAAE;EACd;IACE,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,OAAO;IACP,YAAY;IACZ,YAAY;IACZ,8BAA8B;IAC9B,eAAe;IACf,8BAA8B;IAC9B,0BAAsB;QAAtB,sBAAsB;IACtB,+BAA+B;IAC/B,2BAAuB;QAAvB,uBAAuB;IACvB,QAAQ,EAAE;EACZ;IACE,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,cAAc,EAAE;EAClB;IACE,YAAY;IACZ,kBAAkB,EAAE;EACtB;IACE,iBAAiB;IACjB,iBAAiB,EAAE;IACnB;MACE,gBAAgB;MAChB,iBAAiB,EAAE;IACrB;MACE,gBAAgB,EAAE;IACpB;MACE,aAAa,EAAE;MACf;QACE,eAAe;QACf,iBAAiB;QACjB,gBAAgB;QAChB,gBAAgB,EAAE;MACpB;QACE,mBAAmB;QACnB,sBAAsB;QACtB,oBAAoB;QACpB,kBAAkB;QAClB,YAAY;QACZ,eAAe;QACf,gBAAgB;QAChB,mBAAmB;QACnB,mBAAmB,EAAE;MACvB;QACE,eAAe;QACf,sBAAsB,EAAE;MAC1B;QACE,eAAe;QACf,sBAAsB,EAAE;MAC1B;QACE,eAAe;QACf,iBAAiB;QACjB,kBAAkB,EAAE;MACtB;QACE,eAAe;QACf,gBAAgB;QAChB,iBAAiB,EAAE","file":"Announced.vue","sourcesContent":[".indiana {\n  bottom: 55px; }\n\n.floatBox > li:nth-child(even):after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  border-right: 1px solid #d9d9d9;\n  color: #d9d9d9;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  -webkit-transform: scaleX(0.5);\n  transform: scaleX(0.5);\n  left: 0; }\n\n.floatBox > li {\n  position: relative;\n  width: 50%;\n  -webkit-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  -o-box-sizing: border-box;\n  box-sizing: border-box;\n  float: left; }\n  .floatBox > li:before {\n    content: \" \";\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 1px;\n    border-top: 1px solid #d9d9d9;\n    color: #d9d9d9;\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: scaleY(0.5);\n    transform: scaleY(0.5);\n    left: 0; }\n  .floatBox > li a {\n    display: block;\n    color: #333;\n    background: #fff;\n    padding: 10px; }\n  .floatBox > li img {\n    width: 100%;\n    min-height: 125px; }\n  .floatBox > li .info {\n    background: #fff;\n    min-height: 93px; }\n    .floatBox > li .info .title {\n      font-size: 14px;\n      line-height: 1.4; }\n    .floatBox > li .info .issue {\n      font-size: 12px; }\n    .floatBox > li .info .msg {\n      height: 60px; }\n      .floatBox > li .info .msg .time {\n        display: block;\n        font-weight: 600;\n        font-size: 18px;\n        margin-top: 5px; }\n      .floatBox > li .info .msg .btn {\n        position: relative;\n        display: inline-block;\n        border-style: solid;\n        border-width: 1px;\n        width: 65px;\n        padding: 2px 0;\n        font-size: 12px;\n        text-align: center;\n        border-radius: 3px; }\n      .floatBox > li .info .msg .btn.reds {\n        color: #ff6666;\n        border-color: #ff6666; }\n      .floatBox > li .info .msg .btn.greens {\n        color: #39b939;\n        border-color: #39b939; }\n      .floatBox > li .info .msg .match {\n        display: block;\n        font-weight: 600;\n        line-height: 25px; }\n      .floatBox > li .info .msg .txt {\n        display: block;\n        font-size: 12px;\n        line-height: 1.2; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mockjs = __webpack_require__(13);
	
	var _mockjs2 = _interopRequireDefault(_mockjs);
	
	var _Header = __webpack_require__(14);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Loading = __webpack_require__(19);
	
	var _Loading2 = _interopRequireDefault(_Loading);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_mockjs2.default.mock('reslist.json', {
	    retcode: 1,
	    retmsg: '查询成功',
	    data: {
	        'total': 1,
	        'records': 10,
	        'page': 1,
	        'rows|10': [{
	            'id|+1': 1,
	            'caipiaotype': '@natural(1, 3)',
	            'periods|+1': '11000002',
	            'downtime': '@natural(14592352, 64592352)',
	            'publishtime|+10': '1460448164569',
	            'title': '@csentence(6, 10)',
	            'cover': '@image(200x200, #ff6666, Hello)',
	            "wuser": "{\"nickname\":\"抽奖小王子\",\"buycount\":1199,\"bingocode\":\"10001167\"}"
	        }]
	    }
	});
	
	exports.default = {
	    data: function data() {
	        return {
	            lists: [],
	            page: 1,
	            scroll: true,
	            loading: true
	        };
	    },
	
	    route: {
	        data: function data(transition) {
	            var self = this;
	
	            self.getAjaxData(transition);
	
	            $(window).on('scroll', function (transition) {
	                self.getScrollData(transition);
	            });
	        },
	        deactivate: function deactivate(transition) {
	            var self = this;
	            self.lists = [];
	            self.page = 1;
	            $(window).off('scroll');
	            transition.next();
	        }
	    },
	    ready: function ready() {},
	
	    methods: {
	        getAjaxData: function getAjaxData(transition) {
	            var self = this;
	            self.$http.get('reslist.json').then(function (response) {
	                self.loading = false;
	                var data = response.data;
	                self.loadshow = true;
	                if (data.retcode == 1) {
	                    var jsonData = data.data.rows;
	                    if (self.page === 1) {
	                        self.lists = jsonData;
	                    } else {
	                        self.lists = self.lists.concat(jsonData);
	                    }
	                }
	            }, function (response) {});
	        },
	
	        getScrollData: function getScrollData(transition) {
	            var self = this;
	            if (self.scroll) {
	
	                var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
	                if ($(document).height() <= totalheight + 200) {
	                    self.scroll = false;
	                    self.page++;
	
	                    if (self.page <= 3) {
	                        self.getAjaxData(transition);
	                    }
	                }
	            }
	        },
	        runtime: function runtime(el, timer) {}
	    },
	    components: {
	        appheader: _Header2.default,
	        Loading: _Loading2.default
	    }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

	module.exports = "\n\n <div class=\"indiana\">\n\n     <!-- 头部 -->\n     <appheader title=\"最新揭晓\"></appheader>\n\n     <!-- 列表区 -->\n     <section class=\"announced-container\" v-if=\"!loading\">\n         <ul class=\"floatBox\">\n             <li v-for=\"item in lists\" >\n               <a v-link=\"{name:'goods',query:{id:item.id}}\">\n                  <img :src=\"item.cover\" :style=\"{ width:item.imgwh +'px',height:item.imgwh +'px' }\" >\n                  <div class=\"info\">\n                     <p class=\"title nowrap\">{{item.title}}</p>\n                     <p class=\"issue\">期号：{{item.periods}}</p>\n                     <div class=\"msg\" v-if=\"item.caipiaotype == 2\">\n                         <span class=\"txt\" v-for=\"(key, val) in item.wuser | jsonFormat\" >\n                             <label v-if=\"key == 'nickname'\">获得者：</label>\n                             <label v-if=\"key == 'buycount'\">参与人次：</label>\n                             <label v-if=\"key == 'bingocode'\">幸运号码：</label>\n                             {{val}}\n                         </span>\n                         <span class=\"txt\">揭晓时间：{{item.publishtime | timeago }}</span>\n                     </div>\n\n                     <div class=\"msg\" v-if=\"item.caipiaotype == 1\">\n                         <span class=\"btn reds\">即将揭晓</span>\n                         <span class=\"time\" id=\"{{item.id}}\">{{runtime(item.id,item.downtime)}}</span>\n                     </div>\n\n                     <div class=\"msg\" v-if=\"item.caipiaotype == 0\">\n                         <span class=\"btn greens\">正在揭晓</span>\n                         <span class=\"time\" id=\"{{item.id}}\" ->{{item.downtime }}</span>\n                     </div>\n                   </div>\n                 </a>\n             </li>\n\n         </ul>\n     </section>\n\n     <!-- Loading -->\n     <loading :show=\"loading\"></loading>\n\n</div>\n\n";

/***/ })

});
//# sourceMappingURL=1.b7ac4c0c92dd034c91f4.js.map