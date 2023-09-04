// Посчитайте сколько раз можно вызвать функцию `document.write()` внутри `document.write()`. Объясните результат.

// ==================================================

// из статьи за 2016 год https://habr.com/ru/articles/305366/
// нашел информацию, что document.write можно вызвать 21 раз для Google Chome,
// 20 раз для Firefox и меньше для IE. На практике это не так

document.write(document.write(document.write(document.write(
  document.write(document.write(document.write(document.write(
    document.write(document.write(document.write(document.write(
      document.write(document.write(document.write(document.write(
        document.write(document.write(document.write(document.write(
          document.write(document.write(document.write(document.write(
            document.write(document.write(document.write(document.write(

)))))))))))))))))))))))))))) // 28 вызовов
// каждый из которых (кроме первого), вставляет undefined на страницу.
// это может говорить, либо об ошибке в статье, либо изменении принципа работы браузера с 2016 года.

// более правильным ответ считаю: количество вызовов document.write внутри document.write
// ограниченно размером call stack, это означает более 10000 вызовов в Google Chrome
