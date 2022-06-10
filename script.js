(function () {
  const hamMenu = document.querySelector(".hamburger-menu");
  const nav = document.querySelector(".nav");
  const galleryHeader = document.querySelector("#gallery-header");
  const galleryImages = document.querySelector(".gallery-images");
  const galleryImagesArr = Array.from(galleryImages.children);
  const galleryHeaderArr = Array.from(galleryHeader.children);

  hamMenu.addEventListener("click", function (e) {
    e.preventDefault();

    nav.classList.toggle("display");
  });

  galleryHeaderArr.forEach((elem) => {
    elem.firstElementChild.addEventListener("click", function (e) {
      e.preventDefault();

      galleryHeaderArr.forEach((element) => {
        element.firstElementChild.classList.remove("gallery-active-link");
      });

      this.classList.add("gallery-active-link");

      function resetImageDisplay() {
        galleryImagesArr.forEach(
          (element) => (element.style.display = "block")
        );
      }

      switch (this.innerText) {
        case "Mobile App":
          resetImageDisplay();
          galleryImagesArr
            .filter((element) => !element.classList.contains("mobile"))
            .forEach((element) => (element.style.display = "none"));
          break;
        case "Website Design":
          resetImageDisplay();
          galleryImagesArr
            .filter((element) => !element.classList.contains("design"))
            .forEach((element) => (element.style.display = "none"));
          break;
        case "Website Development":
          resetImageDisplay();
          galleryImagesArr
            .filter((element) => !element.classList.contains("development"))
            .forEach((element) => (element.style.display = "none"));
          break;
        default:
          resetImageDisplay();
          break;
      }
    });
  });
})();
