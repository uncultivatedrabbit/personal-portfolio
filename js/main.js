//rotation animation for arrow in landing page button
function rotateArrowAnimation() {
  $(".more-btn").on("mouseover", function(e) {
    $("#arrow").addClass("rotate");
    $("#arrow").removeClass("rotate-back");
  });
  $(".more-btn").on("mouseout", function(e) {
    $("#arrow").removeClass("rotate");
    $("#arrow").addClass("rotate-back");
  });
}

// reduces or expanded hamburger menu
function toggleNavExpansion() {
  $("#menu-toggle").click(function() {
    if ($("#navbar").hasClass("reduced")) {
      $("#navbar").removeClass("reduced");
      $("#navbar").addClass("expanded");
    } else {
      $("#navbar").removeClass("expanded");
      $("#navbar").addClass("reduced");
    }
  });

  $(".extended-list-item").click(e => {
    $("#navbar").removeClass("expanded");
    $("#navbar").addClass("reduced");
    $(".hamburger-menu").removeClass("active");
  });
}

// adds active class to large navbar to change the color of each link
function addActiveClass() {
  const selected = ".navbar-large li a";
  $(selected).on("click", function(e) {
    $(selected).removeClass("active");
    $(this).addClass("active");
  });
}

// make navbar sticky when user scrolls
function makeNavbarSticky() {
  let previousScroll = 0,
    headerOrgOffset = $("#navbar").offset().top;
  $(window).scroll(function() {
    let currentScroll = $(this).scrollTop();
    if (currentScroll > headerOrgOffset) {
      if (currentScroll > previousScroll) {
        $("#navbar").addClass('scroll-reduced');
      } else {
        $("#navbar").removeClass('scroll-reduced');
        $("#navbar").addClass("navbar-sticky");
      }
    } else {
      $("#navbar").removeClass("navbar-sticky");
    }
    previousScroll = currentScroll;
  });
}

$(document).ready(function() {});

function loadJavascript() {
  console.log("javascript loaded...");
  rotateArrowAnimation();
  toggleNavExpansion();
  addActiveClass();
  makeNavbarSticky();
}

$(loadJavascript);
