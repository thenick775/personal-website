(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    //var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

//used for non canvas elements
function isElementInViewport (el) {
    var rect = el[0].getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}
// Check if it's time to start the animation
function checkAnimation() {
    var $elem = $('#skills-list');

    // If the animation has already been started
    if ($elem.hasClass('faded')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        console.log("in viewport")
        $elem.addClass('faded')
        var basetime = 300;
        var vartime = 1700;

        $elem.children().each((index, child) => {
            setTimeout( function(){ $(child).addClass('fadeIn');}, basetime+index*50)
        });
    }
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
});

var scrolled = 0;
$("#projbutton-l").on("click" ,function(){
    console.log("left clicked")
    scrolled=scrolled-($(".tile").width()+25);
    console.log(scrolled)
    if(scrolled==0){
      $(".section-3 > .container > #projbutton-l").fadeOut()
    }

    $(".projects-list").animate({
        scrollLeft:  scrolled
    });
});

$("#projbutton-r").on("click" ,function(){
  console.log("right clicked")
  console.log($(".section-3 > .container > #projbutton-l").is(":hidden"))

  if($(".section-3 > .container > #projbutton-l").is(":hidden")){
    console.log("showing")
    $(".section-3 > .container  > #projbutton-l").fadeIn()
  }
    scrolled=scrolled+$(".tile").width()+25;
    $(".projects-list").animate({
        scrollLeft:  scrolled
    });
});

function popup(mylink, windowname) {
  if (!window.focus) return true;
  var href;
  if (typeof mylink == "string") href = mylink;
  else href = mylink.href;
  window.open(href, windowname, "width=800,height=800,scrollbars=yes");
  return false;
}

