const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
// const ingredients2 = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Лук', 'Специи', 'Буряк', 'Лапша'];

const makeElList = el => {
  const newElArray = el.map(el => {
    const liEl = document.createElement('li');
    liEl.classList.add('item');
    liEl.textContent = el;
    return liEl;
  });

  const newElList = document.createElement('ul');

  newElList.append(...newElArray);
  return newElList;
};

document.body.append(makeElList(ingredients));
// document.body.append(makeElList(ingredients2));
