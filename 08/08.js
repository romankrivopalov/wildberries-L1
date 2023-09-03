// Задача о замыканиях: напишите функцию, которая будет принимать массив функций
// и возвращать новую функцию, которая вызывает каждую функцию в этом массиве
// и возвращает массив результатов, полученных после вызова каждой функции.

// ==================================================

// два варианта решения, для сихнонных и асинхронных функций
// Вариант №1, массив синхронных функций
const arrayFunc = [
  funcA = () => {
    // каждая функция возвращает строку
    return "Hello! I'm Func A";
  },
  funcB = () => {
    return "Hello! I'm Func B";
  },
  funcB = () => {
    return "Hello! I'm Func C";
  },
]

const callAllFunc = (array) => {
  // согласно условию, возвращаем самовызывающуюся функцию,
  // которая сработает сразу после вызова callAllFunc
  return function() {
    // с помощью метода map перебираем каждый элемент массива,
    // тк мы знаем, что внутри функция, сразу вызываем её
    // и новый массив, с результатом выполнения каждой функции присваиевам в новую переменную
    const result = array.map(func => func());

    return result;
  }();
}

console.log(callAllFunc(arrayFunc)); // => [ "Hello! I'm Func A", "Hello! I'm Func B", "Hello! I'm Func C" ]

// Вариант №2, массив асинхронных функций
const arrayAsyncFunc = [
  funcA = () => {
    // каждая функция возвращает промис, для имитации асинхронного кода
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Hello! I'm Func A")
      }, 2000)
    })
  },
  funcB = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Hello! I'm Func B")
      }, 300)
    })
  },
  funcB = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Hello! I'm Func C")
      }, 1000)
    })
  },
]

const callAllAsyncFunc = (array) => {
  return async function() {
    // дожидаемся ответа метода Promise.all, который вернет выполнится,
    // после выполнения каждого из промисов в массиве, который вернёт метод map
    const result = await Promise.all(array.map(func => func()));

    return result;
  }();
}

callAllAsyncFunc(arrayAsyncFunc).then(res => console.log(res));
