// Разработайте страницу, отображающую таблицу с данными.
// Данные необходимо подгружать из этого
// (http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true).

// Требования:
//    данные должны загружаться при загрузке страницы
//    необходимо реализовать сортировку по убыванию и по возрастания для всех колонок
//    необходимо реализовать клиентскую пагинацию (50 элементов на странице)

// ==================================================

import Api from './components/Api.js';
import Table from './components/Table.js';
import Section from './components/Section.js';
import Item from './components/Item.js';

const tableSetting = {
  itemSelector: '#header-item',
}

const api = new Api();
const itemList = new Section(
  '#list',
  (data) => {
    const item = new Item(data);
    return item.generateItem();
  }
)
const table = new Table(tableSetting, itemList.setItem, itemList.removeItems);


api.getData()
  .then(res => table.setItems(res))

// table.setItems([
//   {
//     "fname": "Joseph",
//     "lname": "Gleason",
//     "tel": "(763)957-0890",
//     "address": "603 Ac Ct",
//     "city": "Eastvale",
//     "state": "C",
//     "zip": 37397
//   },
//   {
//     "fname": "Aatikorn",
//     "lname": "Gilby",
//     "tel": "(742)674-1389",
//     "address": "401 Sed Ct",
//     "city": "Nashville",
//     "state": "A",
//     "zip": 87241
//   },
//   {
//     "fname": "Haile",
//     "lname": "Hammant",
//     "tel": "(273)378-4421",
//     "address": "9437 Neque Rd",
//     "city": "Cheektowaga",
//     "state": "F",
//     "zip": 41077
//   },
//   {
//     "fname": "Bayle",
//     "lname": "Aorth",
//     "tel": "(764)758-4969",
//     "address": "9791 Sapien Ave",
//     "city": "Palm Beach Gardens",
//     "state": "B",
//     "zip": 85351
//   },
//   {
//     "fname": "Mark",
//     "lname": "Rainwater",
//     "tel": "(916)901-0654",
//     "address": "170 Lorem Ave",
//     "city": "Pensacola",
//     "state": "D",
//     "zip": 26469
//   },
// ])

table.setEventListeners();


