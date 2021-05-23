
// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li,
// після чого вставить всі li за одну операцію в список ul.ingredients.
// Для створення DOM - вузлів використовуй document.createElement().
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
