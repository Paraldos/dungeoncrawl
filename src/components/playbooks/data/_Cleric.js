import descriptions from "./Descriptions.js";
import Talent from "./Talent.js";
import Playbook from "./Playbook.js";

const Cleric = new Playbook(
  "Kleriker",
  "Entschlossen und Weise. Du kannst die Macht des Glaubens als Magie kanalisiert, deine Verbündeten Stärken und böse Mächte in Schach halten.",
  [
    new Talent(
      "Courage",
      descriptions.skill(["Entschlossenheit", "Willenskraft"])
    ),
    new Talent("Extra Gesundheit", descriptions.extraHealth),
    new Talent("Extra Mana", descriptions.extraMana),
    new Talent("Intuition", descriptions.intuition),
    new Talent("Prediger", descriptions.skill(["überreden", "Religion"])),
  ],
  [
    new Talent("Bannen", descriptions.banish),
    new Talent("Bannstrahl", descriptions.magicMissilePlus),
    new Talent("Heiligtum", descriptions.sanctuary),
    new Talent("Heilung", descriptions.healing),
    new Talent("Seelenschau", descriptions.telepathy),
    new Talent("Segen", descriptions.blessing),
    new Talent("Schwur", descriptions.oath),
  ]
);

export default Cleric;
