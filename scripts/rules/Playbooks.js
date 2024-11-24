import page from "../Page.js";
import listOfPlaybooks from "./data/ListOfPlaybooks.js";
import Playbook from "./Playbook/Playbook.js";

export default class playbooks extends page {
  constructor() {
    super();
    this.addSecondPage();
    this.addFirstPage();
    listOfPlaybooks.forEach((playbook) => new Playbook(playbook));
  }

  addFirstPage() {
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
      <p>Bevor das Spiel beginnt, musst du einen Charakter generieren, den du im Spiel verkörperst. Befolge dazu die folgenden Schritte:</p>
      <ul>
        <li><strong>Playbook</strong>: Wähle ein Playbook, dass dir gefällt.</li>
        <li><strong>Beschreibung</strong>: Überleg dir einen Namen und/oder eine kurze Beschreibung (z.B. Elron, der elfische Klingentänzer).</li>
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
      <p>Hier kannst du den Namen deines Charakters und ein paar Schlagworte zu seiner Herkunft eintragen (z.B. Elron, der elfische Klingentänzer).</p>
    </div>

    <div>
      <h4>Attribute</h4>
      <p>Attribute sind die Grundlage deines Charakters. Sie werden auf einer Skala von Würfeln gemessen: W4, W6, W8, W10, W12. Müsst du eine Probe auf das Attribut ablegen, rollst du diesen Würfel, um dein Ergebnis zu bestimmen. Je höher der Wert, umso besser.</p>
    </div>

    <div>
      <h4>Inventar</h4>
      <p>Das Inventar verkörpert die WICHTIGEN Gegenstände deines Charakters, wie z.B. Waffen, Rüstungen, Rationen oder magische Artefakte. Du kannst bis zu 6 Gegenstände tragen.</p>
      <p>Einige Gegenstände, wie z.B. Rationen, haben Ladungen, die bestimmen, wie oft du sie benutzen kannst, bevor sie aufgebraucht sind.</p>
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
      <p>Feats sind besondere Fähigkeiten, die dein Charakter erlernen kann. Sie sind immer aktiv und du kannst sie jederzeit und ohne extra Kosten benutzen.</p>
    </div>

    <div>
      <h4>Stunts</h4>
      <p>Stunts sind besondere Fähigkeiten, die dein Charakter erlernen kann. Jedes Mal, wenn du einen Stunt benutzt, musst du dafür einen Punkt Mana ausgeben.</p>
    </div>
    `;
  }

  addSecondPage() {
    const section = this.addSection("playbooks");
    section.classList.add("rules");

    const gridContainer = this.addDiv(
      "section__grid section__grid--3-colums",
      section
    );
    const columnLeft = this.addFlexColumn(gridContainer);
    const columnMiddle = this.addFlexColumn(gridContainer);
    const columnRight = this.addFlexColumn(gridContainer);

    columnLeft.innerHTML = `
      <div>
        <h3>EP und Level</h3>
        <p>Du und deine Kameraden erhalten jeweils 1 Erfahrungspunkt (EP), wen ihr eine Quest löst und wen ihr einen Boss Gegner besiegt.</p>
        <p>Hast du genug EP gesammelt, kannst du wäh-rend einer Auszeit trainieren, um eine Stufe auf-steigen. Wieviel EP du dafür brauchst und wel-che Vorteile, dass mit sich bringt, findest du in der Tabelle weiter unten.</p>
      </div>

      <div>
        <h3>Werdegang</h3>
        <p>Abhängig von Level lässt sich der Werdegang deines Helden in drei Akte einteilen. Daran kannst du ablesen, wie hoch deine Attribute maximal steigen können und welche Schätze du finden kannst.</p>

        <table>
          <tr>
            <th>Level</th>
            <th>Werdegang</th>
            <th>Attribute</th>
            <th>Schätze</th>
          </tr>
          <tr>
            <td>1 bis 5</td>
            <td>Abenteurer</td>
            <td>W8</td>
            <td>Bronze</td>
          </tr>
          <tr>
            <td>6 bis 10</td>
            <td>Held</td>
            <td>W10</td>
            <td>Silber</td>
          </tr>
          <tr>
            <td>11 bis 15</td>
            <td>Legende</td>
            <td>W12</td>
            <td>Gold</td>
          </tr>
        </table>
      </div>
    `;

    columnMiddle.innerHTML = `
      <div>
        <h3>Auszeit</h3>
        <p>Verbringen die Helden wenigstens eine Woche in einer sicheren Umgebung (z.B. in einer Stadt oder ihrer Zuflucht), wird das als Auszeit be-zeichnet.</p>
        <p>Während einer Auszeit erholst du dich vollstän-dig und nutzt du die Zeit zum Arbeiten, erhältst du einen W6 Gold. Alternative kannst du 2W6 Gold investieren, um eine der folgenden Aktio-nen auszuführen:</p>
        <ul>
          <li><strong>Gegenstand herstellen / kaufen</strong>: Ziehe drei Schätze, die zu deinem Level passen, und behalte den der dir am besten gefällt.</li>
          <li><strong>Training</strong>: Wen du genug EP hast, steigst du eine Stufe auf.</li>
          <li><strong>Vorbereiten</strong>: Während des nächsten Aben-teuers kannst du dem Erzähler jederzeit eine Ja/Nein Frage stellen, die er wahrheitsge-mäß beantworten muss.</li>
          <li><strong>Zuflucht</strong>: Geht nur einmal pro Auszeit und Gruppe. Erhalte eine neue Zuflucht oder statte eine bestehende Zuflucht mit einer neuen Einrichtung aus.</li>
        </ul>
      </div>
    `;

    columnRight.innerHTML = `
        <table>
          <tr>
            <th>EP</th>
            <th>Level</th>
            <th>Vorteil</th>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>Attribute +1 (max. W8)</td>
          </tr>
          <tr>
            <td>3</td>
            <td>3</td>
            <td>Attribute +1 (max. W8), Feat oder Stunt</td>
          </tr>
          <tr>
            <td>6</td>
            <td>4</td>
            <td>Attribute +1 (max. W8)</td>
          </tr>
          <tr>
            <td>10</td>
            <td>5</td>
            <td>Attribute +1 (max. W8), Feat oder Stunt</td>
          </tr>
          <tr>
            <td>15</td>
            <td>6</td>
            <td>Attribute +1 (max. W8)</td>
          </tr>
          <tr>
            <td>21</td>
            <td>7</td>
            <td>Attribute +1 (max. W8), Feat oder Stunt</td>
          </tr>
          <tr>
            <td>28</td>
            <td>8</td>
            <td>Attribute +1 (max. W8)</td>
          </tr>
          <tr>
            <td>36</td>
            <td>9</td>
            <td>Attribute +1 (max. W8), Feat oder Stunt</td>
          </tr>
          <tr>
            <td>45</td>
            <td>10</td>
            <td>Attribute +1 (max. W8)</td>
          </tr>
          <tr>
            <td>55</td>
            <td>11</td>
            <td>Attribute +1 (max. W8), Feat oder Stunt</td>
          </tr>
          <tr>
            <td>66</td>
            <td>12</td>
            <td>Attribute +1 (max. W8)</td>
          </tr>
          <tr>
            <td>78</td>
            <td>13</td>
            <td>Attribute +1 (max. W8), Feat oder Stunt</td>
          </tr>
          <tr>
            <td>91</td>
            <td>14</td>
            <td>Attribute +1 (max. W8)</td>
          </tr>
          <tr>
            <td>105</td>
            <td>15</td>
            <td>Attribute +1 (max. W8), Feat oder Stunt</td>
          </tr>
        </table>
    `;
  }
}
