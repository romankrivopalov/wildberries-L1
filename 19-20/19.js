// Задание №19
//   Реализовать виджет, отображающий список постов из любого паблика в VK
//   (подойдет любой паблик, где постов очень много).
//   Например, с помощью этой [функции API VK](https://dev.vk.com/ru/method/wall.get).
//   Виджет должен иметь фиксированные размеры и возможность прокрутки.
//   При прокрутке содержимого виджета до конца должны подгружаться новые посты.
//   Необходимо реализовать возможность кэширования уже загруженных данных:
//   если пользователь закрыл страницу, а потом снова открыл ее,
//   виджет должен отображать все загруженные ранее данные (новые данные
//   должны подгружаться из учетом уже загруженных ранее).

// При переполнении `localStorage`, данные, загруженные последними должны вытеснять данные загруженные первыми.

// Задание №20
//    Реализовать функцию подсчета объема памяти занимаемого данными
//    в LocalStorage для предыдущей задачи. При изменении данных в localStorage
//    в консоль должен выводиться объем занятой памяти / максимальный размер хранилища.

// ==================================================

// как работает код:
// открытие страницы https://oauth.vk.com/authorize?client_id=51744416&display=page&redirect_uri=http://127.0.0.1:5500/19-20/19.html&scope=offline&response_type=token
// ведет пользователя на авторизацию через VK и последующий редирект на http://127.0.0.1:5500/19-20/19.html
// После авторизации, а адресной строке пользователю будетт выдан token, с помощью которого
// после загрузке скрипта, функция fetchPosts сделает запрос на получение данных со стены указанного сообщества
const container = document.querySelector('.container');
let maxSpaceLocalStorage = 0;

// функция подсчета объема локального хранилища из 18 задачи
// https://github.com/romankrivopalov/wildberries-L1/tree/main/18
const calculateSpaceLocalStorage = () => {
  let value = 'a';
  localStorage.clear();

  while (true) {
    try {
      localStorage.setItem('', value);
      value += value;
    } catch {
      break
    }
  }

  localStorage.clear();
  return Math.floor((value.length / 2) * 2);
}

// устанавливаем значение максильного размера хранилища
maxSpaceLocalStorage = calculateSpaceLocalStorage();

// вырезаем из строки token пользователя
const token = window.location.hash.split("=")[1].split("&")[0];
// количество загружаемых постов
let count = 5;
// номер поста с которого нужно загрузить переданное количество (count)
let offset = 0;

// добавление элементов при скроле
// https://doka.guide/js/intersection-observer/
// с помощью конструктора создаём Intersection Observer
// на вход принимает
const observer = new IntersectionObserver(entries => {
  // entries — список объектов с информацией о пересечении.
  entries.forEach((entry) => {
    // isIntersecting — булево значение. true если есть пересечение элемента и наблюдаемой области.
    if (entry.isIntersecting) {
      // убрать элемент из списка наблюдаемых
      observer.unobserve(entry.target);

      fetchPosts();
    }
  })
});

// подсчет размера занимаемых данных
const caltulateSizeItemsInLocalStorage = () => {
  let total = 0

  // перебираем все ключи в localstorage и считаем длину
  for (let i in localStorage) {
      if (!localStorage.hasOwnProperty(i)) continue;

      total += localStorage[i].length * 2;
  };

  console.log(`Размер содержимого localStorage: ${total} килобайт`)
  console.log(`Ориентировочный размер localStorage: ${maxSpaceLocalStorage} килобайт`)
}

// установка данных в локальное хранилище
const setItemsInLocalStorage = (array) => {
  try {
    // если элементы в localstorage уже есть
    if (localStorage.getItem('data')) {
      // получаем массив из localstorage
      const data = JSON.parse(localStorage.getItem('data'));

      // перезаписываем старый массив на развернутый старый и развернутый новый, объединённый массив
      localStorage.setItem('data', JSON.stringify([...data, ...array]));

      caltulateSizeItemsInLocalStorage();
    } else {
      localStorage.setItem('data', JSON.stringify(array));

      caltulateSizeItemsInLocalStorage();
    }
  } catch {
    // если появилась ошибка при установке новых данных
    const data = JSON.parse(localStorage.getItem('data'));

    // перезаписываем имеющейся массив, отрезав от него первые 10% длины
    localStorage.setItem('data', JSON.stringify(data.slice(Math.floor(data.length / 10), data.length)));

    caltulateSizeItemsInLocalStorage();
  }

}

const fetchPosts = () =>
  // https://dev.vk.com/ru/method/wall.get
  VK.Api.call('wall.get', {
    owner_id: -121205266, // id сообщества VK
    domain: 'palitrannov',
    count: count, // количество записей
    offset: offset,
    access_token: token,
    v: 5.131
    }, (res) => {
      setItemsInLocalStorage(res.response.items);

      // добавляем к отступу, количество загруженных элементов
      offset += count;

      // добавляем новые элементы на страницу
      res.response.items.forEach(item => addItem(item));

      // запускаем наблюдателя за новым (последним) элементом
      observer.observe(document.querySelector('.item:last-child'));
    }
  );

// создание нового элемента
const createItem = (data) => {
  const item = document.createElement('li');
  item.classList.add('item');

  const date = document.createElement('span');
  date.classList.add('date');
  dateData = new Date(data.date * 1000);
  date.textContent = `${dateData.toLocaleDateString()} ${dateData.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;

  // в li элемент добавляем span с датой
  item.append(date)

  if (data.attachments[0].photo) {
    const img = document.createElement('img');
    img.classList.add('img');
    img.src = data.attachments[0].photo.sizes[3].url;

    item.append(img);
  }

  const text = document.createElement('p');
  text.classList.add('text');
  text.textContent = data.text;

  item.append(text);

  return item
}

// добавление элемента на страницу
const addItem = (item) => {
  container.append(createItem(item));
}

// начальная функция, проверяющая наличия данных в localStorage
const setItems = () => {
  if (localStorage.getItem('data')) {
    const data = JSON.parse(localStorage.getItem('data'));

    data.forEach(item => addItem(item));

    observer.observe(document.querySelector('.item:last-child'));
  } else {
    // если localstorage пуст, делаем запрос на получение
    fetchPosts();
  }
}

setItems();
