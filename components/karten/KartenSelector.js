export default class KartenSelector {
  constructor(parent) {
    this.parent = parent;
    this.btns = document.querySelectorAll(".karten-selector__btn");
    this.selector = document.querySelector(".karten-selector");

    this.btns.forEach((btn) => {
      btn.addEventListener("click", () => this.onSelectorClicked(btn));
    });
  }

  onSelectorClicked(btn) {
    this.btns.forEach((btn) => btn.classList.remove("btn-selected"));
    btn.classList.add("btn-selected");
    if (btn.innerHTML === "Favoriten") {
      this.parent.showFavorites();
    } else {
      this.parent.showAll();
    }
  }
}
