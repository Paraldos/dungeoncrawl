import descriptions from "./Descriptions.js";
import Talent from "./Talent.js";
import Playbook from "./Playbook.js";

const Rogue = new Playbook(
  "Schurke",
  "Heimlichkeit, List und Tücke. Als Schurke verlässt du dich auf nicht auf rohe Gewalt, sondern suchst nach cleveren alternativen, um deine Ziele zu erreichen.",
  [
    new Talent(
      "Akrobat",
      descriptions.skill(["Akrobatik", "Klettern", "Turnen"])
    ),
    new Talent("Dieb", descriptions.skill(["Diebstahl", "Falschspiel"])),
    new Talent(
      "Einbrecher",
      descriptions.skill(["Fallen entschärfen", "Schlösser knacken"])
    ),
    new Talent("Extra Mana", descriptions.extraMana),
    new Talent("Hinterhalt", descriptions.sneakAttack),
    new Talent(
      "Schatten",
      descriptions.skill(["Schleichen", "Verstecken", "Schmuggeln"])
    ),
    new Talent("Spion", descriptions.skill(["Täuschen", "Verkleiden"])),
  ],
  [
    new Talent("Finesse", descriptions.maneuver),
    new Talent("Verschwinden", descriptions.vanish),
    new Talent("Multitalent", descriptions.multitalent),
    new Talent("Stille", descriptions.silence),
  ]
);

export default Rogue;
