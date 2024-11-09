import page from "../Page.js";
import karten from "../../data/Karten.js";

export default class Karten extends page {
  constructor() {
    super(".karten");
    this.addKarten(karten);
  }

  getGroupsOfCards(arrayOfCards) {
    const groups = [];
    for (let i = 0; i < arrayOfCards.length; i += 8) {
      groups.push(arrayOfCards.slice(i, i + 8));
    }
    return groups;
  }

  addKarten(arrayOfCards) {
    this.deleteSections();
    const groupsOfCards = this.getGroupsOfCards(arrayOfCards);
    groupsOfCards.forEach((group) => {
      const section = this.addSection();
      group.forEach((card) => {
        this.addCard(section, card);
      });
    });
  }

  addCard(section, cardData) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("karte");
    cardDiv.innerHTML = `
		<h2>${cardData.title}</h2>
		<p>${cardData.type}</p>
		<ul>
			${cardData.description.map((desc) => `<li>${desc}</li>`).join("")}
		</ul>
	`;
    cardDiv.addEventListener("click", () =>
      this.onCardclick(cardDiv, cardData)
    );
    section.appendChild(cardDiv);
  }

  onCardclick(card, cardData) {
    card.classList.toggle("karte__selected");
    karten.find((karte) => karte.title === cardData.title).selected =
      card.classList.contains("karte__selected");
  }
}
