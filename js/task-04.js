// Лічильник складається зі спана і кнопок, які повинні збільшувати і 
// зменшувати значення лічильника на 1.

// Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу
let counterValue = 0;
function increment() {
    counterValue += 1;
}
function decrement() {
    counterValue -= 1;
}
const spanEl = document.querySelector('#value');
// first implementation (uncomment to use)
// const buttonDecrementEl = document.querySelector('button[data-action="decrement"]');
// const buttonIncrementEl = document.querySelector('button[data-action="increment"]');


// buttonIncrementEl.addEventListener('click', (e) => {
//     increment();
//     spanEl.textContent = counterValue;

// })
// buttonDecrementEl.addEventListener('click', (e) => {
//     decrement();
//     spanEl.textContent = counterValue;

// })

//second implementation

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.dataset.action === "decrement") {
            decrement();
        }
        if (button.dataset.action === "increment") {
            increment();
        }
        spanEl.textContent = counterValue;
    });
});