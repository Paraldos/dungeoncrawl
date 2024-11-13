export default class Attributes {
  getAttributes() {
    return `
		<div class="playbook__attributes">
			${this.getAttribute("KRA", "Heben, Schieben, Nahkampf")}
			${this.getAttribute("GES", "Schleichen, Turnen, Klettern, Nahkampf")}
			${this.getAttribute("ZÄH", "Ausdauer, Luft Anhalten, Verteidigung")}
			${this.getAttribute("CHA", "Überzeugen, Einschüchtern, Handel")}
			${this.getAttribute("KLU", "Wissen, Logik, Magie")}
			${this.getAttribute("WEI", "Intuition, Überleben, Warhnehmung, Magie")}
		</div>
	`;
  }

  getAttribute(titel) {
    return `
		<div class="playbook__attribute blackbox">
			<select>
				<option></option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
				<option>4</option>
				<option>5</option>
			</select>
			<label>${titel}</label>
		</div>
	`;
  }
}
