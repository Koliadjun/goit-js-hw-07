// Напиши скрипт який, при наборі тексту в інпут input#name - input(подія input),
//     підставляє його поточне значення в span#name - output.якщо інпут порожній,
//         в спані повинен відображатися рядок 'незнайомець'.

// < input type = "text" placeholder = "Ваше ім'я?" id = "name-input" />
//     <h1>Привіт, <span id="name-output">незнайомець</span>!</h1>
const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),
};
refs.spanEl.textContent = 'незнайомець';

refs.inputEl.addEventListener('input', (e) => {
    console.log(e);
    if (!e.target.value) {
        refs.spanEl.textContent = 'незнайомець';
    } else {
        refs.spanEl.textContent = e.target.value;
    }

});