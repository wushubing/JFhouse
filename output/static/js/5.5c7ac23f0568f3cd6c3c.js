webpackJsonp([5,18],{

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(73)
	__vue_script__ = __webpack_require__(75)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\views\\indiana\\Goods.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(76)
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
	  var id = "_v-0a20035e/Goods.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(74);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/.0.23.1@css-loader/index.js?sourceMap!../../../node_modules/.8.7.0@vue-loader/lib/style-rewriter.js!../../../node_modules/.3.2.3@sass-loader/index.js!../../../node_modules/.8.7.0@vue-loader/lib/selector.js?type=style&index=0!./Goods.vue", function() {
				var newContent = require("!!../../../node_modules/.0.23.1@css-loader/index.js?sourceMap!../../../node_modules/.8.7.0@vue-loader/lib/style-rewriter.js!../../../node_modules/.3.2.3@sass-loader/index.js!../../../node_modules/.8.7.0@vue-loader/lib/selector.js?type=style&index=0!./Goods.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "@-webkit-keyframes showUp {\n  from {\n    opacity: 0;\n    bottom: -100px; }\n  to {\n    opacity: 1;\n    bottom: 0; } }\n\n@keyframes showUp {\n  from {\n    opacity: 0;\n    bottom: -100px; }\n  to {\n    opacity: 1;\n    bottom: 0; } }\n\n.showUp {\n  -webkit-animation-name: showUp;\n  animation-name: showUp;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n.goodSwiper {\n  width: 100%; }\n  .goodSwiper .swiper-slide img {\n    width: 100%;\n    height: 200px; }\n\n.topInfo {\n  background: #fff;\n  padding: 15px; }\n  .topInfo .title .status {\n    padding: 3px 5px;\n    border-radius: 3px;\n    font-size: 14px; }\n  .topInfo .title .st1 {\n    border: .5px solid #ff6666;\n    color: #ff6666; }\n  .topInfo .title .st2 {\n    border: .5px solid #ff6666;\n    color: #ff6666; }\n  .topInfo .title .st3 {\n    border: .5px solid #ff6666;\n    color: #ff6666; }\n  .topInfo .match {\n    overflow: hidden;\n    background: #ff6666;\n    padding: 15px;\n    border-radius: 3px;\n    color: #fff;\n    margin-top: 5px; }\n    .topInfo .match .txt {\n      text-align: left; }\n    .topInfo .match .btn .match-btn {\n      display: block;\n      overflow: hidden;\n      padding: 5px 10px;\n      border: .5px solid #fff;\n      border-radius: 3px;\n      color: #fff;\n      font-size: 13px; }\n  .topInfo .results {\n    margin-top: 10px;\n    padding: 5px; }\n    .topInfo .results .centent {\n      display: -o-box;\n      display: -ms-flexbox;\n      display: -webkit-flex;\n      display: flex;\n      background: #ebebeb;\n      padding: 10px; }\n      .topInfo .results .centent .Rimg {\n        width: 45px;\n        height: 45px;\n        border-radius: 100%;\n        overflow: hidden;\n        background: #fff; }\n        .topInfo .results .centent .Rimg img {\n          width: 100%; }\n      .topInfo .results .centent .Rtxt {\n        margin-left: 10px;\n        font-size: 13px; }\n    .topInfo .results .item {\n      background: #ff6666;\n      color: #fff;\n      padding: 10px; }\n      .topInfo .results .item .lucknum {\n        text-align: left; }\n      .topInfo .results .item .match-btn {\n        display: block;\n        overflow: hidden;\n        padding: 5px 10px;\n        border: .5px solid #fff;\n        border-radius: 3px;\n        color: #fff;\n        font-size: 13px; }\n  .topInfo .chklist {\n    overflow: hidden; }\n    .topInfo .chklist .prompt {\n      background: #ebebeb;\n      margin-top: 10px;\n      padding: 10px;\n      text-align: center; }\n      .topInfo .chklist .prompt > a {\n        display: block; }\n      .topInfo .chklist .prompt span {\n        color: #ff6666; }\n    .topInfo .chklist .nitem {\n      background: #ebebeb;\n      margin-top: 10px;\n      padding: 10px;\n      font-size: 13px; }\n      .topInfo .chklist .nitem .ntxt {\n        display: -o-box;\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex; }\n        .topInfo .chklist .nitem .ntxt > p:last-child {\n          -o-box-flex: 1;\n          -ms-flex: 1;\n          -webkit-flex: 1;\n                  flex: 1; }\n        .topInfo .chklist .nitem .ntxt span {\n          display: inline-block;\n          margin-right: 5px; }\n\n.linkInfo > .weui_cells {\n  margin-top: 10px;\n  font-size: 14px; }\n\n.linkInfo .recordmsg {\n  background: #ebebeb;\n  margin-bottom: 70px; }\n  .linkInfo .recordmsg .item {\n    position: relative;\n    display: -o-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n    padding: 10px 15px; }\n  .linkInfo .recordmsg .Cimg {\n    width: 40px; }\n    .linkInfo .recordmsg .Cimg:after {\n      position: absolute;\n      top: 0;\n      left: 35px;\n      z-index: 0;\n      width: 1px;\n      height: 100%;\n      border-right: 1px solid #888;\n      color: #888;\n      content: \" \";\n      -webkit-transform: scaleX(0.5);\n      -ms-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n      -webkit-transform-origin: 0 0;\n      -ms-transform-origin: 0 0;\n          transform-origin: 0 0; }\n    .linkInfo .recordmsg .Cimg img {\n      position: absolute;\n      z-index: 11;\n      overflow: hidden;\n      margin: 0 auto;\n      width: 40px;\n      height: 40px;\n      border-radius: 100%; }\n  .linkInfo .recordmsg .Cinfo {\n    margin-left: 10px;\n    font-size: 13px;\n    -o-box-flex: 1;\n    -ms-flex: 1;\n    -webkit-flex: 1;\n            flex: 1; }\n  .linkInfo .recordmsg .Ccount {\n    position: absolute;\n    right: 15px;\n    bottom: 10px;\n    font-size: 13px; }\n\n.bottomInfo2 {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 99;\n  width: 100%;\n  padding: 10px 15px;\n  background: #fff; }\n  .bottomInfo2 a {\n    font-size: 14px;\n    padding: 5px 0; }\n  .bottomInfo2 p:nth-child(2) {\n    margin: 0 15px; }\n  .bottomInfo2 .iconBox {\n    width: 40px; }\n    .bottomInfo2 .iconBox .icon {\n      font-size: 30px; }\n\n.bottomInfo {\n  position: fixed;\n  left: 0;\n  z-index: 99;\n  width: 100%;\n  padding: 10px 15px;\n  background: #fff;\n  font-size: 14px; }\n  .bottomInfo > p:nth-child(1) {\n    text-align: left; }\n  .bottomInfo > p:nth-child(2) > a {\n    font-size: 14px;\n    border-radius: 3px;\n    padding: 5px 20px; }\n\n.dcontent {\n  overflow: hidden;\n  font-size: 14px;\n  margin: 5px auto; }\n  .dcontent .d-txt > span {\n    display: inline-block;\n    float: left;\n    width: 50%; }\n  .dcontent .d-txt .remain {\n    text-align: right; }\n  .dcontent .progress {\n    display: block;\n    overflow: hidden;\n    width: 100%;\n    height: 6px;\n    border-radius: 3px;\n    background: #ddd;\n    margin: 5px auto; }\n    .dcontent .progress .ongoing {\n      display: block;\n      width: 50%;\n      height: 6px;\n      background: #ff6666; }\n", "", {"version":3,"sources":["/./src/views/indiana/Goods.vue"],"names":[],"mappings":"AAAA;EACE;IACE,WAAW;IACX,eAAe,EAAE;EACnB;IACE,WAAW;IACX,UAAU,EAAE,EAAE;;AAElB;EACE;IACE,WAAW;IACX,eAAe,EAAE;EACnB;IACE,WAAW;IACX,UAAU,EAAE,EAAE;;AAElB;EACE,+BAA+B;EAC/B,uBAAuB;EACvB,+BAA+B;EAC/B,uBAAuB;EACvB,kCAAkC;EAClC,0BAA0B,EAAE;;AAE9B;EACE,YAAY,EAAE;EACd;IACE,YAAY;IACZ,cAAc,EAAE;;AAEpB;EACE,iBAAiB;EACjB,cAAc,EAAE;EAChB;IACE,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB,EAAE;EACpB;IACE,2BAA2B;IAC3B,eAAe,EAAE;EACnB;IACE,2BAA2B;IAC3B,eAAe,EAAE;EACnB;IACE,2BAA2B;IAC3B,eAAe,EAAE;EACnB;IACE,iBAAiB;IACjB,oBAAoB;IACpB,cAAc;IACd,mBAAmB;IACnB,YAAY;IACZ,gBAAgB,EAAE;IAClB;MACE,iBAAiB,EAAE;IACrB;MACE,eAAe;MACf,iBAAiB;MACjB,kBAAkB;MAClB,wBAAwB;MACxB,mBAAmB;MACnB,YAAY;MACZ,gBAAgB,EAAE;EACtB;IACE,iBAAiB;IACjB,aAAa,EAAE;IACf;MAGE,gBAAgB;MAChB,qBAAqB;MACrB,sBAAc;MAAd,cAAc;MACd,oBAAoB;MACpB,cAAc,EAAE;MAChB;QACE,YAAY;QACZ,aAAa;QACb,oBAAoB;QACpB,iBAAiB;QACjB,iBAAiB,EAAE;QACnB;UACE,YAAY,EAAE;MAClB;QACE,kBAAkB;QAClB,gBAAgB,EAAE;IACtB;MACE,oBAAoB;MACpB,YAAY;MACZ,cAAc,EAAE;MAChB;QACE,iBAAiB,EAAE;MACrB;QACE,eAAe;QACf,iBAAiB;QACjB,kBAAkB;QAClB,wBAAwB;QACxB,mBAAmB;QACnB,YAAY;QACZ,gBAAgB,EAAE;EACxB;IACE,iBAAiB,EAAE;IACnB;MACE,oBAAoB;MACpB,iBAAiB;MACjB,cAAc;MACd,mBAAmB,EAAE;MACrB;QACE,eAAe,EAAE;MACnB;QACE,eAAe,EAAE;IACrB;MACE,oBAAoB;MACpB,iBAAiB;MACjB,cAAc;MACd,gBAAgB,EAAE;MAClB;QAGE,gBAAgB;QAChB,qBAAqB;QACrB,sBAAc;QAAd,cAAc,EAAE;QAChB;UAGE,eAAe;UACf,YAAY;UACZ,gBAAQ;kBAAR,QAAQ,EAAE;QACZ;UACE,sBAAsB;UACtB,kBAAkB,EAAE;;AAE9B;EACE,iBAAiB;EACjB,gBAAgB,EAAE;;AAEpB;EACE,oBAAoB;EACpB,oBAAoB,EAAE;EACtB;IACE,mBAAmB;IAGnB,gBAAgB;IAChB,qBAAqB;IACrB,sBAAc;IAAd,cAAc;IACd,mBAAmB,EAAE;EACvB;IACE,YAAY,EAAE;IACd;MACE,mBAAmB;MACnB,OAAO;MACP,WAAW;MACX,WAAW;MACX,WAAW;MACX,aAAa;MACb,6BAA6B;MAC7B,YAAY;MACZ,aAAa;MACb,+BAA+B;MAC/B,2BAAuB;UAAvB,uBAAuB;MACvB,8BAA8B;MAC9B,0BAAsB;UAAtB,sBAAsB,EAAE;IAC1B;MACE,mBAAmB;MACnB,YAAY;MACZ,iBAAiB;MACjB,eAAe;MACf,YAAY;MACZ,aAAa;MACb,oBAAoB,EAAE;EAC1B;IACE,kBAAkB;IAClB,gBAAgB;IAGhB,eAAe;IACf,YAAY;IACZ,gBAAQ;YAAR,QAAQ,EAAE;EACZ;IACE,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,gBAAgB,EAAE;;AAEtB;EACE,gBAAgB;EAChB,UAAU;EACV,QAAQ;EACR,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,iBAAiB,EAAE;EACnB;IACE,gBAAgB;IAChB,eAAe,EAAE;EACnB;IACE,eAAe,EAAE;EACnB;IACE,YAAY,EAAE;IACd;MACE,gBAAgB,EAAE;;AAExB;EACE,gBAAgB;EAChB,QAAQ;EACR,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB,EAAE;EAClB;IACE,iBAAiB,EAAE;EACrB;IACE,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB,EAAE;;AAExB;EACE,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB,EAAE;EACnB;IACE,sBAAsB;IACtB,YAAY;IACZ,WAAW,EAAE;EACf;IACE,kBAAkB,EAAE;EACtB;IACE,eAAe;IACf,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;IACjB,iBAAiB,EAAE;IACnB;MACE,eAAe;MACf,WAAW;MACX,YAAY;MACZ,oBAAoB,EAAE","file":"Goods.vue","sourcesContent":["@-webkit-keyframes showUp {\n  from {\n    opacity: 0;\n    bottom: -100px; }\n  to {\n    opacity: 1;\n    bottom: 0; } }\n\n@keyframes showUp {\n  from {\n    opacity: 0;\n    bottom: -100px; }\n  to {\n    opacity: 1;\n    bottom: 0; } }\n\n.showUp {\n  -webkit-animation-name: showUp;\n  animation-name: showUp;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n.goodSwiper {\n  width: 100%; }\n  .goodSwiper .swiper-slide img {\n    width: 100%;\n    height: 200px; }\n\n.topInfo {\n  background: #fff;\n  padding: 15px; }\n  .topInfo .title .status {\n    padding: 3px 5px;\n    border-radius: 3px;\n    font-size: 14px; }\n  .topInfo .title .st1 {\n    border: .5px solid #ff6666;\n    color: #ff6666; }\n  .topInfo .title .st2 {\n    border: .5px solid #ff6666;\n    color: #ff6666; }\n  .topInfo .title .st3 {\n    border: .5px solid #ff6666;\n    color: #ff6666; }\n  .topInfo .match {\n    overflow: hidden;\n    background: #ff6666;\n    padding: 15px;\n    border-radius: 3px;\n    color: #fff;\n    margin-top: 5px; }\n    .topInfo .match .txt {\n      text-align: left; }\n    .topInfo .match .btn .match-btn {\n      display: block;\n      overflow: hidden;\n      padding: 5px 10px;\n      border: .5px solid #fff;\n      border-radius: 3px;\n      color: #fff;\n      font-size: 13px; }\n  .topInfo .results {\n    margin-top: 10px;\n    padding: 5px; }\n    .topInfo .results .centent {\n      display: -webkit-box;\n      display: -moz-box;\n      display: -o-box;\n      display: -ms-flexbox;\n      display: flex;\n      background: #ebebeb;\n      padding: 10px; }\n      .topInfo .results .centent .Rimg {\n        width: 45px;\n        height: 45px;\n        border-radius: 100%;\n        overflow: hidden;\n        background: #fff; }\n        .topInfo .results .centent .Rimg img {\n          width: 100%; }\n      .topInfo .results .centent .Rtxt {\n        margin-left: 10px;\n        font-size: 13px; }\n    .topInfo .results .item {\n      background: #ff6666;\n      color: #fff;\n      padding: 10px; }\n      .topInfo .results .item .lucknum {\n        text-align: left; }\n      .topInfo .results .item .match-btn {\n        display: block;\n        overflow: hidden;\n        padding: 5px 10px;\n        border: .5px solid #fff;\n        border-radius: 3px;\n        color: #fff;\n        font-size: 13px; }\n  .topInfo .chklist {\n    overflow: hidden; }\n    .topInfo .chklist .prompt {\n      background: #ebebeb;\n      margin-top: 10px;\n      padding: 10px;\n      text-align: center; }\n      .topInfo .chklist .prompt > a {\n        display: block; }\n      .topInfo .chklist .prompt span {\n        color: #ff6666; }\n    .topInfo .chklist .nitem {\n      background: #ebebeb;\n      margin-top: 10px;\n      padding: 10px;\n      font-size: 13px; }\n      .topInfo .chklist .nitem .ntxt {\n        display: -webkit-box;\n        display: -moz-box;\n        display: -o-box;\n        display: -ms-flexbox;\n        display: flex; }\n        .topInfo .chklist .nitem .ntxt > p:last-child {\n          -moz-box-flex: 1;\n          -webkit-box-flex: 1;\n          -o-box-flex: 1;\n          -ms-flex: 1;\n          flex: 1; }\n        .topInfo .chklist .nitem .ntxt span {\n          display: inline-block;\n          margin-right: 5px; }\n\n.linkInfo > .weui_cells {\n  margin-top: 10px;\n  font-size: 14px; }\n\n.linkInfo .recordmsg {\n  background: #ebebeb;\n  margin-bottom: 70px; }\n  .linkInfo .recordmsg .item {\n    position: relative;\n    display: -webkit-box;\n    display: -moz-box;\n    display: -o-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 10px 15px; }\n  .linkInfo .recordmsg .Cimg {\n    width: 40px; }\n    .linkInfo .recordmsg .Cimg:after {\n      position: absolute;\n      top: 0;\n      left: 35px;\n      z-index: 0;\n      width: 1px;\n      height: 100%;\n      border-right: 1px solid #888;\n      color: #888;\n      content: \" \";\n      -webkit-transform: scaleX(0.5);\n      transform: scaleX(0.5);\n      -webkit-transform-origin: 0 0;\n      transform-origin: 0 0; }\n    .linkInfo .recordmsg .Cimg img {\n      position: absolute;\n      z-index: 11;\n      overflow: hidden;\n      margin: 0 auto;\n      width: 40px;\n      height: 40px;\n      border-radius: 100%; }\n  .linkInfo .recordmsg .Cinfo {\n    margin-left: 10px;\n    font-size: 13px;\n    -moz-box-flex: 1;\n    -webkit-box-flex: 1;\n    -o-box-flex: 1;\n    -ms-flex: 1;\n    flex: 1; }\n  .linkInfo .recordmsg .Ccount {\n    position: absolute;\n    right: 15px;\n    bottom: 10px;\n    font-size: 13px; }\n\n.bottomInfo2 {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 99;\n  width: 100%;\n  padding: 10px 15px;\n  background: #fff; }\n  .bottomInfo2 a {\n    font-size: 14px;\n    padding: 5px 0; }\n  .bottomInfo2 p:nth-child(2) {\n    margin: 0 15px; }\n  .bottomInfo2 .iconBox {\n    width: 40px; }\n    .bottomInfo2 .iconBox .icon {\n      font-size: 30px; }\n\n.bottomInfo {\n  position: fixed;\n  left: 0;\n  z-index: 99;\n  width: 100%;\n  padding: 10px 15px;\n  background: #fff;\n  font-size: 14px; }\n  .bottomInfo > p:nth-child(1) {\n    text-align: left; }\n  .bottomInfo > p:nth-child(2) > a {\n    font-size: 14px;\n    border-radius: 3px;\n    padding: 5px 20px; }\n\n.dcontent {\n  overflow: hidden;\n  font-size: 14px;\n  margin: 5px auto; }\n  .dcontent .d-txt > span {\n    display: inline-block;\n    float: left;\n    width: 50%; }\n  .dcontent .d-txt .remain {\n    text-align: right; }\n  .dcontent .progress {\n    display: block;\n    overflow: hidden;\n    width: 100%;\n    height: 6px;\n    border-radius: 3px;\n    background: #ddd;\n    margin: 5px auto; }\n    .dcontent .progress .ongoing {\n      display: block;\n      width: 50%;\n      height: 6px;\n      background: #ff6666; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mockjs = __webpack_require__(13);
	
	var _mockjs2 = _interopRequireDefault(_mockjs);
	
	var _Header = __webpack_require__(14);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Loading = __webpack_require__(19);
	
	var _Loading2 = _interopRequireDefault(_Loading);
	
	var _swiper = __webpack_require__(33);
	
	var _swiper2 = _interopRequireDefault(_swiper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_mockjs2.default.mock('detail.json', {
	    "retcode": 1,
	    "retmsg": "查询成功",
	    "data": {
	        "id": 1,
	        "sid": 1,
	        "step": 1,
	        "periods": 100000001,
	        "title": "XooparXP61044章鱼吸盘式移动电源4000毫安",
	        "totalmember": 119,
	        "joinedmember": 119,
	        "remainmember": 80,
	        "downtime": "100",
	        "publishtime": "1464579823632",
	        "perprice": "1",
	        "isshow": "0",
	        "caipiaotype": "100",
	        "wuser": "{ \"buycount\": 119,\"bingocode\": \"10000069\", \"nickname\": \"抽奖小王子\",\"mid\": 100000, \"areaip\": \"局域网,10.1.1.51\", \"portrait\":\"/upload/igame/images/portrait/2016-03-23/8c714e38-e5a9-4117-81e1-4e3a162727f2.jpg\" }",
	        "buyInfo": {
	            "oid": 2,
	            "buycount": 2,
	            "buycodes": "10000021, 10000024"
	        },
	        "images": ["http://dummyimage.com/640x400/339966/333&text=Banner1", "http://dummyimage.com/640x400/337ab7/333&text=Baner2", "http://dummyimage.com/640x400/ffcc33/333&text=Banner3"],
	        "content": "<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc259892e35.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc2598ac0d4.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc2598a3d73.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc2598b07d3.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc2598af7ab.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc2598ad690.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc2598c7a1a.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc25b18582d.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc259904e93.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc25993e6b3.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc25994a2b1.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc25995eb24.jpg\"><\/p>"
	    }
	});
	
	exports.default = {
	    data: function data() {
	        return {
	            list: [],
	            loading: true,
	            showAside: false,
	            bottom: 'bottom',
	            showBottomAside: false,
	            asideBottomTit: 'right-title' };
	    },
	    ready: function ready() {},
	
	    route: {
	        data: function data() {
	            var self = this;
	            self.getAjaxData();
	        },
	        activate: function activate(transition) {
	            transition.next();
	        }
	    },
	    methods: {
	        getAjaxData: function getAjaxData() {
	            var self = this;
	            self.$http.get('detail.json').then(function (response) {
	                var data = response.data;
	                if (data.retcode == 1) {
	                    self.list = data.data;
	                    self.list.wuser = JSON.parse(data.data.wuser);
	                }
	                self.loading = false;
	                self.$nextTick(function () {
	                    self.swipe();
	                });
	            }, function (response) {});
	        },
	        swipe: function swipe() {
	            var swiperView = new _swiper2.default('.goodSwiper', {
	                autoplay: 3000,
	                speed: 600,
	                autoplayDisableOnInteraction: false,
	                loop: true,
	                pagination: '.swiper-pagination',
	                paginationClickable: true
	            });
	        },
	        progress: function progress() {
	            var self = this;
	            var totalprogress = 0,
	                remainmember = self.list.remainmember,
	                totalmember = self.list.totalmember;
	
	            totalprogress = Math.round(remainmember / totalmember * 100) + '%';
	            return totalprogress;
	        }
	    },
	    components: {
	        Appheader: _Header2.default,
	        Loading: _Loading2.default
	    }
	};

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

	module.exports = "\n<div class=\"detail\">\n\n  <!-- 头部 -->\n  <appheader title=\"商品详情\" >\n      <a href=\"javascript:history.back();\" slot=\"left\" ><i class=\"icon\">&#xe60b;</i></a>\n      <a slot=\"right\" >分享</a>\n  </appheader>\n\n  <!-- 商品广告 -->\n  <div class=\"swiper-container goodSwiper\" id=\"detailSwiper\" v-if=\"!loading\">\n      <div class=\"swiper-wrapper\">\n          <div class=\"swiper-slide\" v-for=\"item in list.images\" track-by=\"$index\">\n              <img :src=\"item\" >\n          </div>\n      </div>\n      <div class=\"swiper-pagination\"></div>\n  </div>\n\n  <!-- 主体区域 -->\n  <div class=\"detailItem\" v-if=\"!loading\">\n      <div class=\"topInfo\">\n          <!-- 标题 -->\n          <div class=\"title\">\n              <span class=\"status st1\" v-if=\"list.isshow == 0\">进行中</span>\n              <span class=\"status st2\" v-if=\"list.isshow == 1\">倒计时</span>\n              <span class=\"status st3\" v-if=\"list.isshow == 2\">已揭晓</span>\n              <span class=\"gname\">{{list.title}}</span>\n          </div>\n\n          <!-- 进行中 -->\n          <div class=\"dcontent\" v-if=\"list.isshow == 0\">\n               <p class=\"d-num\">期号：{{list.periods}}</p>\n               <p class=\"progress\"><i class=\"ongoing\" :style=\"{width:progress($index)}\"></i></p>\n               <p class=\"d-txt\">\n                   <span class=\"total\">总需{{list.totalmember}}人次</span>\n                   <span class=\"remain\">剩余{{list.remainmember}}<span>\n               </p>\n          </div>\n\n          <!-- 倒计时 -->\n          <div class=\"match v-flexbox\" v-if=\"list.isshow == 1\">\n              <div class=\"txt v-flexbox-item\">\n                  <p>期号：{{list.periods}}</p>\n                  <p class=\"timer\">\n                     <span>揭晓倒计时：05:52:13</span>\n                  </p>\n              </div>\n              <div class=\"btn\">\n                  <a class=\"match-btn\">计算详情</a>\n              </div>\n          </div>\n\n          <!-- 已揭晓 -->\n          <div class=\"results ui-border\" v-if=\"list.isshow == 2\">\n             <div class=\"centent\">\n               <div class=\"Rimg\"><img :src=\"list.wuser.portrait\"></div>\n               <div class=\"Rtxt\">\n                  <p>获奖者：{{list.wuser.nickname}}</p>\n                  <p>用户ID：{{list.wuser.bingocode}}</p>\n                  <p>期号：{{list.periods}}</p>\n                  <p>本期参与：{{list.wuser.buycount}}人次</p>\n                  <p>揭晓时间：{{list.publishtime | dateFormat 'yyyy-MM-dd hh:mm:ss' }}</p>\n               </div>\n              </div>\n\n             <div class=\"item v-flexbox\">\n                  <p class=\"lucknum v-flexbox-item\">幸运号码：12346790</p>\n                  <p class=\"btn\">\n                     <a class=\"match-btn\">计算详情</a>\n                  </p>\n             </div>\n          </div>\n\n          <!-- 夺宝记录 -->\n          <div class=\"chklist\">\n              <div class=\"prompt\">\n                  <a href=\"javascript:void(0)\"><span>登录</span>查看我的夺宝记录</a>\n              </div>\n              <div class=\"nitem\">\n                 <div class=\"ntxt\">\n                     <p>你参与了：</p><p>{{list.buyInfo.buycount}}人次</p>\n                 </div>\n                  <div class=\"ntxt\">\n                     <p>夺宝号码：</p><p><span>{{list.buyInfo.buycodes}}</span></p>\n                 </div>\n              </div>\n          </div>\n\n      </div>\n\n      <div class=\"linkInfo\">\n          <div class=\"weui_cells\">\n              <a class=\"weui_cell\"  v-link=\"{name:'graphic',query:{id:list.id}}\">\n                <div class=\"weui_cell_bd weui_cell_primary\">\n                  <p>图文详情</p>\n                </div>\n                <div class=\"weui_cell_ft with_arrow\">建议在WIFI下查看</div>\n              </a>\n              <a class=\"weui_cell\" v-link=\"{ path: '' }\">\n                <div class=\"weui_cell_bd weui_cell_primary\">\n                  <p>往期揭晓</p>\n                </div>\n                <div class=\"weui_cell_ft with_arrow\"></div>\n              </a>\n          </div>\n\n          <div class=\"weui_cells\">\n              <a class=\"weui_cell\" v-link=\"{ path: '' }\">\n                <div class=\"weui_cell_bd weui_cell_primary\">\n                  <p>所有参与记录</p>\n                </div>\n              </a>\n              <div class=\"recordmsg\">\n                  <div class=\"item\">\n                      <div class=\"Cimg\">\n                          <img src=\"http://dummyimage.com/200x200/ff6666/333&text=user\">\n                      </div>\n                      <div class=\"Cinfo\">\n                          <p>我的兄弟叫顺溜</p>\n                          <p>未分配或者内网IP</p>\n                      </div>\n                      <div class=\"Ccount\">参与1人次</div>\n                  </div>\n                  <div class=\"item\">\n                      <div class=\"Cimg\">\n                          <img src=\"http://dummyimage.com/200x200/ff6666/333&text=user\">\n                      </div>\n                      <div class=\"Cinfo\">\n                          <p>我的兄弟叫顺溜</p>\n                          <p>未分配或者内网IP</p>\n                      </div>\n                      <div class=\"Ccount\">参与1人次</div>\n                  </div>\n              </div>\n          </div>\n      </div>\n\n      <div class=\"bottomInfo v-flexbox\" style=\"display:none\"  >\n          <p class=\"v-flexbox-item\">新一期正在火热进行中</p>\n          <p>\n              <a href=\"javascript:;\" class=\"weui_btn weui_btn_warn\">立即前往</a>\n          </p>\n      </div>\n\n      <div class=\"bottomInfo2 v-flexbox\" >\n          <p class=\"v-flexbox-item\"><a href=\"javascript:;\" class=\"weui_btn weui_btn_warn\" @click=\"showBottomAside = true\">立即夺宝</a></p>\n          <p class=\"v-flexbox-item\"><a href=\"javascript:;\" class=\"weui_btn weui_btn_plain_default\">加入清单</a></p>\n          <p class=\"iconBox\"><i class=\"icon\">&#xe602;</i></p>\n      </div>\n  </div>\n\n  <!-- 加载层 -->\n  <loading :show=\"loading\"></loading>\n\n</div>\n";

/***/ })

});
//# sourceMappingURL=5.5c7ac23f0568f3cd6c3c.js.map