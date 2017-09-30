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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var parallaxMouse = exports.parallaxMouse = function (options) {
  if (document.getElementById('indexButton')) {
    var indexContainer = document.querySelector(options.indexContainer),
        indexLayers = indexContainer.children;

    var moveLayers = function moveLayers(event) {
      var initialX = window.innerWidth / 2 - event.pageX,
          initialY = window.innerHeight / 2 - event.pageY;

      [].slice.call(indexLayers).forEach(function (layer, i) {
        var divider = i / 80,
            positionX = initialX * divider,
            positionY = initialY * divider;

        var transformString = 'translate(' + positionX + 'px, ' + positionY + 'px)';
        layer.style.transform = transformString;
      });
    };

    var addListener = function addListener() {
      window.addEventListener('mousemove', moveLayers);
    };
    return {
      init: addListener
    };
  } else if (document.getElementById('workForm')) {
    var feedbackContainer = document.querySelector(options.feedbackContainer),
        feedbackLayers = feedbackContainer.children,
        feedbackSection = document.querySelector(options.feedbackSection);

    var _moveLayers = function _moveLayers(event) {
      var initialX = feedbackSection.offsetWidth / 2 - event.pageX,
          initialY = feedbackSection.offsetHeight / 2 - event.pageY;

      console.log(initialX, initialY);

      [].slice.call(feedbackLayers).forEach(function (layer, i) {
        var divider = i / 60,
            positionX = initialX * divider,
            positionY = initialY * divider;

        var transformString = 'translate(' + positionX + 'px, ' + positionY + 'px)';
        layer.style.transform = transformString;
      });
    };

    var _addListener = function _addListener() {
      feedbackSection.addEventListener('mousemove', _moveLayers);
    };
    return {
      init: _addListener
    };
  }
}({
  indexContainer: '.index-parallax',
  feedbackContainer: '.feedback-parallax',
  feedbackSection: '.feedback'
});

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var skillAnimate = exports.skillAnimate = function (options) {
  var skillList = document.querySelectorAll(options.skillList);

  var fillSkill = function fillSkill(event) {
    for (var i = 0; i < skillList.length; i++) {
      var skillItem = skillList[i].children;
      for (var j = 0; j < skillItem.length; j++) {
        var circle = skillItem[j].querySelector(options.circle);
        circle.style.transitionDelay = 0.2 * j + 's';
        skillItem[j].classList.toggle(options.activeClass);
      }
    }
    var scrollY = window.scrollY;
    var windowHeight = window.innerHeight;
    var section = document.querySelector('.skills');
    var sectionTop = section.offsetTop;
    console.log(scrollY, windowHeight, sectionTop);
  };

  window.addEventListener('click', fillSkill);
}({
  skillList: '.skills-row__list',
  circle: '.circle__second',
  activeClass: 'skill--active'
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(7);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(1);
__webpack_require__(8);
__webpack_require__(3);
__webpack_require__(2);
module.exports = __webpack_require__(0);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _rotateWindow = __webpack_require__(0);

var _menu = __webpack_require__(1);

var _parallaxScroll = __webpack_require__(2);

var _parallaxMouse = __webpack_require__(3);

var _blur = __webpack_require__(4);

var _circles = __webpack_require__(5);

var indexButton = document.getElementById('indexButton'),
    menuButton = document.getElementById('hamburger'),
    workForm = document.getElementById('workForm');

if (indexButton) {
  _rotateWindow.rotateWindow.init();
  _parallaxMouse.parallaxMouse.init();
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
  _parallaxMouse.parallaxMouse.init();
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// export let parallaxFeedback = (function(options){
//   const container = document.querySelector(options.container),
//     layers = container.children,
//     field = document.querySelector(options.field);

//   // const moveLayers = function(event) {
//   //   const initialX = (window.innerWidth / 2) - event.pageX,
//   //     initialY = (window.innerHeight / 2) - event.pageY;

//   //   [].slice.call(layers).forEach((layer, i) => {
//   //     const divider = i / 80,
//   //       positionX = initialX * divider,
//   //       positionY = initialY * divider;

//   //     let transformString = `translate(${positionX}px, ${positionY}px)`;
//   //     layer.style.transform = transformString;
//   //   });
//   // };

//   return {
//     init: window.addEventListener('mousemove', moveLayers),
//   };

// })({
//   container: '.feedback-parallax',
//   field: '.feedback',
// });


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map