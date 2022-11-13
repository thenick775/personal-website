function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top - 49;
  var elemBottom = rect.bottom - 49;

  // Only completely visible elements return true:
  //var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  // Partially visible elements return true:
  isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}

//used for non canvas elements
function isElementInViewport(el) {
  var rect = el[0].getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  // Only completely visible elements return true:
  var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
  // Partially visible elements return true:
  //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}
// Check if it's time to start the animation
function checkAnimation() {
  var $elem = $("#skills-list");

  // If the animation has already been started
  if ($elem.hasClass("faded")) return;

  if (isElementInViewport($elem)) {
    // Start the animation
    $elem.addClass("faded");
    var basetime = 300;
    var vartime = 1700;

    $elem.children().each((index, child) => {
      setTimeout(function () {
        $(child).addClass("fadeIn");
      }, basetime + index * 50);
    });
  }
}

// Capture scroll events
$(window).scroll(function () {
  checkAnimation();
});

function popup(mylink, windowname) {
  if (!window.focus) return true;
  var href;
  if (typeof mylink == "string") href = mylink;
  else href = mylink.href;
  window.open(href, windowname, "width=800,height=800,scrollbars=yes");
  return false;
}

let industryprojects = {
  "Airflow Ingestion Cluster":
    "This environment consists of a distributed Apache Airflow Cluster, backed by Celery, that utilizes an array of custom docker containers to fetch and process data from public webpages and data buckets, and send this processed data to the Ingestion API.\n\nDocker was used to isolate browser reliant code, and build reusable, language agnostic, one-time use containers. The containers are designed to allow for fast and reliable setup, deployment, testing, tear down, cloning, and failure recovery.",
  "Real-Time Ingestion API":
    "The Ingestion API is designed to function as the middle man between independent user programs orchestrated by Apache Airflow that collect data, and multiple postgres database connections.\n\nThis API was built with golang, and utilizes GORM and Gorilla Mux for database operations and routing, and can concurrently process multipart forms in bulk for data ingestion through http requests.",
  "Ingestion Index Crawler":
    "This crawler is designed to reduce search times of already ingested data for an in-house manual data ingestion system. It crawls all the pages of existing instances for a specified user, and produces a list with the name, page number, and status of each instance.\n\nThis allows for fast searching and navigation using the built in utility script. The crawler was built using Selenium in python and encapsulated in a docker container for easy deployment.",
};

function displayIndustryDescription(elem) {
  $(".popup-content > p").text(industryprojects[$(elem).attr("arraylink")]);
  $(".popup-content > h2").text($(elem).attr("arraylink"));
  $(".popup-overlay, .popup-content").fadeIn();
  $("body").css("overflow", "hidden");
}

//click handlers
var scrolled = 0;
var currentelemcount = 0;
$("#projbutton-l").on("click", function () {
  if (
    $(".section-3 > .container > .row > .col-lg-8 > #projbutton-r").is(
      ":hidden"
    )
  ) {
    $(".section-3 > .container  > .row > .col-lg-8 > #projbutton-r").fadeIn();
  }

  if ($(".projects-list").width() >= 600) {
    scrolled -= 2 * ($(".tile").width() + 25);
    currentelemcount -= 4;
  } else {
    scrolled -= $(".tile").width() + 25;
    currentelemcount -= 2;
  }

  if (currentelemcount == 0) {
    $(".section-3 > .container > .row > .col-lg-8 > #projbutton-l").fadeOut();
  }

  $(".projects-list").animate({
    scrollLeft: scrolled,
  });
});

$("#projbutton-r").on("click", function () {
  var elemcount = $(".projects-list > li > .tile").length;
  var eleminc,
    scrollinc = 0;

  if (
    $(".section-3 > .container > .row > .col-lg-8 > #projbutton-l").is(
      ":hidden"
    )
  ) {
    $(".section-3 > .container  > .row > .col-lg-8 > #projbutton-l").fadeIn();
  }

  if ($(".projects-list").width() >= 600) {
    eleminc = 4;
    scrollinc = 2 * ($(".tile").width() + 25);
  } else {
    eleminc = 2;
    scrollinc = $(".tile").width() + 25;
  }

  if (currentelemcount + eleminc >= elemcount - eleminc) {
    $(".section-3 > .container  > .row > .col-lg-8 > #projbutton-r").fadeOut();
  }

  scrolled += scrollinc;
  currentelemcount += eleminc;

  $(".projects-list").animate({
    scrollLeft: scrolled,
  });
});

$(".close, .popup-overlay").on("click", function () {
  $(".popup-overlay, .popup-content").fadeOut();
  $("body").css("overflow", "auto");
});

$(".industrylink").on("click", function () {
  displayIndustryDescription($(this));
  return false;
});

$(".resume-button").on("click", function () {
  return popup(this, "resume");
});
