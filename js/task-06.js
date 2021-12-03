// const inputEl = document.querySelector("input");
// const lengthEl = inputEl.getAttribute("data-length");

// const onInputBlur = event =>    
//     event.target.value.length === Number.parseInt(lengthEl) ? 
//         inputEl.className = 'valid' :
//         inputEl.className = 'invalid'
// ;

// inputEl.addEventListener('blur', onInputBlur);



// _____________________________________________________________________________________________




const inputEl = document.querySelector("input");
const lengthEl = inputEl.getAttribute("data-length");

const onInputBlur = event => {
    event.target.classList.add("invalid");

    if (parseInt(lengthEl) === event.target.value.length) {
        event.target.classList.replace("invalid", "valid");
    }
};


inputEl.addEventListener('blur', onInputBlur);


// _____________________________________________________________________________________________


// const validInput = document.querySelector("#validation-input");

// validInput.addEventListener('blur', event => {
//     if (validInput.value.length == validInput.dataset.length) {
//         event.currentTarget.classList.remove('invalid');
//         event.currentTarget.classList.add('valid');
//     } else {
//         event.currentTarget.classList.add('invalid');
//         event.currentTarget.classList.remove('valid');
//     }
// });


