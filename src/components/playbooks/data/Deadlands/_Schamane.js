import descriptions from "../Descriptions.js";
import Talent from "../Talent.js";
import Playbook from "../Playbook.js";

const Schamane = new Playbook(
  "Schamane",
  "Weise und naturverbunden. Als Schamane bist du ein Vermittler zwischen den Welten – der Natur und den Geistern, der Lebenden und den Toten.",
  [
    new Talent("Focus", descriptions.extraMana),
    new Talent("Jäger", descriptions.skill(["Wildnisleben", "Tieren"])),
    new Talent(
      "Medizinmann",
      descriptions.skill(["Heilen", "Heilpflanzen", "Medizin"])
    ),
    new Talent("Tyrann", descriptions.skill(["Einschüchtern", "Drohen"])),
  ],
  [
    new Talent("Heilung", descriptions.healing),
    new Talent("Himmelsgeister", descriptions.weatherControll),
    new Talent("Kontrolle", descriptions.animalControll),
    new Talent("Reinigung", descriptions.cleansing),
    new Talent("Schrecken", descriptions.tendrils),
    new Talent("Totemtier", descriptions.transformation),
    new Talent("Weisheit der Ahnen", descriptions.telepathy),
  ]
);

export default Schamane;
