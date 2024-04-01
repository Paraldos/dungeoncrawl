import playbook from "./scripts/playbook.js";
import Header from "./scripts/header.js";
import Description from "./scripts/description.js";
import Basics from "./scripts/basics.js";
import Attribute from "./scripts/attribute.js";
import Zustand from "./scripts/zustand.js";
import Ausruestung from "./scripts/ausruestung.js";

new Header(playbook.name);
new Description(playbook.description);
new Basics();
new Header("Attribute");
new Attribute();
new Header("Ausrüstung");
new Ausruestung();
new Header("Zustand");
new Zustand();
