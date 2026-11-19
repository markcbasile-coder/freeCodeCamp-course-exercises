const lightBox = document.querySelector(".lightbox");
let lightBoxImg = document.querySelector("#lightbox-image");

let galleryItem = document.querySelectorAll(".gallery-item");

const closeBtn = document.querySelector("#close-btn");

galleryItem.forEach((item) =>
  item.addEventListener("click", () => {
    lightBox.classList.add("show");
    lightBoxImg.src = item.src.replace("-thumbnail", "");
  }),
);

closeBtn.addEventListener("click", () => lightBox.classList.remove("show"));

lightBox.addEventListener("click", () => lightBox.classList.remove("show"));
