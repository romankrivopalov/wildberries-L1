// Взаимодействие с формами: Напишите функцию, которая получает данные из формы
// на веб-странице и выполняет определенные действия с этими данными, например,
// отправляет их на сервер или отображает всплывающее окно с результатами.

// ==================================================

'use strict'

// создание класса формы
class Form {
  constructor(formSelector, inputSelector, btnSelector, handleSubmit) {
    this._form = document.querySelector(formSelector);
    this._input = this._form.querySelector(inputSelector);
    this._btn = this._form.querySelector(btnSelector);
    this._handleSubmit = handleSubmit;
  }

  // метод переключения состояния кнопки
  _toggleBtn = (value) => {
    this._btn.disabled = !value;
  }

  // метод проверки валидности формы
  _checkInputValidity = () => {
    // если форма не валидна, выключаем кнопку
    this._toggleBtn(this._input.validity.valid)
  }

  // после отправки данных, чистим форму и выключаем кнопку
  _resetForm = () => {
    this._input.value = '';

    this._toggleBtn(false);
  };

  // метод изменения фона
  changeFormBg = (value) => {
    value
      ? this._form.style.backgroundImage = 'url(https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
      : this._form.style.backgroundImage = 'none'

  }

  // установка слушателей
  setEventListener = () => {
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();

      // если сработал сабмит, вызываем переданную инструкцию,
      // передаем в него значение инпута, кнопку и метод переключения фона
      this._handleSubmit(this._input.value, this._btn, this.changeFormBg);
      this._resetForm();
    })

    // при каждом вводе данных, проверяем валидность инпута
    this._input.addEventListener('input', () => {
      this._checkInputValidity();

      // выключаем фон, чтобы обновить его после успешного ответа
      this.changeFormBg(false);
    })
  };
}

// создание инстанса класса, с селекторами и инструкцией
const form = new Form('#form', '.input', '.btn',
  (inputValue, btn, changeBg) => {
    // если сработал submit, проверяем данные
    if (callCapybara(inputValue)) {
      changeBg(true);
      btn.textContent = 'Попробовать';
    } else {
      btn.textContent = 'не получилось..';
      changeBg(false);
    }
  },
)

// метод зовущий капибар
const callCapybara = (value) => {
  return (Math.floor(Math.random() * value.length) % 2 === 0) ? false : true;
}

// запуск метода устанавливащего обработчики
form.setEventListener();
