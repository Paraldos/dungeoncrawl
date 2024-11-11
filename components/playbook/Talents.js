import Checkbox from "../Checkbox.js";

export default class Talents {
  getTalents(listOfTalents) {
    return `<ul class="talents__list">
		${listOfTalents.map((talent) => this.getTalent(talent)).join("")}
	</ul>`;
  }

  getTalent(talent) {
    return `<li>
		${talent.level.map((level) => new Checkbox().getCheckbox(level)).join("")}
		<p><strong>${talent.title}</strong>: ${talent.description}</p>
	</li>`;
  }
}
