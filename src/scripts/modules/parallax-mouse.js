export let parallaxMouse = (function(options){
  if (document.getElementById('indexButton')) {
    const indexContainer = document.querySelector(options.indexContainer),
      indexLayers = indexContainer.children;

    const moveLayers = function(event) {
      const initialX = (window.innerWidth / 2) - event.pageX,
        initialY = (window.innerHeight / 2) - event.pageY;

      [].slice.call(indexLayers).forEach((layer, i) => {
        const divider = i / 80,
          positionX = initialX * divider,
          positionY = initialY * divider;

        let transformString = `translate(${positionX}px, ${positionY}px)`;
        layer.style.transform = transformString;
      });
    };

    let addListener = function() {
      window.addEventListener('mousemove', moveLayers);
    };
    return {
      init: addListener,
    };
  } else if (document.getElementById('workForm')) {
    const feedbackContainer = document.querySelector(options.feedbackContainer),
      feedbackLayers = feedbackContainer.children,
      feedbackSection = document.querySelector(options.feedbackSection);

    const moveLayers = function(event) {
      const initialX = (feedbackSection.offsetWidth / 2) - event.pageX,
        initialY = (feedbackSection.offsetHeight / 2) - event.pageY;

      [].slice.call(feedbackLayers).forEach((layer, i) => {
        const divider = i / 60,
          positionX = initialX * divider,
          positionY = initialY * divider;

        let transformString = `translate(${positionX}px, ${positionY}px)`;
        layer.style.transform = transformString;
      });
    };

    let addListener = function() {
      feedbackSection.addEventListener('mousemove', moveLayers);
    };
    return {
      init: addListener,
    };
  }
})({
  indexContainer: '.index-parallax',
  feedbackContainer: '.feedback-parallax',
  feedbackSection: '.feedback',
});