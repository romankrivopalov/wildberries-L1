// Задача о странных числах: Напишите функцию, которая принимает число и возвращает `true`,
// если это число является странным, и `false` в противном случае.
// Странным числом считается число, которое равно сумме всех своих делителей, кроме самого себя.

// ==================================================

'use strcit'

const isWeirdNumber = (num) => {
  // требуется найти все делители числа, получить их сумму
  // и сравнить с числом, если сумма больше, возвращаем true
  let sumDivisors = 0;

  for (let i = 1; i < num; i++) {
    // запускаем цикл, проверяем каждое целое число
    // является ли оно делителем
    if (num % i === 0) sumDivisors += i;
  }

  return sumDivisors > num ? true : false;
}

// в описании понятия странного числа нашел, что 12 не является странным
// но согласно определению, 1 + 2 + 3 + 4 + 6 = 16
// описания этого не нашел, поэтому считаю, 12 должно являться странным

console.log(isWeirdNumber(12)); // true
console.log(isWeirdNumber(16)); // false
console.log(isWeirdNumber(70)); // true
console.log(isWeirdNumber(91)); // false
console.log(isWeirdNumber(836)); // true

// UPD
  // вариант решения, для поиска не "странного числа", а "совершенного числа"
  // Соверше́нное число — натуральное число, равное сумме всех своих собственных делителей

  const isPerfectNumber = (num) => {
    // требуется найти все делители числа, получить их сумму
    // и сравнить с числом, если сумма равна числу, возвращаем true
    let sumDivisors = 0;

    for (let i = 1; i < num; i++) {
      if (num % i === 0) sumDivisors += i;
    }

    return sumDivisors === num ? true : false;
  }

  console.log(isPerfectNumber(6)); // true
  console.log(isPerfectNumber(16)); // false
  console.log(isPerfectNumber(70)); // false
  console.log(isPerfectNumber(496)); // true
  console.log(isPerfectNumber(836)); // false
