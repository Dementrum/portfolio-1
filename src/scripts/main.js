import {rotateWindow} from './modules/rotate-window.js';
import {menu} from './modules/menu.js';
import {blur} from './modules/blur.js';

const indexButton = document.getElementById('indexButton'),
  menuButton = document.getElementById('hamburger'),
  workForm = document.getElementById('workForm');

if (indexButton) {
  rotateWindow.init();
}

if (menuButton) {
  menu.init();
}

if (workForm) {
  blur.set();
  window.onresize = function () {
    blur.set();
  };
}