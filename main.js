import Body from "./components/Body.js";
import Page from "./components/Page.js";
import Card from "./components/Card.js";

class main {
    constructor() {
        this.body = new Body();
        this.body.cleanUp();
        this.page = new Page();

        new Card(this.page.page);
        new Card(this.page.page);
        new Card(this.page.page);
        new Card(this.page.page);
   }
}
new main();
