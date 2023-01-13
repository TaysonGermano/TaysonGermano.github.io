// select slides
const slides = document.querySelectorAll(".slide");

// select slide titles
const slideTitles = document.querySelectorAll(".slide-text");

// create navigators
slides.forEach(() => {
  $(".navigators").append($(`<div class="navigator"></div>`));
});

// selects each navigator
const navigator = document.querySelectorAll(".navigator");

// add active state to the first navigator
$(navigator[0]).addClass("active");

// add first slide's text
$(slideTitles[0]).css("display", "block");

// adds click event to navigators
navigator.forEach((element, i) => {
  element.addEventListener("click", function (e) {
    // removes active state from all navigators and slides
    navigator.forEach(function (element, i) {
      $(element).removeClass("active");
      $(slides[i]).css("display", "none");
      $(slideTitles[i]).css("display", "none");
    });

    // adds active state to the clicked navigator
    $(this).addClass("active");

    // activate slide
    $(slides[i]).css("display", "block");
    $(slideTitles[i]).css("display", "block");
  });
});

// controls active slide
let slideNum = 0;
// moves to next slide on arrow click
$(".right-arrow").click(() => {
  // removes all slides from DOM
  slides.forEach((element, i) => {
    $(element).css("display", "none");
    $(slideTitles[i]).css("display", "none");
    $(navigator[i]).removeClass("active");
  });

  // activate slide
  if (slideNum === slides.length - 1) {
    slideNum = 0;
    $(slides[slideNum]).css("display", "block");
    $(slideTitles[slideNum]).css("display", "block");
    $(navigator[slideNum]).addClass("active");
  } else {
    slideNum += 1;
    $(slides[slideNum]).css("display", "block");
    $(slideTitles[slideNum]).css("display", "block");
    $(navigator[slideNum]).addClass("active");
  }
});
