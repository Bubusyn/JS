// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
//
// let x = prompt('відношення Х до 0');
// console.log(x);
//
// if (x<0) {
//     console.log('вірно');
// }
//     else if (x>0) {
//     console.log('вірно');
// }
//     else if (x) {
//     console.log('не вірно');
// }



// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
//
// let time = +prompt('Введіть число від 0 до 59');
//
// if (time >= 0 && time < 15 ) {
//     console.log('Перша чверть години');
// }
// if (time >= 15 && time < 30 ) {
//     console.log('Друга чверть години');
// }
// if (time >= 30 && time < 45 ) {
//     console.log('Третя чверть години');
// }
// if (time > 45 && time <= 59 ) {
//     console.log('Четверта чверть години');
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
//
// let day = +prompt('Введіть число від 1 до 31');
//
// if (day >= 1 && day < 11 ) {
//     console.log('Перша декада');
// }
// if (day >= 11 && day < 21 ) {
//     console.log('Друга декада');
// }
// if (day >= 21 && day <= 31 ) {
//     console.log('Третя декада');
// }
// if (day <= 0) {
//     console.log('Помилкове значення дати');
// }
// if (day > 31) {
//     console.log('Помилкове значення дати');
// }



// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
//
// let week = +prompt('Введіть номер дня тиждня');
//
// switch (week) {
//     case 1:
//         console.log('Mondey');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
// }


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//
// let x = +prompt('Введіть перше число для порівняння');
// let y = +prompt('Введіть друге число для порівняння');
//
// if (x > y) {
//     console.log(x);
// }
// if (x < y) {
//     console.log(y);
// }
// if (x === y) {
//     console.log(x, 'Введені числа рівні');
// }


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
//
// let x = prompt('Введіть дані') || "default";
// console.log(x);