export default class Krieger {
  constructor() {
    this.title = "Krieger";
    this.description =
      "Du bist schnell, stark und militant. Kampf ist deine Spezialität, und du kannst mehr Schaden austeilen und wegstecken als andere.";
    this.talente = [
      {
        title: "Anführer",
        cost: "Sofort, 1 Stress",
        description:
          "Du erhältst +1 Würfel auf eine Probe die mit Taktik, Strategie oder Logistik zu tun hat.",
      },
      {
        title: "Ausweichen",
        cost: "Sofort, 1 Stress",
        description: "Du erhältst +1 Würfel auf eine Parade.",
      },
      {
        title: "Bedrohliche Aura",
        cost: "Sofort, 1 Stress",
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
        cost: "Sofort, 1 Stress",
        description: "Du erhältst +1 Würfel auf eine Nahkampf Attacke.",
      },
      {
        title: "Fitness",
        cost: "Sofort, 1 Stress",
        starttalent: true,
        description:
          "Du erhältst +1 Würfel auf eine körperliche Probe die nichts mit Kampf zu tun hat.",
      },
      {
        title: "Kampfrausch",
        cost: "Aktion, 1 Stress",
        description:
          "Nutzt deine Aktion um zwei Attacken auszuführen. Nicht kompatible mit langsamen Waffen.",
      },
      {
        title: "Konter",
        cost: "Parade, 1 Stress",
        description:
          "Kündige Konter an, bevor du dich verteidigst. Der Angreifer erleidet einen Treffer, wen deine Probe gelingt.",
      },
      {
        title: "Kommandos",
        cost: "Aktion, 1 Stress",
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
        cost: "Sofort, 1 Stress",
        description: "Du erhältst +1 Würfel auf eine Fernkampf Attacke.",
      },
    ];
  }
}
