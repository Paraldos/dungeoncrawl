import descriptions from "./Descriptions.js";
import Talent from "./Talent.js";
import Playbook from "./Playbook.js";

const Illusionist = new Playbook(
  "Illusionist",
  "Charismatisch, manipulativ und einfallsreich. Du bist ein Meister der Trugbilder und Täuschung und deine Magie erlaubt es dir andere in deinen Bann zu schlagen oder zu verwirren.",
  [
    new Talent("Charmeur", descriptions.skill(["Überreden", "Betören"])),
    new Talent("Dieb", descriptions.skill(["Diebstahl", "Falschspiel"])),
    new Talent("Extra Mana", descriptions.extraMana, [false, false]),
    new Talent("Schauspieler", descriptions.skill(["Verkleiden", "Auftreten"])),
  ],
  [
    new Talent("Botschaft", descriptions.message),
    new Talent("Hypnose", descriptions.hypnosis),
    new Talent("Illusion", descriptions.illusion),
    new Talent("Inspirieren", descriptions.blessing),
    new Talent("Vergessen", descriptions.forget),
    new Talent("Verwirren", descriptions.confuse),
  ]
);

export default Illusionist;
