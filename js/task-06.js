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