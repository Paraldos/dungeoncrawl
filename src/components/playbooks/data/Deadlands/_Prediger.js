import descriptions from "../Descriptions.js";
import Talent from "../Talent.js";
import Playbook from "../Playbook.js";

const Prediger = new Playbook(
  "Prediger",
  "Charismatisch und erfüllt von göttlichem Feuer. Du bist ein Verkünder des Glaubens, ein Wächter der Moral und eine brennende Fackel in den dunk-len Weiten des Westens.",
  [
    new Talent(
      "Courage",
      descriptions.skill(["Entschlossenheit", "Willenskraft"])
    ),
    new Talent("Eisern", descriptions.extraHealth),
    new Talent("Focus", descriptions.extraMana),
    new Talent("Intuition", descriptions.intuition),

    new Talent("Taktiker", descriptions.skill(["Taktik", "Strategie"])),
    new Talent("Trapper", descriptions.skill(["Wildnisleben", "Tieren"])),
    new Talent("Tyrann", descriptions.skill(["Einschüchtern", "Drohen"])),
    new Talent("Wachsam", descriptions.skill(["Wahrnehmung"])),
  ],
  [
    new Talent("Blattschuss", descriptions.heavyAttack),
    new Talent("Fächern", descriptions.multiattack),
    new Talent("Präzision", descriptions.maneuver),
    new Talent("Schnellziehen", descriptions.quickdraw),
  ]
);

export default Prediger;
