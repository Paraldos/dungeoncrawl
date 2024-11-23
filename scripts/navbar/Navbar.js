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
    navbarItem.classList.add("navbar__link", `navbar__link--${id}`);
    this.navbarLinks.appendChild(navbarItem);

    const navbarLink = document.createElement("a");
    navbarLink.textContent = txt;
    navbarLink.href = `#${id}`;
    navbarItem.appendChild(navbarLink);

    return navbarItem;
  }

  addUl(parent) {
    const ul = document.createElement("ul");
    ul.classList.add("navbar__submenu");
    parent.appendChild(ul);
    return ul;
  }

  addSubmenuItem(parent = "", txt = "", id = "") {
    const parentLink = document.querySelector(`.navbar__link--${parent}`);
    const ul = parentLink.querySelector("ul") || this.addUl(parentLink);

    const li = document.createElement("li");
    ul.appendChild(li);

    const link = document.createElement("a");
    link.textContent = txt;
    link.href = `#${id}`;
    li.appendChild(link);
  }
}
