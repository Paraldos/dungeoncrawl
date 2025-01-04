import descriptions from "../Descriptions.js";
import Talent from "../Talent.js";
import Playbook from "../Playbook.js";

const Prediger = new Playbook(
  "Prediger",
  "Charismatisch und erfüllt von göttlichem Feuer. Du bist ein Verkünder des Glaubens, ein Wächter der Moral und eine brennende Fackel in den dunklen Weiten des Westens.",
  [
    new Talent(
      "Courage",
      descriptions.skill(["Entschlossenheit", "Willenskraft"])
    ),
    new Talent("Eisern", descriptions.extraHealth),
    new Talent("Focus", descriptions.extraMana),
    new Talent("Intuition", descriptions.intuition),
    new Talent(
      "Prediger",
      descriptions.skill(["Überreden", "Überzeugen", "Religion"])
    ),
    new Talent("Tyrann", descriptions.skill(["Einschüchtern", "Drohen"])),
  ],
  [
    new Talent("Eifer", descriptions.maneuver),
    new Talent("Heiligtum", descriptions.sanctuary),
    new Talent("Reinigung", descriptions.cleansing),
    new Talent("Segen", descriptions.blessing),
    new Talent("Schwur", descriptions.oath),
    new Talent("Zorn Gottes", descriptions.heavyAttack),
  ]
);

export default Prediger;
