// Реализовать аналог библиотеки Math (можно назвать MathX) с
// базовым набором функций, используя замыкания:
//    вычисление N-го числа в ряду Фибоначчи
//    вычисление всех чисел в ряду Фибоначчи до числа N
//    вычисление N-го просто числа
//    вычисление всех простых чисел до числа N

// Будет плюсом, если задумаетесь и об оптимизации.

// ==================================================

// Числа Фибоначчи — это последовательность чисел, которые задаются по
// определённому правилу. Оно звучит так: каждое следующее число равно
// сумме двух предыдущих. Первые два числа заданы сразу и равны 0 и 1.

class MathX {
  getNthNum = (num) => {
    let prevValue = 0;
    let nextValue = 1;

    // запускаем цикл, с количеством итераций num - 1
    for (let i = 0; i < num; i++) {
      // в nextValue добавляем сумму следующего значения
      nextValue += prevValue;
      // в prevValue, записываем разность следующего и предыдущего числа
      prevValue = nextValue - prevValue;
    }

    return prevValue;
  }

  getAllNumBeforNthNum = (num) => {
    const result = [];

    for (let i = 0; i < num; i++) {
      // записываем результат вызова каждой функции getNthNum в массив
      result.push(this.getNthNum(i));
    }

    return result
  }

  getPrimeNum = (num) => {
    // запускаем цикл, проходим по всем числам от 2 до num - 1
    for (let i = 2; i < num; i++) {
      // если число делится на значение итерации без остатка, возвращаем false
      if (num % i === 0) return false;
    }

    // если цикл не прекратился, значит, число делится только на себя, возвращаем true
    return true
  }

  getAllPrimeNumBeforeNthNum = (num) => {
    const result = [];

    for (let i = 2; i <= num; i++) {
      // если число простое, записываем его в массив
      if (this.getPrimeNum(i)) {
        result.push(i);
      }
    }

    return result;
  }
}

const mathX = new MathX();

console.log(mathX.getNthNum(12)); // 144
console.log(mathX.getAllNumBeforNthNum(9)); // [ 0, 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(mathX.getPrimeNum(11)); // true
console.log(mathX.getAllPrimeNumBeforeNthNum(17)); // [ 2, 3, 5, 7, 11, 13, 17 ]
