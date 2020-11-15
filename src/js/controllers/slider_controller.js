import Swiper from 'swiper/bundle';
import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ `prev`, `next`, `slider`]

  connect() {
    this.init();
  }

  init() {

    const swiper = new Swiper(this.sliderTarget, {
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
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        }
      }
    });
  }


}
