class Krieger {
  constructor() {
    this.name = "Krieger";
    this.description =
      "Du bist schnell, stark und militant. Der Kampf ist deine Spezialität, und du kannst mehr Schaden verursachen und wegstecken als andere.";
  }
}

class Playbook extends Krieger {}

const playbook = new Playbook();
export default playbook;
