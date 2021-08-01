import './styles/styles.scss';

document.addEventListener('DOMContentLoaded', () => {
  const headerMenuButton = document.querySelector('.header__menu-btn');
  const headerNavigation = document.querySelector('.header__navigation');
  const typeInputElement = document.querySelector('.form__type-input');
  const typeChooserElement = document.querySelector('.form__type-chooser');
  const typeListElement = document.querySelector('.form__type-list');
  const typeItemsElements = document.querySelectorAll('.form__type-item');
  const rangeValueElement = document.querySelector('.form__range-value');
  const rangeInputElement = document.querySelector('.form__range-input');

  // Выпадающий список "Выберите тип системы"
  typeChooserElement.addEventListener('click', (evt) => {
    evt.currentTarget.classList.toggle('form__type-chooser--active');
    typeListElement.classList.toggle('form__type-list--hidden');
  });

  typeItemsElements.forEach(item => {
    item.addEventListener('click', (evt) => {
      typeChooserElement.classList.remove('form__type-chooser--active');
      typeListElement.classList.add('form__type-list--hidden');
      typeChooserElement.textContent = evt.currentTarget.textContent;
      typeInputElement.value = evt.currentTarget.textContent;
    });
  });

  // Запись значения ползунка в окошко
  rangeInputElement.addEventListener('input', (evt) => {
    rangeValueElement.value = `${evt.currentTarget.value} %`;
  });

  // Открытие меню при mobile
  headerMenuButton.addEventListener('click', (evt) => {
    headerNavigation.classList.toggle('header__navigation--hidden');
    evt.currentTarget.classList.toggle('header__menu-btn--active');
  });
});