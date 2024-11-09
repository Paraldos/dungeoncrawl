import page from "../Page.js";

export default class Charakterbogen extends page {
  constructor() {
    super(".Charakterbogen");
    this.section = this.addSection();
    this.section.innerHTML = `
		<div class="Charakterbogen__left">
			<div class="Charakterbogen__name">
				<input></input>
				<label>Charaktername</label>
			</div>
			<div class="Charakterbogen__attribute">
				${this.getAttribut("KRA", "Heben, Schieben, Nahkampf")}
				${this.getAttribut("GES", "Schleichen, Turnen, Klettern, Nahkampf")}
				${this.getAttribut("ZÄH", "Ausdauer, Luft Anhalten, Verteidigung")}
				${this.getAttribut("CHA", "Überzeugen, Einschüchtern, Handel")}
				${this.getAttribut("KLU", "Wissen, Logik, Magie")}
				${this.getAttribut("WEI", "Intuition, Überleben, Warhnehmung, Magie")}
			</div>
		</div>
		<div class="Charakterbogen__right">
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
			<label>${titel}</label>
		</div>
	`;
  }
}
