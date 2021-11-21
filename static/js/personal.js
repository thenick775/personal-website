function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top-49;
    var elemBottom = rect.bottom-49;

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
    if($(".projects-list").width()>=600){
        scrolled-=(2*($(".tile").width()+25));
    } else{
        scrolled-=($(".tile").width()+25);
    }
    if(scrolled==0){
      $(".section-3 > .container > .row > .col-lg-8 > #projbutton-l").fadeOut()
    }

    $(".projects-list").animate({
        scrollLeft:  scrolled
    });
});

$("#projbutton-r").on("click" ,function(){
    if($(".section-3 > .container > .row > .col-lg-8 > #projbutton-l").is(":hidden")){
        $(".section-3 > .container  > .row > .col-lg-8 > #projbutton-l").fadeIn()
    }
    var elemcount = $(".projects-list > .tile").length;

    if($(".projects-list").width()>=600){
        scrolled+=(2*($(".tile").width()+25));
    } else{
        scrolled+=$(".tile").width()+25;
    }

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

function displayIndustryDescription(elem){
  console.log("displaying industry descrip")
  $('.popup-content > p').text(industryprojects[$(elem).attr('arraylink')]);
  $('.popup-content > h2').text($(elem).attr('arraylink'));
  $(".popup-overlay, .popup-content").fadeIn();
  $('body').css('overflow','hidden')
}

$(".close, .popup-overlay").on("click", function() {
  $(".popup-overlay, .popup-content").fadeOut();
  $('body').css('overflow','auto')
});

//click handlers
$('.industrylink').click(function(){ displayIndustryDescription($(this)); return false; });

