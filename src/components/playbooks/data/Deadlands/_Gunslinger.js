import descriptions from "../Descriptions.js";
import Talent from "../Talent.js";
import Playbook from "../Playbook.js";

const Gunslinger = new Playbook(
  "Gunslinger",
  "Präzise, kühl und tödlich. Du hast Nerven aus Stahl und lässt deinen Gegner kaum Zeit, deinen Namen zu flüstern, bevor dein Abzug die Entscheidung trifft.",
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

export default Gunslinger;
