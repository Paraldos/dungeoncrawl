import descriptions from "./Descriptions.js";
import Talent from "./Talent.js";
import Playbook from "./Playbook.js";

const Druid = new Playbook(
  "Druide",
  "Weise, naturverbunden und wandelbar. Du trägst die uralte Macht der Natur in dir und kannst andere heilen, dich in wilde Tiere verwandeln und Pflanzen beherrschen.",
  [
    new Talent("Dornen", descriptions.magicMissile),
    new Talent("Extra Mana", descriptions.extraMana),
    new Talent(
      "Pflanzenfreund",
      "Du kannst kleine Pflanzen nach Belieben wachsen lassen und erhältst Vorteil beim Umgang mit Pflanzen."
    ),
    new Talent("Jäger", descriptions.skill(["Wildnisleben"])),
    new Talent(
      "Tierfreund",
      "Du kannst mit Tieren sprechen und erhältst Vorteil beim Umgang mit Tieren."
    ),
  ]
);

export default Druid;
