// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let h='hello';
console.log(h);
let o='owu';
console.log(o);
let c1='com';
console.log(c1);
let u='ua';
console.log(u);
let a1=1;
console.log(a1);
let b1=10;
console.log(b1);
let c2=-999;
console.log(c2);
let d1=123;
console.log(d1);
let e1=3.14;
console.log(e1);
let f1=2.7;
console.log(f1);
let g1=16;
console.log(g1);
let t=true;
console.log(t);
let f=false;
console.log(f);
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName= 'Korotkov';
let middleName= 'Alexey';
let lastName= 'Alexandrovich';
console.log(`${firstName} ${middleName} ${lastName}`);

//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let firstName1=prompt('Enter your name','Alexey');
console.log(firstName1);
let middleName1=prompt('Enter your middleName', 'Alexandrovich');
console.log(middleName1);
let age=prompt('Enter your age', 36);
console.log(age);