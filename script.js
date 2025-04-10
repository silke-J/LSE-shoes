/* Når scroller på siden, og kommer langt nok ned, bliver en klasse der tilføjer noget style tilføjet, og når kommer langt nok op igen, bliver klassen fjernet */
document.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY >= 50) {
    nav.classList.add("onscroll");
  } else {
    nav.classList.remove("onscroll");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".burger-btn");
  const navbar = document.querySelector("nav");
  const listItems = document.querySelectorAll(".nav-content > ul > a");

  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("active");
    navbar.classList.toggle("active");

    /* Loop over linksne i naven, så når man klikker på dem, ville den fjerne mpbilnaven, så man ikke selv skal lukke får naven får at se, der hvor man har klikket hen */
    listItems.forEach((item) => {
      item.addEventListener("click", () => {
        burgerBtn.classList.remove("active");
        navbar.classList.remove("active");
      });
    });
  });

  /* emelies del */
  const images = Array.from(document.querySelectorAll(".image")).map(
    (img) => img.src
  );

  let currentIndex = 0;
  const mainImage = document.querySelector(".mainImage");
  mainImage.src = images[currentIndex];

  function updateMainImage() {
    mainImage.src = images[currentIndex];
  }

  document.querySelector(".prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateMainImage();
  });

  document.querySelector(".next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateMainImage();
  });

  document.querySelectorAll(".image").forEach((image, index) => {
    image.addEventListener("click", () => {
      currentIndex = index;
      updateMainImage();
    });
  });

  /* silkes del */
});
