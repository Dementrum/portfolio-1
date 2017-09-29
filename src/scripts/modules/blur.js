export let blur = (function(options){
  const wrapper = document.querySelector(options.wrapper),
    section = document.querySelector(options.section),
    blur = document.querySelector(options.blur);
  function setBlur() {
    let imgWidth = section.offsetWidth,
      imgHeight = section.offsetHeight,
      positionLeft = -wrapper.offsetLeft,
      positionTop = -wrapper.offsetTop,
      blurCSS = blur.style;

    blurCSS.backgroundSize = `${imgWidth}px` + ` ${imgHeight}px`;
    blurCSS.backgroundPosition = `${positionLeft}px` + ` ${positionTop}px`;
  }
  return {
    set: setBlur,
  };
})({
  wrapper: '.feedback__form',
  blur: '.blur__background',
  section: '.feedback',
});