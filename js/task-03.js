const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulEl = document.querySelector('.gallery');
const makeLiMarkup = ({ url, alt }) => `<li>
<img class='image' src='${url}' alt='${alt}'></li>`;
ulEl.insertAdjacentHTML('beforeend', images.map(el => makeLiMarkup(el)).join(''));

// const makeLi = array => {
//   const liEl = document.createElement('li');
//   const imgEl = document.createElement('img');
//   imgEl.src = array.url;
//   imgEl.alt = array.alt;
//   liEl.append(imgEl);
//   return liEl;
// };

// const arrayOfLiEl = images.map(el => makeLi(el));
// const ulEl = document.createElement('ul');
// ulEl.append(...arrayOfLiEl);
// document.body.append(ulEl);
// console.log(ulEl);
