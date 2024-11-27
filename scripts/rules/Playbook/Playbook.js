import page from "../../Page.js";
import Attributes from "./Attributes.js";
import Inventory from "./Inventory.js";
import Talents from "./Talents.js";

export default class playbook extends page {
  constructor(playbook) {
    super();
    this.playbook = playbook;

    this.addPlaybook(playbook);
    window.navbar.addSubmenuItem(
      "playbooks",
      playbook.title,
      this.getId(playbook)
    );

    document.querySelectorAll(".checkbox").forEach((checkbox) => {
      checkbox.addEventListener("click", () => {
        checkbox.classList.toggle("checkbox--checked");
      });
    });
  }

  addPlaybook() {
    const section = this.addSection(this.getId());
    section.classList.add("playbook");
    section.classList.add("no-counter");
    const grid = this.addDiv("section__grid", section);
    this.left = this.addDiv("playbook__left flex-column", grid);
    this.right = this.addDiv("playbook__right flex-column", grid);

    this.left.innerHTML = `
		${this.getCharackterDescription()}
		${new Attributes().getAttributes()}
		${new Inventory().getInventory()}
		${this.getCondition("Gold")}
		${this.getCondition("Gesundheit")}
		${this.getCondition("Ausdauer")}
		${this.getStartwerte()}
	`;
    this.right.innerHTML = `
		${this.getPlaybookTitle(this.playbook.title)}
		<p>${this.playbook.description}</p>
		${this.getFeatHeader()}
		${new Talents().getTalents(this.playbook.feats)}
		${this.getStuntsHeader()}
		${new Talents().getTalents(this.playbook.stunts)}
	`;
  }

  getFeatHeader() {
    return this.getTalentsHeader(
      "Feats",
      "Feats sind permanente Vorteile, von denen du jederzeit profitierst."
    );
  }

  getStuntsHeader() {
    return this.getTalentsHeader(
      "Stunts",
      "Stunts sind aktive Fähigkeiten, die du mit 1 Punkt Ausdauer aktivieren musst."
    );
  }

  getTalentsHeader(title, description) {
    return `
      <div class="talents__header blackbox">
        <h3>${title}</h3>
        <label>${description}</label>
      </div>
    `;
  }

  getId() {
    return "playbook__" + this.playbook.title.toLowerCase();
  }

  getCharackterDescription() {
    return `
		<div class="blackbox">
			<input></input>
			<label>Charakter</label>
		</div>
	`;
  }

  getPlaybookTitle(title) {
    return `
        <div class="playbook__title blackbox">
            <h2>${title}</h2>
            <p>Level</p>
            <input></input>
        </div>
    `;
  }

  getCondition(titel) {
    return `
        <div class="playbook__condition blackbox">
            <div>
                <input></input>
                <input></input>
            </div>
            <div>
                <label>${titel}</label>
                <label>Verbrauch</label>
            </div>
        </div>
    `;
  }

  getStartwerte() {
    return `<p><strong>Startwerte: </strong>Attribute: 2x 1 Punkt, 4x 2 Punkte / 3 Standard Gegenstände / W6 Gold / 3 Gesundheit / 6 Ausdauer / 1 Feat / 1 Stunt</p>`;
  }
}
