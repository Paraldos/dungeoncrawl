const descriptions = {
  extraHealth: "Deine Gesundheit steigt permanent um 1 Punkt.",
  extraMana: "Deine Ausdauer steigt permanent um 2 Punkt.",

  multiattack: "Attackier bis zu drei Gegner in Reichweite.",
  heavyAttack: "Attacke verursacht 2 Schaden.",
  anger: "+2 auf Zähigkeit Probe (kann auch Parade sein).",
  rage: "+2 auf Stärke Probe (kann auch Angriff sein).",

  intuition: "Wen du dich konzentrierst, kannst du böses in der Nähe spüren.",
  banish: "Du beendest einen Zauber, den du sehen kannst.",
  sanctuary: "Solange du betest, können sich böse Kreaturen nicht nähern.",
  healing: "Eine Person, die du berührst, heilt eine Wunde.",
  blessing: "Ein Verbündeter erhält +2 auf seine nächste Probe.",
  oath: "Du akzeptierst den Schwur. Wir der Schwur gebrochen, erleidet der Schwörende einen Punkt Schaden und ein deutlich sichtbares Mal.",

  plantFriend:
    "Du kannst kleine Pflanzen nach Belieben wachsen lassen und erhältst +2 beim Umgang mit Pflanzen.",
  animalFriend:
    "Du kannst mit Tieren sprechen und erhältst +2 beim Umgang mit ihnen.",
  animalControll:
    "Ein Tier oder Schwarm Kleintiere muss deinen Befehlen folgen.",
  tendrils:
    "Eine kleine Gruppe Gegner muss für eine Runde aussetzen (max. einmal pro Szene).",
  growth:
    "Du lässt Pflanzen in eine von dir gewünschte Form wachsen (Baumbrücke dauert ca. 1 Minute).",
  transformation:
    "Du verwandelst dich in ein kleines Tier (z. B. Katze oder Maus) oder eine Pflanze (z. B. Baum).",
  weatherControll: "Du veränderst das Wetter (muss zur Umgebung passen).",

  genius: "Du zauberst mit KLU.",
  wizzard_tricks:
    "Vollführ einen kleinen Zaubertrick (z.B. eine Tür mit Telekinese öffnen oder eine Pfeife mit einem Fingerschnippen entzünden).",

  barrier: "Du erschaffst eine undurchdringliche magische Wand (max. 3m²).",
  message:
    "Du schickst eine kurze mentale Nachricht an jemanden, den du kennst.",
  clairvoyance:
    "Der Erzähler beantwortet 3 Ja/Nein Fragen zu einem Objekt dass du siehst.",
  levitation:
    "Du kannst für eine Runde in Schrittgeschwindigkeit durch die Luft schweben.",
  telekinesis:
    "Beweg einen Gegenstand mit mentaler Kraft (KLU ist mentale STÄ und GES).",
  teleport:
    "Du teleportierst dich an einen Ort, den du sehen kannst oder in den letzten 24 Stunden besucht hast.",

  resonanz: "Du zauberst mit CHA.",

  inner_fire:
    "Du bist immun gegen Hitze und Kälte und erhältst +2 wen du dich gegen Feuerschaden verteidigst.",
  sorcerer_tricks:
    "Du kannst kleine Flammen und Hitze erzeugen und manipulieren (z.B. eine Pfeife anzünden).",
  asch: "Ein Objekt, dass du berührst, verbrennt oder schmilzt (eine Eisentür schmelzen dauert z.B. ca. 1 Minute).",
  fire_controll:
    "Solange du dich darauf konzentrierst, kannst du ein nahes Feuer stärken, schwäche, lösche oder in Schrittgeschwindigkeit beweg.",

  hypnosis: "Das Ziel gehorcht einem Befehl von dir (kein Selbstmord).",
  illusion:
    "Du erzeugst eine Illusion mit Bild (max. 3 m³), Geräusch und/oder Geruch.",
  forget: "Das Ziel vergisst ein Ereignis der letzten Tage.",
  telepathy:
    "Der Erzähler beantwortet 3 Ja/Nein Fragen zu einer Person die du siehst.",

  counter:
    "Verteidige dich gegen einen Angriff. Gelingt die Probe, erleidet der Angreifer einen Punkt Schaden.",
  maneuver: "+2 auf eine Attacke oder Parade.",
  sneakAttack:
    "Bei Attacken aus dem Hinterhalt oder gegen überraschte Gegner verursachst du 2 Schaden.",
  multitalent: "+2 auf eine beliebige Probe die nichts mit Kampf zu tun hat.",
  vanish: "Du wirst unsichtbar, bist du dich auffällig verhältst.",
  regeneration: "Du erholst dich von einer Wunde.",
  magicMissile: "Zauberprobe als Attacke.",
  magicMissilePlus: "Zauberprobe mit +2 als Attacke.",
  explosion: "Zauberprobe als Attacke. Jeder in einem 6m Ø ist betroffen.",
  silence: "Du unterdrückst Geräusche in einem 6m Ø.",
  quickdraw: "Führ eine Attacke aus, bevor der eigentliche Kampf beginnt.",
  all_in: "+2 auf beliebige Probe. Nimm 1 Schaden, wen die Probe misslingt.",
  cleansing: "Du beendest einen Fluch oder Zauber (nicht im Kampf).",

  inspiration(skills = []) {
    const string_of_skills =
      skills.length > 1
        ? skills.slice(0, -1).join(", ") + " oder " + skills[skills.length - 1]
        : skills.join("");
    return `Verbündete erhalten eine Runde +2 auf ${string_of_skills}.`;
  },

  skill(skills = []) {
    const string_of_skills =
      skills.length > 1
        ? skills.slice(0, -1).join(", ") + " oder " + skills[skills.length - 1]
        : skills.join("");
    return `+2 auf Probe mit ${string_of_skills}.`;
  },
};
export default descriptions;
