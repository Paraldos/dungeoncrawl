import PageHeadline from "../pageHeadline/PageHeadline";

const Rules = () => {
  return (
    <section id="rules">
      <PageHeadline txt="Regeln" />
      <div className="grid grid--no-top-padding grid--3-colums">
        <div className="">
          <div>
            <h3>Einfache Proben</h3>
            <p>
              Einfache Proben bilden den mechanischen Kern des Spiels. Immer
              wenn du etwas Wichtiges tust, dass potenziell schiefgehen kann,
              kann der Erzähler eine Probe fordern, um den Ausgang der Situation
              zu bestimmen.
            </p>
            <p>
              Der Erzähler legt fest, welches Attribut geprüft wird und wie hoch
              der Schwierigkeitsgrad (SG) der Probe ist.
            </p>
            <p>
              Du rollst einen W12 und addierst das geprüfte Attribut. Erreichst
              oder übertriffst du den geforderten SG, ist die Probe gelungen.
            </p>
          </div>

          <div>
            <h3>Kritischer Erfolg Proben</h3>
            <p>
              Zeigt dein Würfel eine 12, ist das ein kritischer Erfolg und die
              Probe gelingt besonders spektakulär. Wen möglich, entwickelt sich
              die Situation besonders gut für den Charakter.
            </p>
          </div>

          <div>
            <h3>Werkzeug</h3>
            <p>
              Du kannst bei jeder Probe ein(!) passendes Werkzeug aus deinem
              Inventar benutzt. Tust du das, darfst du den Bonus des Gegenstands
              zu deinem Ergebnis addieren.
            </p>
          </div>
        </div>

        <div className="">
          <div>
            <h3>Feats und Stunts</h3>
            <p>
              Du kannst bei jeder Probe einen(!) passenden Feat oder Stunt
              benutzt und von dessen Effekt profitieren.
            </p>
          </div>

          <div>
            <h3>Vor- und Nachteile</h3>
            <p>
              Äußere Umstände können dir einen Vor- oder Nachteil auf deine
              Probe gewähren.
            </p>
            <ul>
              <li>
                Überwiegen die Vorteile, darfst du 2W12 rollen und den besseren
                verwenden.
              </li>
              <li>
                Überwiegen die Nachteile, musst du 2W12 rollen und den
                schlechteren verwenden.
              </li>
              <li>
                Gleichen sich Vor- und Nachteile aus, rollst du eine normale
                Probe.
              </li>
            </ul>
          </div>

          <div>
            <h3>Riskante Proben</h3>
            <p>
              Ist eine Probe besonders gefährlich, kann der Erzähler sie als
              riskant deklarieren. Das bedeutet, du erleidest einen Punkt
              Schaden, sollte die Probe scheitern. Defensive Proben (z.B. einer
              Falle ausweichen) sind typischerweise immer riskant.
            </p>
          </div>
        </div>

        <div className="">
          <div>
            <h3>Herausforderungen</h3>
            <p>
              Eine umfangreiche Aufgabe, wie z.B. einen Kampf oder Recherchen,
              kann der Erzähler als Herausforderungen abhandeln.
            </p>
            <p>
              Dazu beschreibt er was vor sich geht und bestimmt wie viele
              Erfolge nötig sind, um die Aufgabe zu bewältigen.
            </p>
            <p>
              Die Spieler dürfen dann reihum Handeln und Proben ablegen, um
              Erfolge beizusteuern. Kritische Erfolge zählen dabei doppelt. Der
              Spieler links vom Erzähler beginnt und dann geht es im
              Uhrzeigersinn weiter.
            </p>
            <p>
              Ist der Erzähler an der Reihe, beschreibt er wie sich die
              Situation entwickelt und wen die Situation gefährlich ist, kann er
              einen Gegenschlag einstreuen, dem die Spieler mit einer riskanten
              Probe widerstehen müssen.
            </p>
            <p>
              Haben die Spieler genug Erfolge angesammelt, ist die
              Herausforderung gemeistert.
            </p>
          </div>
          <div>
            <p>
              <strong>Optional, Zonen</strong>: Bei Kämpfen oder ähnlichen
              Action Szenen kann es nützlich sein eine grobe Skizze der Umgebung
              zu zeichnen und diese in Zonen zu unterteilen.
            </p>
            <p>
              Eine Taverne könnte z.B. aus dem Hof vor dem Gebäude, dem
              Hauptraum und der Küche bestehen.
            </p>
            <p>
              Bist du an der Reihe, kannst du dich eine Zone weit bewegen und
              eine Handlung ausführen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
