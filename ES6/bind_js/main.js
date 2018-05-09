/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var v1 = "输出1";
var v2 = "输出2";
var v3 = { name: "李小1", age: 17 };
exports.v1 = v1;
exports.v2 = v2;
exports.v3 = v3;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module = __webpack_require__(0);

console.log(_module.v1);
console.log(_module.v2);
console.log(_module.v3.name);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(function () {
	/*ES6共有6种声明变量的方式
 	var 
 	let 
 	const 
 	function 
 	import 
 	class
 */
	/*---------------------------------------------------------------------------
 	indexOf(str,n);【根据字符串找位置】返回字符串str出现的第一次的位置，如果没有找到，返回-1
 	charAt();【根据位置找字符串】，没找到返回''
 	字符串新增的方法
 	includes("str",n);
 	startsWith("str",n);
 	endsWith("str",n);ends和上面两个方法不同，n表示从前n个字符中（尾部）检索,其它方法是从这个位置号开始检索到结束
 	repeat(n)；复制调用的字符串n次，并返回新的字符串,如果n是0，返回一个新的空的字符串
 ---------------------------------------------------------------------------*/
	var strDemo = "hello lhl";
	console.log("hello lhl是否有o这个字符，位置是：" + strDemo.indexOf("o"));
	console.log("hello lhl是否包含lhl：" + strDemo.includes("lhl", 5)); //true
	console.log("hello lhl是否起始包含hl：" + strDemo.startsWith("ll", 2)); //true	
	console.log("hello lhl是否以el结尾：" + strDemo.endsWith("el", 3)); //true

	var repeatStr = "x";
	var result = repeatStr.repeat(2);
	console.log("复制的结果为：" + result);

	/*---------------------------------------------------------------------------
 	模板语法,和ts很像的地方就是可以嵌入变量${变量名字}
 ---------------------------------------------------------------------------*/
	var thisObj = { "name": "李宏磊" };
	$(".insertStrDom").append("This is my name \u2014\u2014 <p style=\"color:red\">" + thisObj.name + "</p>");

	/*---------------------------------------------------------------------------
 	Math 扩展的函数
 ---------------------------------------------------------------------------*/
	//获取小数的整数部分,如果没有可截取的，则返回NaN
	console.log("截取的整数为：" + Math.trunc(5.8));
	console.log("无法截取：" + Math.trunc("丁春秋"));
	//sign()返回是否是整数/负数，若是正数则返回+1，负数返回-1；0返回0，-0返回-0，同上如果传入的是无法转换的则返回NaN
	//返回值是number类型
	console.log("判断正数还是负数：" + Math.sign(-7) + "，返回的类型：" + _typeof(Math.sign(-7)));

	/*---------------------------------------------------------------------------
 	数组的扩展
 ---------------------------------------------------------------------------*/
	console.log("(数组的扩展");
	console.log(Array.from({ '0': 'a', '1': 'b', '2': 'c', length: 3 }));

	/*---------------------------------------------------------------------------
 	对象的扩展
 ---------------------------------------------------------------------------*/

	/*---------------------------------------------------------------------------
 	函数的扩展
 ---------------------------------------------------------------------------*/
	function newFun() {
		var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
		var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

		console.log("函数的形参默认值：，x：" + x + ",y=" + y);
	}
	newFun();

	var a = [];

	var _loop = function _loop(i) {
		a[i] = function () {
			console.log(i);
		};
	};

	for (var i = 0; i < 10; i++) {
		_loop(i);
	}
	a[6]();

	var kk = 0;
	console.log("kk：" + kk);
	var b = [];
	for (var k = 0; k < 10; k++) {
		b[k] = function () {
			console.log(k);
		};
	}
	b[6]();
	/*---------------------------------------------------------------------------
 	类A
 ---------------------------------------------------------------------------*/

	var A = function () {
		_createClass(A, [{
			key: "printStr",
			value: function printStr() {
				console.log("name:" + this.name + ",age:" + this.age);
			}
		}]);

		function A(name, age) {
			_classCallCheck(this, A);

			this.name = name;
			this.age = age;
		}

		return A;
	}();

	var thisA = new A("lhldd", 3);
	thisA.printStr();
	/*---------------------------------------------------------------------------
 	闭包测试
 ---------------------------------------------------------------------------*/
	//demo1
	function sayHello2(name) {
		var text = 'Hello ' + name; // Local variable
		var say = function say() {
			console.log(text);
		};
		return say;
	}
	var say2 = sayHello2('Bob');
	say2(); // logs "Hello Bob"

	//demo2
	function say667() {
		// Local variable that ends up within closure
		var num = 42;
		var say = function say() {
			console.log(num);
		};
		num++;
		return say;
	}
	var sayNumber = say667();
	sayNumber(); // logs 43

	//demo3
	var gLogNumber, gIncreaseNumber, gSetNumber;
	function setupSomeGlobals() {
		// Local variable that ends up within closure
		var num = 42;
		// Store some references to functions as global variables
		gLogNumber = function gLogNumber() {
			console.log(num);
		};
		gIncreaseNumber = function gIncreaseNumber() {
			num++;
		};
		gSetNumber = function gSetNumber(x) {
			num = x;
		};
	}

	setupSomeGlobals();
	gIncreaseNumber();
	gLogNumber(); // 43
	gSetNumber(5);
	gLogNumber(); // 5

	var oldLog = gLogNumber;

	setupSomeGlobals();
	gLogNumber(); // 42

	oldLog(); // 5


	function createFunctions() {
		var result = new Array();
		for (var i = 0; i < 10; i++) {
			result[i] = function (num) {
				return num;
			}(i);
		}
		return result;
	};

	var re = createFunctions();
	re[2]();
});

/***/ })
/******/ ]);