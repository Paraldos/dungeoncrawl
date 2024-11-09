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
    } else if (btn.innerHTML === "Werkzeuge") {
      this.parent.showTools();
    } else if (btn.innerHTML === "Konsumgüter") {
      this.parent.showConsumables();
    } else if (btn.innerHTML === "Runen") {
      this.parent.showRunes();
    } else {
      this.parent.showAll();
    }
  }
}
