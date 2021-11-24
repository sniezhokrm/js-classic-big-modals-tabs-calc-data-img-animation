import modals from './modules/modals';
import slides from './modules/slides';
import forms from './modules/forms';
import checkTextInputs from './modules/checkNumInputs';
import mask from './modules/mask';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import drop from './modules/drop';

window.addEventListener('DOMContentLoaded', () => {

  'use strict';

  modals();
  slides('.feedback-slider-item', '.main-next-btn', '.main-prev-btn');
  slides('.main-slider-item', '', '', 'vertical');
  forms();
  mask('[name = "phone"]');
  checkTextInputs('[name = "name"]');
  checkTextInputs('[name = "message"]');
  showMoreStyles('.button-styles', '#styles .row');
  calc('#size', '#material', '#options', '.promocode', '.calc-price');
  filter();
  pictureSize('.sizes-block');
  accordion('.accordion-heading');
  burger('.burger', '.burger-menu');
  scrolling('.pageup');
  drop();
})
