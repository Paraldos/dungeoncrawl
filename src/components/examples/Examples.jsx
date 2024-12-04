import PageHeadline from "../pageHeadline/PageHeadline";

const Examples = () => {
  return (
    <section id="examples">
      <PageHeadline txt="Beispiele" />
      <div className="grid grid--no-top-padding grid--3-colums">
        <div className="">
          <div>
            <h3>Einfache Probe</h3>
            <p>
              Eine Gruppe Helden versucht eine verschlos-sene Tür aufzubekommen.
            </p>
            <p>
              Der Schurke möchte versuchen das Türschloss zu knacken, wofür der
              Erzähler eine Geschick Probe mit SG 12 verlangt.
            </p>
            <p>
              Der Schurke hat 5 Punkte Geschick und er benutzt einen Dietrich
              mit einem Bonus von 2. Er rollt eine 2. Sein Ergebnis ist also
              eine 9. Es gelingt ihm nicht das Schloss zu knacken.
            </p>
          </div>
          <div>
            <p>
              Der Barbar der Gruppe ist wegen der Verzöge-rung genervt und
              kündigt and die Tür einzu-schlagen, wofür der Erzähler eine Stärke
              Probe gegen 12 verlangt.
            </p>
            <p>
              Der Barbar hat 4 Punkte Stärke und kein Werk-zeug. Da die Probe
              recht schwer ist, benutzt er einen Stunt, der ihm einen Vorteil
              auf die Probe gewährt.
            </p>
            <p>
              Der Barbar rollt eine 4 und 12. Ein kritischer Erfolg! Die Probe
              ist gelungen und der Barbar zertrümmert die Tür regelrecht.
            </p>
          </div>
        </div>

        <div className="">
          <div>
            <h3>Herausforderung</h3>
            <p>
              Ein Barbar, ein Waldläufer und ein Krieger, ver-sucht einen
              gefährlichen Wald zu durchqueren. Eine Herausforderung, für welche
              der Erzähler 4 Erfolge verlangt.
            </p>
            <p>
              Der Barbar kommt zuerst und er versucht sich mit seiner Axt durchs
              Unterholz zu schlagen. Der Erzähler stimmt zu und verlangt eine
              ris-kante Probe auf Stärke. Die Probe misslingt und der Barbar
              erleidet einen Punkt Schaden durch einen hinterhältigen Pfeil
              eines lauernden Goblins.
            </p>
            <p>
              Der Waldläufers folgt und er versucht einen sicheren Pfad für die
              Gruppe zu finden. Hier-führt verlangt der Erzähler eine Probe auf
              Weisheit, welche gelingt!
            </p>
            <p>
              Der Krieger kommt als letztes an die Reihe, und nach dem Angriff
              der Goblins beschließt er die Augen nach weiteren Gefahren offen
              zu halten. Der Erzähler ist einverstanden und verlangt eine Probe
              auf Weisheit, die gelingt!
            </p>
            <p>
              Nachdem alle Spieler gehandelt haben, be-schreibt der Erzähler wie
              die Gruppe etwa die Hälfte des Weges geschafft hat. Sie weichen
              Gruppen von Monstern aus, überqueren einen reißenden Fluss und
              erklimmen steile Hügel. Allerdings beginnt nun die Nacht
              hereinzubre-chen, was die Aufgabe erschwert.
            </p>
            <p>
              Nun sind die Spieler wieder am Zug. Sie brauch zwei weitere
              Erfolge, um die Herausforderung zu meistern.
            </p>
          </div>
        </div>

        <div className="">
          <div>
            <h3>Kampf</h3>
            <p>
              Unsere Helden aus dem letzten Beispiel, wer-den von einer Gruppe
              Goblins überrascht und in einen Kampf verwickelt.
            </p>
            <p>
              Der Erzähler erklärt, dass die Helden 6 Erfolge brauchen und dass
              das Schlachtfeld aus zwei Zonen besteht: die Lichtung mit den
              Helden und einigen Goblin Kriegern, und die Baumgrenze mit Goblin
              Bogenschützen.
            </p>
            <p>
              Der Barbar beginnt und setzt einen Stunt ein, um mehrere Gegner
              aufs Korn zu nehmen. Er rollt auf Stärke und die Probe gelingt,
              was dank des Stunts wie zwei Erfolge zählt.
            </p>
            <p>
              Der Waldläufer folgt und möchte die Schützen an der Baumgrenze
              aufs Korn nehmen. Er rollt auf Geschick allerdings misslingt seine
              Probe.
            </p>
            <p>
              Der Krieger kommt als letztes. Er stürmt zu den Goblin schützen,
              um sie in einen Nahkampf zu verwickeln. Der Erzähler verlangt
              dafür eine riskante Probe auf Stärke, welche gelingt!
            </p>
            <p>
              Nach den Helden kommen der Erzähler und er verlangt eine Probe auf
              Zähigkeit. Der Waldläu-fer und Krieger scheitern, und erleiden
              jeweils einen Punkt Schaden durch die Angriffe der Goblins.
            </p>
            <p>
              Nun sind die Helden wieder and der Reihe. Sie haben etwas Schaden
              einstecken müssen und brauchen noch 3 weitere Erfolge, um den
              Kampf zu gewinnen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Examples;
