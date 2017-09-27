export let rotateWindow = (function(options) {
  const flipper = document.querySelector(options.flipper),
    indexButton = document.getElementById(options.indexButton),
    loginBackButton = document.getElementById(options.loginBackButton),
    activeClass = options.activeClass;

  function rotateToLogin(event) {
    event.preventDefault();
    flipper.style.transform = 'rotateY(180deg)';
    indexButton.classList.toggle(activeClass);
  }

  function rotateToWelcome(event) {
    flipper.style.transform = 'rotateY(0deg)';
    indexButton.classList.toggle(activeClass);
  }

  function addListener() {
    if (indexButton) {
      indexButton.addEventListener('click', rotateToLogin);
    }
    if (loginBackButton) {
      loginBackButton.addEventListener('click', rotateToWelcome);
    }
  }

  return {
    init: addListener,
  };
})({
  flipper: '.flipper',
  indexButton: 'indexButton',
  loginBackButton: 'loginBack',
  activeClass: 'index-button--active',
});