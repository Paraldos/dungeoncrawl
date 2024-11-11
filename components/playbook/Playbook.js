import listOfPlaybooks from "../../data/ListOfPlaybooks.js";
import page from "../Page.js";
import Attributes from "./Attributes.js";
import Inventory from "./Inventory.js";
import Condition from "./Condition.js";
import Startwerte from "./Startwerte.js";
import PlaybookTitle from "./PlaybookTitle.js";
import Talents from "./Talents.js";

export default class playbook extends page {
  constructor() {
    super(".playbook");
    listOfPlaybooks.forEach((playbook) => {
      this.addPlaybook(playbook);
    });

    document.querySelectorAll(".checkbox").forEach((checkbox) => {
      checkbox.addEventListener("click", () => {
        checkbox.classList.toggle("checkbox--checked");
      });
    });
  }

  addPlaybook(playbook) {
    this.section = this.addSection();
    this.section.innerHTML = `
		<div class="playbook__left">
			<div class="playbook__name">
				<input></input>
				<label>Charakter</label>
			</div>
			${new Attributes().getAttributes()}
			${new Inventory().getInventory()}
			${new Condition().getCondition("Gold")}
			${new Condition().getCondition("Gesundheit")}
			${new Condition().getCondition("Ausdauer")}
			${new Startwerte().getStartwerte()}
		</div>
		<div class="playbook__right">
			${new PlaybookTitle().getPlaybookTitle(playbook.title)}
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
		</div>
	`;
  }
}