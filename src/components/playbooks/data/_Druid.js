import descriptions from "./Descriptions.js";
import Talent from "./Talent.js";
import Playbook from "./Playbook.js";

const Druid = new Playbook(
  "Druide",
  "Weise, naturverbunden und wandelbar. Du trägst die uralte Macht der Natur in dir und kannst andere heilen, dich in wilde Tiere verwandeln und Pflanzen beherrschen.",
  [
    new Talent("Dornen", descriptions.magicMissile),
    new Talent("Extra Mana", descriptions.extraMana),
    new Talent("Jäger", descriptions.skill(["Wildnisleben"])),
    new Talent("Pflanzenfreund", descriptions.plantFriend),
    new Talent("Tierfreund", descriptions.animalFriend),
  ],
  [
    new Talent("Tier Kontrolle", descriptions.animalControll),
    new Talent("Ranken", descriptions.tendrils),
    new Talent("Wachstum", descriptions.growth),
    new Talent("Wandel", descriptions.transformation),
    new Talent("Wettermacht", descriptions.weatherControll),
  ]
);

export default Druid;
