import descriptions from "./Descriptions.js";
import Talent from "./Talent.js";
import Playbook from "./Playbook.js";

const Firemage = new Playbook(
  "Feuermagier",
  "Zerstörerisch und Wild. Du trägst die Macht des Feuers in dir. Sie ist tödlich und wenn du sie entfesselst, kannst du deine Feinde mit einem Sturm aus Feuer und Asche vernichten.",
  [
    new Talent("Ausdauernd", descriptions.mana),
    new Talent("Eisern", descriptions.health),
    new Talent("Feuerlanze", descriptions.magicMissile),
    new Talent(
      "Inneres Feuer",
      "Du bist immun gegen Hitze und Kälte und erhältst Vorteil, wen du dich gegen Feuerschaden verteidigst."
    ),
    new Talent(
      "Tricks",
      "Du kannst kleine Flammen und Hitze erzeugen und manipulieren (z.B. eine Pfeife anzünden)."
    ),
    new Talent("Tyrann", descriptions.skill(["Einschüchtern", "Drohen"])),
  ],
  [
    new Talent(
      "Brandstifter",
      "Ein Gegenstand, den du berührst, verbrennt oder schmilzt (z.B. eine Eisentür schmelzen dauert ca. 1 Minute)."
    ),
    new Talent("Feuersturm", descriptions.explosion),
    new Talent("Flammenschild", descriptions.counter),
    new Talent(
      "Kontrolle",
      "Du kannst ein Feuer (max. 3m³) stärke, schwäche, lösche oder beweg (max. 9m)."
    ),
  ]
);

export default Firemage;
