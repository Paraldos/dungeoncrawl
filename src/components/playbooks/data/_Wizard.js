import descriptions from "./Descriptions.js";
import Talent from "./Talent.js";
import Playbook from "./Playbook.js";

const Wizard = new Playbook(
  "Zauberer",
  "Geheimnisvoll, intelligent und willensstark. Zauberer meistern arkane Magie, mit der sie die Grundfesten der Realität formen und ihrem Willen unterwerfen können.",
  [
    new Talent("Ausdauernd", descriptions.mana, [false, false]),
    new Talent("Arkanes Geschoss", descriptions.magicMissile),
    new Talent("Gelehrter", descriptions.skill(["Bildung", "Wissen"])),
    new Talent("Genie", descriptions.genius),
    new Talent("Zaubertricks", descriptions.wizzard_tricks),
  ],
  [
    new Talent("Explosion", descriptions.explosion),
    new Talent("Bannen", descriptions.banish),
    new Talent("Barriere", descriptions.barrier),
    new Talent("Botschaft", descriptions.message),
    new Talent("Hellsehen", descriptions.clairvoyance),
    new Talent("Levitation", descriptions.levitation),
    new Talent("Telekinese", descriptions.telekinesis),
    new Talent("Teleport", descriptions.teleport),
  ]
);

export default Wizard;
