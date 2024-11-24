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
    const gridContainer = this.addDiv(
      "section__grid section__grid--3-colums",
      section
    );
    const columnLeft = this.addFlexColumn(gridContainer);
    const columnMiddle = this.addFlexColumn(gridContainer);
    const columnRight = this.addFlexColumn(gridContainer);

    columnLeft.innerHTML = `
		<div>
			<h3>Einfache Proben</h3>
			<p>Einfache Proben bilden den mechanischen Kern des Spiels. Immer wenn du etwas Wichti-ges tust, dass potenziell schiefgehen kann, kann der Erzähler eine Probe fordern, um den Aus-gang der Situation zu bestimmen.</p>
			<p>Der Erzähler legt fest, welches Attribut geprüft wird und welchen Schwierigkeitsgrad (SG) du erreichen musst.</p>
			<p>Du rollst den Würfel, den du im geprüften Attri-but hast (W4, W6, W8, W10 oder W12). Er-reichst oder übertriffst du den geforderten SG, ist die Probe gelungen.</p>
		</div>

		<div>
			<h3>Werkzeug</h3>
			<p>Benutzt du Werkzeug, dass zur Probe passt, darfst du zwei Würfel rollen, den deines Attributs und den des Werkzeugs, und das bessere Er-gebnis zählt.</p>
			<p>Optional, Improvisiertes Werkzeug: Benutzt du Werkzeug, für das du keine Werte hast, kannst du davon ausgehen, dass es einen W6 gibt.</p>
		</div>

		<div>
			<h3>Bonis und Malis</h3>
			<p>Einige Umstände, wie z.B. Feats oder Stunts, können dir einen Bonus oder Malus verschaf-fen. Diese verrechnest du schlicht mit dem ge-würfelten Ergebnis, bevor du es mit dem SG vergleichst.</p>
		</div>
		`;

    columnMiddle.innerHTML = `
		<div>
			<h3>Riskante Proben</h3>
			<p>Ist eine Probe besonders gefährlich, kann der Erzähler sie als riskant deklarieren. Das bedeu-tet, du erleidest einen Punkt Schaden, sollte die Probe scheitern. Defensive Proben (z.B. einer Falle ausweichen) sind typischerweise immer riskant.</p>
		</div>

		<div>
			<h3>Feats und Stunts</h3>
			<p>Je nach Klasse und Stufe erhält jeder Charakter eine Handvoll Feats und Stunts. Diese geben ihm gewöhnlich einen Vorteil auf bestimmte Proben, extra Erfolge bei Herausforderungen oder erlauben ihm einzigartige Handlungen, die ihm sonst nicht offenstehen würden.</p>
			<p>Es ist in der Verantwortung der Spieler, die Feats und Stunts ihrer Charaktere im Auge zu haben, und bei Bedarf anzuwenden.</p>
		</div>
	`;

    columnRight.innerHTML = `
		<div>
			<h3>Herausforderungen</h3>
			<p>Eine umfangreiche Aufgabe, wie z.B. einen Kampf oder Recherchen, kann der Erzähler auch als Herausforderungen darstellen.</p>
			<p>Dazu beschreibt der Erzähler erstmal was vor sich geht und bestimmt wie viele Erfolge nötig sind, um die Aufgabe zu bewältigen.</p>
			<p>Die Spieler dürfen dann reihum Handeln und Proben ablegen, um Erfolge beizusteuern. Der Spieler links vom Erzähler beginnt und dann geht es im Uhrzeigersinn weiter.</p>
			<p>Ist der Erzähler an der Reihe, beschreibt er wie sich die Situation entwickelt und wen die Situa-tion gefährlich ist, kann er einen Gegenschlag einstreuen, dem die Spieler mit einer riskanten Probe widerstehen müssen.</p>
			<p>Haben die Spieler genug Erfolge angesammelt, ist die Herausforderung gemeistert.</p>
		</div>
		<div>
			<p><strong>Optional, Zonen</strong>: Während komplexer Herausforderungen kann es nützlich sein eine grobe Skizze der Umge-bung zu zeichnen und diese in Zonen zu unter-teilen. Eine Taverne könnte z.B. aus dem Hof vor dem Gebäude, dem Hauptraum und der Küche bestehen.</p>
			<p>Bist du an der Reihe, kannst du dich eine Zone weit bewegen und dann noch eine Handlung ausführen.</p>
		</div>
	`;
  }
}
