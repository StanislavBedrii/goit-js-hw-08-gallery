// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients')



// const itemEl1 = document.createElement('li');
// itemEl1.textContent = ingredients[0];

// const itemEl2 = document.createElement('li');
// itemEl2.textContent = ingredients[1];

// const itemEl3 = document.createElement('li');
// itemEl3.textContent = ingredients[2];

// const itemEl4 = document.createElement('li');
// itemEl4.textContent = ingredients[3];

// const itemEl5 = document.createElement('li');
// itemEl5.textContent = ingredients[4];

// const itemEl6 = document.createElement('li');
// itemEl6.textContent = ingredients[5];

// list.append(itemEl1, itemEl2, itemEl3, itemEl4, itemEl5, itemEl6)

// console.log(list);

const ingredientsArr = ingredients.map((item) => {
  // console.log(item);

  const ingredientsItem = document.createElement('li');

  // console.log(ingredientsItem);

  ingredientsItem.textContent = item;

  // console.log(ingredientsItem);

  ingredientsList.append(ingredientsItem)

  return ingredientsList;

});