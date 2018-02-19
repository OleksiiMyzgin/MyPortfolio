import $ from "jquery";

function animation() {

  const $window = $(window);
  const $windowHeight = $window.height();
  const $header = $(".header");
  const $headerHeight = $header.height();

  // LINK highlight
  const $homeOffSet = $('#home').offset().top;
  const $aboutOffSet = $('#about').offset().top;
  const $portfolioOffSet = $('#portfolio').offset().top;
  const $contactOffSet = $('#contact').offset().top;

  // SCROLL ANIMATIONS
  const $animate = $('.animate')

  window.addEventListener("scroll", _handleScroll);

  function _handleScroll() {

    // must be initialize on scroll
    const $windowScrollTop = $window.scrollTop();

    // NAV POSITION
    if ($windowScrollTop >= $windowHeight - $headerHeight) {
      $header.addClass("fixed-menu-style fixed-menu");
    } else {
      $header.removeClass("fixed-menu");
      $header.removeClass("fixed-menu-style");
    }

    // LINK highlight
    if($windowScrollTop >= $homeOffSet) {
      highlightLink('home');
    }
    if($windowScrollTop >= $aboutOffSet) {
      highlightLink('about');
    }
    if($windowScrollTop >= $portfolioOffSet) {
      highlightLink('portfolio');
    }
    if($windowScrollTop >= $contactOffSet) {
      highlightLink('contact');
    }

    function highlightLink(anchor) {
      $('.menu__list .active').removeClass('active');
      $('nav')
        .find(`[dest="${anchor}"]`)
        .addClass('active');
    }

    // SCROLL ANIMATIONS

    onScrollInit($animate);

    function onScrollInit(items) {

      const offset = $(window).height() / 1.6;
      const padding = 50; // padding, to animate block after touching and scrolling 50px down
      items.each(function() {
        const elem = $(this),
              animationClass = elem.attr('data-animation');
        if($windowScrollTop + $windowHeight - padding > elem.offset().top){
          elem.addClass('animated').addClass(animationClass);
        }
      })
    }
  };

  let isMobile;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.outerWidth < 575) {
    isMobile = true;
  }

  // Sticky Nav on Mobile
  if (isMobile) {
    $header.addClass('fixed-menu');
  }

  // EVENT HANDLERS
  const $btns = $('.page-scroll');
  const $html = $('html, body');
  Array.from($btns).forEach(link => {
    link.addEventListener('click', function() {
      const anchor = $(this).attr('dest');

      $html.animate({
        scrollTop: $(`#${anchor}`).offset().top + 1
      },
      1000
      );
    })
  })

  // Mobile icon click
  const $headerIcon = $('.header__icon');
  const $headerMenu = $('.menu__list');

  $headerIcon.click( () => {
    if ($headerMenu.css('display') == 'none') {
      $headerMenu.slideDown();
    } else {
      $headerMenu.slideUp();
    }
  });

  $window.resize(() => {
    $('.header__menu').css('display', '');
  })

}

export default animation;