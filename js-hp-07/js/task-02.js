// В HTML есть пустой список ul#ingredients.

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const liList = document.querySelector('#ingredients');

const liItems = ingredients.map((elem) => {
  const itemName = document.createElement('li');
  itemName.textContent = elem;
  return itemName;
});

liList.append(...liItems);
