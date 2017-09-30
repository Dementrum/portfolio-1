export let arrowScroll = (function(options){
  const arrowDown = document.getElementById(options.arrowDown);
  const arrowUp = document.getElementById(options.arrowUp);
  return {
    down: function(){
      if (arrowDown){
        arrowDown.addEventListener('click', function() {
          const nextSection = arrowDown.parentNode.nextElementSibling;
          $('html, body').animate({scrollTop: $(nextSection).offset().top}, 1000);
        });
      }
    },
    up: function(){
      if (arrowUp){
        arrowUp.addEventListener('click', function() {
          const previousSection = arrowUp.parentNode.previousElementSibling.previousElementSibling;
          $('html, body').animate({scrollTop: $(previousSection).offset().top}, 1000);
        });
      }
    },
  };
})({
  arrowDown: 'arrowDown',
  arrowUp: 'arrowUp',
});