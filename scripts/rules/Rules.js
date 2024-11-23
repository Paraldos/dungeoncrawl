import page from "../Page.js";

export default class Regeln extends page {
  constructor() {
    super();
    this.addRulesPage();
  }

  addRulesPage() {
    const section = this.addSection("rules");
    section.classList.add("rules");
    window.navbar.addNavbarItem("Regeln", "rules");

    section.innerHTML += `<h2>Regeln${this.svg.getPentagramm()}</h2>`;
    const gridContainer = this.addDiv("section__grid", section);
    const columnLeft = this.addFlexColumn(gridContainer);
    const columnRight = this.addFlexColumn(gridContainer);
    columnLeft.innerHTML = `
		<div>
			<h3>Einfache Proben</h3>
			<p>Einfache Proben bilden den mechanischen Kern des Spiels. Immer wenn du etwas wichtiges tust, dass potenziell schiefgehen kann, kann der Erzähler eine Probe fordern, um den Ausgang der Situation zu bestimmen.</p>
			<p>Der Erzähler legt fest, welches Attribut geprüft wird und welchen Schwierigkeitsgrad (SG) du erreichen musst.</p>
			<p>Du würfelst mit zwei W6 und addierst das entsprechende Attribut sowie einen möglichen Bonus durch ein Werkzeug (falls du eines verwendest).</p>
			<p>Erreichst oder übertriffst du den geforderten SG, ist die Probe gelungen.</p>
			<p>Zeigen deine Würfel einen Pasch ist das Ergebnis kritisch, und die Probe gelingt oder misslingt besonders spektakulär.</p>
		</div>
		<div>
			<h3>Werkzeug</h3>
			<p>Benutzt du ein passendes Werkzeug, darfst du dessen Bonus zu deinem Ergebnis addieren. Ist nichts angegeben, kannst du von folgenden Werten ausgehen:</p>
			<ul>
				<li>Improvisiertes Werkzeug +1 (z.B. ein Stuhl oder Messer als Waffe)</li>
				<li>Passendes Werkzeug +2 (z.B. ein Dietrich zum Schlösser knacken)</li>
				<li>Gutes Werkzeug +3 (z.B. voll ausgestattete Werkstatt für Reparaturen)</li>
			</ul>
		</div>
		<div>
			<h3>Vor- und Nachteil</h3>
			<p>Einige Umstände können dir Vor- und Nachteil für deine Probe einbringen.</p>
			<ul>
				<li>Überwiegen die Vorteile, rollst du 3W6 und verwendest die zwei besseren.</li>
				<li>Überwiegen die Nachteile, rollst du 3W6 und verwendest die zwei schlechteren.</li>
				<li>Gleichen sich Vor- und Nachteile aus, rollst du eine normale Probe.</li>
			</ul>
		</div>
		<div>
			<h3>Riskante Proben</h3>
			<p>Ist eine Probe besonders gefährlich, kann der Erzähler sie als riskant deklarieren. Das bedeutet, du erleidest einen Punkt Schaden, sollte die Probe scheitern.</p>
			<p>Defensive Proben (z.B. einer Falle ausweichen) sind typischerweise immer riskant.</p>
		</div>
		`;
    columnRight.innerHTML = `
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
			<p>Je nach Klasse und Stufe erhält jeder Charakter eine Handvoll Feats und Stunts. Diese geben ihm gewöhnlich einen Vorteil auf bestimmte Proben, extra Erfolge bei Herausforderungen oder erlauben ihm einzigartige Handlungen, die ihm sonst nicht offenstehen würden.</p>
			<p>Es ist in der Verantwortung der Spieler, die Feats und Stunts ihrer Charaktere im Auge zu haben, und bei Bedarf anzuwenden.</p>
		</div>
	`;
  }
}
