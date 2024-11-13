import page from "../Page.js";

export default class Regeln extends page {
  constructor() {
    super(".rules");
    this.container.innerHTML = `
		<section>
			<h2>
				${this.svg.getPentagramm()}
				Regeln
				${this.svg.getPentagramm()}
			</h2>
			<div>
				<h3>Einfache Proben</h3>
				<p>Einfache Proben sind der mechanische Kern des Spiels. Tust du etwas das wichtig ist und schief gehen kann, wird eine Probe fällig, um den Ausgang zu bestimmen. Der Erzähler bestimmt welches Attribut ge-prüft wird und welchen Schwierigkeitsgrad (SG) du schlagen musst. Du rollst zwei W6 und addierst das geprüfte Attribut (und Werkzeugbonus, wen du welches benutzt). Erreichst oder übertriffst du den geforderten SG, ist die Probe gelungen. Zeigen deine Würfel einen Pasch ist das Er-gebnis kritisch, und die Probe gelingt oder misslingt besonders spektakulär.</p>
			</div>
		</section>
	`;
  }
}
