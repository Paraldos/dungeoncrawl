export default class Playbook {
  constructor(title, description, passives = [], feats = [], stunts = []) {
    this.title = title;
    this.description = description;
    this.passives = passives;
    this.feats = feats;
    this.stunts = stunts;
  }
}
