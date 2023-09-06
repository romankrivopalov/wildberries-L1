class Table {
  constructor(
    tableSetting,
    handleAddItem,
    handleRemoveItems,
    handleAddPaginationItem,
    handleRemovePaginationItems,
  ) {
    this._tableSetting = tableSetting;
    this._navItems = document.querySelectorAll(this._tableSetting.itemSelector);
    this._handleAddItem = handleAddItem;
    this._handleRemoveItems = handleRemoveItems;
    this._handleAddPaginationItem = handleAddPaginationItem;
    this._handleRemovePaginationItems = handleRemovePaginationItems;
    this._activeSelector = null;
    this._isReverseItems = false;
  }

  // метод пагинации, управляющий
  // принимает весь список элементов и номер страницы
  getPagination = (items, page) => {
    this._items = items;

    // удаление всех элементов пагинации
    this._handleRemovePaginationItems();

    // добавление элементов пагинации
    for (let i = (items.length / this._tableSetting.elementsPerPage); i > 0; i--) {
      this._handleAddPaginationItem(i)
    }

    // получение всех элементов пагинации, тк их полный список доступен только сейчас
    this._paginationItems = document.querySelectorAll('.pagination__item');

    // установка слушателей на элементы пагинации
    this._paginationItems.forEach(item => item.addEventListener('click', () => {
      // при клике на элемент пагинации, рекурсивно вызываем getPagination,
      // с передачей всего массива и номера страницы
      this.getPagination(this._items, Number(item.innerHTML));
    }))

    // установка активного класса для элемента пагинации,
    // в соответствии со страницей на которой находимся
    this._paginationItems[page - 1].classList.add('pagination__item_active');

    // определение начального и конечного элемента в зависимости от страницы
    let startElement = (page * this._tableSetting.elementsPerPage) - this._tableSetting.elementsPerPage;
    let endElement = (page * this._tableSetting.elementsPerPage);

    // итоговый массив элементов, в соответствии со страницей (начальным и конечным элементом)
    const allItems = this._items.slice(startElement, endElement);

    // установка перевёрнутых элементов соответствующих странице
    this._setItems(allItems.reverse());
  }

  // установить элементы
  _selectItems = (selector) => {
    // сортировка массива по переданному селектору
    const selectedItems = this._items.sort((a, b) => (b[selector] < a[selector]) - (a[selector] < b[selector]));

    // если элемент, уже выбран (активный селектор не изменился), передаём развернутый массив
    if (this._activeSelector === selector) {
      if (!this._isReverseItems) {
        this.getPagination(selectedItems.reverse(), 1)

        this._isReverseItems = true;
      } else {
        this.getPagination(selectedItems, 1)

        this._isReverseItems = false;
      }

      return
    }

    // если селектор изменился, установливаем новый активный селектор, и передаём отсортированный массив
    this._activeSelector = selector;
    this._isReverseItems = false;
    this.getPagination(selectedItems, 1)
  }

  // усновить элементы
  _setItems = (items) => {
    // проверка для первых элементов
    if (!this._activeSelector) {
      // если активного класса нет, значит это первые элементы
      // вызываем, _selectItems который установит _activeSelector по первому ключу
      this._selectItems(Object.keys(items[0])[0]);

      this._navItems[0].classList.add(this._tableSetting.itemHeaderActiveClass);

      return
    }

    this._handleRemoveItems();

    items.forEach(item => {
      this._handleAddItem(item);
    })
  }

  setEventListeners = () => {
    this._navItems.forEach(item => item.addEventListener('click', () => {
      this._navItems.forEach(i => {
        item.classList.remove(this._tableSetting.itemReverseClass);
        i.classList.remove(this._tableSetting.itemHeaderActiveClass);
      });

      // при клике на элемент навигации, получаем атрибут элемента,
      // который соответствует названию ключа объекта для дальнейшей сортировки
      this._selectItems(item.getAttribute('data-type'));

      // проверяем значение массива, перевернут он или нет, чтобы изменить иконку
      if (this._isReverseItems) {
        item.classList.add(this._tableSetting.itemReverseClass);
      } else {
        item.classList.remove(this._tableSetting.itemReverseClass);
      }

      item.classList.add(this._tableSetting.itemHeaderActiveClass);
    }))
  }
}

export default Table;
