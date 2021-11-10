const itemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsEl.length}`);


itemsEl.forEach((item) => {
  const itemTitle = item.querySelector("h2").textContent;
  console.log(`Category: ${itemTitle}`);
  
  const itemAmount = item.querySelectorAll("li").length;
  console.log(`Elements: ${itemAmount}`);
});











// _____________________________________________________________________________________________

// const сategoriesEl = document.querySelector('#categories')
// console.log('Number of categories:', сategoriesEl.children.length);

// const itemsEl = document.querySelectorAll('.item');
// itemsEl.forEach((item) => {
//   console.log('Category:', item.firstElementChild.textContent);
//   console.log('Elements:', item.lastElementChild.children.length);
// });


