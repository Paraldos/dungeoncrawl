import Svg from "./Svg.js";

export default class Checkbox {
  getCheckbox(checked) {
    const checkbox = document.createElement("div");
    checkbox.classList.add("checkbox");
    if (checked) checkbox.classList.add("checkbox--checked");
    checkbox.innerHTML = new Svg().getX();
    return checkbox.outerHTML;
  }
}
