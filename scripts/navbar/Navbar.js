export default class Navbar {
  constructor() {
    this.navbar = document.querySelector("nav");
    this.navbarLinks = this.navbar.querySelector(".navbar__links");
    this.startBtn = document.querySelector(".start");
    this.startBtn.addEventListener("click", () => this.onClickStart());
  }

  onClickStart() {
    window.scrollTo(0, 0);
  }

  addNavbarItem(txt, id) {
    const navbarItem = document.createElement("div");
    navbarItem.classList.add("navbar__link");
    this.navbarLinks.appendChild(navbarItem);

    const navbarLink = document.createElement("a");
    navbarLink.textContent = txt;
    navbarLink.href = `#${id}`;
    navbarItem.appendChild(navbarLink);

    return navbarItem;
  }
}
