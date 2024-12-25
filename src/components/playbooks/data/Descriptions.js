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
  levitation:
    "Du kannst für den Rest der Runde in Schrittgeschwindigkeit durch die Luft schweben.",
  telekinesis:
    "Bewege einen Gegenstand mit mentaler Kraft (verwende INT als mentale STÄ und GES).",
  teleport:
    "Du teleportierst dich an einen Ort, den du in den letzten 24 Stunden gesehen hast.",
  health: "Deine Gesundheit steigt um 1 Punkt.",
  mana: "Deine Ausdauer steigt um 1 Punkt.",
  feat_of_strength:
    "Du vollbringst einen übernatürlichen Kraftakt, wie z. B. Metallgitter mit bloßen Händen verbiegen.",
  rage: "Vorteil auf STÄ-Proben (einschließlich Angriffe).",
  fury: "Vorteil auf ZÄH-Proben (einschließlich Paraden).",
  intuition: "Konzentriere dich, um Böses in der Nähe zu spüren.",
  sanctuary: "Solange du betest, können sich böse Kreaturen dir nicht nähern.",
  healing: "Eine Person, die du berührst, heilt eine Wunde.",
  blessing: "Deine Verbündeten erhalten einen Vorteil auf ihre nächste Probe.",
  bodyguard:
    "Nahe Verbündete erhalten für eine Runde Vorteil auf ihre Paraden.",
  counter:
    "Verteidige dich gegen einen Angriff. Gelingt deine Probe, erleidet der Angreifer einen Treffer (zählt wie eine erfolgreiche Attacke).",
  maneuver: "Du erhältst einen Vorteil auf eine Attacke oder Parade.",
  inner_fire:
    "Du bist immun gegen Hitze und Kälte und erhältst Vorteil wen du dich gegen Feuerschaden verteidigst.",
  sorcerer_tricks:
    "Du kannst kleine Flammen und Hitze erzeugen und manipulieren (z.B. eine Pfeife anzünden).",
  arsonist:
    "Ein Gegenstand, den du berührst, verbrennt oder schmilzt (z.B. eine Eisentür schmelzen dauert 1 Minute).",
  fire_control:
    "Du kannst ein Feuer (max. 3m³) stärke, schwäche, lösche oder beweg (max. 9m).",
  hypnosis: "Das Ziel gehorcht einem Befehl von dir (kein Selbstmord).",
  illusion:
    "Du erzeugst eine Illusion mit Bild (max. 3 m³), Geräusch und/oder Geruch.",
  forget: "Das Ziel vergisst ein Ereignis der letzten 7 Tage.",
  confuse: "Das Ziel muss für eine Runde aussetzen.",
  sneakAttack:
    "Dein Angriff trifft eine Schwachstelle des Gegners (gelunge Probe zählt als 2 Erfolge).",
  multitalent: "Du erhältst Vorteil auf eine beliebige Nicht-Kampf-Probe.",
  vanish: "Du wirst unsichtbar, bist du dich auffällig verhältst.",
  oath: "Du akzeptierst den Schwur einer anderen Person. Bei Bruch erleidest das Opfer eine Wunde und eine deutlich sichtbares Mal.",
  multiclass_feats: "Wähle einen Feat einer anderen Klasse.",
  multiclass_stunts: "Wähle einen Stunt einer anderen Klasse.",
  regeneration: "Du erholst dich von einer Wunde.",
  bloodsense: "Stell drei Ja/Nein Fragen zu Blut das du gerade kostest.",

  inspiration(skills = []) {
    const string_of_skills =
      skills.length > 1
        ? skills.slice(0, -1).join(", ") + " oder " + skills[skills.length - 1]
        : skills.join("");
    return `Verbündete erhalten eine Runde einen Vorteil auf ${string_of_skills}.`;
  },

  magic_missile(damagetype, advantage = false) {
    return `Du schleuderst ein magisches Geschoss aus ${damagetype}${
      advantage ? " und erhältst einen Vorteil auf die Probe" : ""
    }.`;
  },

  multiattack(type_of_attack = "im Nahkampf") {
    return `Du attackierst bis zu drei Gegner ${type_of_attack}.`;
  },

  skill(skills = []) {
    const string_of_skills =
      skills.length > 1
        ? skills.slice(0, -1).join(", ") + " oder " + skills[skills.length - 1]
        : skills.join("");
    return `Vorteil ${string_of_skills} Probe.`;
  },
};
export default descriptions;
