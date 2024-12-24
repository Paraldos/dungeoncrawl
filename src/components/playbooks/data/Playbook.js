export default class Playbook {
  constructor(title, description, feats = [], stunts = []) {
    this.title = title;
    this.description = description;
    this.feats = feats;
    this.stunts = stunts;
  }
}
