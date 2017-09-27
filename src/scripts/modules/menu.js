export let menu = (function(options){
  const menuButton = document.getElementById(options.menuButton),
    menuContainer = document.querySelector(options.menuContainer),
    body = document.querySelector(options.body),
    activeMenuClass = options.activeMenuClass,
    activeBodyClass = options.activeBodyClass,
    activeButtonClass = options.activeButtonClass;

  function addListener() {
    menuButton.addEventListener('click', function(event){
      event.preventDefault();
      menuButton.classList.toggle(activeButtonClass);
      menuContainer.classList.toggle(activeMenuClass);
      body.classList.toggle(activeBodyClass);
    });

  }
  return {
    init: addListener,
  };
})({
  menuButton: 'hamburger',
  menuContainer: '.hamburger__nav',
  activeMenuClass: 'hamburger__nav--active',
  activeButtonClass: 'hamburger__icon--active',
  activeBodyClass: 'body-active-menu',
  body: 'body',
});