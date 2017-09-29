export let parallaxScroll = (function(options) {
  const bg = document.querySelector(options.bg);

  return {
    move: function(block, windowScroll, strafeAmount) {
      let strafe = `${windowScroll / -strafeAmount}%`;
      let transformString = 'translate3d(0, ' + strafe + ', 0)';
      let style = block.style;

      style.transform = transformString;
      style.webkitTransform = transformString;
    },
    init: function(windowScroll) {
      this.move(bg, windowScroll, 45);
    },
  };
})({
  bg: '.hero__bg',
});