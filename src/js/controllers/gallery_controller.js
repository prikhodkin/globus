import Swiper from 'swiper/bundle';
import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ `top`, `bottom`, `prev`, `next`]

  connect() {
    this.init();
  }

  init() {

    const galleryThumbs = new Swiper(this.bottomTarget, {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });

    const galleryTop = new Swiper(this.topTarget, {
      spaceBetween: 10,
      navigation: {
        nextEl: this.nextTarget,
        prevEl: this.prevTarget,
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
  }


}
