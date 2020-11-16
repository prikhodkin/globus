import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import $ from "jquery";
import Tabs from "%modules%/tabs/tabs"
global.jQuery = $;
import IMask from 'imask';

require ("@fancyapps/fancybox/dist/jquery.fancybox");

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));
const tabs = document.querySelectorAll(`[data-tabs]`);
const phones = document.querySelectorAll(`.js-mask`);
const phoneOption = {
  mask: '+{7} (000) 000-00-00'
}

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

