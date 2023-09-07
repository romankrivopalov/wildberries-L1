// Создать и добавить элемент с использованием шаблонов: Напишите функцию, которая
// создает новый элемент с использованием шаблонов (например, с помощью тега `template`)
// и добавляет его в DOM.

// ==================================================

'use strict'

const array = ['Москва', 'Нижний Новгород', 'Санкт-Петербург'];

// template
  // создаём слой (класс, который добавляет элемент на страницу)
  class Section {
    constructor(containerSelector, renderer) {
      this._containerSelector = document.querySelector(containerSelector);
      this._renderer = renderer;
    };

    addItem = (item) => {
      this._containerSelector.prepend(item);
    };

    renderItems = (array) => {
      array.forEach(item => this._renderer(item));
    };
  }

  class Item {
    constructor(data, templateSelector, itemSelector, itemContentSelector) {
      this._data = data;
      this._templateSelector = templateSelector;
      this._itemSelector = itemSelector;
      this._itemContentSelector = itemContentSelector;
    }

    // приватный метод возвращающий разметку
    _getTemplate = () => {
      const itemElement = document
        .querySelector(this._templateSelector) // ищем шаблон
        .content // получаем содержимое
        .querySelector(this._itemSelector)
        .cloneNode(true) // клонируем содержимое

      return itemElement;
    };

    generateItem = () => {
      this._item = this._getTemplate();
      // наполняем полученное содержимое элемента
      this._item.querySelector(this._itemContentSelector).textContent = this._data;

      return this._item;
    };
  }

  const sectionSlice = new Section(
      '#list', // селектор контейнера, куда вставлять элементы
      // функция выполняемая для каждого элемента массива
      (data) => {
        // создание инстанса класса
        const item = new Item(data, '#template', '.item', '.item__content');
        // генерация элемента перед отрисовкой на странице
        sectionSlice.addItem(item.generateItem());
      }
    );

  sectionSlice.renderItems(array);
