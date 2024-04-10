export default class Schatten {
  constructor() {
    this.title = "Schatten";
    this.description =
      "Du bist ein Meister der Tarnung und des Schleichens. Du kannst dich unsichtbar machen und Gegner im Dunkeln überraschen.";
    this.talente = [
      {
        title: "Assassine",
        cost: "Sofort, 1 Stress",
        description:
          "Du erhältst +2, wen du jemanden aus dem Hinterhalt attackierst.",
      },
      {
        title: "Ausweichen ",
        cost: "Sofort, 1 Stress",
        description: "Du erhältst +1 auf eine Parade.",
      },
      {
        title: "Dieb",
        cost: "Sofort, 1 Stress",
        description:
          "Du erhältst +1 auf eine Probe die mit Taschendiebstahl, Falschspiel oder Taschenspielertricks zu tun hat.",
      },
      {
        title: "Einbrecher",
        cost: "Sofort, 1 Stress",
        description:
          "Du erhältst +1, wen du versuchst ein Schloss zu knacken, eine Falle zu entschärfen oder ein Si-cherheitssystem zu umgehen.",
      },
      {
        title: "Schatten",
        cost: "Sofort, 1 Stress",
        description:
          "Du erhältst +1, wen es darum geht unauffällig zu oder ungesehen zu bleiben.",
      },
      {
        title: "Schattensprung",
        cost: "Sofort, 1 Stress",
        description:
          "Du teleportierst dich an einen dunklen Ort, den du sehen kannst.",
      },
      {
        title: "Schlaf",
        cost: "Sofort, 1 Stress",
        description:
          "Bis zu drei Wesen, die du sehen kannst, schlafen innerhalb der nächsten Momente ein. Die Ziele müssen ruhig und entspannt sein (nicht im Kampf einsetzbar).",
      },
      {
        title: "Unheimlich",
        cost: "Sofort, 1 Stress",
        description:
          "Du erhältst +1 auf eine Probe die mit Einschüchtern zu tun hat.",
      },
      {
        title: "Verbergen",
        cost: "Sofort, 2 Stress",
        description:
          "Ein Gegenstand, den du berührst, wird für einen Monat unsichtbar. Wird Aufmerksamkeit auf den Gegenstand gelenkt, wird er wieder sichtbar.",
      },
      {
        title: "Verdunkeln",
        cost: "Sofort, 2 Stress",
        description:
          "Du wirst für den Rest der Szene unsichtbar. Wen du dich auffällig verhältst (z.B. Attackieren oder Tür zuschlagen), endet die Wirkung sofort.",
      },
    ];
  }
}
