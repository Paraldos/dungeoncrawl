import descriptions from "./Descriptions.js";
import Talent from "./Talent.js";
import Playbook from "./Playbook.js";

const Illusionist = new Playbook(
  "Illusionist",
  "Charismatisch, manipulativ und einfallsreich. Du bist ein Meister der Trugbilder und Täuschung und deine Magie erlaubt es dir andere in deinen Bann zu schlagen oder zu verwirren.",
  [
    new Talent("Charmeur", descriptions.skill(["Überreden", "Betören"])),
    new Talent("Dieb", descriptions.skill(["Diebstahl", "Falschspiel"])),
    new Talent("Focus", descriptions.extraMana, [false, false]),
    new Talent("Resonanz", descriptions.resonanz, [true]),
    new Talent("Schauspieler", descriptions.skill(["Auftreten", "Verkleiden"])),
  ],
  [
    new Talent("Botschaft", descriptions.message),
    new Talent("Hypnose", descriptions.hypnosis),
    new Talent("Illusion", descriptions.illusion),
    new Talent("Inspirieren", descriptions.blessing),
    new Talent("Telepathie", descriptions.telepathy),
    new Talent("Vergessen", descriptions.forget),
    new Talent("Verwirren", descriptions.tendrils),
  ]
);

export default Illusionist;
