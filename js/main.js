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

// allows user to see more details for each project on hovering over images
function handleImageHover() {
  $(".project-tile").on("mouseover", function(e) {
    $(".project-overlay", this).css("height", "49%");
    $(".overlay-btn, .overlay-para", this).css("opacity", "0.9");
  });
  $(".project-tile").on("mouseout", function(e) {
    $(".project-overlay", this).css("height", "0%");
    $(".overlay-btn, .overlay-para", this).css("opacity", "0");
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
  handleImageHover();
  toggleNavExpansion();
  addActiveClass();
  makeNavbarSticky();
}

$(loadJavascript);
