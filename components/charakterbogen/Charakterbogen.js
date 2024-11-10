import page from "../Page.js";
import Attribute from "./Attribute.js";
import Inventory from "./Inventory.js";

export default class Charakterbogen extends page {
  constructor() {
    super(".Charakterbogen");
    this.section = this.addSection();
    this.section.innerHTML = `
		<div class="Charakterbogen__left">
			<div class="Charakterbogen__name">
				<input></input>
				<label>Charaktername</label>
			</div>
			${new Attribute().getAttribute()}
			${new Inventory().getInventory()}
		</div>
		<div class="Charakterbogen__right">
		</div>
	`;
  }
}
