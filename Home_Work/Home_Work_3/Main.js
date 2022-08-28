// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині







// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//
//
// --------------------
//     є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // - Є змінна х, якій ви надаєте довільне числове значення.
// //     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// //
// //
// // let x = prompt('відношення Х до 0');
// // console.log(x);
// //
// // if (x<0) {
// //     console.log('вірно');
// // }
// //     else if (x>0) {
// //     console.log('вірно');
// // }
// //     else if (x) {
// //     console.log('не вірно');
// // }
//
//
//
// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).
// //
// //
// // let time = +prompt('Введіть число від 0 до 59');
// //
// // if (time >= 0 && time < 15 ) {
// //     console.log('Перша чверть години');
// // }
// // if (time >= 15 && time < 30 ) {
// //     console.log('Друга чверть години');
// // }
// // if (time >= 30 && time < 45 ) {
// //     console.log('Третя чверть години');
// // }
// // if (time > 45 && time <= 59 ) {
// //     console.log('Четверта чверть години');
// // }
//
//
// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// //
// //
// // let day = +prompt('Введіть число від 1 до 31');
// //
// // if (day >= 1 && day < 11 ) {
// //     console.log('Перша декада');
// // }
// // if (day >= 11 && day < 21 ) {
// //     console.log('Друга декада');
// // }
// // if (day >= 21 && day <= 31 ) {
// //     console.log('Третя декада');
// // }
// // if (day <= 0) {
// //     console.log('Помилкове значення дати');
// // }
// // if (day > 31) {
// //     console.log('Помилкове значення дати');
// // }
//
//
//
// // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// //
// //
// // let week = +prompt('Введіть номер дня тиждня');
// //
// // switch (week) {
// //     case 1:
// //         console.log('Mondey');
// //         break;
// //     case 2:
// //         console.log('Tuesday');
// //         break;
// //     case 3:
// //         console.log('Wednesday');
// //         break;
// //     case 4:
// //         console.log('Thursday');
// //         break;
// //     case 5:
// //         console.log('Friday');
// //         break;
// //     case 6:
// //         console.log('Saturday');
// //         break;
// //     case 7:
// //         console.log('Sunday');
// //         break;
// // }
//
//
// //     - Користувач вводить або має два числа.
// //         Потрібно знайти та вивести максимальне число з тих двох .
// //         Також потрібно врахувати коли введені рівні числа.
// //
// //
// // let x = +prompt('Введіть перше число для порівняння');
// // let y = +prompt('Введіть друге число для порівняння');
// //
// // if (x > y) {
// //     console.log(x);
// // }
// // if (x < y) {
// //     console.log(y);
// // }
// // if (x === y) {
// //     console.log(x, 'Введені числа рівні');
// // }
//
//
// //     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// //         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
// //
// // let x = prompt('Введіть дані') || "default";
// // console.log(x);