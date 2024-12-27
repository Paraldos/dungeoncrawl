import Attribute from "./Attribute";
import "./attributes.css";

const Attributes = () => {
  const listOfAttributes = [
    { name: "STÄ", examples: "Heben, Schieben, Nahkampf" },
    { name: "GES", examples: "Schleichen, Turnen, Klettern, Nahkampf" },
    { name: "ZÄH", examples: "Ausdauer, Luft Anhalten, Verteidigung" },
    { name: "CHA", examples: "Überzeugen, Einschüchtern, Handel" },
    { name: "KLU", examples: "Wissen, Logik, Magie" },
    { name: "WEI", examples: "Intuition, Überleben, Warhnehmung, Magie" },
  ];

  return (
    <div className="playbook__attributes">
      {listOfAttributes.map((attribute, index) => (
        <Attribute key={index} attribute={attribute} />
      ))}
    </div>
  );
};

export default Attributes;
