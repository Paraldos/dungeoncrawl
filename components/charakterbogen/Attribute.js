export default class Attribute {
  getAttribute() {
    return `
		<div class="Charakterbogen__attribute">
			${this.getAttribut("KRA")}
			${this.getAttribut("GES")}
			${this.getAttribut("ZÄH")}
			${this.getAttribut("CHA")}
			${this.getAttribut("KLU")}
			${this.getAttribut("WEI")}
		</div>
	`;
  }

  getAttribut(titel) {
    return `
			<div class="Charakterbogen__attribut">
				<select>
					<option></option>
					<option>W4</option>
					<option>W6</option>
					<option>W8</option>
					<option>W10</option>
					<option>W12</option>
				</select>
				<label>${titel}</label>
			</div>
		`;
  }
}
