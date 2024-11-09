import listOfCards from "../../data/Karten.js";

export default class Karte {
  constructor(parent, cardData) {
    this.cardData = cardData;
    this.card = this.addCard(parent, cardData);
  }

  addCard(parent, cardData) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("karte");
    if (cardData.favorite) {
      cardDiv.classList.add("karte__selected");
    }
    cardDiv.innerHTML = `
		<h3>${cardData.title}</h3>
		<p>${cardData.type}</p>
		<ul>
			${cardData.description.map((desc) => `<li>${desc}</li>`).join("")}
		</ul>
	`;
    cardDiv.addEventListener("click", () => this.onCardclick());
    parent.appendChild(cardDiv);
    return cardDiv;
  }

  onCardclick() {
    this.card.classList.toggle("karte__selected");
    this.entry = listOfCards.find((el) => el.title === this.cardData.title);
    this.entry.favorite = this.card.classList.contains("karte__selected");
  }
}
