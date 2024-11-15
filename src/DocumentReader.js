import mammoth from "mammoth";

export default class DocumentReader {
  async getHtml(file) {
    try {
      const response = await fetch(file);
      const arrayBuffer = await response.arrayBuffer();
      const result = await mammoth.convertToHtml({ arrayBuffer: arrayBuffer });
      return result.value;
    } catch (err) {
      console.error("Fehler beim Lesen der DOCX-Datei:", err);
      throw err;
    }
  }
}
