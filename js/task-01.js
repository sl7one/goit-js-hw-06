const categoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesEl.length}`);

console.log('');

// for (let el of categoriesEl) {
//   let categoryName = el.querySelector('h2').textContent;
//   let countCategoryItems = el.querySelector('ul').querySelectorAll('li').length;
//   console.log(`Category: ${categoryName}`);

//   console.log(`Elements: ${countCategoryItems}`);
//   console.log('');
// }

categoriesEl.forEach(el => {
  let categoryName = el.querySelector('h2').textContent;
  let countCategoryItems = el.querySelector('ul').querySelectorAll('li').length;
  // let countCategoryItems = el.querySelector('ul', 'li').length;
  console.log(`Category: ${categoryName}`);

  console.log(`Elements: ${countCategoryItems}`);
  console.log('');
});
