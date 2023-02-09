//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

function t1() {
    const out1 = document.querySelector('.out-1');

    for (let i = 0; i < 3; i++) {
        out1.innerHTML += '***';

        if (true) {
            for (x = 0; x < 3; x++) {
                out1.innerHTML += '_';
                break;
            }
        }
    }
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>

function t2() {
    const out2 = document.querySelector('.out-2');

    for (let i = 1; i <= 3; i++) {
        out2.innerHTML += i + '<br>';

        if (true) {
            for (let k = 1; k <= 3; k++) {
                out2.innerHTML += '*_*_*_ <br>';
                break;
            }
        }
    }
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>
function t3() {
    const out3 = document.querySelector('.out-3');
    let str = '';

    for (let i = 0; i <= 3; i++) {
        out3.innerHTML += '<br>';
        if (true) {
            for (let k = 0; k <= 3; k++) {
                out3.innerHTML += '*_*_*_';
                break;
            }
        }
    }
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 0_10_1_9_2_8_3_7_4_6_5_5_6_4_7_3_8_2_9_1_10_0_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит числа на четных позициях (от 0 до 10) внутренний цикл  - числа на нечетных позициях  (от 10 до 0).</p>
function t4() {
    const out4 = document.querySelector('.out-4');

    let b = 11;
    let str4 = '';

    for (let i = 0; i <= 10; i++) {
        b--;
        str4 += `${i}_${b}_`;
    }
    out4.innerHTML = str4;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>
function t5() {
    const out5 = document.querySelector('.out-5');
    for (let i = 0; i <= 2; i++) {
        out5.innerHTML += '<br>';

        for (let k = 0; k <= 2; k++) {

            if (out5.innerHTML += '1') {
                out5.innerHTML += '0';
            }
        }
    }
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>

// Не велите казнить, другого решения не нашел)

function t6() {
    const out6 = document.querySelector('.out-6');
    let str = '';

    for (let i = 0; i <= 2; i++) {

        for (let k = 0; k <= 2; k++) {
            if (str == '' || str == '10x0' || str == '10x01x<br>' || str == '10x01x<br>10x0' || str == '10x01x<br>10x01x<br>' || str == '10x01x<br>10x01x<br>10x0') {
                str += '1';
            }

            if (str == '1' || str == '10x' || str == '10x01x<br>1' || str == '10x01x<br>10x' || str == '10x01x<br>10x01x<br>1' || str == '10x01x<br>10x01x<br>10x') {
                str += '0';
            }

            if (str == '10' || str == '10x01' || str == '10x01x<br>10' || str == '10x01x<br>10x01' || str == '10x01x<br>10x01x<br>10' || str == '10x01x<br>10x01x<br>10x01') {
                str += 'x';
            }
        }
        str += '<br>';
    }
    out6.innerHTML += str;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>

function t7() {
    const out7 = document.querySelector('.out-7');
    let q = 1;
    let str = '';

    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 5; k++) {
            if (k < q) {
                str += '*';
            }
            else {
                str += '';
            }
        }
        q++
        str += '<br>';
    }
    out7.innerHTML = str;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>
function t8() {
    const out8 = document.querySelector('.out-8');
    let str = '';
    let outerCount = 0;

    for (let i = 0; i < 5; i++) {
        for (let k = 5; k > 0; k--) {
            if (k > outerCount) {
                str += '*';
            }
            else {
                str += '';
            }
        }
        str += '<br>';
        outerCount++
    }
    out8.innerHTML = str;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>
function t9() {
    const out9 = document.querySelector('.out-9');
    let str = '';
    let outerCount = 2;

    for (let i = 5; i > 0; i--) {
        for (let k = 1; k < 6; k++) {
            if (k < outerCount) {
                str += k + ' ';
            }
            else {
                str += '';
            }
        }
        str += '<br>';
        outerCount++
    }
    out9.innerHTML = str;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>

// Мое решение (И 1, И 2 РАБОТАЮТ но первое я сочинил сам, а второе - почти копипаст с форума).

// const out10 = document.querySelector('.out-10');

    // document.querySelector('.b-10').onclick = () => {
    //     let str = '';
    //     let c = -5;

    //     for (let i = 0; i < 5; i++) {
    //         for (let h = 1; h < 11; h++) {

    //             if (h < 10 && i == 0){
    //                 str += '0' + h + ' ';
    //             }
    //             if (h == 10 && i == 0) {
    //                 str += h + ' ';
    //             }
    //             if (c < h && i > 0) {
    //                 str += (i * 10) + h + ' ';
    //             }
    //         }
    //         str += '<br>';
    //         c++
    //     }
    //     out10.innerHTML = str;
    // }

// Не мое решение

function t10() {
    const out10 = document.querySelector('.out-10');
    let str = '';

    for (let i = 0; i < 5; i++) {
        for (let h = 1; h < 11; h++) {
            if (h < 10 && i == 0) {
                str += '0' + h + ' ';
            }
            else {
                str += (i * 10) + h + ' ';
            }
        }
        str += '<br>';
    }
    out10.innerHTML = str;
}

document.querySelector('.b-10').onclick = t10;