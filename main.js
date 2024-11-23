import Navbar from "./components/navbar/Navbar.js";
import Regeln from "./components/rules/Rules.js";
import Examples from "./components/rules/Examples.js";
import playbooks from "./components/rules/Playbooks.js";

window.navbar = new Navbar();
new Regeln();
new Examples();
new playbooks();
