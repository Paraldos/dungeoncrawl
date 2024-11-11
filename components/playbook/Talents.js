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
    checkbox.classList.add("checkbox");
    checkbox.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
    `;
    if (level) {
      checkbox.classList.add("checkbox--checked");
    }
    return checkbox.outerHTML;
  }
}
