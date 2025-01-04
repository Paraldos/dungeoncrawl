import descriptions from "../Descriptions.js";
import Talent from "../Talent.js";
import Playbook from "../Playbook.js";

const doc = new Playbook(
  "Doc",
  "Klug, geschickt und pragmatisch. Du bist die Person, die andere aufsuchen, wenn Kugeln entfernt, Wunden genäht oder Probleme gelöst werden müssen.",
  [
    new Talent("Adlerauge", descriptions.skill(["Wahrnehmung"])),
    new Talent(
      "Arzt",
      descriptions.skill(["Heilen", "Heilpflanzen", "Medizin"])
    ),
    new Talent("Baumeistern", descriptions.skill(["Handwerk"])),
    new Talent("Diplom", descriptions.skill(["Bildung", "Wissen"])),
    new Talent("Focus", descriptions.extraMana),
  ],
  [
    new Talent("Ablenkung", descriptions.tendrils),
    new Talent("Analyse", descriptions.clairvoyance),
    new Talent("Knochensäge", descriptions.healing),
    new Talent("Tipps", descriptions.blessing),
    new Talent("Multitalent", descriptions.multitalent),
  ]
);

export default doc;
