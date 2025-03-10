(() => {
  // <stdin>
  var themeToggleBtn = document.getElementById("theme-toggle-btn");
  var currentTheme = document.documentElement.getAttribute("data-theme");
  themeToggleBtn.textContent = currentTheme === "dark" ? "\u967D" : "\u9670";
  themeToggleBtn.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "light");
      themeToggleBtn.textContent = "\u9670";
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      themeToggleBtn.textContent = "\u967D";
      localStorage.setItem("theme", "dark");
    }
  });
})();
