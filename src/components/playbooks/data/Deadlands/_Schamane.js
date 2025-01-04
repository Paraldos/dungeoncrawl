import descriptions from "../Descriptions.js";
import Talent from "../Talent.js";
import Playbook from "../Playbook.js";

const Schamane = new Playbook(
  "Schamane",
  "Weise und naturverbunden. Als Schamane bist du ein Vermittler zwischen den Welten – der Natur und den Geistern, der Lebenden und den Toten.",
  [
    new Talent(
      "Athlet",
      descriptions.skill(["Athletik", "Ausdauer", "Reiten"])
    ),
    new Talent("Eisern", descriptions.extraHealth),
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

export default Schamane;
