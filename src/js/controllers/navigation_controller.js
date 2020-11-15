import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ `target` ]

  show() {
    this.targetTarget.classList.add(`navigation__inner--active`);
  }

  close() {
    this.targetTarget.classList.remove(`navigation__inner--active`);
  }
}
