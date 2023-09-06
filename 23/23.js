// Анализатор сложности пароля: создайте функцию, которая оценивает сложность
// введенного пользователем пароля. Необходимо анализировать длину пароля,
// использование различных символов, наличие чисел и букв в разных регистрах.
// Выведите пользователю оценку сложности пароля и предложите улучшения, если пароль слишком слабый.

// ==================================================

const input = document.querySelector('#input');
const output = document.querySelector('#output')

const checkSecurity = (value) => {
  // скрыть блок, если поле пустое
  if (value.length === 0) {
    output.style.display = 'none';

    return
  }

  // если введено меньше 5 символов, выдаем ошибку
  // более правильно реализовать валидацию, но тк это не оговерено заданием
  // для простоты примера управляю элементом через inline стили
  if (value.length < 5) {
    output.textContent = 'Пароль меньше 5 символов';
    output.style.display = 'block';
    output.style.color = 'red';

    return
  }

  // пременные счетчики
  let isLength = 0, isDifferCase = 0, isSymbol = 0, isNum = 0, isCombo = 0;

  const checkTotal = () => isLength + isDifferCase + isSymbol + isNum + isCombo;

  if (value.match(/(?=.*[A-Z])/g) && value.match(/(?=.*[a-z])/g)) isDifferCase = 1;
  if (value.match(/(?=.*[!@#$%^&*])/g)) isSymbol = 1;
  if (value.match(/\d+/g)) isNum = 1;

  // если длина больше 10, но нет верхнего регистра, символа или цифры
  if (value.length >= 10 && !(isDifferCase || isSymbol || isNum)) {
    isLength = 1;
  // если длина больше 6 и есть верхний регистр, символ или цифра
  } else if (value.length >= 7 && (value.length < 10 && (isDifferCase || isSymbol || isNum))) {
    isCombo = 1;
  // если длина больше 8 и есть верхний регистр, символ или цифра
  } else if (value.length >= 10 && (isDifferCase || isSymbol || isNum)) {
    isCombo = 1;
    isLength = 1;
  }

  // складываем результат в переменную
  const total = checkTotal();

  if (total < 2) {
    output.textContent = 'Опасный пароль, рекомендуем добавить цифру, символ и буквы в разных регистрах';
    output.style.display = 'block';
    output.style.color = 'red';
  } else if (total >= 2 && total < 4) {
    output.textContent = 'Слабый пароль';
    output.style.display = 'block';
    output.style.color = 'orange';
  } else if (total >= 4) {
    output.textContent = 'Надежный пароль';
    output.style.display = 'block';
    output.style.color = 'green';
  }
}

input.addEventListener('input', () => {
  checkSecurity(input.value);
})
