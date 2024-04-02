class Krieger {
  constructor() {
    this.title = "Krieger";
    this.description =
      "Du bist schnell, stark und militant. Kampf ist deine Spezialität, und du kannst mehr Schaden austeilen und wegstecken als andere.";
    this.startTalente = [
      {
        title: "Fitness",
        cost: "Sofort, 1 Ausdauer",
        description:
          "Du erhältst +1 Würfel auf eine körperliche Probe die nichts mit Kampf zu tun hat.",
      },
    ];
    this.erweiterteTalente = [
      {
        title: "Anführer",
        cost: "Sofort, 1 Ausdauer",
        description:
          "Du erhältst +1 Würfel auf eine Probe die mit Taktik, Strategie oder Logistik zu tun hat.",
      },
      {
        title: "Ausweichen",
        cost: "Sofort, 1 Ausdauer",
        description: "Du erhältst +1 Würfel auf eine Parade.",
      },
      {
        title: "Bedrohliche Aura",
        cost: "Sofort, 1 Ausdauer",
        description:
          "Du erhältst +1 Würfel auf eine Probe die mit Einschüchtern oder Provozieren zu tun hat.",
      },
      {
        title: "Eisenhaut",
        cost: "Passiv",
        description: "Du kannst einen Treffer mehr aushalten als andere.",
      },
      {
        title: "Finte",
        cost: "Sofort, 1 Ausdauer",
        description: "Du erhältst +1 Würfel auf eine Nahkampf Attacke.",
      },
      {
        title: "Gegenschlag",
        cost: "Parade, 1 Ausdauer",
        description:
          "Kündige Gegenschlag an, bevor du dich verteidigst. Der Angreifer erleidet einen Treffer, wen deine Probe gelingt.",
      },
      {
        title: "Kampfrausch",
        cost: "Aktion, 1 Ausdauer",
        description:
          "Du nutzt deine Aktion um zwei Attacken ausführen. Nicht kompatible mit langsamen Waffen.",
      },
      {
        title: "Kommandos",
        cost: "Aktion, 1 Ausdauer",
        description:
          "Deine Verbündeten erhalten +1 Würfel auf ihre nächste Probe. Verfällt nach einer Runde.",
      },
      {
        title: "Packesel",
        cost: "Passiv",
        description:
          "Du kannst 1 Gegenstand mehr im Gepäck tragen (Leicht = 4, Mittel = 7, Schwer = 10).",
      },
      {
        title: "Zielen",
        cost: "Sofort, 1 Ausdauer",
        description: "Du erhältst +1 Würfel auf eine Fernkampf Attacke.",
      },
    ];
  }
}

class Playbook extends Krieger {}

const playbook = new Playbook();
export default playbook;
