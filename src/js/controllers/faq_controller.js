import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ `target` ]

  connect() {
    this.toggle()
  }

  toggle() {
    this.targetTargets.forEach((item) => {
      item.addEventListener(`click`, () => {
        item.parentNode.classList.toggle(`faq__item--active`);
      })
    })
  }

}
