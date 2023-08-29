'use strict'

const noPalindrom = 'Wilberries';
const palindrom1 = 'Madam';
const palindrom2 = 'Диван незаразен на вид';
const palindrom3 = 'Отчаян я, а чтО?';

// Вариант №1
  // перевернуть строку и сравнить с оригиналом
  const isPalindrom1 = (str) => {
    // приводим строку к нижнему регистру, и убираем пробелы
    str = str.toLowerCase().replace(/\s/g,'');

    // делим строку на символы, разворачиваем её и объединяем
    // сравниваем два варианта
    return str === str.split('').reverse().join('');
  }

  console.log(isPalindrom1(noPalindrom)) // false
  console.log(isPalindrom1(palindrom1)) // true
  console.log(isPalindrom1(palindrom2)) // true
  console.log(isPalindrom1(palindrom3)) // false

  // недостаток заключается в том, что если в строке будет знак пунктуации
  // результат будет ошибочным


// ==================================================


// Вариант №2
  // необходимо пройтись циклом по всей строке и сравнить поочередно
  // каждый символ в начале и в конце строки,
  // если символы являются буквой и они равны, сдвинуть указатели к середине.

  // если цикл не прервется, то строка будет считаться палиндромом, и функция вернёт true

  // сранение букв
  const isEquals = (str1, str2) => {
    return str1.toLowerCase() === str2.toLowerCase();
  }

  // проверка, является ли символ буквой
  const isLetter = (char) => {
    // проверка путём сравнения символа в верхнем регистре и нижнем регистре
    // если это пробел или знак пунктуации, функция вернет false
    return char.toLowerCase() !== char.toUpperCase();
  }

  const isPalindrom2 = (str) => {
    // создаём два указателя
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
      const firstChar = str[start];
      const endChar = str[end];

      // если один из указателей не является буквой, сдвигаем указатель к центру и переходим к следующей итерации цикла
      if (!isLetter(firstChar)) {
        start += 1;
        continue;
      } else if (!isLetter(endChar)) {
        end -= 1;
        continue;
      }

      // если буквы не равны, завершаем цикл, тк строка не палиндром
      if (!isEquals(firstChar, endChar)) {
        return false;
      }

      start += 1;
      end -= 1;
    }

    return true;
  }

  console.log(isPalindrom2(noPalindrom)) // false
  console.log(isPalindrom2(palindrom1)); // true
  console.log(isPalindrom2(palindrom2)); // true
  console.log(isPalindrom2(palindrom3)); // true
