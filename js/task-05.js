const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
const h1El = document.querySelector("h1");

const onInputChange = event =>
    inputEl.value === "" ? outputEl.textContent = "Anonymous" : outputEl.textContent = event.target.value;

inputEl.addEventListener("input", onInputChange);

