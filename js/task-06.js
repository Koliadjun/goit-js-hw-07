// Напиши скрипт, який би при втраті фокуса на інпут,
//     перевіряв його вміст на правильну кількість символів.


//     Скільки символів має бути в інпут, вказується в його атрибуті data - length.
// Якщо введена відповідна кількість, то border інпут стає зеленим, якщо неправильне - червоним.
// Для додавання стилів, використовуй CSS - класи valid і invalid.

const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', (e) => {
    if (e.target.value.length === Number.parseInt(e.target.dataset.length)) {
        e.target.classList.add('valid');
        e.target.classList.remove('invalid');
    } else {
        e.target.classList.add('invalid');
        e.target.classList.remove('valid');
    }
});