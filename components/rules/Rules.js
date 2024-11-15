import page from "../Page.js";

export default class Regeln extends page {
  constructor() {
    super(".rules");
    this.addPage();
  }

  addPage() {
    const section = this.addSection("rules");
    section.innerHTML += `<h2>Regeln${this.svg.getPentagramm()}</h2>`;
    const gridContainer = this.addGridContainer(section);
    const columnLeft = this.addFlexColumn(gridContainer);
    const columnRight = this.addFlexColumn(gridContainer);
    columnLeft.innerHTML += `
		<div>
			<h3>Einfache Proben</h3>
			<p>Einfache Proben sind der mechanische Kern des Spiels. Tust du etwas das wichtig ist und schief gehen kann, wird eine Probe fällig, um den Ausgang zu bestimmen.</p>
			<p>Der Erzähler bestimmt welches Attribut geprüft wird und welchen Schwierigkeitsgrad (SG) du schlagen musst.</p>
			<p>Du rollst zwei W6 und addierst das geprüfte Attribut (und Werkzeugbonus, wen du welches benutzt).</p>
			<p>Erreichst oder übertriffst du den geforderten SG, ist die Probe gelungen.</p>
			<p>Zeigen deine Würfel einen Pasch ist das Ergebnis kritisch, und die Probe gelingt oder misslingt besonders spektakulär.</p>
		</div>
		<div>
			<h3>Einfache Proben</h3>
			<p>Benutzt du ein passendes Werkzeug, darfst du dessen Bonus zu deinem Ergebnis addieren.</p>
			<p>Ist nichts angegeben, kannst du von folgenden Werten ausgehen:</p>
			<ul>
				<li>Improvisiertes Werkzeug +1 (z.B. ein Stuhl oder Messer als Waffe)</li>
				<li>Passendes Werkzeug +2 (z.B. ein Schwert im Kampf)</li>
				<li>Gutes Werkzeug +3 (z.B. voll ausgestattete Werkstatt für Reparaturen)</li>
			</ul>
		</div>
		<div>
			<h3>Vor- und Nachteil</h3>
			<p>Einige Umstände können dir einen Vor- oder Nachteil einbringen.</p>
			<p>Überwiegen die Vorteile, rollst du 3W6 und verwendest die zwei besseren.</p>
			<p>Überwiegen die Nachteile, rollst du 3W6 und verwendest die zwei schlechteren.</p>
			<p>Gleichen sich Vor- und Nachteile aus, rollst du eine normale Probe.</p>
		</div>
		<div>
			<h3>Riskante Proben</h3>
			<p>Ist eine Probe gefährlich, kann ein scheitern negative Konsequenzen nach sich ziehen, wie z.B. Stress oder Schaden. Defensive Proben (z.B. einer Falle ausweichen) sind typischerweise immer riskant.</p>
		</div>
	`;
    columnRight.innerHTML += `
		<div>
			<h3>Herausforderungen</h3>
			<p>Eine umfangreiche Aufgabe, wie z.B. einen Kampf oder Recherchen, kann der Erzähler auch als Herausforderungen darstellen.</p>
			<p>Dazu beschreibt der Erzähler erstmal was vor sich geht und bestimmt wie viele Erfolge nötig sind, um die Aufgabe zu bewältigen.</p>
			<p>Die Spieler dürfen dann reihum Handeln und Proben ablegen, um Erfolge beizusteuern. Kritische Erfolge zählen doppelt.
			Haben die Spieler genug Erfolge angesammelt, ist die Herausforderung gemeistert.</p>
			<p>Ansonsten folgt der Erzähler. Er beschreibt, wie die Helden vorrankommen und wie sich die Situation entwickelt, ehe eine neue Runde beginnt.</p>
			<p>Ist eine Situation gefährlich, wie z.B. während eines Kampfes, kann der Erzähler in seinem Zug auch einen Gegenschlag einstreuen, dem die Helden mit einer riskanten Probe widerstehen müssen.</p>
		</div>
		<div>
			<p><strong>Optional, Zonen</strong>: Bei komplexen Herausforderungen kann es nützlich sein eine grobe Skizze der Umgebung zu zeichnen und diese in Zonen zu unterteilen. Eine Taverne könnte z.B. aus dem Hof vor dem Gebäude, dem Hauptraum und der Küche bestehen.</p>
			<p>Bist du an der Reihe, kannst du dich eine Zone weit bewegen und dann noch eine Handlung ausführen.</p>
		</div>
		<div>
			<h3>Feats und Stunts</h3>
			<p>Je nach Klasse und Stufe erhält jeder Charakter eine Handvoll Feats und Stunts. Diese geben ihm gewöhnlich einen Vorteil auf bestimmte Proben, +1 Erfolg bei Proben in Herausforderungen oder erlauben ihm einzigartige Handlungen, die ihm sonst nicht offenstehen würden.</p>
			<p>Es ist in der Verantwortung der Spieler, die Feats und Stunts ihren Charakter im Auge zu haben, und bei Bedarf anzuwenden.</p>
		</div>
	`;
  }
}
