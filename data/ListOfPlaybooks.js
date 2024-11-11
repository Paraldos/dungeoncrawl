export default class ListOfPlaybooks {
  constructor() {
    this.list = [
      {
        title: "Barbar",
        description:
          "Stark, wild und tödlich. In dir schlummert ein ungezähmter Zorn, den du entfesseln kannst, um deine Gegner mit brutaler Gewalt zu vernichten.",
        feats: [
          {
            title: "Eisern",
            level: 2,
            description: "Deine Gesundheit steigt um 1 Punkt.",
          },
          {
            title: "Jäger",
            level: 1,
            description: "Vorteil auf Proben mit Wildnisleben.",
          },
        ],
      },
      {
        title: "Druide",
        description:
          "Weise, naturverbunden und wandelbar. Du trägst die uralte Macht der Natur in dir und kannst andere heilen, dich in wilde Tiere verwandeln und Pflanzen beherrschen.",
      },
    ];
  }
}
