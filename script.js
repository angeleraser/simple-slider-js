const sliderPrevArrowEl = document.getElementById("slider-prev-arrow");
const sliderNextArrowEl = document.getElementById("slider-next-arrow");
const sliderImgEl = document.getElementById("slider-img");
const sliderImagesBtn = document.getElementById("slider-images-btn");

let currentSliderImgIndex = 1;
const imagesCount = 3;

function setSliderImgSrc(src = "") {
  sliderImgEl.src = src;
}

function handleShowSliderImg(action) {
  if (action === "prev" && currentSliderImgIndex > 0) {
    currentSliderImgIndex -= 1;
  }

  if (action === "prev" && currentSliderImgIndex === 0) {
    currentSliderImgIndex = imagesCount;
  }

  if (action === "next" && currentSliderImgIndex < imagesCount + 1) {
    currentSliderImgIndex += 1;
  }

  if (action === "next" && currentSliderImgIndex === imagesCount + 1) {
    currentSliderImgIndex = 1;
  }

  setSliderImgSrc(`/assets/slider-img-${currentSliderImgIndex}.jpg`);
}

sliderPrevArrowEl.addEventListener("click", () => {
  handleShowSliderImg("prev");
});

sliderNextArrowEl.addEventListener("click", () => {
  handleShowSliderImg("next");
});

setSliderImgSrc(`/assets/slider-img-${currentSliderImgIndex}.jpg`);

for (let imgIndex = 0; imgIndex < imagesCount; imgIndex++) {
  const imgSrcIndex = imgIndex + 1;

  sliderImagesBtn.innerHTML += `
  <div data-img-id="${imgSrcIndex}" class="slider-images-img-wrapper">
    <img src="/assets/slider-img-${imgSrcIndex}.jpg" alt="slider-img-${imgSrcIndex}">
  </div>
  `;
}

sliderImagesBtn.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    const imgWrapper = event.target.parentNode;
    const imgId = Number(imgWrapper.dataset.imgId);

    currentSliderImgIndex = imgId;
    setSliderImgSrc(`/assets/slider-img-${imgId}.jpg`);
  }
});
