import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import $ from "jquery";
import Tabs from "%modules%/tabs/tabs"
global.jQuery = $;
import IMask from 'imask';
import {Popup } from "%modules%/popup/popup";

require ("@fancyapps/fancybox/dist/jquery.fancybox");
const popups = document.querySelectorAll(`.popup`);
const application = Application.start()
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));
const tabs = document.querySelectorAll(`[data-tabs]`);
const phones = document.querySelectorAll(`.js-mask`);
const phoneOption = {
  mask: '+{7} (000) 000-00-00'
}

// Инициализация попапов
popups.forEach(function (popup) {
  new Popup(popup);
});

// Инициализация маски для телефона
phones.forEach((item) => IMask(item, phoneOption));
tabs.forEach((item) => new Tabs(item));

$('[data-fancybox]').fancybox({
  protect: true
});

const searchHandlers = document.querySelectorAll(`.js-search`);
const search = document.querySelector(`.search`);
const searchClose = search.querySelector(`.search__close`);

searchHandlers.forEach((item) => {
  item.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    search.classList.toggle(`search--active`);
  })
})

searchClose.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  search.classList.remove(`search--active`);
})

const share = document.querySelector(`.main__share`);
const shareContent = document.querySelector(`.main__share-content`);
if(share) {
  share.addEventListener(`click`, function() {
    shareContent.classList.toggle(`main__share-content--active`);
  });
}
