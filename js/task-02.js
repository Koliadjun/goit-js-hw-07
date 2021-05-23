const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];
const ingredientsElements = [];
ingredients.forEach((el) => {
    const htmlElement = document.createElement('li');
    htmlElement.textContent = el;
    ingredientsElements.push(htmlElement);
});
document.querySelector('#ingredients').append(...ingredientsElements);;
