
// const counterValue = {
//     value: 0,

//     increment() {
//         this.value += 1;
//         console.log('increment -> this', this);
//     },
//     decrement() {
//         this.value -= 1;
//         console.log('decrement -> this', this);
//     },
// }


// const valueEl = document.querySelector('#value');
// const incrementBtn = document.querySelector('[data-action="increment"]');
// const decrementBtn = document.querySelector('[data-action="decrement"]');


// incrementBtn.addEventListener('click', () => {
//     counterValue.increment();
//     valueEl.textContent = counterValue.value;
// });

// decrementBtn.addEventListener('click', () => {
//     counterValue.decrement();
//     valueEl.textContent = counterValue.value;
// });


// _____________________________________________________________________________________________



const refs = {
    valueEl: document.querySelector("#value"),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
};

let counterValue = 0;

const onDekrementCounterValue = () => {
    counterValue -= 1;
    refs.valueEl.textContent = counterValue;
};

const onIncrementCounterValue = () => {
    counterValue += 1;
    refs.valueEl.textContent = counterValue;
};

refs.incrementBtn.addEventListener("click", onIncrementCounterValue);
refs.decrementBtn.addEventListener("click", onDekrementCounterValue);

