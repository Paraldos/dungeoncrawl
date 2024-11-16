import page from "../Page.js";

export default class Regeln extends page {
  constructor() {
    super(".rules");
    this.addRulesPage();
    this.addExamplesPage();
  }

  addRulesPage() {
    const section = this.addSection("rules");
    section.innerHTML += `<h2>Regeln${this.svg.getPentagramm()}</h2>`;
    const gridContainer = this.addDiv("grid-container", section);
    const columnLeft = this.addFlexColumn(gridContainer);
    const columnRight = this.addFlexColumn(gridContainer);
    columnLeft.innerHTML = `
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
			<p>Je nach Klasse und Stufe erhält jeder Charakter eine Handvoll Feats und Stunts. Diese geben ihm gewöhnlich einen Vorteil auf bestimmte Proben, +1 Erfolg bei Proben in Herausforderungen oder erlauben ihm einzigartige Handlungen, die ihm sonst nicht offenstehen würden.</p>
			<p>Es ist in der Verantwortung der Spieler, die Feats und Stunts ihren Charakter im Auge zu haben, und bei Bedarf anzuwenden.</p>
		</div>
	`;
  }

  addExamplesPage() {
    const section = this.addSection("rules");
    section.innerHTML += `<h2>Beispiele${this.svg.getPentagramm()}</h2>`;
    const gridContainer = this.addDiv("grid-container grid--3-colums", section);
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
