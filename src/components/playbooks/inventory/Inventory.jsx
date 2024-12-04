import "./inventory.css";
import InventoryItem from "./InventoryItem";

const Inventory = () => {
  return (
    <div className="inventory">
      <div className="inventory__labels">
        <p>Item</p>
        <p>Bonus</p>
      </div>
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
    </div>
  );
};

export default Inventory;
