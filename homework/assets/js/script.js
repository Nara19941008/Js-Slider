let info = document.querySelectorAll("#slider-area .container");
let nextBtn = document.querySelectorAll("#slider-area .nxt-btn");
let backBtn = document.querySelectorAll("#slider-area .bck-btn");

info.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nextBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  backBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
