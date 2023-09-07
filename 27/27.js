// Добавить анимацию для элемента: Напишите функцию, которая добавляет анимацию для
// элемента на веб-странице, например, плавное изменение его положения или размера.

// ==================================================

'use strict'

// видоизменённое решение с learn.javascript
  const body = document.querySelector('body');
  const ball = document.querySelector('#ball');

  // функция берет «обычную» функцию расчёта времени и возвращает обёртку над ней
  // таким образом отскоки будут не в начале (сверху) а в конце (снизу)
  const makeEaseOut = (timing) => {
    return function(timeFraction) {
      return 1 - timing(1 - timeFraction);
    }
  }

  // функция прыгающего мяча
  const bounce = (timeFraction) => {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
    }
  }

  const makeAnimation = (options) => {
    // обращаемся к API браузера, чтобы получить метку времени в миллисекундах
    const start = performance.now();

    // встроенный метод браузера, который вызывает переданную в него функцию
    // в тот момент, когда браузер готовится совершить перерисовку
    requestAnimationFrame(function makeAnimation(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / options.duration;

      if (timeFraction > 1) timeFraction = 1;

      // вычисление текущего состояния анимации
      let progress = options.timing(timeFraction)

      options.draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }

    });
  }

  // устанавливаем слушатель по нажатию
  ball.addEventListener('click', () => {
    // body.clientHeight - высота body 100vh, clientHeight - 100% высоты окна пользовательского устройства
    // ball.clientHeight - высота мяча
    // height - высчитываем выосту от низа мяча до нижнего края экрана
    let height = body.clientHeight - ball.clientHeight;

    makeAnimation({
      // продолжительность анимации
      duration: 1900,
      // функция расчёта времени, как CSS-свойство transition-timing-function,
      // которая будет вычислять прогресс анимации (как ось y у кривой Безье)
      // в зависимости от прошедшего времени (0 в начале, 1 в конце).
      timing: makeEaseOut(bounce),
      // функция отрисовки, которая получает аргументом значение прогресса анимации и отрисовывает его.
      // Значение progress=0 означает, что анимация находится в начале, и значение progress=1 – в конце.
      draw(progress) {
        ball.style.top = height * progress + 'px'
      }
    });
  });
