// Напиши скрипт, який виконає наступні операції.

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.Вийде 'У списку 3 категорії.'.

// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента(тега h2) і кількість елементів в категорії(всіх вкладених в нього елементів li).

//     Наприклад, для першої категорії вийде:

// Категорія: Тварини
// Кількість елементів: 4


const list = document.querySelector('#categories');
console.log(`'У списку ${list.childElementCount} категорії.'`);

// first implementation 
[...list.children].forEach((el) => {
    console.log(`Категорія: ${el.querySelector('h2').textContent}`);
    console.log(`Кількість елементів: ${el.querySelector('ul').childElementCount}`);
});



