import descriptions from "./Descriptions.js";
import Talent from "./Talent.js";
import Playbook from "./Playbook.js";

const Cleric = new Playbook(
  "Kleriker",
  "Entschlossen und Weise. Du kannst die Macht des Glaubens als Magie kanalisiert, deine Verbündeten Stärken und böse Mächte in Schach halten.",
  [
    new Talent("Ausdauernd", descriptions.mana),
    new Talent(
      "Courage",
      descriptions.skill(["Entschlossenheit", "Willenskraft"])
    ),
    new Talent("Eisern", descriptions.health),
    new Talent("Intuition", descriptions.intuition),
    new Talent("Prediger", descriptions.skill(["überreden", "religion"])),
  ],
  [
    new Talent("Bannen", descriptions.banish),
    new Talent("Bannstrahl", descriptions.magicMissilePlus),
    new Talent("Heiligtum", descriptions.sanctuary),
    new Talent("Heilung", descriptions.healing),
    new Talent("Segen", descriptions.blessing),
    new Talent("Schwur", descriptions.oath),
  ]
);

export default Cleric;
