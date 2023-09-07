// Задача на работу с объектами: создайте объект, представляющий собой книгу.
// Объект должен иметь свойства, такие как: название книги, автор и год издания.
// Напишите методы для получения и изменения значений свойств книги.

// ==================================================

const book = {
  // свойства объекта
  title: 'Fifty Shades',
  author: 'E. L. James',

  // методы объекта, функции устанавливающие значения ключей
  setTitle: function(title) {
    if (title.length < 3) {
      alert('the title is too short');
      return
    };
    this.title = title;
  },
  setAuthor: function(author) {
    this.author = author;
  },

  // сеттер и геттер
  set published(value) {
    if (typeof value !== "number") {
      alert('pass the number');
      return
    };

    this._published = value;
  },
  get published() {
    return this._published;
  },

  // получить всю информацию
  getAllData: function() {
    return `${this.title}, ${this.author}, ${this._published}`;
  },
}

// вызываем метод объекта, чтобы получить всю информацию
console.log(book.getAllData()); // Fifty Shades of Grey, E. L. James, undefined

// обращение к геттеру и сеттеру (акцессоры) производится без вызова, как метода
book.published = 2012
console.log(book.published); // 2012

book.setTitle('Fifty Shades of Grey');

console.log(book.getAllData()); // Fifty Shades of Grey, E. L. James, 2012

