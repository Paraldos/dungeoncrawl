import PageHeadline from "../pageHeadline/PageHeadline";

const PlaybooksPageOne = () => {
  return (
    <>
      <section id="playbooks">
        <PageHeadline txt="Playbooks" />
        <div className="grid grid--no-top-padding grid--3-colums">
          <Left />
          <Middle />
          <Right />
        </div>
      </section>
    </>
  );
};

const Left = () => {
  return (
    <div>
      <div>
        <h3>Generierung</h3>
        <p>
          Bevor das Spiel beginnt, musst du einen Charakter generieren, den du
          im Spiel verkörperst. Befolge dazu die folgenden Schritte:
        </p>
        <ul>
          <li>
            <strong>Playbook</strong>: Wähle ein Playbook, dass dir gefällt.
          </li>
          <li>
            <strong>Beschreibung</strong>: Überleg dir einen Namen und/oder eine
            kurze Beschreibung
          </li>
          <li>
            <strong>Attribute</strong>: Verteil die folgenden Werte auf deine
            Attribute:
            <ul>
              <li>2x 4 Punkte</li>
              <li>2x 3 Punkte</li>
              <li>2x 2 Punkte</li>
            </ul>
          </li>
          <li>
            <strong>Inventar</strong>: Wähle drei Standardgegenstände (z.B. eine
            Waffe, Rüstung und Rationen).
          </li>
          <li>
            <strong>Gold</strong>: Du startest mit W6 Gold.
          </li>
          <li>
            <strong>Gesundheit</strong>: Du startest mit 3 Punkten.
          </li>
          <li>
            <strong>Mana</strong>: Du startest mit 7 Punkten.
          </li>
          <li>
            <strong>Feats</strong>: Wähle ein Feat.
          </li>
          <li>
            <strong>Stunts</strong>: Wähle einen Stunt.
          </li>
        </ul>
      </div>
    </div>
  );
};

const Middle = () => {
  return (
    <div>
      <h3>Werte</h3>

      <div>
        <h4>Beschreibung</h4>
        <p>
          Hier kannst du den Namen deines Charakters und ein paar Schlagworte zu
          seiner Herkunft eintragen (z.B. Ruthen, Dunkelelf Assassine).
        </p>
      </div>

      <div>
        <h4>Attribute</h4>
        <p>
          Attribute sind die Grundlage deines Charakters. Sie werden von 1 bis 9
          gemessen. Je höher der Wert, umso besser.
        </p>
      </div>

      <div>
        <h4>Inventar</h4>
        <p>
          Das Inventar beinhaltet die WICHTIGEN Gegenstände deines Charakters,
          wie z.B. Waffen, Rüstungen, Rationen oder magische Artefakte. Du
          kannst bis zu 6 Gegenstände tragen.
        </p>
      </div>

      <div>
        <h4>Gold</h4>
        <p>
          Gold verkörpert die Art von Geld, das du brauchst, um teure
          Ausrüstung, Einfluss und wertvolle Dinge zu kaufen.
        </p>

        <p>
          Kleinigkeiten und Alltägliches, wie z.B. Essen und Unterkunft in einer
          Taverne, musst du nicht mit Gold bezahlen. Geh einfach davon aus, dass
          du genug Kleingeld für derlei Dinge hast.
        </p>
      </div>
    </div>
  );
};

const Right = () => {
  return (
    <div>
      <div>
        <h4>Gesundheit</h4>
        <p>
          Die Gesundheit zeigt an, wieviel Schaden du erleiden kannst, bevor du
          Handlungsunfähig zu Boden gehst.
        </p>
        <p>
          Gehst du zu Boden haben deine Verbündeten 5 Minuten, um dich zu
          heilen. Gelingen ihnen das nicht, stirbst du.
        </p>
        <p>
          Ruhst du dich eine Nacht aus, erholst du dich von sämtlichem
          erlittenem Schaden.
        </p>
      </div>

      <div>
        <h4>Mana</h4>
        <p>
          Mana verkörpert die mentalen Reserven, die du brauchst, um Stunts zu
          aktivieren.
        </p>
        <p>Ruhst du dich eine Nacht aus, erhältst du all dein Mana zurück.</p>
      </div>

      <div>
        <h4>Feats & Stunts</h4>
        <p>
          Feats und Stunts sind besondere Fähigkeiten, die dein Charakter
          erlernen kann.
        </p>
        <p>
          Feats sind simpel und können jederzeit und ohne extra Kosten aktiviert
          werden.
        </p>
        <p>Stunts sind schwieriger und jede Nutzung kostet einen Punkt Mana.</p>
      </div>
    </div>
  );
};

export default PlaybooksPageOne;
