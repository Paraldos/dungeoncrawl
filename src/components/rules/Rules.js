import page from "../Page.js";
import DocumentReader from "../../DocumentReader.js";

export default class Regeln extends page {
  constructor() {
    super(".rules");
    this.DocumentReader = new DocumentReader();
    this.loadRules();
  }

  async loadRules() {
    const htmlContent = await this.DocumentReader.getHtml(
      "/src/data/Regeln.docx"
    );
    this.renderRules(htmlContent);
  }

  renderRules(htmlContent) {
    console.log(htmlContent);
  }
}
