import mammoth from "mammoth";

export default class DocumentReader {
  constructor() {}

  async read(file) {
    const result = await mammoth.extractRawText({ arrayBuffer: file });
    console.log(result);
    return result.value;
  }
}
