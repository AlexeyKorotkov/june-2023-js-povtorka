// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let names=['kolya','petya','vasya','yura','ivan','olya','tamara','mira','rita','klava'];
console.log(names);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log(names[5]);
console.log(names[6]);
console.log(names[7]);
console.log(names[8]);
console.log(names[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book= {
    title: 'book11',
    pageCount: 25,
    genre: 'fantasy'
}
let book1= {
    title: 'book12',
    pageCount: 35,
    genre: 'fantasy'
}
let book2= {
    title: 'book13',
    pageCount: 45,
    genre: 'fantasy'
}


console.log(book,book1,book2)


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book21= {
    title: 'book11',
    pageCount: 25,
    genre: 'fantasy',
    authors:[{name:'petya',age:31}]
}
let book22= {
    title: 'book12',
    pageCount: 35,
    genre: 'fantasy',
    authors:[{name:'vasya',age:32}]
}
let book23= {
    title: 'book13',
    pageCount: 45,
    genre: 'fantasy',
    authors:[{name:'vova',age:33}]
}


console.log(book21,book22,book23)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users=[
    {name:'klara', username:'ara',password:123},
    {name:'tomas', username:'tom',password:234},
    {name:'kostya', username:'kos',password:345},
    {name:'jackson', username:'jack',password:456},
    {name:'katrina', username:'kat',password:567},
    {name:'olya', username:'ol',password:678},
    {name:'valera', username:'vel',password:789},
    {name:'alexander', username:'alex',password:890},
    {name:'suzana', username:'suz',password:901},
    {name:'roksolana', username:'roks',password:111}
]

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x=+prompt('enter');
if (x!==0){
    console.log('Вірно');
}else if (x===0){
    console.log('Невірно');

}



// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = prompt('enter your quarter');
if (time > 0 && time <= 15) {
    console.log('first quarter');
} else if (time > 15 && time <= 30) {
    console.log('second quarter');
} else if (time > 30 && time <= 45) {
    console.log('third quarter');
} else if (time > 45 && time <= 59) {
    console.log('fourth quarter');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = prompt('enter the day')
if (day > 0 && day <= 10) {
    console.log('the first decade')
} else if (day > 10 && day <= 20) {
    console.log('the second decade')
} else if (day > 20 && day <= 31) {
    console.log('the third decade')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let day1=7;
switch (day1){
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;
    default:
        console.log('error');
        break




}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a=1;
let b=5;
if (a>b){
    console.log('a:', a);
}
else if (b>a){
    console.log('b:', b);
}
else if (a===b){
    console.log('equals');
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x1 ;
x1 = x1 || 'default';
x1 = x1 ?? 'default';

console.log( x1);
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration >= 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration >= 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration >= 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration >= 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration >= 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration >= 5) {
    console.log('Супер');

}



