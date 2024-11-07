export default class Card {
    constructor(parent, config = {}) {
        this.parent = parent;
        this.headline = config.headline || '';
        this.txt = config.txt || [];
        this.card = this.createCard();
        this.addHeadline();
        this.addText();
    }

    createCard() {
        const card = document.createElement('div');
        card.className = 'card'
        this.parent.appendChild(card);
        return card
    }

    addHeadline() {
        if (!this.headline) return
        this.card.innerHTML = `<h2 class="card__headline" >${this.headline}</h2>`;
    }

    addText() {
        if (!this.txt) return
        this.txt.forEach(text => {
            this.card.innerHTML += `<p class="card__txt">${text}</p>`;
        });
    }
}