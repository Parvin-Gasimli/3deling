$('.navTrigger').click(function () {
  $(this).toggleClass('active');
  
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();

});
const nav = document.querySelector('.nav');
let navTop = nav.offsetTop;


function fixedNav() {
  if (window.scrollY >= 550) {
  
    nav.classList.add('SlickNav');

  } else {
    nav.classList.remove('SlickNav');
  }
}

window.addEventListener('scroll', fixedNav);

AOS.init({
  offset: 120,
  delay: 120,
  easing: 'ease',
  duration: 1200,
  disable: false,
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
  startEvent: 'DOMContentLoaded',
  animatedClassName: 'aos-animate',
  initClassName: 'aos-init',
  useClassNames: false,
  disableMutationObserver: false,
  throttleDelay: 99,
  debounceDelay: 50
});
$(document).ready(function(){
  $grid = $('.list').isotope({
    // options
    itemSelector: '.list__item',
    layoutMode: 'masonry',
    masonry: {
      gutter: 0
    }
  });
  // filter items on button click
  $('.js-filter').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    $( '.js-filter button' ).removeClass( 'is-active' );
    $( this ).addClass( 'is-active' );
  });
});


(function($) {
  var duration = 2500;  // change this to change rotation time in milliseconds
  var current = 1;
  var tricker = $(".tricker");
  var height = tricker.height();
  var number = tricker.children().length;
  var first = tricker.children().first();

  setInterval(function() {
    var interv = current * -1 * height;
    first.css("margin-top", interv + "px");
    if (current == number) {
      first.css("margin-top", "0px");
      current = 1;
    } else {
      current++;
    }
  }, duration);
})(jQuery);


$(document).ready(function($) {
  $('.card-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
       breakpoint: 400,
       settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
       }
    }]
});
});




$(window).on("scroll", function (event) {
  if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
  } else {
      $(".back-to-top").fadeOut(200);
  }
});

$(document).ready(function() {
  var time = 2;
  var $bar,
    $slick,
    isPause,
    tick,
    percentTime;

  $slick = $('.slider');
  $slick.slick({
    prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
    speed: 1200,
    adaptiveHeight: false,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
       breakpoint: 400,
       settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
       }
    }]
  });

  $bar = $('.slider-progress .progress');

  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval, 30);
  }

  function interval() {
    if (isPause === false) {
      percentTime += 1 / (time + 0.1);
      $bar.css({
        width: percentTime + "%"
      });
      if (percentTime >= 100) {
        $slick.slick('slickNext');
        startProgressbar();
      }
    }
  }

  function resetProgressbar() {
    $bar.css({
      width: 0 + '%'
    });
    clearTimeout(tick);
  }

  startProgressbar();

  $('.slick-next, .slick-prev').click(function() {
    startProgressbar();
  });

});