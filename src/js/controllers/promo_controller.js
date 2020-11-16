import Swiper from 'swiper/bundle';
import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ `prev`, `next`, `slider`]

  connect() {
    this.init();
  }

  init() {

    this.sliderTargets.forEach((item) => {
      let swiper = new Swiper(item, {
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: this.nextTarget,
          prevEl: this.prevTarget,
        }
      });
    })


  }


}
