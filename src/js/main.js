import modals from './modules/modals';
import slides from './modules/slides';

window.addEventListener('DOMContentLoaded', () => {

  'use strict';

  modals();
  slides('.feedback-slider-item', '.main-next-btn', '.main-prev-btn');
  slides('.main-slider-item', '', '', 'vertical');
})
