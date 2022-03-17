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

