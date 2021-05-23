// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
// і змінює інлайн - стиль span#text оновлюючи властивість font - size.
// В результаті при перетягуванні повзунка змінюватиметься розмір тексту.
const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
spanEl.style.fontSize = `${inputEl.value}px`
inputEl.addEventListener('input', (e) => {
    spanEl.style.fontSize = `${e.target.value}px`
});
