const PlaybooksPageTwo = () => {
  return (
    <section>
      <div className="grid">
        <Left />
        <Right />
      </div>
    </section>
  );
};

const Left = () => {
  return (
    <div>
      <div>
        <h3>EP und Level</h3>
        <p>
          Du und deine Kameraden erhalten jeweils 1 Erfahrungspunkt (EP), wen
          ihr eine Quest löst und wen ihr einen Boss Gegner besiegt.
        </p>
        <p>
          Hast du genug EP gesammelt, kannst du wäh-rend einer Auszeit
          trainieren, um eine Stufe auf-steigen. Wieviel EP du dafür brauchst
          und wel-che Vorteile, dass mit sich bringt, findest du in der Tabelle
          weiter unten.
        </p>
      </div>
      <div>
        <h3>Auszeit</h3>
        <p>
          Verbringen die Helden wenigstens eine Woche in einer sicheren Umgebung
          (z.B. in einer Stadt oder ihrer Zuflucht), wird das als Auszeit
          be-zeichnet.
        </p>
        <p>
          Während einer Auszeit erholst du dich von sämtlichem Schaden und
          Einschränkungen. Nutzt du die Zeit zum Arbeiten, erhältst du einen W6
          Gold. Alternative kannst du 2W6 Gold in-vestieren, um eine der
          folgenden Aktionen aus-zuführen:
        </p>
        <ul>
          <li>
            <strong>Gegenstand herstellen / kaufen</strong>: Ziehe drei Schätze,
            die zu deinem Level passen, und behalte den der dir am besten
            gefällt.
          </li>
          <li>
            <strong>Training</strong>: Wen du genug EP hast, steigst du eine
            Stufe auf.
          </li>
          <li>
            <strong>Vorbereiten</strong>: Während des nächsten Aben-teuers
            kannst du dem Erzähler jederzeit eine Ja/Nein Frage stellen, die er
            wahrheitsge-mäß beantworten muss.
          </li>
          <li>
            <strong>Zuflucht</strong>: Geht nur einmal pro Auszeit und Gruppe.
            Erhalte eine neue Zuflucht oder statte eine bestehende Zuflucht mit
            einer neuen Einrichtung aus.
          </li>
        </ul>
      </div>
    </div>
  );
};

const Right = () => {
  const rows = Array.from({ length: 14 }, (_, i) => i + 1);

  const calculateEP = (level) => {
    return (level * (level + 1)) / 2;
  };

  const getText = (level) => {
    if (level & 1) {
      return `Attribut +1 (max. ${getAttributeMax(level)})`;
    } else {
      return `Attribut +1 (max. ${getAttributeMax(level)}) / Feat oder Stunt`;
    }
  };

  const getAttributeMax = (level) => {
    if (level >= 10) {
      return 10;
    } else if (level >= 5) {
      return 8;
    } else {
      return 6;
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>EP</th>
            <th>Level</th>
            <th>Vorteil</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((i) => (
            <tr key={i}>
              <td>{calculateEP(i)}</td>
              <td>{i + 1}</td>
              <td>{getText(i)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlaybooksPageTwo;
