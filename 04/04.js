// Разработать функцию, изменяющую окончание слов в зависимости от падежа. Например:
//    112 сообщения
//    12 сообщений
//    1 сообщение
//    1024 пользователя
//    1026 пользователей
//    121 пользователь
//
//    Функцию надо упаковать в модуль.

// ==================================================

// модуль на вход получает число и массив слов с разными окончаниями
// 1 - сообщение, 2 - сообщения, 5 - сообщений
function getEndLine(num, titles) {
  return titles[
    // обращаемся к элементу массива
    // если остаток при делении числа на 10 = 1, и при делении на 100 не получаем 11
    // обращаемся к первому элементу массива
    // 1 - сообщение, 31 - сообщение, но 10, 11 - сообщений
    num % 10 === 1 && num % 100 !== 11
    ? 0
    // если остаток от деления на 10 больше или равно 2 но меньше или равно 4
    // и меньше 10 или больше или равно 20
    // 2, 3, 4 - сообщения, от 11 до 20 - сообщений, 22, 23, 24 и тд - сообщения
    : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)
    ? 1
    // все остальные варианты - сообщений
    : 2
  ]
}

export default getEndLine;
