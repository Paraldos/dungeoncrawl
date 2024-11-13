export default class Navbar {
  constructor() {
    this.navbar = document.querySelector("nav");
    this.navLinks = document.querySelectorAll(".navbar__link button");
    this.pages = document.querySelectorAll(".page");
    this.navLinks.forEach((link) => {
      link.addEventListener("click", () => this.onClickNavLink(link));
    });
  }

  onClickNavLink(selectedLink) {
    this.focusBtn(selectedLink);
    this.focusPages(selectedLink);
  }

  focusBtn(selectedLink) {
    this.navLinks.forEach((link) => {
      link == selectedLink
        ? link.classList.add("btn-selected")
        : link.classList.remove("btn-selected");
    });
  }

  focusPages(selectedLink) {
    const target = selectedLink.getAttribute("data-target");
    if (target) {
      this.pages.forEach((page) => {
        page.classList.contains(target)
          ? page.classList.remove("hidden")
          : page.classList.add("hidden");
      });
    } else {
      this.pages.forEach((page) => page.classList.remove("hidden"));
    }
  }
}
