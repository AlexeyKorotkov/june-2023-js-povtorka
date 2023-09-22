// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calc(a,b) {
    let result=a+b;
    return (result)
}
let s1=calc (2,5);
let s2=calc(5,2);
console.log(s1,s2)
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function sCircle(r) {
    return Math.PI * r * r;
}

console.log(sCircle(2))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function sCylinder(r,h){
    let result= Math.PI*2*r*h;
    return(result)
}
let r=sCylinder(1,1);

console.log(r)

// - створити функцію яка приймає масив та виводить кожен його елемент
function logger(arr) {
    for (const item of arr) {
        console.log('item : ', item);
    }
}

logger([123, 543, true, 'qwe', 'asd']);
logger([true, false]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function pCreator(text) {
    document.write(`<p>${text}</p>`)
}
pCreator('hello')
pCreator('okten')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function uCreator(text) {
    document.write('<ul>');
    document.write(`
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
        
    `)
    document.write('</ul>');

}
uCreator('Hello Okten')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function uCreator1(someText,count){
    document.write('<ul>');
    for (let i = 0; i < count; i++) {

        document.write(`<li>${someText}</li>`);

    }
    document.write('</ul>');

}
uCreator1('Test',3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arrCreator(arr) {
    document.write(`<ul>`);
    for (let item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
    
}
arrCreator([3,'hello',false])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function userArray(array) {
    for (let item of array) {
        document.write(`<div>
           id:${item.id} name:${item.name} age:${item.age}   

         </div>`)
    }

}

let users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];
userArray(users)


// - створити функцію яка повертає найменьше число з масиву

function minNumberOfArray(array) {
    let result=array[0];
    for (let i = 0; i < array.length; i++) {
        if (result>array[i]){
            result=array[i];
        }

    }
    return result
}
let minNumber=[5,1,0,-2,-11,72]
console.log(minNumberOfArray(minNumber))
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum (arr) {
    let result=0;
    for (let number of arr) {
        result=result+number
    }
    return result
}

console.log(sum([1,2,10]))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2){
    let value1=arr[index1];
    let value2=arr[index2];
    arr[index1]=value2;
    arr[index2]=value1;
    return arr;
}
console.log(swap([11,22,33,44],0,1));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange (sumUAH,currencyValues,exchangeCurrency){
    for (let item of currencyValues) {
        if (item.currency===exchangeCurrency) {


            return sumUAH / item.value
        }
    }

};
let results=exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
console.log(results)



