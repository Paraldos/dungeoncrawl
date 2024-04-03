import playbook from "./scripts/playbook.js";
import Header from "./scripts/header.js";
import Description from "./scripts/description.js";
import Basics from "./scripts/basics.js";
import Attribute from "./scripts/attribute.js";
import Zustand from "./scripts/zustand.js";
import Ausruestung from "./scripts/ausruestung.js";
import Talente from "./scripts/talente.js";

new Header(playbook.title);
new Description(playbook.description);
new Basics();
new Header("Zustand", ".left", "h2");
new Zustand();
new Header("Attribute", ".left", "h2");
new Attribute();
new Header("Ausrüstung", ".left", "h2");
new Ausruestung();

new Header("Talente", ".right", "h2");
new Talente(playbook.startTalente, true);
new Talente(playbook.erweiterteTalente);
