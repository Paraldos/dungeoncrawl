import listOfPlaybooks from "../../data/ListOfPlaybooks.js";
import page from "../Page.js";
import Attributes from "./Attributes.js";
import Inventory from "./Inventory.js";
import Talents from "./Talents.js";

export default class playbook extends page {
  constructor() {
    super(".playbook");
    listOfPlaybooks.forEach((playbook) => this.addPlaybook(playbook));
    document.querySelectorAll(".checkbox").forEach((checkbox) => {
      checkbox.addEventListener("click", () => {
        checkbox.classList.toggle("checkbox--checked");
      });
    });
  }

  addPlaybook(playbook) {
    this.section = this.addSection();
    this.left = this.addDiv("playbook__left", this.section);
    this.right = this.addDiv("playbook__right", this.section);
    this.left.innerHTML = `
		<div class="blackbox">
			<input></input>
			<label>Charakter</label>
		</div>
		${new Attributes().getAttributes()}
		${new Inventory().getInventory()}
		${this.getCondition("Gold")}
		${this.getCondition("Gesundheit")}
		${this.getCondition("Ausdauer")}
		${this.getStartwerte()}
	`;
    this.right.innerHTML = `
		${this.getPlaybookTitle(playbook.title)}
		<p>${playbook.description}</p>
		<div class="talents__header">
			<h3>Feats</h3>
			<p>Feats sind permanente Vorteile, von denen du jederzeit profitierst.</p>
		</div>
		${new Talents().getTalents(playbook.feats)}
		<div class="talents__header">
			<h3>Stunts</h3>
			<p>Stunts sind aktive Fähigkeiten, die du mit 1 Punkt Ausdauer aktivieren musst.</p>
		</div>
		${new Talents().getTalents(playbook.stunts)}
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
    return `<p><strong>Startwerte: </strong>Attribute: 2xW4, 4xW6 / 3 Standard Gegenstände / W6 Gold / 3 Gesundheit / 6 Ausdauer / 1 Feat / 1 Stunt</p>`;
  }
}
