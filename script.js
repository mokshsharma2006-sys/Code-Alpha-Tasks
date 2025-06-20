const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const images = document.querySelectorAll(".gallery .image img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentImgIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    currentImgIndex = index;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

nextBtn.addEventListener("click", () => {
  currentImgIndex = (currentImgIndex + 1) % images.length;
  lightboxImg.src = images[currentImgIndex].src;
});

prevBtn.addEventListener("click", () => {
  currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentImgIndex].src;
});

// Filter functionality
const filterButtons = document.querySelectorAll("[data-filter]");
const imageDivs = document.querySelectorAll(".gallery .image");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-filter");

    imageDivs.forEach(div => {
      div.style.display = (category === "all" || div.classList.contains(category)) ? "block" : "none";
    });
  });
});
