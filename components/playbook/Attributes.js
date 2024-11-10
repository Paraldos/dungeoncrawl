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
			<div class="playbook__attribute">
				<select>
					<option></option>
					<option>W4</option>
					<option>W6</option>
					<option>W8</option>
					<option>W10</option>
					<option>W12</option>
				</select>
				<label>${titel}</label>
			</div>
		`;
  }
}
