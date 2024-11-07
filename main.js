import Body from "./components/Body.js";
import Page from "./components/Page.js";
import Card from "./components/Card.js";

class main {
  constructor() {
    this.body = new Body();
    this.body.cleanUp();
    this.page = new Page();

    new Card(this.page.page, {
      headline: "Schwert",
      cardType: "Werkzeug",
      txt: ["+W6 auf Nahkampf Attacken"],
    });
    new Card(this.page.page, {
      headline: "Axt",
      cardType: "Werkzeug",
      txt: ["+W6 auf Nahkampf Attacken"],
    });
    new Card(this.page.page, {
      headline: "Speer",
      cardType: "Werkzeug",
      txt: ["+W6 auf Nahkampf Attacken"],
    });
    new Card(this.page.page, {
      headline: "Bogen",
      cardType: "Werkzeug",
      txt: ["+W6 auf Fernkampf Attacken"],
    });
    new Card(this.page.page, {
      headline: "Armbrust",
      cardType: "Werkzeug",
      txt: ["+W6 auf Fernkampf Attacken"],
    });
    new Card(this.page.page, {
      headline: "Lederrüstung",
      cardType: "Werkzeug",
      txt: ["+W6 auf Verteidigung"],
    });
    new Card(this.page.page, {
      headline: "Kettenhemd",
      cardType: "Werkzeug",
      txt: ["+W6 auf Verteidigung"],
    });
  }
}
new main();
