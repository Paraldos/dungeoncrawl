import descriptions from "../Descriptions.js";
import Talent from "../Talent.js";
import Playbook from "../Playbook.js";

const doc = new Playbook(
  "Doc",
  "Klug, geschickt und pragmatisch. Du bist die Person, die andere aufsuchen, wenn Kugeln entfernt, Wunden genäht oder Probleme gelöst werden müs-sen.",
  [
    new Talent(
      "Arzt",
      descriptions.skill(["Heilen", "Heilpflanzen", "Medizin"])
    ),
    new Talent("Baumeistern", descriptions.skill(["Handwerk"])),
    new Talent("Gelehrter", descriptions.skill(["Bildung", "Wissen"])),
    new Talent("Focus", descriptions.extraMana),
    new Talent("Wachsam", descriptions.skill(["Wahrnehmung"])),
  ],
  [new Talent("Blutrausch", descriptions.multiattack)]
);

export default doc;
