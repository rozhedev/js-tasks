// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.

let a = 7;
let b = 9;

console.log(a * b);

// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.

// const out2 = document.querySelector('.out-2');

let c = 7;
let d = 9;

// out2.innerHTML = c / d

document.querySelector('.out-2').textContent = c * d;

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.

let e = 3;
let f = 5

document.querySelector('.out-3').textContent = e + f; 

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.

let e1 = '3';
let f1 = 5;

document.querySelector('.out-4').textContent = `${e1 + f1} загляните в консоль`;
console.log('Task 4. Мы к СТРОКЕ с числом 3 добавили ЧИСЛО 5 и получилась СТРОКА 35'); 

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.

let e2 = 3;
let f2 = 0;

document.querySelector('.out-5').textContent = `${e2 / f2} /загляните в консоль`;
console.log('Task 5. Если число разделить на безконечно малое получим безконечно большое (Границы.Высшая математика)');

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.

let e3 = 3;
let f3 = 'Hello';

document.querySelector('.out-6').textContent = e3 + f3;
// Конкатенация.


// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.

let e4 = 3;
let f4 = 'Hello';

document.querySelector('.out-7').textContent = e4 * 'Hello'; 

// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.

const firstButtton = document.querySelector('.b-8');

let firstInput = document.getElementById('first-input');

function t8 () {
   console.log(firstInput.value); 
}

document.querySelector('.b-8').onclick = t8

// Почему создаем отдельную функцию, а не присваиваем по событию .onclick по событию или стрелочную?


// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.

const out9 = document.querySelector('.out-9');

let secondInput = document.querySelector('.i-9');

function t9() {
    out9.innerHTML = secondInput.value;
    secondInput.value = '';
}

document.querySelector('.b-9').onclick = t9;


// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.

const out10 = document.querySelector('.out-10');

let thirthInput = document.querySelector('.i-10');

function t10 () {
    // let a = +thirthInput.value   можна создать промежуточную переменную чтобы превратить строку в число но JS может это делать сам.
    out10.innerHTML = thirthInput.value * 10;
    thirthInput.value = '';
}

document.querySelector('.b-10').onclick = t10;

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.

const out11 = document.querySelector('.out-11');
const button11 = document.querySelector('.b-11');

let fourthInput = document.querySelector('.i-11');

function t11 () {
    let b = +fourthInput.value;
    out11.innerHTML = b + 10;
    fourthInput.value = '';
}

button11.onclick = t11;

// Такое оформление не считается ошибкой? Порой надоедает делать по шаблону...

// Task 12.
// Создайте два input (i-12_1 и i-12_2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.

const button12 = document.querySelector('.b-12');
const out12 = document.querySelector('.out-12');

let userName = document.querySelector('.i-12_1');
let surname = document.querySelector('.i-12_2');

function t12() {
    out12.innerHTML = `Hello ${userName.value} ${surname.value}`;
    userName.value = '';
    surname.value = '';
}

button12.onclick = t12;


// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.

const button13 = document.querySelector('.b-13');
const out13 = document.querySelector('.out-13');

let num1 = document.querySelector('.i-13_1');
let num2 = document.querySelector('.i-13_2');

button13.onclick = () => {
    let c = +num1.value;
    let d = +num2.value;

    out13.innerHTML = c + d;
    num1.value = '';
    num2.value = '';
}


// Task 14.
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.

const button14 = document.querySelector('.b-14');

let input14 = document.querySelector('.i-14');

button14.onclick = () => {
    input14.value = 'Hello';
}


// Task 15.
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

let y = document.querySelector('.i-15');
y.style.border = '2px solid red';

document.querySelector('.out-14').innerHTML = 'Загляните в консоль мне было не лень печатать свои объяснения';
console.log('Task 15. Так как JS - язык орентирований на объекты, и все елементы на странице - объекты, "коронным" типом даных в нем является объект. Всё (кроме null и underfined) ведет себя как объект но необязательно может являтся имеенно этим типом данных. У них есть некий родительский объект (prototype) в котором хранятся свойства. Мы обратились к свойству "style" которое хранит в себе css-стили (опять же СВОЙСТВА) отвечающие за оформление елемента')
// Как - то так


// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16

function t16() {
    let out16 = document.querySelector('.out-16');

    let firstNum = +document.querySelector('.i-16_1').value;    
    let secondNum = +document.querySelector('.i-16_2').value;

    out16.innerHTML = firstNum + secondNum;
}

document.querySelector('.b-16').onclick = t16;

// Задача переделана до проверки исходя из этого видоса
// https://www.youtube.com/watch?v=rI_6I8L-n70&list=PLM7wFzahDYnEltE-aVGhRHYPwIJn0Xquu&index=14&t=0s

// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

const b17 = document.querySelector('.b-17');
const out17 = document.querySelector('.out-17');

let inp17 = document.querySelector('.i-17');

function t17() {
    let b1 = inp17.value
    b1 = parseInt(b1);
    out17.innerHTML = b1;
}

document.querySelector('.b-17').onclick = t17;

// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

// const b18 = document.getElementsByClassName[0]('.b-18');    // старый способ
const out18 = document.querySelector('.out-18');

let t = document.querySelector('.i-18');

function t18() {
    t.value = parseFloat(t.value);
    out18.innerHTML = t.value;
    console.log(t.value);
}

document.querySelector('.b-18').onclick = t18;

// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!

const b19 = document.querySelector('.b-19');
const out19 = document.querySelector('.out-19');

b19.onclick = () => {
    let num01 = +document.querySelector('.i-19_1').value;
    let num02 = +document.querySelector('.i-19_2').value;

    let x = parseInt(num01);
    let y = parseFloat(num02);
    out19.innerHTML = x + y;

    num01.value = '';
    num02.value = '';
}

// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.

const b20 = document.querySelector('.b-20');
const out20 = document.querySelector('.out-20');

let aboutYou = document.querySelectorAll('.about');

function t20() {
    out20.innerHTML = `Уважаемый ${aboutYou[0].value} ${aboutYou[1].value}, ваш возраст ${aboutYou[2].value}, по профессии вы ${aboutYou[3].value}`;
}

document.querySelector('.b-20').onclick = t20;