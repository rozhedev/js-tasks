// Task 1
//Создайте массив ar1 содержащий строки, числа, булевы значения. Выведите его в .out-1. Вывод - по нажатию кнопки b-1

let ar1 = ['Первый элемент с индексом 0', 124315362, true, ['Иванов', 'Сидоров']];

document.querySelector('.b-1').onclick = f1;

function f1(){
    console.log(ar1);
}

document.querySelector('.b-1').onclick = f1;

// Task 2
//Создайте массив ar2 содержащий строки, числа, булевы значения. Выведите его в div.out-2. Используйте шаблон вывода из кода в JS. Вывод - по нажатию кнопки b-2

// let ar2 = [1, true, {name: 'Donald Trump', age: 74, sex: 'men', work: 'President USA'}];

// function f2() {
//     let out = '';
//     for (let i = 0; i < ar2.length; i++) {
//         out += ar2[i] + ' ';

//         if (typeof ar2[2] == 'object') {
//             for (let key in ar2[2]) {
//                 out += ar2[2][key] + ' ';
//             }
//             break;
//         }     
//     }
//     document.querySelector('.out-2').innerHTML = out;
// }

// document.querySelector('.b-2').onclick = f2;

// Подскажите как вывести елементы на страницу с объекта, пока что сделаю без него.

let ar2 = [1 , true, 'Продолжаем', 'Дерзать JS!'];

function func_2() {
    let out = '';
    for (let i = 0; i < ar2.length; i++) {
        out += ar2[i] + ' ';
    }
    document.querySelector('.out-2').innerHTML = out;
}

document.querySelector('.b-2').onclick = func_2;


// Task 3
//Создайте массив ar3, заполните его любыми значениями. Выведите длину массива.
// Вывод - по нажатию кнопки b-3
// Вывод в out-3
// Тест допустим массив [1,2,3] вывод - 3

let ar3 = ['a', 'b', 'c', 1, 2, 3];

function func_3() {
    document.querySelector('.out-3').textContent = ar3.length;
}

document.querySelector('.b-3').onclick = func_3;

// Task 4
//Создайте массив ar4. Выведите нулевой, третий, восьмой элемент массива в out-4 через пробел. Сделайте вывод о 888-м элементе.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-4
// Вывод в out-4
// Тест допустим массив [1,2,3,4,5,6,7,8,9,10] вывод: 1 4 10

const out4 = document.querySelector('.out-4');
let ar4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function func_4() {
    out4.textContent += `${ar4[0]} ${ar4[3]} ${ar4[8]} `;
    out4.textContent += ar4[888];
}

document.querySelector('.b-4').onclick = func_4;

// Task 5
//Создайте массив ar5 длина которого больше 5. Выведите сумму нулевого, второго и третьего элементов массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-5
// Вывод в out-5
// Тест допустим массив [1,2,3,4,5,6,7,8,9,10] вывод: 8

let ar5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function func_5() {
    const out5 = document.querySelector('.out-5');
    out5.textContent = ar5[0] + ar5[2] + ar5[3];
}

document.querySelector('.b-5').onclick = func_5;

// Task 6
//Создайте массив ar6, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. Выведите массив на страницу в div-6. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-6
// Вывод в out-6

let myInfo = ['Bohdan', 'Aries', '4', 'april'];

function func_6() {
    const out6 = document.querySelector('.out-6');
    
    for (let i = 0; i < myInfo.length; i++) {
        out6.textContent += myInfo[i] + ' ';
    }
}

document.querySelector('.b-6').onclick = func_6;

// Task 7
// Добавьте в массив ar7  значения 'vietnam' с индексом 7 , 'turkey' с индексом 6, 'italy' с индексом 5. Добавление элементов сделайте в f7. Выведите массив на страницу в .out-7. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-7
// Вывод в out-7

 let ar7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
 const out7 = document.querySelector('.out-7');

function func_7() {
    ar7[5] = 'italy';
    ar7[6] = 'turkey';
    ar7[7] = 'vietnam';
    
    for (let i = 0; i < ar7.length; i++) {
        out7.textContent += ar7[i] + ' ';
    }
}

document.querySelector('.b-7').onclick = func_7;

// Task 8
// Добавьте в массив ar8 третий элемент равный 3.14, 4 элемент равный 17, 6 элемент равный 5. Выведите массив в .out-8. Разделитель - дефис. В .out-8-1 выведите длину массива ar8.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-8
// Вывод в out-8

const out8 = document.querySelector('.out-8');
const out81 = document.querySelector('.out-8-1');

let ar8 = [];

function f8() {
    ar8[3] = 3.14;
    ar8[4] = 17;
    ar8[6] = 5;

    for (let i = 0; i < ar8.length; i++) {
        out8.textContent += ar8[i] + '-';
    }
    out81.textContent = ar8.length;
}

document.querySelector('.b-8').onclick = f8;

// Task 9
// Выведите последний элемент массива ar9. Вывод последнего элемента  - реализуйте по индексу. Чтобы узнать индекс последнего элемента - посмотрите на длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-9
// Вывод в out-9

let ar9 = [100, 200, 300, 400, 700, 121];

