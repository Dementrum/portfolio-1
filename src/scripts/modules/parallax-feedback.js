// export let parallaxFeedback = (function(options){
//   const container = document.querySelector(options.container),
//     layers = container.children,
//     field = document.querySelector(options.field);

//   // const moveLayers = function(event) {
//   //   const initialX = (window.innerWidth / 2) - event.pageX,
//   //     initialY = (window.innerHeight / 2) - event.pageY;

//   //   [].slice.call(layers).forEach((layer, i) => {
//   //     const divider = i / 80,
//   //       positionX = initialX * divider,
//   //       positionY = initialY * divider;

//   //     let transformString = `translate(${positionX}px, ${positionY}px)`;
//   //     layer.style.transform = transformString;
//   //   });
//   // };

//   return {
//     init: window.addEventListener('mousemove', moveLayers),
//   };

// })({
//   container: '.feedback-parallax',
//   field: '.feedback',
// });