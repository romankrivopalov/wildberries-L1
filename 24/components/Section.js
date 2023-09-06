class Section {
  constructor(containerSelector, renderer) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  // очищаем контейнер
  removeItems = () => {
    this._container.innerHTML = '';
  }

  // добавлям новый элеменет
  setItem = (element) => {
    this._container.prepend(this._renderer(element));
  }
}

export default Section;
