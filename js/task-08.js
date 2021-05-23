// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
//     після чого рендериться колекція.При натисканні на кнопку Очистити,
//         колекція елементів очищається.

// Створи функцію createBoxes(amount),
//     яка приймає 1 параметр amount - число.Функція створює стільки div,
//         скільки вказано в amount і додає їх в div#boxes.

// Кожен створений div:

// Має випадковий rgb колір фону
// Розміри найпершого div - 30px на 30px
// Кожен наступний div після першого, повинен бути ширше і вище попереднього на   10px
// Створи функцію destroyBoxes(), яка очищає div#boxes.
const random = () => Math.floor(Math.random() * 256);
const inputEl = document.querySelector('#controls input');
const boxesEl = document.querySelector('#boxes');
const buttonsEl = document.querySelectorAll('button');
const newElements = [];
let initialSize = 30;
const destroyBoxes = () => {
    boxesEl.innerHTML = '';
};
const renderBoxes = (boxQuantity) => {
    for (let i = 0; i < boxQuantity; i += 1) {
        const newElement = document.createElement('div');
        newElement.style.width = `${initialSize}px`
        newElement.style.height = `${initialSize}px`
        newElement.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;

        initialSize += 30;

        newElements.push(newElement)
    }
    boxesEl.append(...newElements);

};
console.dir(random());
buttonsEl.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.dataset.action === 'render') {
            console.dir(inputEl)
            renderBoxes(inputEl.value);
        }

        if (e.target.dataset.action === 'destroy') {
            destroyBoxes();
            initialSize = 30;
        }
    })
});