import descriptions from "./Descriptions.js";
import Talent from "./Talent.js";
import Playbook from "./Playbook.js";

const Fighter = new Playbook(
  "Kämpfer",
  "Standhaft, diszipliniert und gefährlich. Als Kämpfer liegen dir Gewalt im Blut. Wird es brenzlig, zückst du deine Waffe und machst dich bereit für den Kampf.",
  [
    new Talent("Athlet", descriptions.skill(["Athletik", "Ausdauer"])),
    new Talent("Eisern", descriptions.extraHealth),
    new Talent("Focus", descriptions.extraMana),
    new Talent("Jäger", descriptions.skill(["Wildnisleben"])),
    new Talent("Taktiker", descriptions.skill(["Taktik", "Strategie"])),
  ],
  [
    new Talent("Befehle", descriptions.inspiration(["Paraden"])),
    new Talent("Konter", descriptions.counter),
    new Talent("Manöver", descriptions.maneuver),
    new Talent("Rundumschlag", descriptions.multiattack),
    new Talent("Todesstoß", descriptions.heavyAttack),
  ]
);

export default Fighter;
