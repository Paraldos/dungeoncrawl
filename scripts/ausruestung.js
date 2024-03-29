export default class Ausruestung {
    constructor() {
        this.checkboxes = [... document.querySelector('.vorratspunkte__checkboxes').children];

        this.checkboxes.forEach((checkbox, index) => {
            checkbox.addEventListener('click', () => this.onCheckboxClicked(index));
        });
    }

    onCheckboxClicked(clickedIndex) {
        this.checkboxes.forEach((checkbox, index) => {
            checkbox.checked = index <= clickedIndex;
        });
    }
}