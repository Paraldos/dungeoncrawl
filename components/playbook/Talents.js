export default class Talents {
  getTalents(listOfTalents) {
    return `
		<ul class="talents">
			${listOfTalents.map((talent) => this.getTalent(talent))}
		</ul>
	`;
  }

  getTalent(talent) {
    return `
		<li>
			<input type="radio"></input>
			<p><strong>${talent.title}</strong>: ${talent.description}</p>
		</li>
	`;
  }
}
