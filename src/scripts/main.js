import {rotateWindow} from './modules/rotate-window.js';
import {menu} from './modules/menu.js';
import {parallaxScroll} from './modules/parallax-scroll.js';
import {parallaxMouse} from './modules/parallax-mouse.js';
import {blur} from './modules/blur.js';
import {skillAnimate} from './modules/circles.js';

const indexButton = document.getElementById('indexButton'),
  menuButton = document.getElementById('hamburger'),
  workForm = document.getElementById('workForm');

if (indexButton) {
  rotateWindow.init();
  parallaxMouse.init();
}

if (menuButton) {
  menu.init();
  window.onscroll = function() {
    let windowScroll = window.pageYOffset;
    parallaxScroll.init(windowScroll);
  };
}

if (workForm) {
  blur.set();
  window.onresize = function () {
    blur.set();
  };
  parallaxMouse.init();
}

