class Section {
  constructor(containerSelector, renderer) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  // очистка контейнер
  removeItems = () => {
    this._container.innerHTML = '';
  }

  // добавление нового элемента
  setItem = (element) => {
    this._container.prepend(this._renderer(element));
  }
}

export default Section;
