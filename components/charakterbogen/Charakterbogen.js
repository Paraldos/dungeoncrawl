import page from "../Page.js";

export default class Charakterbogen extends page {
  constructor() {
    super(".Charakterbogen");
    this.container.innerHTML = `
		<section>
			<h2>Charakterbogen</h2>
		</section>
	`;
  }
}
