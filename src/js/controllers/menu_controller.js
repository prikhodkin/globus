import { Controller } from "stimulus";
import {UNIT, ADD_WIDTH} from "../../js/util";

export default class extends Controller {
  static targets = [ `item`, `trigger` ]

  initialize() {
    this.subMenu();
  }


  changeBurger() {
    const inner = this.triggerTarget.querySelector(`.burger__inner`);
    inner.classList.toggle(`burger__inner--active`);
  }

  showMenu() {
    this.changeBurger();
    const menu = document.querySelector(`.menu__list`);
    menu.classList.toggle(`menu__list--active`);
  }

  subMenu() {
    this.itemTargets.forEach((item) => {
      const target = item.querySelector(`.menu__arrow`);
      const menu = item.querySelector(`.menu__sub-list`);

      target.addEventListener(`click`, () => {
        console.log('fff')
        menu.classList.toggle(`menu__sub-list--active`);
      })
    })


  }
}
