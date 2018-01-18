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
/******/ 	return __webpack_require__(__webpack_require__.s = 64);
/******/ })
/************************************************************************/
/******/ ({

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(65);


/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Amanda Responsive Bootstrap 4 Admin Template
 * Version: 2.0.0
 * Author: ThemePixels (@themepixels)
 * URL: http://themepixels.me/amanda
 *
**/



$(document).ready(function () {

  // Make the left sidebar scrollable
  $('.am-sideleft .tab-pane').perfectScrollbar();

  // Left Sidebar Tab
  $('.am-sideleft-tab .nav-link').on('click', function (e) {
    e.preventDefault();

    // finding and unsetting current active tab
    $('.am-sideleft-tab .nav-link').each(function () {
      $(this).removeClass('active');
    });

    // make this as a new active tab
    $(this).addClass('active');

    // finding and hiding current tab pane
    $('.am-sideleft .tab-pane').each(function () {
      $(this).removeClass('active');
    });

    // making this target as a new active pane
    $($(this).attr('href')).addClass('active');
  });

  // show sub menu in left sidebar
  $('.show-sub + .nav-sub').slideDown();

  // Toggles a class that will show/hide left menu
  $('#naviconLeft').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('collapse-menu');
  });

  // Toggles a class that will shows/left menu
  // and push the mainpanel (mobile only)
  $('#naviconLeftMobile').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('show-left');
  });

  // In mobile it shows search input form when clicking search button
  // This prevent search form submission when input value is empty
  $('#searchBtn').on('click', function (e) {
    var parent = $(this).parent();
    parent.toggleClass('show-search');
    if (parent.find('input').val() === '') {
      e.preventDefault();
    }
  });

  // When in mobile, this will hide input form when value is empty
  $('#searchBar input').on('focusout', function () {
    if ($(this).val() === '') {
      $(this).closest('form').removeClass('show-search');
    }
  });

  // Show/hide sub navigation of sidebar menu
  $('.with-sub').on('click', function (e) {
    e.preventDefault();
    $(this).next().slideToggle();
    $(this).toggleClass('show-sub');
  });

  // Toggles
  $('.toggle').toggles({
    on: true,
    height: 22
  });

  // highlight syntax highlighter
  $('pre code').each(function (i, block) {
    hljs.highlightBlock(block);
  });
});

/***/ })

/******/ });