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
