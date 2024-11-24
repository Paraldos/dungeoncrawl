import page from "../Page.js";
import listOfPlaybooks from "./data/ListOfPlaybooks.js";
import Playbook from "./Playbook/Playbook.js";

export default class playbooks extends page {
  constructor() {
    super();
    this.addPlaybookRules();
    listOfPlaybooks.forEach((playbook) => new Playbook(playbook));
  }

  addPlaybookRules() {
    const section = this.addSection("playbooks");
    section.classList.add("rules");
    window.navbar.addNavbarItem("Playbooks", "playbooks");

    section.innerHTML += `<h2>Charakter & Playbooks ${this.svg.getD20()}</h2>`;
    const gridContainer = this.addDiv(
      "section__grid section__grid--3-colums",
      section
    );
    const columnLeft = this.addFlexColumn(gridContainer);
    const columnMiddle = this.addFlexColumn(gridContainer);
    const columnRight = this.addFlexColumn(gridContainer);

    columnLeft.innerHTML = `
    <div>
      <h3>Generierung</h3>
      <p>Bevor das Spiel beginnt, musst du einen Cha-rakter generieren, den du im Spiel verkörperst. Befolge dazu die folgenden Schritte:</p>
      <ul>
        <li><strong>Playbook</strong>: Wähle ein Playbook, dass dir gefällt.</li>
        <li><strong>Beschreibung</strong>: Überleg dir einen Namen und/oder eine kurze Beschreibung (z.B. El-ron, der elfische Klingentänzer).</li>
        <li><strong>Attribute</strong>: Verteil die folgenden Werte auf deine Attribute: 3x W4 und 3x W6.</li>
        <li><strong>Inventar</strong>: Wähle drei Standardgegenstände (z.B. eine Waffe, Rüstung und Rationen).</li>
        <li><strong>Gold</strong>: Du startest mit W6 Gold.</li>
        <li><strong>Gesundheit</strong>: Du startest mit 3 Punkten.</li>
        <li><strong>Mana</strong>: Du startest mit 7 Punkten.</li>
        <li><strong>Feats</strong>: Wähle ein Feat.</li>
        <li><strong>Stunts</strong>: Wähle einen Stunt.</li>
      </ul>
    </div>
    `;

    columnMiddle.innerHTML = `
    <h3>Werte</h3>

    <div>
      <h4>Beschreibung</h4>
      <p>Hier kannst du den Namen deines Charakters und ein paar Schlagworte zu seiner Herkunft eintragen (z.B. Elron, der elfische Klingentän-zer).</p>
    </div>

    <div>
      <h4>Attribute</h4>
      <p>Attribute sind die Grundlage deines Charakters. Sie werden auf einer Skala von Würfeln ge-messen: W4, W6, W8, W10, W12. Müsst du eine Probe auf das Attribut ablegen, rollst du diesen Würfel, um dein Ergebnis zu bestimmen. Je höher der Wert, umso besser.</p>
    </div>

    <div>
      <h4>Inventar</h4>
      <p>Das Inventar verkörpert die WICHTIGEN Ge-genstände deines Charakters, wie z.B. Waffen, Rüstungen, Rationen oder magische Artefakte. Du kannst bis zu 6 Gegenstände tragen.</p>
      <p>Einige Gegenstände, wie z.B. Rationen, haben Ladungen, die bestimmen, wie oft du sie benut-zen kannst, bevor sie aufgebraucht sind.</p>
    </div>

    <div>
      <h4>Gold</h4>
      <p>Gold verkörpert die Art von Reichtümern, die du brauchst, um teure Ausrüstung, Einfluss und wertvolle Dinge zu kaufen.</p>
      <p>Kleinigkeiten und Alltägliches, wie z.B. Essen und Unterkunft in einer Taverne, musst du nicht mit Gold bezahlen. Geh einfach davon aus, dass du genug Kleingeld für derlei Dinge hast.</p>
    </div>
    `;

    columnRight.innerHTML = `
    <div>
      <h4>Gesundheit</h4>
      <p>Die Gesundheit zeigt an, wieviel Schaden du erleiden kannst, bevor du Handlungsunfähig zu Boden gehst.</p>
      <p>Gehst du zu Boden haben deine Verbündeten 5 Minuten, um dich zu heilen. Gelingen ihnen das nicht, stirbst du.</p>
      <p>Ruhst du dich eine Nacht aus, erholst du dich von sämtlichem erlittenem Schaden.</p>
    </div>

    <div>
      <h4>Mana</h4>
      <p>Mana ist die magische Kraft, die du brauchst, um Stunts zu aktivieren.</p>
      <p>Ruhst du dich eine Nacht aus, erhältst du all dein Mana zurück.</p>
    </div>

    <div>
      <h4>Feats</h4>
      <p>Feats sind besondere Fähigkeiten, die dein Cha-rakter erlernen kann. Sie sind immer aktiv und du kannst sie jederzeit und ohne extra Kosten benutzen.</p>
    </div>

    <div>
      <h4>Stunts</h4>
      <p>Stunts sind besondere Fähigkeiten, die dein Charakter erlernen kann. Jedes Mal, wenn du einen Stunt benutzt, musst du dafür einen Punkt Mana ausgeben.</p>
    </div>
    `;
  }
}
