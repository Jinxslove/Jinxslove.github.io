(() => {
  // <stdin>
  console.log("%cVortisil (https://github.com/khitezza/vortisil)", "font-style: italic;");
  document.addEventListener("DOMContentLoaded", function() {
    const navbarBurger = document.getElementById("navbar-burger");
    const navbarMenu = document.getElementById("navbar-menu");
    navbarBurger.addEventListener("click", function() {
      navbarBurger.classList.toggle("active");
      navbarMenu.classList.toggle("active");
    });
  });
  scrollToTop = function() {
    const duration = 350;
    const start = window.scrollY;
    const startTime = performance.now();
    function scroll() {
      const now = performance.now();
      const time = Math.min(1, (now - startTime) / duration);
      const easedTime = time * (2 - time);
      window.scrollTo(0, start * (1 - easedTime));
      if (time < 1) {
        requestAnimationFrame(scroll);
      }
    }
    requestAnimationFrame(scroll);
  };
})();
