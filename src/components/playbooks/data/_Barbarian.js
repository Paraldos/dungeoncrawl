import descriptions from "./Descriptions.js";
import Talent from "./Talent.js";
import Playbook from "./Playbook.js";

const Barbarian = new Playbook(
  "Barbar",
  "Stark, wild und tödlich. In dir schlummert ein ungezähmter Zorn, den du entfesseln kannst, um deine Gegner mit brutaler Gewalt zu vernichten.",
  [
    new Talent("Athlet", descriptions.skill(["Athletik", "Ausdauer"])),
    new Talent("Extra Gesundheit", descriptions.extraHealth, [false, false]),
    new Talent("Jäger", descriptions.skill(["Wildnisleben"])),
    new Talent("Tyrann", descriptions.skill(["Einschüchtern", "Drohen"])),
  ],
  [
    new Talent("Blutrausch", descriptions.multiattack),
    new Talent("Kriegsschrei", descriptions.inspiration(["Angriffe"])),
    new Talent("Wuchtschlag", descriptions.heavyAttack),
    new Talent("Wut", descriptions.anger),
    new Talent("Zorn", descriptions.rage),
  ]
);

export default Barbarian;
