class Item {
  constructor(data, itemSetting) {
    this._data = data;
    this._itemSetting = itemSetting;
  }

  _getTemplate = () => {
    const item = document
      .querySelector('#template')
      .content
      .querySelector('.item')
      .cloneNode(true);

    return item;
  }

  generateItem = () => {
    this._item = this._getTemplate();
    this._item.querySelector('.item__content[data-type="fname"]').textContent = this._data.fname;
    this._item.querySelector('.item__content[data-type="lname"]').textContent = this._data.lname;
    this._item.querySelector('.item__content[data-type="tel"]').textContent = this._data.tel;
    this._item.querySelector('.item__content[data-type="address"]').textContent = this._data.address;
    this._item.querySelector('.item__content[data-type="city"]').textContent = this._data.city;
    this._item.querySelector('.item__content[data-type="state"]').textContent = this._data.state;
    this._item.querySelector('.item__content[data-type="zip"]').textContent = this._data.zip;

    return this._item;
  }
}

export default Item;
