export default class Navbar {
  constructor() {
    const btns = document.querySelectorAll(".navbar__link");
    btns.forEach((btn) => {
      btn.addEventListener("click", () => this.onClickNavLink(btn));
    });
  }

  onClickNavLink(selectedBtn) {
    const btns = document.querySelectorAll(".navbar__link");
    btns.forEach((btn) => {
      btn.classList.remove("btn-selected");
    });
    selectedBtn.classList.add("btn-selected");
  }
}
