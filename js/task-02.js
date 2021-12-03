const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];


// const makeIngredientsEl = document.querySelector('#ingredients');

// const elements = ingredients.map( ingredient => {
//     const itemEl = document.createElement('li');   
//     itemEl.textContent = ingredient;
//     itemEl.classList.add('item');
//     return itemEl;
// });

// makeIngredientsEl.append(...elements);


// _____________________________________________________________________________________________


const ingredientsEl = document.querySelector('#ingredients');


ingredients.forEach(item => {
    const itemEl = document.createElement('li');
    itemEl.textContent = item;
    itemEl.classList.add('item');

    ingredientsEl.append(itemEl);
});









// _____________________________________________________________________________________________



// const ingredientsListEl = document.querySelector('#ingredients');

// const makeIngredientsEl = array => {
//     return array.map(element => {
//         const itemEl = document.createElement('li');
//         itemEl.textContent = element;
//         itemEl.classList.add('item');


//         return ingredientsListEl.insertAdjacentElement('beforeend', itemEl);
//     });
// };

// makeIngredientsEl(ingredients);

