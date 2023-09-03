// Задача о коллекции функций: у вас есть массив функций, напишите код,
// который вызовет каждую функцию в этом массиве и выведет их порядковый номер.
// Однако, вызов каждой функции должен происходить только после вызова предыдущей функции.

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

  // перебор массива методом forEach, с использованием двух его параметров
  // func - текущий элемент и index порядковый номер элемента
  arrayFunc.forEach((func, index) => {
    // добавляем 1 к элементу, например если номер показываем для пользователя (чтобы начинался с 1)
    console.log(func(), `index: ${index + 1}`);
  })

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
        }, 600)
      })
    },
    funcB = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve("Hello! I'm Func C")
        }, 1400)
      })
    },
  ];

  // async/await специальный синтаксис для работы с промисами
  // async всегда возвращает промис
  const callAllAsyncFunc = async (array) => {
    for (let i = 0; i < array.length; i++) {
      // обращаемся к элементу массива, в соответствии с текущим индексом цикла
      // тк, мы знаем, что это функция, сразу вызываем её.
      // await остановит интерпритатор javaScript до момента выполнения промиса справа
      const result = await arrayAsyncFunc[i]();

      console.log(result, `index: ${i}`)
    }
  }

  callAllAsyncFunc(arrayAsyncFunc);
