// Реализовать виджет, отображающий список постов из любого паблика в VK
// (подойдет любой паблик, где постов очень много).
// Например, с помощью этой [функции API VK](https://dev.vk.com/ru/method/wall.get).
// Виджет должен иметь фиксированные размеры и возможность прокрутки.
// При прокрутке содержимого виджета до конца должны подгружаться новые посты.
// Необходимо реализовать возможность кэширования уже загруженных данных:
// если пользователь закрыл страницу, а потом снова открыл ее,
// виджет должен отображать все загруженные ранее данные (новые данные
// должны подгружаться из учетом уже загруженных ранее).

// При переполнении `localStorage`, данные, загруженные последними должны вытеснять данные загруженные первыми.

// Реализовать функцию подсчета объема памяти занимаемого данными
// в LocalStorage для предыдущей задачи. При изменении данных в localStorage
// в консоль должен выводиться объем занятой памяти / максимальный размер хранилища.

// ==================================================

const token = window.location.hash.split("=")[1].split("&")[0]

const fetchPosts = () =>
  VK.Api.call('wall.get', {
      owner_id: -121205266,
      domain: 'palitrannov',
      count: 5,
      offset: 1,
      access_token: token,
      v: 5.131
      }, (res) => {console.log(res)}
  );

fetchPosts();
