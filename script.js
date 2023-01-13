// select slides
const slides = document.querySelectorAll(".slide");
// start slide
let slideNum = 1;
const slideTitles = [
  "",
  "Look beyond the ordinary",
  "We aspire to inspire",
  "We can and we will",
  "We leave no stone unturned",
];

$(".right-arrow").click(() => {
  // removes all slides from DOM
  slides.forEach((element) => {
    element.style.display = "none";
  });
  // activate slide

  if (slideNum === slides.length) {
    slideNum = 1;
    $(`.slide-${slideNum}`).css("display", "block");
    $(`.slide-text`).text(slideTitles[slideNum]);
  } else {
    slideNum += 1;
    $(`.slide-${slideNum}`).css("display", "block");
    $(`.slide-text`).text(slideTitles[slideNum]);
  }
});
