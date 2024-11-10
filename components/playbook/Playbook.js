import page from "../Page.js";
import Attributes from "./Attributes.js";
import Inventory from "./Inventory.js";
import Condition from "./Condition.js";
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
			${new Attributes().getAttributes()}
			${new Inventory().getInventory()}
			${new Condition().getCondition("Gold")}
			${new Condition().getCondition("Gesundheit")}
			${new Condition().getCondition("Ausdauer")}
			${new Startwerte().getStartwerte()}
		</div>
		<div class="playbook__right">
			${new PlaybookTitle().getPlaybookTitle("Barbar")}
			<p>Stark, wild und tödlich. In dir schlummert ein ungezähmter Zorn, den du entfesseln kannst, um deine Gegner mit brutaler Gewalt zu vernichten.</p>
			<div class="talents__header">
				<h3>Feats</h3>
				<p>Feats sind permanente Vorteile, von denen du jederzeit profitierst.</p>
			</div>
			<div class="talents__header">
				<h3>Stunts</h3>
				<p>Stunts sind aktive Fähigkeiten, die du mit 1 Punkt Ausdauer aktivieren musst.</p>
			</div>
		</div>
	`;
  }
}
