import Talent from "./Talent.js";
import Playbook from "./Playbook.js";
import descriptions from "./Descriptions.js";

const listOfPlaybooks = [
  new Playbook(
    "Barbar",
    "Stark, wild und tödlich. In dir schlummert ein ungezähmter Zorn, den du entfesseln kannst, um deine Gegner mit brutaler Gewalt zu vernichten.",
    [
      new Talent("Eisern", descriptions.iron_skin, [false, false]),
      new Talent("Jäger", descriptions.skill(["Wildnisleben"])),
      new Talent("Tyrann", descriptions.skill(["Einschüchtern", "Drohen"])),
    ],
    [
      new Talent("Blutrausch", descriptions.multiattack()),
      new Talent("Kraftakt", descriptions.feat_of_strength),
      new Talent("Rage", descriptions.rage),
      new Talent("Wut", descriptions.fury),
    ]
  ),
  new Playbook(
    "Druide",
    "Weise, naturverbunden und wandelbar. Du trägst die uralte Macht der Natur in dir und kannst andere heilen, dich in wilde Tiere verwandeln und Pflanzen beherrschen.",
    [
      new Talent("Dornen", descriptions.magic_missile("Dornen")),
      new Talent("Eiserner Wille", descriptions.iron_will, [false, false]),
      new Talent("Jäger", descriptions.skill(["Wildnisleben"])),
      new Talent("Pflanzenfreund", descriptions.plant_friend),
      new Talent("Tierfreund", descriptions.animal_friend),
    ],
    [
      new Talent("Kontrolle", descriptions.animal_control),
      new Talent("Ranken", descriptions.entangle),
      new Talent("Wachstum", descriptions.growth),
      new Talent("Wandel", descriptions.transformation),
      new Talent("Wettermacht", descriptions.weather_control),
    ]
  ),

  new Playbook(
    "Feuermagier",
    "Zerstörerisch und Wild. Du trägst die Macht des Feuers in dir. Sie ist tödlich und wen du sie entfesselst, kannst du deine Feinde mit einem Sturm aus Feuer und Asche vernichten.",
    [
      new Talent("Feuerlanze", descriptions.magic_missile("Feuer")),
      new Talent("Eiserner Wille", descriptions.iron_will, [false, false]),
      new Talent("Inneres Feuer", descriptions.inner_fire),
      new Talent("Tricks", descriptions.sorcerer_tricks),
      new Talent("Tyrann", descriptions.skill(["Einschüchtern", "Drohen"])),
    ],
    [
      new Talent("Brandstifter", descriptions.arsonist),
      new Talent(
        "Explosion",
        descriptions.multiattack("mit einer explosion aus Feuer")
      ),
      new Talent("Flammenschild", descriptions.counter),
      new Talent("Kontrolle", descriptions.fire_control),
    ]
  ),
  new Playbook(
    "Illusionist",
    "Charismatisch, manipulativ und einfallsreich. Du bist ein Meister der Trugbilder und Täuschung und deine Magie erlaubt es dir andere in deinen Bann zu schlagen oder zu verwirren.",
    [
      new Talent("Charmeur", descriptions.skill(["Überreden", "Betören"])),
      new Talent(
        "Dieb",
        descriptions.skill(["Diebstahl", "Falschspiel", "ähnlichen Tricks"])
      ),
      new Talent("Eiserner Wille", descriptions.iron_will, [false, false]),
      new Talent(
        "Schauspieler",
        descriptions.skill(["Verkleiden", "Fälschen", "Auftreten"])
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
    "Standhaft, diszipliniert und gefährlich. Als Kämpfer liegen dir Gewalt im Blut. Wird es brenzlig, zückst du deine Waffe und machst dich berreit für den Kampf.",
    [
      new Talent("Athlet", descriptions.skill(["Athletik", "Ausdauer"])),
      new Talent("Eisern", descriptions.iron_skin, [false]),
      new Talent("Jäger", descriptions.skill(["Wildnisleben"])),
      new Talent("Taktiker", descriptions.skill(["Taktik", "Strategie"])),
    ],
    [
      new Talent("Bodyguard", descriptions.bodyguard),
      new Talent("Konter", descriptions.counter),
      new Talent("Manöver", descriptions.maneuver),
      new Talent("Rundumschlag", descriptions.multiattack()),
    ]
  ),

  new Playbook(
    "Kleriker",
    "Entschlossen und Weise. Du kannst die Macht des Glaubens als Magie kanalisiert, deine Verbündeten Stärken und böse Mächte in Schach halten.",
    [
      new Talent(
        "Courage",
        descriptions.skill(["Entschlossenheit", "Willenskraft"])
      ),
      new Talent("Eisern", descriptions.iron_skin, [false]),
      new Talent("Intuition", descriptions.intuition),
      new Talent("Prediger", descriptions.skill(["überreden", "betören"])),
    ],
    [
      new Talent("Bannen", descriptions.banish),
      new Talent(
        "Bannstrahl",
        descriptions.magic_missile("heiliges Licht", true)
      ),
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
      new Talent(
        "Dieb",
        descriptions.skill(["Diebstahl", "Falschspiel", "ähnlichen Tricks"])
      ),
      new Talent(
        "Einbrecher",
        descriptions.skill(["Fallen entschärfen", "Schlösser knacken"])
      ),
      new Talent(
        "Schatten",
        descriptions.skill(["Schleichen", "Verstecken", "Schmuggeln"])
      ),
      new Talent("Spion", descriptions.skill(["Täuschen", "Verkleiden"])),
    ],
    [
      new Talent("Finess", descriptions.maneuver),
      new Talent("Todesstoß", descriptions.sneakAttack),
      new Talent("Verschwinden", descriptions.vanish),
      new Talent("Multitalent", descriptions.multitalent),
    ]
  ),
  new Playbook(
    "Zauberer",
    "Geheimnisvoll, intelligent und willensstark. Zauberer meistern arkane Magie, mit der sie die Grundfesten der Realität formen und ihrem Willen unterwerfen können.",
    [
      new Talent(
        "Arkanes Geschoss",
        descriptions.magic_missile("arkaner Energie")
      ),
      new Talent("Eiserner Wille", descriptions.iron_will, [false, false]),
      new Talent("Genie", descriptions.genius, [true]),
      new Talent("Gelehrter", descriptions.skill(["Bildung", "Wissen"])),
      new Talent("Zaubertricks", descriptions.wizzard_tricks),
    ],
    [
      new Talent("Bannen", descriptions.banish),
      new Talent("Barriere", descriptions.barrier),
      new Talent("Botschaft", descriptions.message),
      new Talent(
        "Explosion",
        descriptions.multiattack("mit einer explosion arkaner Energien")
      ),
      new Talent("Hellsehen", descriptions.clairvoyance),
      new Talent("Levitation", descriptions.levitation),
      new Talent("Telekinese", descriptions.telekinesis),
      new Talent("Teleport", descriptions.teleport),
    ]
  ),
];
export default listOfPlaybooks;
