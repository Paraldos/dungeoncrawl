class Playbook {
  constructor(title, description, feats = [], stunts = []) {
    this.title = title;
    this.description = description;
    this.feats = feats;
    this.stunts = stunts;

    this.feats.push({
      title: "Muliclass",
      level: [false],
      description: "Wähle einen Feat einer anderen Klasse.",
    });
    this.stunts.push({
      title: "Muliclass",
      level: [false],
      description: "Wähle einen Stunt einer anderen Klasse.",
    });
  }
}

const listOfPlaybooks = [
  new Playbook(
    "Barbar",
    "Stark, wild und tödlich. In dir schlummert ein ungezähmter Zorn, den du entfesseln kannst, um deine Gegner mit brutaler Gewalt zu vernichten.",
    [
      {
        title: "Eisern",
        level: [false, false],
        description: "Deine Gesundheit steigt um 1 Punkt.",
      },
      {
        title: "Jäger",
        level: [true],
        description: "Vorteil auf Proben mit Wildnisleben.",
      },
      {
        title: "Tyrann",
        level: [false],
        description: "Vorteil auf Proben mit Einschüchtern und Drohen.",
      },
    ]
  ),
  new Playbook(
    "Druide",
    "Weise, naturverbunden und wandelbar. Du trägst die uralte Macht der Natur in dir und kannst andere heilen, dich in wilde Tiere verwandeln und Pflanzen beherrschen.",
    [
      {
        title: "Eisern",
        level: [false],
        description: "Deine Gesundheit steigt um 1 Punkt.",
      },
    ]
  ),
];
export default listOfPlaybooks;
