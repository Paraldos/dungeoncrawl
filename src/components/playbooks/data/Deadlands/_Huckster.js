import descriptions from "../Descriptions.js";
import Talent from "../Talent.js";
import Playbook from "../Playbook.js";

const Huckster = new Playbook(
  "Huckster",
  "Charmante, manipulativ und gerissen. Ein Huckster ist ein Glücksspieler, der dunkle Kräfte durch seine Karten kanalisiert. Doch jedes Spiel hat seinen Preis, und der Einsatz könnte am Ende deine eigene Seele sein.",
  [
    new Talent("Charmeur", descriptions.skill(["Überreden", "Betören"])),
    new Talent("Focus", descriptions.extraMana),
    new Talent("Hinterhalt", descriptions.sneakAttack),
    new Talent("Resonanz", descriptions.resonanz, [true]),
    new Talent(
      "Schatten",
      descriptions.skill(["Schleichen", "Verstecken", "Schmuggeln"])
    ),
    new Talent(
      "Trickser",
      descriptions.skill(["Diebstahl", "Falschspiel", "Glücksspiel"])
    ),
  ],
  [
    new Talent("All-In", descriptions.all_in),
    new Talent("Hypnose", descriptions.hypnosis),
    new Talent("Illusion", descriptions.illusion),
    new Talent("Kartenwurf", descriptions.magicMissilePlus),
    new Talent("Vergessen", descriptions.forget),
    new Talent("Verschwinden", descriptions.vanish),
    new Talent("Verwirren", descriptions.tendrils),
  ]
);

export default Huckster;
