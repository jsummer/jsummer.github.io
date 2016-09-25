/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "static/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	__webpack_require__(5);
	__webpack_require__(12);

/***/ },

/***/ 1:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 5:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 12:
/***/ function(module, exports) {

	'use strict';

	var total = 100,
	    color1 = '#626261',
	    //环颜色
	color2 = '#e5e6e6',
	    //环背景
	lineWidth = 10,
	    size = 110;

	var charts = document.querySelectorAll('.circle-box');

	for (var i = 0; i < charts.length; i++) {
		loadChart(charts[i]);
	}
	//charts.forEach((chart)=>loadChart(chart));

	function loadChart(chart) {

		var canvas = document.createElement('canvas'),
		    percent = chart.getAttribute('data-percent');

		if (typeof G_vmlCanvasManager !== 'undefined') {
			G_vmlCanvasManager.initElement(canvas);
		}

		var ctx = canvas.getContext('2d');
		canvas.width = canvas.height = size;

		chart.appendChild(canvas);

		ctx.translate(size / 2, size / 2);
		ctx.rotate((-1 / 2 + 0 / 180) * Math.PI);

		var radius = (size - lineWidth) / 2;

		var drawCircle = function drawCircle(color, lineWidth, percent) {
			percent = Math.min(Math.max(0, percent || 1), 1);
			ctx.beginPath();

			ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
			ctx.strokeStyle = color;
			ctx.lineCap = 'butt'; // butt, round or square
			ctx.lineWidth = lineWidth;
			ctx.stroke();
		};

		drawCircle(color2, lineWidth, total / total);
		drawCircle(color1, lineWidth, percent / total);
	}

/***/ }

/******/ });