(function () {
  const hamMenu = document.querySelector(".hamburger-menu");
  const nav = document.querySelector(".nav");
  //toglovanje display clase koja ce sakriti ili prikazati mobile menu
  hamMenu.addEventListener("click", function (e) {
    e.preventDefault();

    nav.classList.toggle("display");
  });

  if (document.querySelector("#gallery-header")) {
    const galleryHeader = document.querySelector("#gallery-header");
    const galleryImages = document.querySelector(".gallery-images");
    const galleryImagesArr = Array.from(galleryImages.children);
    const galleryHeaderArr = Array.from(galleryHeader.children);
    //portfolio galerija gde klikom na svaki nav item filtriramo slike zavisno od klase koju imaju
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
  }

  function sendEmail(address) {
    window.location.href = "mailto:" + address;
  }
  //da ne bi dodavao link sa milto na svaki button, ovde to radimo uz pomoc javascript-a
  const buttons = Array.from(document.getElementsByClassName("btn"));
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      sendEmail("contact@milosdraskovic.com");
    });
  });
})();
