const list = document.querySelector('#categories');
console.log(`'У списку ${list.childElementCount} категорії.'`);

[...list.children].forEach((el) => {
    console.log(`Категорія: ${el.querySelector('h2').textContent}`);
    console.log(`Кількість елементів: ${el.querySelector('ul').childElementCount}`);
});



