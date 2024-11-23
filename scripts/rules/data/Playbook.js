import Talent from "./Talent.js";

export default class Playbook {
  constructor(title, description, feats = [], stunts = []) {
    this.title = title;
    this.description = description;
    this.feats = feats;
    this.stunts = stunts;
    this.feats.push(
      new Talent("Multiclass", "Wähle einen Feat einer anderen Klasse.")
    );
    this.stunts.push(
      new Talent("Multiclass", "Wähle einen Stunt einer anderen Klasse.", [
        false,
        false,
      ])
    );
  }
}
