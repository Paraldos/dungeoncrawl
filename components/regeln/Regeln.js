import page from "../Page.js";

export default class Regeln extends page {
  constructor() {
    super(".regeln");
    this.container.innerHTML = `
		<section>
			<h2>Regeln</h2>
		</section>
	`;
  }
}
