class Krieger {
  constructor() {
    this.name = "Krieger";
    this.description =
      "Du bist schnell, stark und militant. Kampf ist deine Spezialität, und du kannst mehr Schaden austeilen und wegstecken als andere.";
  }
}

class Playbook extends Krieger {}

const playbook = new Playbook();
export default playbook;
