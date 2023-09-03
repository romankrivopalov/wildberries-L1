// Задача о замыканиях: напишите функцию, которая будет принимать массив функций и возвращать новую функцию, 
// которая вызывает каждую функцию в этом массиве и возвращает 
// массив результатов, полученных после вызова каждой функции.

// const f1 = () => {
//   for (let i = 0; i < 100000000; i++) i * i; 
//   return 'Function 1 result';
// };
// const f2 = () => {
//   for (let i = 0; i < 1000000; i++) i * i; 
//   return 'Function 2 result';
// };
// const f3 = () => {
//   for (let i = 0; i < 1000000000; i++) i * i; 
//   return 'Function 3 result';
// };
// const f4 = () => {
//   for (let i = 0; i < 100; i++) i * i; 
//   return 'Function 4 result';
// };

// const functions = [f1, f2, f3, f4];

// // Не оговорено, синхронные функции или нет. Считаю, что синхронные.
// const solution = (funcs) => {
//   return function() {
//     const results = [];
//     funcs.forEach(fn => {
//       results.push(fn());
//     })
//     return results;
//   }
// }

// const s = solution(functions);
// console.log(s());


// Если функции асинхронные:
const f1 = () => {
  return new Promise(function(resolve) {
    setTimeout(() => resolve("Function 1 result"), 400);
  });
};
const f2 = () => {
  return new Promise(function(resolve) {
    setTimeout(() => resolve("Function 2 result"), 200);
  });
};
const f3 = () => {
  return new Promise(function(resolve) {
    setTimeout(() => resolve("Function 3 result"), 600);
  });
};
const f4 = () => {
  return new Promise(function(resolve) {
    setTimeout(() => resolve("Function 4 result"), 0);
  });
};

const functions = [f1, f2, f3, f4];

const solution = (funcs) => {
  return async function() {
    const results = await Promise.all(funcs.map(fn => fn()));
    return results;
  }
}

const s = solution(functions);
s().then(console.log);