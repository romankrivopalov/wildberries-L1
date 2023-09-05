// Необходимо реализовать простое поле ввода адреса с функцией
// геокодинга: пользователь вводит данные в поле с помощью одного
// из геоинформационных сервисов (Яндекс.Карты, ДаДата, GraphHopper),
// подбирается адрес. Найденные данные должны отображаться в
// выпадающем списке, из которого можно выбрать подходящее значение.

// ==================================================

// geocode
// https://yandex.ru/dev/jsapi-v2-1/doc/ru/v2-1/ref/reference/geocode

// geocodeResult
// https://yandex.ru/dev/jsapi-v2-1/doc/ru/v2-1/ref/reference/GeocodeResult

// методы GeoObjects
// https://yandex.ru/dev/jsapi-v2-1/doc/ru/v2-1/ref/reference/map.GeoObjects#methods-summary

const input = document.querySelector('#input');
const output = document.querySelector('#output');

// когда DOM дерево будет полностью построено (defer в html), произойдёт вызов ymaps.ready
ymaps.ready(() => {
  // метод добавления элемента на страницу
  const addElement = (elem) => {
    output.append(elem);
  }

  // метод создания элемента
  const createElement = (data) => {
    const item = document.createElement('div');

    item.textContent = data;

    addElement(item);
  }

  // метод поиска адресов
  const geocode = (address) => {
    // geocode - cтатическая функция, обрабатывающая запросы геокодирования
    ymaps.geocode(address)
      .then(res => {
        console.log(res)
        // GeoObjects - Коллекция геообъектов карты.
        // метод getLength - Возвращает длину коллекции.
        if (res.geoObjects.getLength() < 1) {
          // Если элементов в коллекции нет
          createElement('Ничего не найдено');

          return
        }

        // метод each - для каждого дочернего геообъекта, вызывает функцию-обработчик.
        res.geoObjects.each((item) => {
          createElement(item.getAddressLine());
        })
      })
  };

  // функция обёртка (debounce) для слушателя событий, создающая задержку между запросами
  // https://zerowp.com/efficient-user-input-delay-in-javascript-typescript/
  const observeInput = () => {
    let timer;

    input.addEventListener('input', () => {
        // удаление слушателя
        clearTimeout(timer);

        // очищение содержимого перед новым запросом
        output.innerHTML = '';

        timer = setTimeout(() => {
          // отправка данных для запроса
          geocode(input.value);
        }, 1500);
    });
  }

  // вызов функции обёртки установки слушателя
  observeInput();
});
