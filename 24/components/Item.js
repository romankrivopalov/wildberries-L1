class Item {
  constructor(data, itemSetting) {
    this._data = data;
    this._itemSetting = itemSetting;
  }

  _getTemplate = () => {
    const item = document
      .querySelector(this._itemSetting.templateSelector)
      .content
      .querySelector(this._itemSetting.itemSelector)
      .cloneNode(true);

    return item;
  }

  generateItem = () => {
    this._item = this._getTemplate();
    this._item.querySelector(this._itemSetting.itemFNameSelector).textContent = this._data.fname;
    this._item.querySelector(this._itemSetting.itemLNameSelector).textContent = this._data.lname;
    this._item.querySelector(this._itemSetting.itemTelSelector).textContent = this._data.tel;
    this._item.querySelector(this._itemSetting.itemAddrSelector).textContent = this._data.address;
    this._item.querySelector(this._itemSetting.itemCitySelector).textContent = this._data.city;
    this._item.querySelector(this._itemSetting.itemStateSelector).textContent = this._data.state;
    this._item.querySelector(this._itemSetting.itemZipSelector).textContent = this._data.zip;

    return this._item;
  }
}

export default Item;
