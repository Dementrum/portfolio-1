export let blur = (function(options){
  const wrapper = document.querySelector(options.wrapper),
    blurBackground = document.querySelector(options.blurBackground),
    blur = document.querySelector(options.blur);
  function setBlur() {
    let imgWidth = blurBackground.offsetWidth,
      positionLeft = -wrapper.offsetLeft,
      positionTop = -wrapper.offsetTop,
      blurCSS = blur.style;

    blurCSS.backgroundSize = imgWidth + 'px' + ' ' + '0px';
    blurCSS.backgroundPosition = positionLeft + 'px' + ' ' + positionTop + 'px';
  }
  return {
    set: setBlur,
  };
})({
  wrapper: '.feedback__form',
  blur: '.blur',
  blurBackground: '.feedback',
});