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