// Вычислить размер коллстэка в основных браузерах: Chrome, Firefox, Opera и Safari (если есть возможность).

// ==================================================

// Посчитать количество вызовов на Safari возможности нет,
// в примере привожу данные из Google Chrom

// Стек вызовов или call stack — это список всех активных функций,
// которые вызывались, до текущей точки выполнения.

  // счётчик вызовов
  let countA = 0;

  const funcA = () => {
    countA++;

    // рекурсивная функция
    funcA();
  };

  // блок для отлова ошибки
  try {
    funcA();
  } catch (e) {
    console.log(countA); // 13936
  }


  let countB = 0;

  const funcB = () => {
    // для теста добавляю несколько переменных
    const exampleVariableA = countB + 1;
    const exampleVariableB = countB + 2;
    const exampleVariableC = countB + 3;

    countB++;

    funcB();
  };

  try {
    funcB();
  } catch (e) {
    console.log(countB); // 10452
  }
