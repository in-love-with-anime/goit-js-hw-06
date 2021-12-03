const refs = {
    boxesEl: document.querySelector("#boxes"),
    inputEl: document.querySelector('[type="number"]'),
    btnCreateEl: document.querySelector('[data-create]'),
    btnDestroyEl: document.querySelector('[data-destroy]'),
};


const createBoxes = (amount) => {
    let width = 30;
    let height = 30;
    let step = 10;

    if (refs.boxesEl.childElementCount > 0) {
        width = refs.boxesEl.lastChild.clientWidth + step;
        height = refs.boxesEl.lastChild.clientHeight + step;
    }

    const elements = [];

    for (let i = 0; i < amount; i += 1) {
        const element = document.createElement("div");

        element.style.width = `${width}px`;
        element.style.height = `${height}px`;
        element.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        element.style.marginBottom = "10px";

        if (i > 0) {
            element.style.width = `${width + step}px`;
            element.style.height = `${height + step}px`;
            step += 10;
        };
        elements.push(element);
    };

    refs.boxesEl.append(...elements);
    refs.inputEl.value = "";
}



    refs.btnCreateEl.addEventListener("click", () => createBoxes(refs.inputEl.value));

    refs.btnDestroyEl.addEventListener("click", () => refs.boxesEl.remove());


