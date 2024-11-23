import Checkbox from "../../Checkbox.js";

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
      ${talent.title == "Multiclass" ? this.getMulticlassInput(talent) : ""}
    </li>`;
  }

  getMulticlassInput(talent) {
    let txt = "";
    talent.level.forEach((level) => {
      txt += `<input type="text"></input>`;
    });
    return txt;
  }
}
