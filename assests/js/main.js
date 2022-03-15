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
var elem = document.querySelector('.grid');
var iso = new Isotope(elem, {
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
  }
});

// element argument can be a selector string
//   for an individual element
var iso = new Isotope('.grid', {
  // options
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function (itemElem) {
    var number = itemElem.querySelector('.number').textContent;
    return parseInt(number, 10) > 50;
  },
  // show if name ends with -ium
  ium: function (itemElem) {
    var name = itemElem.querySelector('.name').textContent;
    return name.match(/ium$/);
  }
};

// bind filter button click
var filtersElem = document.querySelector('.filters-button-group');
filtersElem.addEventListener('click', function (event) {
  // only work with buttons
  if (!matchesSelector(event.target, 'button')) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  // use matching filter function
  filterValue = filterFns[filterValue] || filterValue;
  iso.arrange({ filter: filterValue });
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.button-group');
for (var i = 0, len = buttonGroups.length; i < len; i++) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup(buttonGroup);
}

function radioButtonGroup(buttonGroup) {
  buttonGroup.addEventListener('click', function (event) {
    // only work with buttons
    if (!matchesSelector(event.target, 'button')) {
      return;
    }
    buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
    event.target.classList.add('is-checked');
  });
}





(function ($) {
  var duration = 2500;  // change this to change rotation time in milliseconds
  var current = 1;
  var tricker = $(".tricker");
  var height = tricker.height();
  var number = tricker.children().length;
  var first = tricker.children().first();

  setInterval(function () {
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