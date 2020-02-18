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

function handleImageHover() {
  $(".project-tile").on("mouseover", function(e) {
    $(".project-overlay", this).css("height", "49%");
    $(".overlay-btn, .overlay-para", this).css("opacity", "0.9");
  });
  $(".project-tile").on("mouseout", function(e) {
    $(".project-overlay", this).css("height", "0.4%");
    $(".overlay-btn, .overlay-para", this).css("opacity", "0");
  });
}

function toggleClass() {
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

function loadJavascript() {
  console.log('javascript loaded...')
  rotateArrowAnimation();
  handleImageHover();
  toggleClass();
}

$(loadJavascript);
