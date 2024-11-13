const descriptions = {
  genius: "Du zauberst mit INT.",
  wizzard_tricks:
    "Du beherrschst Zaubertricks (z.B. eine Tür mit Telekinese öffnen oder eine Pfeife mit einem Fingerschnippen entzünden).",
  banish: "Du beendest einen Zauber, den du sehen kannst.",
  barrier: "Du erschaffst eine undurchdringliche magische Wand (max. 3 m²).",
  message:
    "Du schicks eine kurze mentale Nachricht an jemanden, den du kennst.",
  clairvoyance:
    "Der Erzähler beantwortet 3 Ja/Nein-Fragen zu einem Objekt, das du berührst.",
  levitation: "Du schwebst in Schrittgeschwindigkeit.",
  telekinesis:
    "Bewege einen Gegenstand mit mentaler Kraft (verwende INT als mentale KRA und GES).",
  teleport:
    "Du teleportierst dich an einen Ort, den du in den letzten 24 Stunden gesehen hast.",
  iron_skin: "Deine Gesundheit steigt um 1 Punkt.",
  iron_will: "Deine Ausdauer steigt um 1 Punkt.",
  feat_of_strength:
    "Du vollbringst eine übernatürliche Krafttat, wie z. B. Metallgitter mit bloßen Händen verbiegen.",
  rage: "Vorteil auf STÄ-Proben (einschließlich Angriffe).",
  fury: "Vorteil auf ZÄH-Proben (einschließlich Paraden).",
  intuition: "Konzentriere dich, um Böses in der Nähe zu spüren.",
  sanctuary: "Solange du betest, können sich böse Kreaturen dir nicht nähern.",
  healing: "Eine Person, die du berührst, heilt eine Wunde.",
  blessing: "Deine Verbündeten erhalten einen Vorteil auf ihre nächste Probe.",
  plant_friend:
    "Du kannst kleine Pflanzen nach belieben wachsen lassen und erhältst Vorteil beim Umgang mit Pflanzen.",
  animal_friend:
    "Du kannst mit Tieren sprechen und erhältst Vorteil beim Umgang mit Tieren.",
  animal_control:
    "Du gibst einem Tier oder einem Schwarm Kleintiere einen magischen Befehl.",
  entangle: "Eine Gruppe Gegner kann sich eine Runde lang nicht bewegen.",
  growth:
    "Du lässt Pflanzen in eine von dir gewünschte Form wachsen (Baumbrücke dauert ca. 1 Minute).",
  transformation:
    "Du verwandelst dich in ein kleines Tier (z. B. Katze oder Maus) oder eine Pflanze (z. B. Baum).",
  weather_control: "Du veränderst das Wetter (muss zur Umgebung passen).",
  bodyguard:
    "Nahe Verbündete erhalten für eine Runde Vorteil auf ihre Paraden.",
  counter: "Gelingt deine Parade, erleidet dein Gegner einen Treffer.",
  maneuver: "Du erhältst einen Vorteil auf eine Attacke oder Parade.",
  inner_fire:
    "Du bist immun gegen Hitze und Kälte und erhältst Vorteil wen du dich gegen Feuerschaden verteidigst.",
  sorcerer_tricks:
    "Du kannst kleine Flammen und Hitze erzeugen und manipulieren (z.B. eine Pfeife anzünden).",
  arsonist:
    "Ein Gegenstand, den du berührst, verbrennt oder schmilzt (z.B. eine Eisentür schmelzen dauert 1 Minute).",
  shield_of_flames:
    "Gelingt deine Parade, erleidet dein Gegner einen Treffer (zählt wie eine erfolgreiche Attacke).",
  fire_control:
    "Kontrolliere, stärke, schwäche oder lösche ein Feuer (max. 3 m³ Volumen) oder bewege es (max. 9 m).",
  hypnosis: "Das Ziel gehorcht einem Befehl von dir (kein Selbstmord).",
  illusion:
    "Du erzeugst ein Trugbild (max. 3 m³), ein Geräusch und/oder einen Geruch.",
  forget: "Das Ziel vergisst ein Ereignis der letzten 7 Tage.",
  confuse: "Das Ziel muss für eine Runde aussetzen.",
  sneakAttack:
    "Dein Angriff trifft eine Schwachstelle des Gegners (gelunge Probe zählt als 2 Erfolge).",
  multitalent: "Du erhältst Vorteil auf eine beliebige Nicht-Kampf-Probe.",
  vanish: "Andere ignorieren dich, als wärst du unsichtbar.",
  oath: "Du akzeptierst den Schwur einer anderen Person. Bei Bruch erleidest das Opfer eine Wunde und eine deutlich sichtbares Mal.",
  multiclass_feats: "Wähle einen Feat einer anderen Klasse.",
  multiclass_stunts: "Wähle einen Stunt einer anderen Klasse.",
  regeneration: "Du erholst dich von einer Wunde.",
  bloodsense: "Stell drei Ja/Nein Fragen zu Blut das du gerade kostest.",

  magic_missile(damagetype, advantage = false) {
    return `Du schleuderst ein magisches Geschoss aus ${damagetype}${
      advantage ? " mit Vorteil" : ""
    }.`;
  },

  multiattack(type_of_attack = "im Nahkampf") {
    return `Du attackierst mehrere Gegner ${type_of_attack} (Gelunge Probe zählt als 2 Erfolge).`;
  },

  skill(skills = []) {
    const string_of_skills =
      skills.length > 1
        ? skills.slice(0, -1).join(", ") + " und " + skills[skills.length - 1]
        : skills.join("");
    return `Vorteil auf Proben mit ${string_of_skills}.`;
  },
};
export default descriptions;
