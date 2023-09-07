// Реализовать функцию конвертации `JSON` в строку

// ==================================================

// не уверен, что верно понял задание, тк JSON и является типом данных string
// поэтому функция конвертация, проверит, является ли переданные данные типом string
// и если нет, проведёт преобразование в строку
console.log(JSON.stringify('Hello world!')); // "Hello world!"
console.log(typeof JSON.stringify('Hello world!')); // string
console.log(JSON.stringify({ name: 'John', age: 25, })); // {"name":"John","age":25}
console.log(typeof JSON.stringify({ name: 'John', age: 25, })); // string

function convertToString(value) {
  if (typeof value === 'string') {
    return value;
  }

  return JSON.stringify(value);
}

console.log(convertToString({ name: 'Brian', age: 19, })); // {"name":"Brian","age":19}
console.log(typeof convertToString({ name: 'Brian', age: 19, })); // string
console.log(convertToString(JSON.stringify({ name: 'Eva', age: 27, }))); // {"name":"Eva","age":27}
console.log(typeof convertToString(JSON.stringify({ name: 'Eva', age: 27, }))); // string
