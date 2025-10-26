(function () {
  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });

  document.body.addEventListener("click", function (event) {
    const target = event.target.closest("[data-href]");

    if (target) {
      const targetId = target.getAttribute("data-href");
      const targetElement = document.getElementById(targetId.replace(/#/g, ""));

      if (targetElement) {
        const elementPosition =
          targetElement.getBoundingClientRect().top + window.scrollY;
        const windowHeight = window.innerHeight;
        const elementHeight = targetElement.offsetHeight;
        const offsetPosition =
          elementPosition - windowHeight / 2 + elementHeight / 2;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  });
})();
