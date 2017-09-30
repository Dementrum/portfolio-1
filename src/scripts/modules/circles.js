export let skillAnimate = (function (options){
  const skillList = document.querySelectorAll(options.skillList);
  
  let fillSkill = function (event) {
    for (let i = 0; i < skillList.length; i++) {
      const skillItem = skillList[i].children;
      for (let j = 0; j < skillItem.length; j++) {
        const circle = skillItem[j].querySelector(options.circle);
        circle.style.transitionDelay = 0.2*j + 's';
        skillItem[j].classList.toggle(options.activeClass);
      }
    }
    let scrollY = window.scrollY;
    let windowHeight = window.innerHeight;
    let section = document.querySelector('.skills');
    let sectionTop = section.offsetTop;
    console.log(scrollY, windowHeight, sectionTop);
  };
  
  window.addEventListener('click', fillSkill);
})({
  skillList: '.skills-row__list',
  circle: '.circle__second',
  activeClass: 'skill--active',
});