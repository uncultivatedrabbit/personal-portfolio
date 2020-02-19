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

  $('.extended-list-item').click(e => {
    $("#navbar").removeClass("expanded");
    $("#navbar").addClass("reduced");
    $('.hamburger-menu').removeClass('active')
  })
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
  const navPosition = $("#navbar").offset();
  $(window).bind("scroll", function() {
    $(window).scrollTop() > navPosition.top
      ? $("#navbar").addClass("navbar-sticky")
      : $("#navbar").removeClass("navbar-sticky");
  });
}



function loadJavascript() {
  console.log("javascript loaded...");
  rotateArrowAnimation();
  toggleNavExpansion();
  addActiveClass();
  makeNavbarSticky();
}

$(loadJavascript);
