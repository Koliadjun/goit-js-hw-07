const random = () => Math.floor(Math.random() * 256);
const inputEl = document.querySelector('#controls input');
const boxesEl = document.querySelector('#boxes');
const buttonsEl = document.querySelectorAll('button');
let initialSize = 30;

const destroyBoxes = () => {
    boxesEl.innerHTML = '';
    initialSize = 30;
};
const createBoxes = (amount) => {
    const newElements = [];
    for (let i = 0; i < amount; i += 1) {
        const newElement = document.createElement('div');
        newElement.style.width = `${initialSize}px`;
        newElement.style.height = `${initialSize}px`;
        newElement.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
        newElements.push(newElement);
        initialSize += 30;
    }
    boxesEl.append(...newElements);
};
buttonsEl.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.dataset.action === 'render') {
            createBoxes(inputEl.value);
        }
        if (e.target.dataset.action === 'destroy') {
            destroyBoxes();
        }
    })
});