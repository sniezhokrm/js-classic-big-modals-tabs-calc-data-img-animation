const burger = (btnBurgerSelector, menuBurgerSelector) => {
  let btnBurger = document.querySelector(btnBurgerSelector),
    menuBurger = document.querySelector(menuBurgerSelector);

  menuBurger.style.display = 'none';

  btnBurger.addEventListener('click', () => {
    if (menuBurger.style.display == 'none' && window.screen.availWidth < 993) {
      menuBurger.style.display = 'block';
    } else {
      menuBurger.style.display = 'none';
    }
  });

  window.addEventListener('resize', () => {
    if (window.screen.availWidth > 992) {
      menuBurger.style.display = 'none';
    }
  });

};

export default burger;
