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