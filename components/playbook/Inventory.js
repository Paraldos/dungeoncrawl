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
				<option>1</option>
				<option>2</option>
				<option>3</option>
				<option>4</option>
				<option>5</option>
			</select>
		</div>
	`;
  }
}
