import descriptions from "./Descriptions.js";
import Talent from "./Talent.js";
import Playbook from "./Playbook.js";

const listOfPlaybooks = [
  new Playbook(
    "Barbar",
    "Stark, wild und tödlich. In dir schlummert ein ungezähmter Zorn, den du entfesseln kannst, um deine Gegner mit brutaler Gewalt zu vernichten.",
    [
      new Talent("Eisern", descriptions.health, [false, false]),
      new Talent("Jäger", descriptions.skill(["Wildnisleben"])),
      new Talent("Tyrann", descriptions.skill(["Einschüchtern", "Drohen"])),
    ],
    [
      new Talent("Blutrausch", descriptions.multiattack),
      new Talent("Kriegsschrei", descriptions.inspiration(["Angriffe"])),
      new Talent("Wuchtschlag", descriptions.heavyAttack),
      new Talent("Wut", "Vorteil auf Zähigkeit Probe (kann auch Parade sein)."),
      new Talent("Zorn", "Vorteil auf Stärke Probe (kann auch Angriff sein)."),
    ]
  ),

  new Playbook(
    "Druide",
    "Weise, naturverbunden und wandelbar. Du trägst die uralte Macht der Natur in dir und kannst andere heilen, dich in wilde Tiere verwandeln und Pflanzen beherrschen.",
    [
      new Talent("Dornen", descriptions.magicMissile),
      new Talent("Ausdauernd", descriptions.mana),
      new Talent(
        "Pflanzenfreund",
        "Du kannst kleine Pflanzen nach Belieben wachsen lassen und erhältst Vorteil beim Umgang mit Pflanzen."
      ),
      new Talent("Jäger", descriptions.skill(["Wildnisleben"])),
      new Talent(
        "Tierfreund",
        "Du kannst mit Tieren sprechen und erhältst Vorteil beim Umgang mit Tieren."
      ),
    ],
    [
      new Talent(
        "Kontrolle",
        "Du gibst einem Tier oder einem Schwarm Kleintiere einen magischen Befehl."
      ),
      new Talent(
        "Ranken",
        "Du verklemmst oder hältst einen Mechanismus oder Tür oder bis zu drei Personen. Ranken entfernen dauert eine ganze Runde."
      ),
      new Talent(
        "Wachstum",
        "Du lässt Pflanzen in eine von dir gewünschte Form wachsen (Baumbrücke dauert ca. 1 Minute)."
      ),
      new Talent(
        "Wandel",
        "Du verwandelst dich in ein kleines Tier (z. B. Katze oder Maus) oder eine Pflanze (z. B. Baum)."
      ),
      new Talent(
        "Wettermacht",
        "Du veränderst das Wetter (muss zur Umgebung passen)."
      ),
    ]
  ),

  new Playbook(
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
  ),

  new Playbook(
    "Illusionist",
    "Charismatisch, manipulativ und einfallsreich. Du bist ein Meister der Trugbilder und Täuschung und deine Magie erlaubt es dir andere in deinen Bann zu schlagen oder zu verwirren.",
    [
      new Talent("Ausdauernd", descriptions.mana, [false, false]),
      new Talent("Charmeur", descriptions.skill(["Überreden", "Betören"])),
      new Talent("Dieb", descriptions.skill(["Diebstahl", "Falschspiel"])),
      new Talent(
        "Schauspieler",
        descriptions.skill(["Verkleiden", "Auftreten"])
      ),
    ],
    [
      new Talent("Botschaft", descriptions.message),
      new Talent("Hypnose", descriptions.hypnosis),
      new Talent("Illusion", descriptions.illusion),
      new Talent("Inspirieren", descriptions.blessing),
      new Talent("Vergessen", descriptions.forget),
      new Talent("Verwirren", descriptions.confuse),
    ]
  ),

  new Playbook(
    "Kämpfer",
    "Standhaft, diszipliniert und gefährlich. Als Kämpfer liegen dir Gewalt im Blut. Wird es brenzlig, zückst du deine Waffe und machst dich bereit für den Kampf.",
    [
      new Talent("Athlet", descriptions.skill(["Athletik", "Ausdauer"])),
      new Talent("Ausdauernd", descriptions.mana),
      new Talent("Eisern", descriptions.health),
      new Talent("Jäger", descriptions.skill(["Wildnisleben"])),
      new Talent("Taktiker", descriptions.skill(["Taktik", "Strategie"])),
    ],
    [
      new Talent(
        "Befehle",
        "Verbündete erhalten eine Runde einen Vorteil auf Paraden."
      ),
      new Talent("Bodyguard", descriptions.bodyguard),
      new Talent("Konter", descriptions.counter),
      new Talent("Manöver", descriptions.maneuver),
      new Talent("Rundumschlag", descriptions.multiattack),
      new Talent("Todesstoß", descriptions.heavyAttack),
    ]
  ),

  new Playbook(
    "Kleriker",
    "Entschlossen und Weise. Du kannst die Macht des Glaubens als Magie kanalisiert, deine Verbündeten Stärken und böse Mächte in Schach halten.",
    [
      new Talent("Ausdauernd", descriptions.mana),
      new Talent(
        "Courage",
        descriptions.skill(["Entschlossenheit", "Willenskraft"])
      ),
      new Talent("Eisern", descriptions.health),
      new Talent("Intuition", descriptions.intuition),
      new Talent("Prediger", descriptions.skill(["überreden", "religion"])),
    ],
    [
      new Talent("Bannen", descriptions.banish),
      new Talent("Bannstrahl", descriptions.magicMissilePlus),
      new Talent("Heiligtum", descriptions.sanctuary),
      new Talent("Heilung", descriptions.healing),
      new Talent("Segen", descriptions.blessing),
      new Talent("Schwur", descriptions.oath),
    ]
  ),

  new Playbook(
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
      new Talent("Hinterhalt", descriptions.sneakAttack),
      new Talent("Eisern", descriptions.health),
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
    ]
  ),

  new Playbook(
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
  ),
];
export default listOfPlaybooks;
