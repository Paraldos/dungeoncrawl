export default class Inventory {
  getInventory() {
    return `
		<div class="inventory">
			${this.getIventoryLabels()}
			${this.getInventorySlot()}
			${this.getInventorySlot()}
			${this.getInventorySlot()}
			${this.getInventorySlot()}
			${this.getInventorySlot()}
			${this.getInventorySlot()}
		</div>
	`;
  }

  getIventoryLabels() {
    return `
		<div class="inventory__labels">
			<p>Item</p>
			<p>Bonus</p>
		</div>
	`;
  }

  getInventorySlot() {
    return `
		<div class="inventory__item">
			<input></input>
			<select>
				<option></option>
				<option>W4</option>
				<option>W6</option>
				<option>W8</option>
				<option>W10</option>
				<option>W12</option>
			</select>
		</div>
	`;
  }
}
