const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const onInputRange = () => textEl.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener("input", onInputRange);


// _____________________________________________________________________________________________


const sliderElem = document.querySelector("#font-size-control");
const spanElem = document.querySelector("#text");

const changeSize = () => spanElem.style.fonSize = sliderElem.value + "px";


sliderElem.addEventListener("input", changeSize);