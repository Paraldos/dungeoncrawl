import page from "../Page.js";
import listOfCards from "../../data/Karten.js";
import Karte from "./Karte.js";
import KartenSelector from "./KartenSelector.js";

export default class Karten extends page {
  constructor() {
    super(".karten");
    this.showAll();
    new KartenSelector(this);
  }

  showTools() {
    this.addKarten(listOfCards.filter((card) => card.type === "Werkzeug"));
  }

  showConsumables() {
    this.addKarten(listOfCards.filter((card) => card.type === "Konsumgut"));
  }

  showRunes() {
    this.addKarten(listOfCards.filter((card) => card.type === "Rune"));
  }

  showAll() {
    this.addKarten(listOfCards);
  }

  showFavorites() {
    const array = listOfCards.filter((card) => card.favorite);
    if (array.length === 0) {
      this.showAll();
    } else {
      this.addKarten(array);
    }
  }

  addKarten(arrayOfCards) {
    this.deleteSections();

    const groupsOfCards = this.getGroupsOfCards(arrayOfCards);

    groupsOfCards.forEach((group) => {
      const section = this.addSection();

      group.forEach((card) => {
        new Karte(section, card);
      });
    });
  }

  getGroupsOfCards(arrayOfCards) {
    const groups = [];

    for (let i = 0; i < arrayOfCards.length; i += 8) {
      groups.push(arrayOfCards.slice(i, i + 8));
    }

    return groups;
  }
}
