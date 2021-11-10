const inputEl = document.querySelector("input");
const lengthEl = inputEl.getAttribute("data-length");

const onInputBlur = event =>    
    event.target.value.length === Number.parseInt(lengthEl) ? 
        inputEl.className = 'valid' :
        inputEl.className = 'invalid'
;

inputEl.addEventListener('blur', onInputBlur);



// _____________________________________________________________________________________________




// const inputEl = document.querySelector("input");

// const onInputBlur = (event) => {
//     event.target.classList.add("invalid");

//     if (inputEl.dataset.length == event.target.value.length) {
//         event.target.classList.replace("invalid", "valid");
//     }
// };


// inputEl.addEventListener('blur', onInputBlur);




