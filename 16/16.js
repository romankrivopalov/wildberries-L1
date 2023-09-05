// Задача на модули и использование внешних библиотек: напишите модуль,
// который экспортирует функцию для работы с датами. Внутри модуля используйте
// внешнюю библиотеку `Moment.js` для удобной работы с датами.

// ==================================================

// есть несколько вариантов подключения библиотеки, выбрал наиболее простой (через cdnjs) для примера
// модуль будет экспортировать класс со встроенными методами
// все методы работает в формате текущего значения даты или запрощенного
export default class MomentDate {
  // получить дату
  getDate(day, month, year) {
    // если какие либо данные не переданы, возвращает данные текущей даты
    if (!(day, month, year)) return moment().format('DD.MM.YYYY');

    // вызываем библиотеку с помощью ключевого слова moment
    // в формат передаём нужную дату и указываем передоваемый формат
    return moment(`${day}/${month}/${year}`, 'DD/MM/YYYY').format('DD.MM.YYYY');
  }

  // получить дату в коротком виде
  getShortDate(day, month, year) {
    if (!(day && month && year)) return moment().format('DD.MM.YY');

    return moment(`${day}/${month}/${year}`, 'DD/MM/YYYY').format('DD.MM.YY');
  }

  // получить полную дату
  getFullDate(day, month, year) {
    if (!(day && month && year)) return moment().format('LL');

    return moment(`${day}/${month}/${year}`, 'DD/MM/YYYY').format('LL');
  }

  // получить номер квартала
  getQuarterYear(month) {
    if (!month) return moment().format('Q');

    return moment(month, 'MM').format('Q');
  }

  // получить число дня в году (с годом, для учёта високосных годов)
  getDayOfYear(day, month, year) {
    if (!(day && month && year)) return moment().format('DDD');

    return moment(`${day}/${month}/${year}`, 'DD/MM/YYYY').format('DDD');
  }
}
