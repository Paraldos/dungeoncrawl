export default class Navbar {
  constructor() {
    this.navLinks = document.querySelectorAll(".navbar__link");
    this.pages = document.querySelectorAll(".page");
    this.navLinks.forEach((btn, index) => {
      btn.addEventListener("click", () => this.onClickNavLink(btn, index));
    });
  }

  onClickNavLink(selectedBtn, index) {
    this.navLinks.forEach((btn) => {
      btn.classList.remove("btn-selected");
    });
    selectedBtn.classList.add("btn-selected");

    if (index == 0) {
      this.pages.forEach((page) => {
        page.classList.remove("hidden");
      });
    } else {
      this.pages.forEach((page) => {
        page.classList.add("hidden");
      });
      this.pages[index - 1].classList.remove("hidden");
    }
  }
}
