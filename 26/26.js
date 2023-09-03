// Рекурсивный обход дерева DOM: Напишите функцию, которая
// рекурсивно обходит дерево DOM, начиная с указанного элемента,
// и выполняет определенное действие с каждым узлом
// (например, выводить информацию о теге в консоль).

// ==================================================

'use strict'

const nodeA = document.querySelector('#first');
const nodeB = document.querySelector('#second');

const findChildNodes = (node) => {
  // проверка для рекурсии, если элемента нет, выходим
  if (node == null) return;

  console.log(`tag: ${node.localName}; id: ${node.id || '-'}; class: ${node.classList.value || '-'}`)

  // используем цикл for of чтобы перебрать значения массива с потомками в
  // children (коллекция детей, которые являются элементами)
  for (let childNode of node.children) {
    // если потомки есть, вызываем текующую функцию и передаём итерируемый элемент
    findChildNodes(childNode);
  }

  return;
}

findChildNodes(nodeA);
findChildNodes(nodeB);
