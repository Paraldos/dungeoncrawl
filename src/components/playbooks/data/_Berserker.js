import descriptions from "./Descriptions.js";
import Talent from "./Talent.js";
import Playbook from "./Playbook.js";

const Berserker = new Playbook(
  "Berserker",
  "Stark, wild und tödlich. In dir schlummert ein ungezähmter Zorn, den du entfesseln kannst, um deine Gegner mit brutaler Gewalt zu überwältigen.",
  [
    new Talent(
      "Athlet",
      descriptions.skill(["Athletik", "Ausdauer", "Reiten"])
    ),
    new Talent("Eisern", descriptions.extraHealth),
    new Talent("Trapper", descriptions.skill(["Wildnisleben", "Tieren"])),
    new Talent("Tyrann", descriptions.skill(["Einschüchtern", "Drohen"])),
    new Talent("Tyrann", descriptions.skill(["Wahrnehmung"])),
  ],
  [
    new Talent("Blutrausch", descriptions.multiattack),
    new Talent("Kriegsschrei", descriptions.inspiration(["Angriffe"])),
    new Talent("Wuchtschlag", descriptions.heavyAttack),
    new Talent("Zorn", descriptions.rage),
  ]
);

export default Berserker;
