import {
  getResource
} from '../services/request';

let calc = (size, material, options, promocode, result) => {
  let sizePicture = document.querySelector(size),
    materialPicture = document.querySelector(material),
    optionsPicture = document.querySelector(options),
    promocodePicture = document.querySelector(promocode),
    resultSum = document.querySelector(result),
    sum = 0;

  function changeData(key, num) {


    getResource('assets/db.json') // data base from folder
      //  getResource('http://localhost:3000/styles')
      .then((res) => { calcSum(res, key, num)})
      .catch(err => console.log(err));

    //  this.style.display = "none";

    //this.remove();
    }

    let siz = 0,
        mat = 0,
        opt = 0;
    let dis;

  let calcSum = (res, key, num) => {

    //var newData = JSON.stringify(res.prices)
    for (var k in res.prices) {
      if (num == 'SIZE') {
        siz = res.prices[k][key];
      } else if (num == 'MAT') {
        mat = res.prices[k][key];

      } else if (num == 'OPT') {
        opt = res.prices[k][key];
      } else {
        dis = key;
      }

    }
    sum = Math.round((+siz) * (+mat) + (+opt));

    if (siz == 0 || mat == 0) {
      resultSum.textContent = "Please choose size and material";
    } else if ( dis === "DIS") {
      resultSum.textContent = Math.round(sum * 0.7);
    } else {
      resultSum.textContent = sum;
    }
  }

  function calcListener(object, action, label) {
    object.addEventListener(action, function() {
      let key = this.value;
      let x = label;
      changeData(key, x);
    });
  }
calcListener(sizePicture, 'change', 'SIZE');
calcListener(materialPicture, 'change', 'MAT');
calcListener(optionsPicture, 'change', 'OPT');
calcListener(promocodePicture, 'input');

}

export default calc;
