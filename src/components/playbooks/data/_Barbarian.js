import descriptions from "./Descriptions.js";
import Talent from "./Talent.js";
import Playbook from "./Playbook.js";

const Barbarian = new Playbook(
  "Barbar",
  "Stark, wild und tödlich. In dir schlummert ein ungezähmter Zorn, den du entfesseln kannst, um deine Gegner mit brutaler Gewalt zu vernichten.",
  [
    new Talent("Eisern", descriptions.health, [false, false]),
    new Talent("Jäger", descriptions.skill(["Wildnisleben"])),
    new Talent("Tyrann", descriptions.skill(["Einschüchtern", "Drohen"])),
  ],
  [
    new Talent("Blutrausch", descriptions.multiattack),
    new Talent("Kriegsschrei", descriptions.inspiration(["Angriffe"])),
    new Talent("Wuchtschlag", descriptions.heavyAttack),
    new Talent("Wut", "Vorteil auf Zähigkeit Probe (kann auch Parade sein)."),
    new Talent("Zorn", "Vorteil auf Stärke Probe (kann auch Angriff sein)."),
  ]
);

export default Barbarian;
