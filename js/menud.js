(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data - menu - button]"),
    closeMenuBtn: document.querySelector("[data-menu-button-close]"),
    menu: document.querySelector("[data-menu]"),
    body: document.querySelector("body"),
  };
  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle("is-open");
    refs.body.classList.toggle("no-scroll");
  }
})();
