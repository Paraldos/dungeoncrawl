import page from "../Page.js";
import Attribute from "./Attribute.js";
import Inventory from "./Inventory.js";
import Merkmal from "./Merkmal.js";
import Startwerte from "./Startwerte.js";

export default class Charakterbogen extends page {
  constructor() {
    super(".Charakterbogen");
    this.section = this.addSection();
    this.section.innerHTML = `
		<div class="Charakterbogen__left">
			<div class="Charakterbogen__name">
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
		<div class="Charakterbogen__right"></div>
	`;
  }
}
