import page from "../Page.js";
import Attribute from "./Attribute.js";
import Inventory from "./Inventory.js";
import Merkmal from "./Merkmal.js";
import Startwerte from "./Startwerte.js";
import PlaybookTitle from "./PlaybookTitle.js";

export default class playbook extends page {
  constructor() {
    super(".playbook");
    this.section = this.addSection();
    this.section.innerHTML = `
		<div class="playbook__left">
			<div class="playbook__name">
				<input></input>
				<label>Charakter</label>
			</div>
			${new Attribute().getAttribute()}
			${new Inventory().getInventory()}
			${new Merkmal().getMerkmal("Gold")}
			${new Merkmal().getMerkmal("Gesundheit")}
			${new Merkmal().getMerkmal("Ausdauer")}
			${new Startwerte().getStartwerte()}
		</div>
		<div class="playbook__right">
			${new PlaybookTitle().getPlaybookTitle("Barbar")}
		</div>
	`;
  }
}
