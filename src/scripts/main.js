import {rotateWindow} from './modules/rotate-window.js';

const indexButton = document.getElementById('indexButton'),
  rotateBackButton = document.getElementById('loginBack');

if (indexButton) {
  indexButton.onclick = function(e) {
    e.preventDefault();
    rotateWindow.rotateToLogin();
  };
  rotateBackButton.onclick = function(e) {
    e.preventDefault();
    rotateWindow.rotateToWelcome();
  };
}