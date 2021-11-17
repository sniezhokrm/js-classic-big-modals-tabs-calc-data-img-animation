import modals from './modules/modals';
import slides from './modules/slides';
import forms from './modules/forms';
import checkTextInputs from './modules/checkNumInputs';
import mask from './modules/mask';

window.addEventListener('DOMContentLoaded', () => {

  'use strict';

  modals();
  slides('.feedback-slider-item', '.main-next-btn', '.main-prev-btn');
  slides('.main-slider-item', '', '', 'vertical');
  forms();
  mask('[name = "phone"]');
  checkTextInputs('[name = "name"]');
  checkTextInputs('[name = "message"]');
})
