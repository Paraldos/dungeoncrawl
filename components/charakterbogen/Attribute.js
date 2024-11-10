export default class Attribute {
  getAttribute() {
    return `
		<div class="Charakterbogen__attribute">
			${this.getAttribut("KRA", "Heben, Schieben, Nahkampf")}
			${this.getAttribut("GES", "Schleichen, Turnen, Klettern, Nahkampf")}
			${this.getAttribut("ZÄH", "Ausdauer, Luft Anhalten, Verteidigung")}
			${this.getAttribut("CHA", "Überzeugen, Einschüchtern, Handel")}
			${this.getAttribut("KLU", "Wissen, Logik, Magie")}
			${this.getAttribut("WEI", "Intuition, Überleben, Warhnehmung, Magie")}
		</div>
	`;
  }

  getAttribut(titel) {
    return `
			<div class="Charakterbogen__attribut">
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
