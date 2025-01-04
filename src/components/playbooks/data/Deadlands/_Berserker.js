import descriptions from "../Descriptions.js";
import Talent from "../Talent.js";
import Playbook from "../Playbook.js";

const Berserker = new Playbook(
  "Berserker",
  "Stark, wild und tödlich. In dir schlummert ein ungezähmter Zorn, den du entfesseln kannst, um deine Gegner mit brutaler Gewalt zu überwältigen.",
  [
    new Talent("Adlerauge", descriptions.skill(["Wahrnehmung"])),
    new Talent(
      "Athlet",
      descriptions.skill(["Athletik", "Ausdauer", "Reiten"])
    ),
    new Talent("Eisern", descriptions.extraHealth),
    new Talent("Jäger", descriptions.skill(["Wildnisleben", "Tieren"])),
    new Talent("Knurren", descriptions.skill(["Einschüchtern", "Drohen"])),
  ],
  [
    new Talent("Blutrausch", descriptions.multiattack),
    new Talent("Kriegsschrei", descriptions.inspiration(["Angriffe"])),
    new Talent("Wuchtschlag", descriptions.heavyAttack),
    new Talent("Wut", descriptions.anger),
    new Talent("Zorn", descriptions.rage),
  ]
);

export default Berserker;
