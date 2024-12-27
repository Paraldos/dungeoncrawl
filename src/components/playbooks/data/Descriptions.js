const descriptions = {
  extraHealth: "Deine Gesundheit steigt permanent um 1 Punkt.",
  extraMana: "Dein Mana steigt permanent um 1 Punkt.",

  genius: "Du zauberst mit KLU.",
  wizzard_tricks:
    "Vollführ einen kleinen Zaubertrick (z.B. eine Tür mit Telekinese öffnen oder eine Pfeife mit einem Fingerschnippen entzünden).",
  banish: "Du beendest einen Zauber, den du sehen kannst.",
  barrier: "Du erschaffst eine undurchdringliche magische Wand (max. 3m²).",
  message:
    "Du schickst eine kurze mentale Nachricht an jemanden, den du kennst.",
  clairvoyance:
    "Der Erzähler muss dir 3 Ja/Nein Fragen zu einem Objekt beantworten.",
  levitation:
    "Du kannst für den Rest der Runde in Schrittgeschwindigkeit durch die Luft schweben.",
  telekinesis:
    "Beweg einen Gegenstand mit mentaler Kraft (verwende KLU als mentale STÄ und GES).",
  teleport:
    "Du teleportierst dich an einen Ort, den du sehen kannst oder in den letzten 24 Stunden besucht hast.",
  feat_of_strength:
    "Du vollbringst einen übernatürlichen Kraftakt, wie z. B. Metallgitter mit bloßen Händen verbiegen.",
  rage: "Vorteil auf STÄ-Proben (einschließlich Angriffe).",
  fury: "Vorteil auf ZÄH-Proben (einschließlich Paraden).",
  intuition: "Konzentriere dich, um Böses in der Nähe zu spüren.",
  sanctuary: "Solange du betest, können sich böse Kreaturen nicht nähern.",
  healing: "Eine Person, die du berührst, heilt eine Wunde.",
  blessing: "Ein Verbündeter erhält einen Vorteil auf seine nächste Probe.",
  counter:
    "Verteidige dich gegen einen Angriff. Gelingt die Probe, erleidet der Angreifer einen Schaden.",
  maneuver: "Vorteil auf eine Attacke oder Parade.",
  inner_fire:
    "Du bist immun gegen Hitze und Kälte und erhältst Vorteil wen du dich gegen Feuerschaden verteidigst.",
  sorcerer_tricks:
    "Du kannst kleine Flammen und Hitze erzeugen und manipulieren (z.B. eine Pfeife anzünden).",
  hypnosis: "Das Ziel gehorcht einem Befehl von dir (kein Selbstmord).",
  illusion:
    "Du erzeugst eine Illusion mit Bild (max. 3 m³), Geräusch und/oder Geruch.",
  forget: "Das Ziel vergisst ein Ereignis der letzten 7 Tage.",
  confuse: "Bis zu drei Ziele müssen für eine Runde aussetzen.",
  sneakAttack:
    "Bei Attacken aus dem Hinterhalt oder gegen überraschte Gegner verursachst du 2 Schaden.",
  multitalent:
    "Vorteil auf eine beliebige Probe die nichts mit Kampf zu tun hat.",
  vanish: "Du wirst unsichtbar, bist du dich auffällig verhältst.",
  oath: "Du akzeptierst den Schwur. Wir der Schwur gebrochen, erleidet der Schwörende einen Punkt Schaden und ein deutlich sichtbares Mal.",
  multiclass_feats: "Wähle einen Feat einer anderen Klasse.",
  multiclass_stunts: "Wähle einen Stunt einer anderen Klasse.",
  regeneration: "Du erholst dich von einer Wunde.",
  magicMissile:
    "Würfel eine Zauberprobe als Attacke gegen einen Gegner den du sehen kannst.",
  magicMissilePlus:
    "Würfel eine Zauberprobe mit Vorteil als Attacke gegen einen Gegner den du sehen kannst.",
  explosion:
    "Würfel eine Zauberprobe als Attacke. Jeder in einem 6m Ø ist betroffen.",
  heavyAttack: "Attacke verursacht 2 Schaden.",
  multiattack: "Du attackierst bis zu drei Gegner.",

  inspiration(skills = []) {
    const string_of_skills =
      skills.length > 1
        ? skills.slice(0, -1).join(", ") + " oder " + skills[skills.length - 1]
        : skills.join("");
    return `Verbündete erhalten eine Runde einen Vorteil auf ${string_of_skills}.`;
  },

  skill(skills = []) {
    const string_of_skills =
      skills.length > 1
        ? skills.slice(0, -1).join(", ") + " oder " + skills[skills.length - 1]
        : skills.join("");
    return `Vorteil auf Probe mit ${string_of_skills}.`;
  },
};
export default descriptions;
