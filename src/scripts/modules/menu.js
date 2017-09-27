export let menu = (function(options){
  const menuButton = document.getElementById(options.menuButton),
    menuContainer = document.querySelector(options.menuContainer),
    body = document.querySelector(options.body),
    activeMenuClass = options.activeMenuClass,
    activeBodyClass = options.activeBodyClass,
    activeButtonClass = options.activeButtonClass;

  function _showMenu (event) {
    event.preventDefault();
    menuButton.classList.toggle(activeButtonClass);
    menuContainer.classList.toggle(activeMenuClass);
    body.classList.toggle(activeBodyClass);
  }

  function _hideMenu () {
    menuButton.classList.remove(activeButtonClass);
    menuContainer.classList.remove(activeMenuClass);
    body.classList.remove(activeBodyClass);
  }

  function addListener() {
    menuButton.addEventListener('click', _showMenu);
    menuContainer.addEventListener('click', _hideMenu);

  }
  return {
    init: addListener,
  };
})({
  body: 'body',
  menuButton: 'hamburger',
  menuContainer: '.hamburger__nav',
  activeMenuClass: 'hamburger__nav--active',
  activeButtonClass: 'hamburger__icon--active',
  activeBodyClass: 'body-active-menu',
});