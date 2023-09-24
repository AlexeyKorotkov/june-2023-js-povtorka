// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let calc = (a, b) => a + b;
console.log(calc(10, 20));
console.log(calc(5, 4));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let sCircle = (r) => Math.PI * r * r;
console.log(sCircle(3));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let sCylinder = (h, r) => Math.PI * 2 * r * h;
console.log(sCylinder(2, 1));
// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = [123, 543, true, 'qwe', 'asd'];
let logger = (arr) => console.log(arr);
logger(arr)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let createParagraph = (text) => document.write(`<p>${text}</p>`);
createParagraph('Hello Peace');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ulCreator=(text)=>document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
ulCreator('hello');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let ulLi=(text,count)=>{
    document.write(`<ul>`)
    for (let i = 0; i <count; i++) {
        document.write(`<li>${text}</li>`)


    }
    document.write(`</ul>`)

}
ulLi('how are you',3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array=[3,5,true,false,'hello']
let arrCreator=(arr)=> {
    document.write(`<ul>`);
    for (let item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);

}
arrCreator(array)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
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
let createArr = (array) => {
    for (let item of array) {
        document.write(`<div>${item.id}${item.name}${item.age}</div>`)

    }

}
createArr(users)
// - створити функцію яка повертає найменьше число з масиву
let arr2=[5,1,0,-2,-11,72];
let minNumberOfArray=(array)=>{
    let result=array[0];
    for (let i = 0; i < array.length; i++) {
        if (result>array[i]){
            result=array[i];
        }

    }
    return result
}

console.log(minNumberOfArray(arr2))
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum= (array)=> {
    let result=0;
    for (let number of array) {
        result=result+number
    }
    return result
}
// sum(arr)
console.log(sum([1,2,10]))
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap=(arr,index1,index2)=>{
    let value1=arr[index1];
    let value2=arr[index2];
    arr[index1]=value2;
    arr[index2]=value1;
    return arr;
}
console.log(swap([11,22,33,44],0,1));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange =(sumUAH,currencyValues,exchangeCurrency)=>{
    for (let item of currencyValues) {
        if (item.currency===exchangeCurrency) {


            return sumUAH / item.value
        }
    }

};
let results=exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
console.log(results);
