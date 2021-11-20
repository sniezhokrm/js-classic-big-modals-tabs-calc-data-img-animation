import {
  getResource
} from '../services/request';

const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);

  btn.addEventListener('click', function() {
    //getResource('assets/db.json') data base from folder
    getResource('http://localhost:3000/styles')
      .then(res => showMoreCards(res))
      .catch(err => errorMassage(err));

      this.style.display = "none";

    //this.remove();
  });

  function showMoreCards(response) {
    response.forEach(({
      title,
      src,
      link
    }) => {
      let card = document.createElement('div');

      card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1')

      card.innerHTML = `
          <div class=styles-block>
            <img src=${src} alt>
            <h4>${title}</h4>
            <a href="#">${link}</a>
          </div>
          `;

      document.querySelector(wrapper).appendChild(card);



    });
  }

  function errorMassage(error) {
    let errBlock = document.createElement('div');

    errBlock.classList.add('animated', 'fadeInUp', 'col-sm-8', 'col-sm-offset-2', 'col-xs-10', 'col-xs-offset-1');

    errBlock.innerHTML = `
          <div class=styles-block>
            <img class=errClose src='assets/img/fail.png' alt>
            <h4>'Could not load more picture, error - ${error}((('</h4>
          </div>
          `;

    document.querySelector(wrapper).appendChild(errBlock);

    document.querySelector('.errClose').addEventListener('click', () => {

      errBlock.remove();

      btn.style.display = "block";
    });


  }
};



export default showMoreStyles;
