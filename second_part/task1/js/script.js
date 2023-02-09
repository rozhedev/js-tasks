// * Валидация

function validateValue(min, max, value, messageOutput, answerOutput) {
    value = +value;
    
    if (value == undefined) {
        messageOutput.textContent = "Введіть значення";
        answerOutput.textContent = "";
    }if (value == "") {
        messageOutput.textContent = "Введыть значення";
        answerOutput.textContent = "";
    } else if (value < min) {
        messageOutput.textContent = `Значення не може бути менше ${min}`;
        answerOutput.textContent = "";
    } else if (value > max) {
        messageOutput.textContent = `Значення не може бути більше ${max}`;
        answerOutput.textContent = "";
    } else {
        messageOutput.textContent = "";
    }
}


// * TASK 1

const task1Inp = document.querySelector("#task1-inp");
const task1Btn = document.querySelector("#task1-btn");
const task1Message = document.querySelector("#task1-message");
const task1Output = document.querySelector("#task1-output");
let task1InpValue, task1Result;

function calcRoundSquare(r) {
    return +(Math.PI * r ** 2).toFixed(2);
}

if (task1Btn) {
    task1Btn.addEventListener("click", function (e) {
        e.preventDefault();
        task1InpValue = +task1Inp.value;

        validateValue(1, 999, task1InpValue, task1Message, task1Output);

        console.log(calcRoundSquare(task1InpValue));
        if (task1Message.textContent == "") {
            task1Output.textContent = `площа кола при радіусі ${task1InpValue} дорівнює ${calcRoundSquare(task1InpValue)}`;
        }

        task1Inp.value = "";
    });
}


// * TASK 2

const task2FirstInp = document.querySelector("#task2-first-inp");
const task2SecondInp = document.querySelector("#task2-second-inp");
const task2Btn = document.querySelector("#task2-btn");
const task2FirstMessage = document.querySelector("#task2-first-message");
const task2SecondMessage = document.querySelector("#task2-second-message");
const task2Output = document.querySelector("#task2-output");
let task2InpValue, task2Result;

function calcHypotenuse(side1, side2) {
    return +Math.sqrt(side1 ** 2 + side2 ** 2).toFixed(2);
}

if (task2Btn) {
    task2Btn.addEventListener("click", function (e) {
        e.preventDefault();
        task2FirstInpValue = +task2FirstInp.value;
        task2SecondInpValue = +task2SecondInp.value;

        validateValue(1, 999, task2FirstInpValue, task2FirstMessage, task2Output);
        validateValue(1, 999, task2SecondInpValue, task2SecondMessage, task2Output);

        if (task2FirstMessage.textContent == "" && task2SecondMessage.textContent == "") {
            task2Output.textContent = `гіпотенуза при катетах ${task2FirstInpValue} і ${task2SecondInpValue} дорівнює ${calcHypotenuse(task2FirstInpValue, task2SecondInpValue)}`;
        }

        task2FirstInp.value = "";
        task2SecondInp.value = "";
    });
}


// * TASK 3

const task3Inp = document.querySelector("#task3-inp");
const task3Btn = document.querySelector("#task3-btn");
const task3Message = document.querySelector("#task3-message");
const task3Output = document.querySelector("#task3-output");
let task3InpValue, task3Result;

function calcRoundLong(r) {
    return +(2 * Math.PI * r).toFixed(2);
}

if (task3Btn) {
    task3Btn.addEventListener("click", function (e) {
        e.preventDefault();
        task3InpValue = +task3Inp.value;

        validateValue(1, 999, task3InpValue, task3Message, task3Output);

        if (task3Message.textContent == "") {
            task3Output.textContent = `довжина кола при радіусі ${task3InpValue} дорівнює ${calcRoundLong(task3InpValue)}`;
        }

        task3Inp.value = "";
    });
}

// * TASK 4

// if (document.querySelector("#test")) {
//     let question1 = confirm("2 + 2 = 4?");
//     let mark = 0;

//     if (question1 == true) {
//         alert("Правильно");
//         mark++;
//     }

//     let question2 = prompt("2 + 2 = ?");

//     if (question2 == 4) {
//         alert("Правильно");
//         mark++;
//     } else {
//         alert("Неправильно. Правильна відповідь 4")
//     }

//     let question3 = confirm("Тег <i></i> робить текст курсивним?");
//     if (question3 == true) {
//         alert("Правильно");
//         mark++;
//     }

//     let question4 = confirm("Тег <br> робить текст жирним?");
//     if (question4 == false) {
//         alert("Правильно");
//         mark++;
//     } else {
//         alert("Неправильно. Тег <br> створює розподілювач");
//     }

//     let question5 = confirm("Властивість overflow змінює поведінку елемента на сторінці?");
//     if (question5 == false) {
//         alert("Правильно");
//         mark++;
//     } else {
//         alert("Неправильно. Тег <br> Властивість overflow регудює відображення елемента на сторінці");
//     }

//     let question6 = confirm("Властивості display зі значенням flex достатньо щоб вирівняти елементи на одному рівні вкладенності в рядок?");
//     if (question6 == true) {
//         alert("Правильно");
//         mark++;
//     } else {
//         alert("Неправильно. Даного коду достатньо щоб це зробити");
//     }

//     let question7 = prompt("Напишіть назву CSS властивості, що дозволяє змінити колір SVG зображення")
//     if (question7 == "fill" || question7 == "fill:") {
//         alert("Правильно");
//         mark++;
//     } else {
//         alert("Неправильно. За це відповідає властивість fill");
//     }

//     let question8 = prompt("Напишіть назву CSS властивості, що дозволяє додати ефекти до растрового зображення")
//     if (question8 == "filter" || question8 == "filter:") {
//         alert("Правильно");
//         mark++;
//     } else {
//         alert("Неправильно. За це відповідає властивість filter");
//     }

//     alert(`Ваша оцінка: ${mark}`);
// }