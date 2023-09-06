class Table {
  constructor(tableSetting, handleAddItem, handleRemoveItems) {
    this._tableSetting = tableSetting;
    this._navItems = document.querySelectorAll(this._tableSetting.itemSelector);
    this._navItems = document.querySelectorAll(this._tableSetting.itemSelector);
    this._handleAddItem = handleAddItem;
    this._handleRemoveItems = handleRemoveItems;
    this._activeSelector = null;
    this._isReverseItems = false;
  }

  _getPagination = (items) => {
    this.setItems(items.slice(0, 49));
  }

  // установить элементы
  _selectItems = (selector) => {
    const selectedItems = this._items.sort((a, b) => (b[selector] < a[selector]) - (a[selector] < b[selector]));

    // если элемент, уже выбран, передаём развернутый массив
    if (this._activeSelector === selector) {
      if (!this._isReverseItems) {
        // проверить длину и разделить для пагинации
        this._getPagination(selectedItems)
        // this.setItems(selectedItems); // перенес в _getPagination

        this._isReverseItems = true;
      } else {
        // проверить длину и разделить для пагинации
        this._getPagination(selectedItems.reverse())
        // this.setItems(selectedItems.reverse()); // перенес в _getPagination

        this._isReverseItems = false;
      }

      return
    }

    this._activeSelector = selector;
    this._isReverseItems = false;
    this._getPagination(selectedItems.reverse())
    // this.setItems(selectedItems.reverse()); // перенес в _getPagination
  }

  // усновить элементы
  setItems = (items) => {
    this._items = items;

    // проверка для первых элементов
    if (!this._activeSelector) {
      // если активного класса нет, значит это первые элементы
      // вызываем, _selectItems который установит _activeSelector по первому ключу
      this._selectItems(Object.keys(items[0])[0]);

      this._navItems[0].classList.add('header__item_active');

      return
    }

    this._handleRemoveItems();

    this._items.forEach(item => {
      this._handleAddItem(item);
    })
  }

  setEventListeners = () => {
    this._navItems.forEach(item => item.addEventListener('click', () => {
      this._navItems.forEach(i => {
        item.classList.remove('reverse');
        i.classList.remove('header__item_active');
      });

      this._selectItems(item.getAttribute('data-type'));

      // проверяем значение массива, перевернут он или нет, чтобы изменить иконку
      if (this._isReverseItems) {
        item.classList.add('reverse');
      } else {
        item.classList.remove('reverse');
      }

      item.classList.add('header__item_active');
    }))
  }
}

export default Table;
