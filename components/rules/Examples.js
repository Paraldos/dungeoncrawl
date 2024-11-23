import page from "../Page.js";

export default class Regeln extends page {
  constructor() {
    super();
    this.addExamples();
  }

  addExamples() {
    const section = this.addSection("examples");
    section.classList.add("rules");
    window.navbar.addNavbarItem("Spiel Beispiele", "examples");

    section.innerHTML += `<h2>Spiel Beispiele${this.svg.getPentagramm()}</h2>`;
    const gridContainer = this.addDiv(
      "section__grid section__grid--3-colums",
      section
    );
    const columnLeft = this.addFlexColumn(gridContainer);
    const columnMiddle = this.addFlexColumn(gridContainer);
    const columnRight = this.addFlexColumn(gridContainer);

    columnLeft.innerHTML = `
		<div>
			<h3>Beispiel: Einfache Probe</h3>
			<p>Beim Durchsuchen eines Dungeons wird eine Gruppe Helden von einer verschlossenen Tür aufgehalten.</p>
			<p>Der Schurke möchte versuchen das Türschloss zu knacken, wofür der Erzähler eine Probe auf Geschick gegen 12 verlangt.</p>
			<p>Der Schurke rollt eine 2 und eine 3, er hat 4 Punkte Geschick und er benutzt einen Dietrich der +2 gibt. Er erreicht also 11 (2+3+4+2). Leider nicht genug, um die Tür zu öffnen.</p>
		</div>
		<div>
			<p>Der Barbar der Gruppe ist wegen der Verzögerung genervt und kündigt and die Tür einzuschlagen, wofür der Erzähler eine Stärke Probe gegen 12 verlangt.</p>
			<p>Da die Probe recht schwer ist, benutzt der Barbar einen Stunt, um einen Vorteil auf seine Probe zu erhalten.</p>
			<p>Der Barbar würfelt 5, 2 und 5, er hat 4 Punkte Stärke und er benutzt kein Werkzeug. Sein Ergebnis ist also 14 (5+5+4). Die Probe ist gelungen und da der Barbar einen pasch erzielt hat, zerbirst die Tür regelrecht unter steinen Ansturm.</p>
		</div>
	`;

    columnMiddle.innerHTML = `
		<div>
			<h3>Beispiel: Herausforderung</h3>
			<p>Eine Gruppe Helden, ein Barbar, ein Waldläufer und ein Krieger, versucht einen gefährlichen Wald zu durchqueren. Eine Herausforderung, für welche der Erzähler 4 Erfolge verlangt.</p>
			<p>Der Barbar kommt zuerst und er versucht sich mit seiner Axt durchs Unterholz zu schlagen. Der Erzähler stimmt zu und verlangt eine riskante Probe auf Stärke. Die Probe misslingt und der Barbar erleidet einen Punkt Schaden durch einen hinterhältigen Pfeil eines lauernden Goblins.</p>
			<p>Der Waldläufers folgt und er versucht einen sicheren Pfad für die Gruppe zu finden. Hierführt verlangt der Erzähler eine Probe auf Weisheit, welche gelingt!</p>
			<p>Der Krieger kommt als letztes an die Reihe, und nach dem Angriff der Goblins beschließt er die Augen nach weiteren Gefahren offen zu halten. Der Erzähler ist einverstanden und verlangt eine Probe auf Weisheit, die gelingt!</p>
			<p>Nachdem alle Spieler gehandelt haben, beschreibt der Erzähler wie die Gruppe etwa die Hälfte des Weges geschafft hat. Sie weichen Gruppen von Monstern aus, überqueren einen reißenden Fluss und erklimmen steile Hügel. Allerdings beginnt nun die Nacht hereinzubrechen.</p>
			<p>Nun sind die Spieler wieder am Zug. Sie brauch nur noch 2 Erfolge, um die Herausforderung zu meistern.</p>
		</div>
	`;

    columnRight.innerHTML = `
		<div>
			<h3>Beispiel: Kampf</h3>
			<p>Unsere Helden aus dem letzten Beispiel, werden von einem Kriegstrupp Goblins überrascht und in einen Kampf verwickelt.</p>
			<p>Der Erzähler erklärt, dass die Helden 6 Erfolge brauchen und dass das Schlachtfeld aus zwei Zonen besteht: die Lichtung mit den Helden und einigen Goblin Kriegern, und die Baumgrenze mit feindlichen Bogenschützen.</p>
			<p>Der Barbar beginnt und setzt einen Stunt ein, um mehrere Gegner aufs Korn zu nehmen. Er rollt auf Stärke und die Probe gelingt, was dank des Stunts wie zwei Erfolge zählt.</p>
			<p>Der Waldläufer folgt und möchte die Schützen an der Baumgrenze aufs Korn nehmen. Er rollt auf Geschick aber seine Probe misslingt und er kann keinen Schaden verursachen.</p>
			<p>Der Krieger kommt als letztes. Er stürmt zu den Goblin schützen, um sie in einen Nahkampf zu verwickeln. Der Erzähler verlangt dafür eine riskante Probe auf Stärke, welche gelingt!</p>
			<p>Nach den Helden kommen der Erzähler und er verlangt eine Probe auf Zähigkeit. Der Waldläufer und Krieger scheitern, und erleiden jeweils einen Punkt Schaden durch die Angriffe der Goblins.</p>
			<p>Nun sind die Helden wieder and der Reihe. Sie haben etwas Schaden einstecken müssen und brauchen noch 3 weitere Erfolge, um den Kampf zu gewinnen.</p>
		</div>
	`;
  }
}
