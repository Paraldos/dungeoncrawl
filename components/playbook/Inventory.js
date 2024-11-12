export default class Inventory {
  getInventory() {
    return `
		<div class="inventory">
			<div class="inventory__labels">
				<p>Item</p>
				<p>Bonus</p>
			</div>
			${new Array(6).fill(this.getInventorySlot()).join("")}
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
