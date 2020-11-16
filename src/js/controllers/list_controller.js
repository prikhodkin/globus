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
        spaceBetween: 30,
        navigation: {
          nextEl: this.nextTarget,
          prevEl: this.prevTarget,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 40,
          }
        }
      });
    })


  }


}
