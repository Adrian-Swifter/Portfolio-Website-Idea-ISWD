(function () {
  const hamMenu = document.querySelector(".hamburger-menu");
  const nav = document.querySelector(".nav");

  hamMenu.addEventListener("click", function (e) {
    e.preventDefault();

    nav.classList.toggle("display");
  });
})();
