export default class Talents {
  getTalents(listOfTalents) {
    return `<ul class="talents__list">
		${listOfTalents.map((talent) => this.getTalent(talent)).join("")}
	</ul>`;
  }

  getTalent(talent) {
    return `<li>
		${talent.level.map((level) => this.getCheckbox(level)).join("")}
		<p><strong>${talent.title}</strong>: ${talent.description}</p>
	</li>`;
  }

  getCheckbox(level) {
    const checkbox = document.createElement("div");
    checkbox.classList.add("talents__checkbox");
    if (level) {
      checkbox.classList.add("talents__checkbox--checked");
    }
    checkbox.addEventListener("click", () => {
      checkbox.classList.toggle("talents__checkbox--checked");
    });
    return checkbox.outerHTML;
  }
}
