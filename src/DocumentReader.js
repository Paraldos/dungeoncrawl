import mammoth from "mammoth";

export default class DocumentReader {
  constructor() {
    console.log("DocumentReader initialized");
    this.read("/src/data/Regeln.docx");
  }

  async read(file) {
    fetch(file)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => {
        return mammoth.extractRawText({ arrayBuffer: arrayBuffer });
      })
      .then((result) => {
        console.log(result.value); // Ausgabe des Inhalts in der Konsole
      })
      .catch((err) => {
        console.error("Fehler beim Lesen der DOCX-Datei:", err);
      });
  }
}
