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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var rotateWindow = exports.rotateWindow = function (options) {
  var flipper = document.querySelector(options.flipper),
      indexButton = document.getElementById(options.indexButton),
      loginBackButton = document.getElementById(options.loginBackButton),
      activeClass = options.activeClass;

  function _rotateToLogin(event) {
    event.preventDefault();
    flipper.style.transform = 'rotateY(180deg)';
    indexButton.classList.toggle(activeClass);
  }

  function _rotateToWelcome() {
    flipper.style.transform = 'rotateY(0deg)';
    indexButton.classList.toggle(activeClass);
  }

  function addListener() {
    if (indexButton) {
      indexButton.addEventListener('click', _rotateToLogin);
    }
    if (loginBackButton) {
      loginBackButton.addEventListener('click', _rotateToWelcome);
    }
  }

  return {
    init: addListener
  };
}({
  flipper: '.flipper',
  indexButton: 'indexButton',
  loginBackButton: 'loginBack',
  activeClass: 'index-button--active'
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var menu = exports.menu = function (options) {
  var menuButton = document.getElementById(options.menuButton),
      menuContainer = document.querySelector(options.menuContainer),
      body = document.querySelector(options.body),
      activeMenuClass = options.activeMenuClass,
      activeBodyClass = options.activeBodyClass,
      activeButtonClass = options.activeButtonClass;

  function _showMenu(event) {
    event.preventDefault();
    menuButton.classList.toggle(activeButtonClass);
    menuContainer.classList.toggle(activeMenuClass);
    body.classList.toggle(activeBodyClass);
  }

  function _hideMenu() {
    menuButton.classList.remove(activeButtonClass);
    menuContainer.classList.remove(activeMenuClass);
    body.classList.remove(activeBodyClass);
  }

  function addListener() {
    menuButton.addEventListener('click', _showMenu);
    menuContainer.addEventListener('click', _hideMenu);
  }
  return {
    init: addListener
  };
}({
  body: 'body',
  menuButton: 'hamburger',
  menuContainer: '.hamburger__nav',
  activeMenuClass: 'hamburger__nav--active',
  activeButtonClass: 'hamburger__icon--active',
  activeBodyClass: 'body-active-menu'
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var blur = exports.blur = function (options) {
  var wrapper = document.querySelector(options.wrapper),
      section = document.querySelector(options.section),
      blur = document.querySelector(options.blur);
  function setBlur() {
    var imgWidth = section.offsetWidth,
        imgHeight = section.offsetHeight,
        positionLeft = -wrapper.offsetLeft,
        positionTop = -wrapper.offsetTop,
        blurCSS = blur.style;

    blurCSS.backgroundSize = imgWidth + 'px' + (' ' + imgHeight + 'px');
    blurCSS.backgroundPosition = positionLeft + 'px' + (' ' + positionTop + 'px');
  }
  return {
    set: setBlur
  };
}({
  wrapper: '.feedback__form',
  blur: '.blur__background',
  section: '.feedback'
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
__webpack_require__(2);
__webpack_require__(1);
module.exports = __webpack_require__(0);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _rotateWindow = __webpack_require__(0);

var _menu = __webpack_require__(1);

var _parallaxScroll = __webpack_require__(5);

var _parallaxMouse = __webpack_require__(6);

var _blur = __webpack_require__(2);

var indexButton = document.getElementById('indexButton'),
    menuButton = document.getElementById('hamburger'),
    workForm = document.getElementById('workForm');

if (indexButton) {
  _rotateWindow.rotateWindow.init();
}

if (menuButton) {
  _menu.menu.init();
  window.onscroll = function () {
    var windowScroll = window.pageYOffset;
    _parallaxScroll.parallaxScroll.init(windowScroll);
  };
}

if (workForm) {
  _blur.blur.set();
  window.onresize = function () {
    _blur.blur.set();
  };
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var parallaxScroll = exports.parallaxScroll = function (options) {
  var bg = document.querySelector(options.bg);

  return {
    move: function move(block, windowScroll, strafeAmount) {
      var strafe = windowScroll / -strafeAmount + '%';
      var transformString = 'translate3d(0, ' + strafe + ', 0)';
      var style = block.style;

      style.transform = transformString;
      style.webkitTransform = transformString;
    },
    init: function init(windowScroll) {
      this.move(bg, windowScroll, 45);
    }
  };
}({
  bg: '.hero__bg'
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var parallaxMouse = exports.parallaxMouse = function () {}();

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map