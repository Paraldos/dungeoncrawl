import descriptions from "./Descriptions.js";
import Talent from "./Talent.js";
import Playbook from "./Playbook.js";

const Firemage = new Playbook(
  "Feuermagier",
  "Zerstörerisch und Wild. Du trägst die Macht des Feuers in dir. Sie ist tödlich und wenn du sie entfesselst, kannst du deine Feinde mit einem Sturm aus Feuer und Asche vernichten.",
  [
    new Talent("Extra Gesundheit", descriptions.extraHealth),
    new Talent("Extra Mana", descriptions.extraMana),
    new Talent("Feuerlanze", descriptions.magicMissile),
    new Talent("Inneres Feuer", descriptions.inner_fire),
    new Talent("Tricks", descriptions.sorcerer_tricks),
    new Talent("Tyrann", descriptions.skill(["Einschüchtern", "Drohen"])),
  ],
  [
    new Talent("Asche", descriptions.asch),
    new Talent("Feuersturm", descriptions.explosion),
    new Talent("Flammenschild", descriptions.counter),
    new Talent("Kontrolle", descriptions.fire_controll),
  ]
);

export default Firemage;
