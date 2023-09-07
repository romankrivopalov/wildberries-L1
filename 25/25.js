// Создать и добавить стиль для элемента: Напишите функцию, которая создает новый элемент,
// добавляет его в DOM и устанавливает для него стиль с помощью CSS.

// ==================================================

const list = document.querySelector('#list');
const btn = document.querySelector('#btn');

const createElement = (tag, attr, style) => {
  // создаем элемент с указанным тегом
  const element = document.createElement(tag);

  // Object.assign метод копирования объекта,
  // в данном случае, добавит переданные ключи и значения из объектов
  // в атрибуты элемента
  return Object.assign(element, attr, style);
}

// три варианта установить стили через js
const createItem = () => {
  const item = createElement('li', {
    // считаю более правильным вариантом добавления класса
    // для управления стилями
    className: 'item', // класса нет, просто пример
    ariaLabel: 'Просто текст, чтобы показать, что можно ещё атрибуты добавлять',
  }, {
    // передать объектом в объединения в createElement
    // вариант считаю не читабельным
    style: 'display: block; width: 100px; height: 100px',
  });

  // прямым обращением через style
  item.style.backgroundColor = 'inherit';
  item.style.border = '40px solid rgb(213 91 155)';

  const mount = (container) => {
    container.append(item);
  };

  return { mount }
}

btn.addEventListener('click', () => {
  // вызываем функцию создания элемента, и обращаемся к методу монтажа
  createItem().mount(list);
})
