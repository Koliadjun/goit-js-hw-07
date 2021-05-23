const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),
};

refs.spanEl.textContent = 'незнайомець';

refs.inputEl.addEventListener('input', (e) => {
    if (!e.target.value) {
        refs.spanEl.textContent = 'незнайомець';
    } else {
        refs.spanEl.textContent = e.target.value;
    }
});