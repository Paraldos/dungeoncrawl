import page from "../Page.js";

export default class Charakterbogen extends page {
  constructor() {
    super(".Charakterbogen");
    this.section = this.addSection();
    this.section.innerHTML = `
		<div class="Charakterbogen__name">
			<input></input>
			<label>Charaktername</label>
		</div>
		<div class="Charakterbogen__attribute">
			${this.getAttribut("Kraft", "Heben, Schieben, Nahkampf")}
			${this.getAttribut("Geschick", "Schleichen, Turnen, Klettern, Nahkampf")}
			${this.getAttribut("Zähigkeit", "Ausdauer, Luft Anhalten, Verteidigung")}
			${this.getAttribut("Charisma", "Überzeugen, Einschüchtern, Handel")}
			${this.getAttribut("Klugheit", "Wissen, Logik, Magie")}
			${this.getAttribut("Weisheit", "Intuition, Überleben, Warhnehmung, Magie")}
		</div>
	`;
  }

  getAttribut(titel, description = "") {
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
			<div>
				<h3>${titel}</h3>
				<p>${description}</p>
			</div>
		</div>
	`;
  }
}
