let aviatitle = {
  generate: function (string, block) {
    let wordsArray = string.split(' '),
      stringArray = string.split(''),
      sentence = [],
      word = '';

    block.text('');

    wordsArray.forEach(function (currentWord) {
      var wordsArray = currentWord.split('');

      wordsArray.forEach(function (letter) {
        var letterHtml = '<span class="letter-span">' + letter + '</span>';

        word += letterHtml;
      });

      var wordHTML = '<span class="letter-word">' + word + '</span>';

      sentence.push(wordHTML);
      word = '';
    });

    block.append(sentence.join(' '));

    let
      letters = block.find('.letter-span'),
      duration = 500 / stringArray.length;

    $.each(letters, function (item, elem) {
      setTimeout(function () {
        $(elem).addClass('active');
      }, duration * item);
    });
  },
};


export let Slider = function (container) {
  const nextButton = container.find('#sliderLeft'),
    previuosButton = container.find('#sliderRight'),
    items = container.find('.slider-button__item'),
    display = container.find('.slider-preview'),
    title = container.find('.slider-text__title'),
    skills = container.find('.slider-text__skills'),
    link = container.find('.slider-link'),
    itemsLength = items.length;
  let  duration = 500,
    flag = true;

  this.counter = 0;

  let generateMarkups = function() {
    console.log('hello');
    const list = nextButton.find('.slider-button__list'),
      markups = list.clone();
    
    previuosButton.append(markups);
  };

  let getDataArrays = function() {
    let dataObject = {
      pics: [],
      title: [],
      skills: [],
      link: [],
    };

    $.each(items, function() {
      let $this = $(this);
  
      dataObject
        .pics
        .push($this.data('full'));
      dataObject
        .title
        .push($this.data('title'));
      dataObject
        .skills
        .push($this.data('skills'));
      dataObject
        .link
        .push($this.data('link'));
    });

    return dataObject;
  };

  let slideInLeftBtn = function(slide) {
    let reqItem = items.eq(slide - 1),
      activeItem = items.filter('.slider-active');
    
    activeItem 
      .stop(true, true)
      .animate({
        'top': '100%',
      }, duration);

    reqItem
      .stop(true, true)
      .animate({
        'top': '0%',
      }, duration, function() {
        $(this)
          .addClass('slider-active')
          .siblings()
          .removeClass('slider-active')
          .css('top', '-100%');
      });
  };

  let slideInRightBtn = function(slide) {
    let items = previuosButton.find('slider-button__item'),
      activeItem = items.filter('.slider-active'),
      reqSlide = slide + 1;
    
    if (reqSlide > itemsLength - 1) {
      reqSlide = 0;
    }

    let reqItem = items.eq(reqSlide);

    activeItem
      .stop(true, true)
      .animate({
        'top': '-100%',
      }, duration);

    reqItem
      .stop(true, true)
      .animate({
        'top': '0%',
      }, duration, function () {
        $(this)
          .addClass('slider-active')
          .siblings()
          .removeClass('slider-active')
          .css('top', '100%');
      });
  };

  let changeMainPicture = function(slide) {
    let image = display.find('.slider-preview__img');
    let data = getDataArrays();

    image
      .stop(true, true)
      .fadeOut(duration / 2, function () {
        image.attr('src', data.pics[slide]);
        $(this).fadeIn(duration / 2);
      });
  };

  let changeTextData = function(slide) {
    let data = getDataArrays();
    aviatitle.generate(data.title[slide], title, 'ru');
    aviatitle.generate(data.skills[slide], skills, 'en');
    link.attr('href', data.link[slide]);
  };

  this.setDefaults = function() {
    let _that = this,
      data = getDataArrays();
    generateMarkups();
    nextButton
      .find('.slider-button__item')
      .eq(_that.counter - 1)
      .addClass('slider-active');
    previuosButton
      .find('.slider-button__item')
      .eq(_that.counter + 1)
      .addClass('slider-active');
    display
      .find('.slider-preview__img')
      .attr('src', data.pics[_that.counter]);
    changeTextData(_that.counter);
  };

  this.moveSlide = function(direction) {
    let _that = this;
    let directions = {
      next: function() {
        if (_that.counter < itemsLength - 1) {
          _that.counter++;
        } else {
          _that.counter = 0;
        }
      },
      prev: function() {
        if (_that.counter > 0) {
          _that.counter--;
        } else {
          _that.counter = itemsLength - 1;
        }
      },
    };

    directions[direction]();

    if (flag) {
      flag  = false;

      if (typeof timeout != 'undefined') {
        clearTimeout(timeout);
      }

      var timeout = setTimeout(function () {
        flag = true;
      }, duration + 50);

      slideInLeftBtn(_that.counter);
      slideInRightBtn(_that.counter);
      changeMainPicture(_that.counter);
      changeTextData(_that.counter);
    }
  };

};