function f9() {
    const out9 = document.querySelector('.out-9');
    // console.log(ar9.length);


    out9.textContent = ar9[ar9.length - 1];
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Выведите сумму первого и последнего массива ar10 в блок out-10. Индекс последнего элемента массива не указывайте напрямую, а вычисляйте через длину массива .
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-10
// Вывод в out-10

let ar10 = [100, 200, 300, 400, 700, 121];
const out10 = document.querySelector('.out-10');

function f10(){
    out10.textContent += ar10[0] + ar10[ar10.length - 1]
}

document.querySelector('.b-10').onclick = f10;


// Task 11
// Напишите функцию, которая меняет местами второй и четвертый элемент массива ar11 и выводит его в out-11. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-11
// Вывод в out-11

let ar11 = [2,3,4,5,6,7];
const out11 = document.querySelector('.out-11');

function func_11() {
    let x = ar11[2];
    ar11[2] = ar11[4];
    ar11[4] = x;

    for (let i = 0; i < ar11.length; i++) {
        out11.textContent += ar11[i] + ' ';
    }
}

document.querySelector('.b-11').onclick = func_11;

// Task 12
// Напишите функцию f12, которая меняет местами нулевой и последний элемент массива ar12 и выводит его в out-12. Разделитель - пробел. Последний элемент вычислять через длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-12
// Вывод в out-12

let ar12 = ['test', 'west', 'list', 'class', 'best'];
const out12 = document.querySelector('.out-12');

function f12() {
    let a = ar12[0];
    ar12[0] = ar12[ar12.length - 1];
    ar12[ar12.length - 1] = a;
    out12.textContent = ar12;
}

document.querySelector('.b-12').onclick = f12;

// Task 13
// Выведите массив ar13 в out-13 в формате индекс-значение перенос строки. Между индекс и значение - дефис без пробелов.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-13
// Вывод в out-13
// Тест допустим массив [1,2,3] вывод:
//  0-1
//  1-2
//  2-3


let ar13 = ['test', 'west', 'list', 'class', 'best'];

function f13() {
    let out = '';
    for (let i = 0; i < ar13.length; i++) {
        out += `${i} - ${ar13[i]} <br>`;
    }
    document.querySelector('.out-13').innerHTML = out
}

document.querySelector('.b-13').onclick = f13;


// Task 14
// Используя цикл выведите на страницу массив ar14 в обратном порядке. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-14
// Вывод в out-14

let ar14 = [1, 2, 3, 'hello', 66];

function f14() {
    let out = '';
    for (let i = ar14.length - 1; i >= 0; i--) {
        out += ar14[i] + ' ';
    }
    document.querySelector('.out-14').textContent = out;
}

document.querySelector('.b-14').onclick = f14;

// Task 15
// Используя цикл выведите на страницу элементы массива ar15, которые больше нуля. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-15
// Вывод в out-15

let ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

function f15() {
    let max = '';
    for (let i = 0; i < ar15.length; i++) {
        if (ar15[i] > 0) {
            max += ar15[i] + ' ';
        }
    }
    document.querySelector('.out-15').textContent = max;
}

document.querySelector('.b-15').onclick = f15;

// Task 16
// Выполните перебор массива arr16. Четные элементы добавьте в массив ar16_even, нечетные в ar16_odd. Полученные массивы выведите в .out-16
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-16
// Вывод в out-16

let ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let ar16_odd = [];
let ar16_even = [];

function f16() {
    for (let i = 0; i < ar16.length; i++) {
        if (ar16[i] % 2 == 0) {
            ar16_odd += ar16[i] + ' ';
        }
        else {
            ar16_even += ar16[i] + ' ';
        }
    }
    document.querySelector('.out-16').innerHTML = `Четные: ${ar16_odd} <br> Нечетные: ${ar16_even}`;
}

document.querySelector('.b-16').onclick = f16;

// Task 17
// Используя цикл выведите в .out-17 количество элементов ar17, значение которых больше 3. Для расчета используйте цикл и переменную счетчик.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-17
// Вывод в out-17

let ar17 =  [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];

function f17() {
    let count = '';
    for (let i = 0; i < ar17.length; i++) {
        if (ar17[i] > 3) {
            count += ar17[i];
        }
    }
    document.querySelector('.out-17').textContent = count.length;
}

document.querySelector('.b-17').onclick = f17;


// Task 18
// Используя цикл выведите в .out-18 максимальный элемент массива ar18.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-18
// Вывод в out-18

let ar18 =  [15,24,13,78,21,4,45,67];

function f18() {
    let max = 0;
    for (let i = 0; i < ar18.length; i++) {
        if (max < ar18[i]) {
            max = ar18[i];
        }
    }
    document.querySelector('.out-18').textContent = max;
}

document.querySelector('.b-18').onclick = f18;

// Task 19
// Выведите в .out-19 индекс минимального элемента в массиве ar19
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-19
// Вывод в out-19

let ar19 =  [15,424,313,78,241,4,45,67];

function f19() {
    let min = ar19[0];
    for (let i = 0; i < ar19.length; i++) {
        if (min > ar19[i]) {
            min = i;
        }
    }
    document.querySelector('.out-19').textContent = min;
}

document.querySelector('.b-19').onclick = f19;

// Task 20
// Выведите в .out-20 сумму элементов в массиве ar20
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-20
// Вывод в out-20

let ar20 =  [4,5,6,7,8,9,10];

function f20() {
    let sum = 0;
    for (let i = 0; i < ar20.length; i++) {
        sum += ar20[i];
    }
    document.querySelector('.out-20').textContent = sum;
}

document.querySelector('.b-20').onclick = f20;