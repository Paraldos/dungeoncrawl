import Navbar from "/scripts/navbar/Navbar.js";
import Regeln from "/scripts/rules/Rules.js";
import Examples from "/scripts/rules/Examples.js";
import playbooks from "/scripts/rules/Playbooks.js";
import GroupSheet from "./scripts/rules/GroupSheet.js";

window.navbar = new Navbar();
new GroupSheet();
new Regeln();
new Examples();
new playbooks();
