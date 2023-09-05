// Задача на промисы: напишите функцию, которая принимает URL изображения и возвращает промис,
// который разрешается с данными об изображении, когда оно загружено.
// Когда говорится "промис разрешается с данными об изображении",
// это означает, что промис должен быть успешно выполнен (resolved)
// с данными об изображении после того,как изображение будет загружено.

// ==================================================

const loadImage = (url) => {
  // возвращаем состояние промиса
  return new Promise((resolve, reject) => {
    const image = document.createElement('img');

    // 2. после того как изображение из ссылки загрузится, сработает событие onload
    image.onload = () => {
      // если изображение загружено, записываем данные в состояние промиса
      resolve({
        img: image,
        width: image.width,
        height: image.height,
      })
    };

    // 3. если произогла ошибка, в событие oneerror в reject передаём ошибку
    image.onerror = (err) => {reject(err)};

    image.src = url; // 1. в атрибут записываем ссылку
  })
};

loadImage('https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')
  .then(() => console.log('image onload'))
  .catch(() => console.log('a loading error has occurred'));
