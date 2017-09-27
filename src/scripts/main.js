import {rotateWindow} from './modules/rotate-window.js';
import {menu} from './modules/menu.js';

const indexButton = document.getElementById('indexButton'),
  menuButton = document.getElementById('hamburger');

if (indexButton) {
  rotateWindow.init();
}

if (menuButton) {
  menu.init();
}