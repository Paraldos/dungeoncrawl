import BonusSelector from "../../bonusSelector/BonusSelector";

const InventoryItem = () => {
  return (
    <div className="inventory__item">
      <input type="text"></input>
      <BonusSelector amountOfPoints={5} />
    </div>
  );
};

export default InventoryItem;
