// * Валидация

function validateValue(min, max, value, messageOutput, answerOutput) {
    value = +value;

    if (value == undefined) {
        messageOutput.textContent = "Введіть значення";
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

function clearInputs(inpArr) {
    inpArr.forEach(inpArrItem => {
        inpArrItem.value = "";
    });
}


// * TASK 1

let task1Inputs = document.querySelectorAll("#task1-form input");
const task1FirstInp = document.querySelector("#task1-first-inp");
const task1SecondInp = document.querySelector("#task1-second-inp");
const task1ThirthInp = document.querySelector("#task1-thirth-inp");
const task1FouthInp = document.querySelector("#task1-fouth-inp");
const task1FifthInp = document.querySelector("#task1-fifth-inp");

const task1FirstMessage = document.querySelector("#task1-first-message");
const task1SecondMessage = document.querySelector("#task1-second-message");
const task1ThirthMessage = document.querySelector("#task1-thirth-message");
const task1FouthMessage = document.querySelector("#task1-fouth-message");
const task1FifthMessage = document.querySelector("#task1-fifth-message");

const task1Btn = document.querySelector("#task1-btn");
const task1Output = document.querySelector("#task1-output");
let task1Arr = [];


function findMaxNum(numArr, output) {
    let max = 0;
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] > max) {
            max = numArr[i];
        }
    }
    output.textContent = max;
}

if (task1Btn) {
    task1Btn.addEventListener("click", function (e) {
        e.preventDefault();

        validateValue(-999, 999, task1FirstInp.value, task1FirstMessage, task1Output);
        validateValue(-999, 999, task1SecondInp.value, task1SecondMessage, task1Output);
        validateValue(-999, 999, task1ThirthInp.value, task1ThirthMessage, task1Output);
        validateValue(-999, 999, task1FouthInp.value, task1FouthMessage, task1Output);
        validateValue(-999, 999, task1FifthInp.value, task1FifthMessage, task1Output);

        if (
            task1FirstInp.textContent == "" &&
            task1SecondInp.textContent == "" &&
            task1ThirthInp.textContent == "" &&
            task1FouthInp.textContent == "" &&
            task1FifthInp.textContent == ""
        ) {
            Array.from(task1Inputs);
            for (let i = 0; i < task1Inputs.length; i++) {
                task1Arr[i] = +task1Inputs[i].value;
            }
            findMaxNum(task1Arr, task1Output);

            clearInputs(task1Inputs);
        }
    });
}


// * TASK 2

const task2Inputs = document.querySelectorAll("#task2-form input");
const task2FirstInp = document.querySelector("#task2-first-inp");
const task2SecondInp = document.querySelector("#task2-second-inp");
const task2ThirthInp = document.querySelector("#task2-thirth-inp");

const task2FirstMessage = document.querySelector("#task2-first-message");
const task2SecondMessage = document.querySelector("#task2-second-message");
const task2ThirthMessage = document.querySelector("#task2-thirth-message");

const task2Btn = document.querySelector("#task2-btn");
const task2Output = document.querySelector("#task2-output");

function checkTriangle(num1, num2, num3, output) {
    if (num1 > num2 + num3 || num2 > num1 + num3 || num3 > num1 + num2) {
        output.textContent = `Трикутника зі сторонами ${num1}, ${num2}, ${num3} не існує`;
    } else {
        output.textContent = `Трикутник зі сторонами ${num1}, ${num2}, ${num3} існує`;
    }
}

if (task2Btn) {
    task2Btn.addEventListener("click", function (e) {
        e.preventDefault();

        validateValue(1, 999, task2FirstInp.value, task2FirstMessage, task2Output);
        validateValue(1, 999, task2SecondInp.value, task2SecondMessage, task2Output);
        validateValue(1, 999, task2ThirthInp.value, task2ThirthMessage, task2Output);

        if (
            task2FirstMessage.textContent == "" &&
            task2SecondInp.textContent == "" &&
            task2ThirthInp.textContent == ""
        ) {
            checkTriangle(+task2FirstInp.value, +task2SecondInp.value, +task2ThirthInp.value, task2Output);

            clearInputs(task2Inputs);
        }
    });
}


// * TASK 3

const task3Inputs = document.querySelectorAll("#task3-form input");
const task3FirstInp = document.querySelector("#task3-first-inp");
const task3SecondInp = document.querySelector("#task3-second-inp");

const task3FirstMessage = document.querySelector("#task3-first-message");
const task3SecondMessage = document.querySelector("#task3-second-message");

const task3Btn = document.querySelector("#task3-btn");
const task3Output = document.querySelector("#task3-output");

function checkPart(num1, num2, output) {
    if (num1 > 0 && num2 > 0) {
        output.textContent = `Точка з координатами ${num1} і ${num2} належить першій чверті`;
    } else if (num1 < 0 && num2 > 0) {
        output.textContent = `Точка з координатами ${num1} і ${num2} належить другій чверті`;
    } else if (num1 < 0 && num2 < 0) {
        output.textContent = `Точка з координатами ${num1} і ${num2} належить третій чверті`;
    } else if (num1 > 0 && num2 < 0) {
        output.textContent = `Точка з координатами ${num1} і ${num2} належить четвертій чверті`;
    } else {
        output.textContent = `Точка з координатами ${num1} і ${num2} знаходится в центрі системи координат`;
    }
}

if (task3Btn) {
    task3Btn.addEventListener("click", function (e) {
        e.preventDefault();

        validateValue(-999, 999, task3FirstInp.value, task3FirstMessage, task3Output);
        validateValue(-999, 999, task3SecondInp.value, task3SecondMessage, task3Output);

        if (
            task3FirstMessage.textContent == "" &&
            task3SecondMessage.textContent == ""
        ) {
            checkPart(+task3FirstInp.value, +task3SecondInp.value, task3Output);

            clearInputs(task3Inputs);
        }
    });
}


// * TASK 4

const task4Inputs = document.querySelectorAll("#task4-form input");
const task4Inp = document.querySelector("#task4-inp");
const task4Message = document.querySelector("#task4-message");

const task4Btn = document.querySelector("#task4-btn");
const task4Output = document.querySelector("#task4-output");

// * Через рекурсию лучше всего

// function calcFactorial(num) {
//     return num == 1 ? num : num * calcFactorial(num - 1);
// }

// * Через for

// function calcFactorial(num) {
//     let result = 1;
//     if (num == 1 || num == 0) {
//         return num;
//     } else {
//         for (let i = -1; i <= num; i++) {
//             result *= num;
//             num--;
//         }
//     }
//     return result;
// }

// * Через while

function calcFactorial(num) {
    let result = 1;

    if (num == 1 || num == 0) {
        return num;
    } else {
        while (num) {
            result *= num;
            num--;
        }
    }

    return result;
}

if (task4Btn) {
    task4Btn.addEventListener("click", function (e) {
        e.preventDefault();

        validateValue(0, 99, task4Inp.value, task4Message, task4Output);

        if (
            task4Message.textContent == ""
        ) {
            task4Output.textContent = calcFactorial(+task4Inp.value);

            clearInputs(task4Inputs);
        }
    });
}


// * TASK 5

const task5Inputs = document.querySelectorAll("#task5-form input");
const task5Inp = document.querySelector("#task5-inp");
const task5Message = document.querySelector("#task5-message");

const task5Btn = document.querySelector("#task5-btn");
const task5Output = document.querySelector("#task5-output");

function rotateNum(num) {
    let arr = num.split("");
    arr.reverse();
    return arr.join("");
}

if (task5Btn) {
    task5Btn.addEventListener("click", function (e) {
        e.preventDefault();

        validateValue(0, 9999, task5Inp.value, task5Message, task5Output);

        if (
            task5Message.textContent == ""
        ) {
            task5Output.textContent = rotateNum(task5Inp.value);

            clearInputs(task5Inputs);
        }
    });
}


// * TASK 6

const task6Inputs = document.querySelectorAll("#task6-form input");
const task6FirstInp = document.querySelector("#task6-first-inp");
const task6SecondInp = document.querySelector("#task6-second-inp");
const task6ThirdInp = document.querySelector("#task6-third-inp");

const task6FirstMessage = document.querySelector("#task6-first-message");
const task6SecondMessage = document.querySelector("#task6-second-message");
const task6ThirdMessage = document.querySelector("#task6-third-message");

const task6Btn = document.querySelector("#task6-btn");
const task6Output = document.querySelector("#task6-output");

function findNum(num) {
    let sum1 = sum2 = count = 0;
    let arr = num.split("");
    let halfArrIndex = Math.round(arr.length / 2);

    // * Перебираем первую половину массива
    for (let i = 0; i < halfArrIndex; i++) {
        arr[i] = +arr[i];
        sum1 += arr[i];
    }
    // * Перебираем вторую половину массива
    for (let k = halfArrIndex; k < arr.length; k++) {
        arr[k] = +arr[k];
        sum2 += arr[k];
    }

    if (sum1 == sum2) {
        return `Квиток ${num} "щасливий", так як обидві половини числа дорівнюють ${sum1}.`;
    } else {
        return `Квиток ${num} звичайний, перша половина числа дорівнює ${sum1}, а друга ${sum2}.`;
    }
}

function countHappyNum() {
    let count = 0;
    let answerArr = [
        findNum(task6FirstInp.value),
        findNum(task6SecondInp.value),
        findNum(task6ThirdInp.value)
    ];
    
    for (let i = 0; i < answerArr.length; i++) {
        let strPattern = "щасливий"
        if (answerArr[i].includes(strPattern)) {
            count++;
        }
    }
    return count;
}

if (task6Btn) {
    task6Btn.addEventListener("click", function (e) {
        e.preventDefault();

        validateValue(100000, 999999, task6FirstInp.value, task6FirstMessage, task6Output);
        validateValue(100000, 999999, task6SecondInp.value, task6SecondMessage, task6Output);
        validateValue(100000, 999999, task6ThirdInp.value, task6ThirdMessage, task6Output);

        if (
            task6FirstMessage.textContent == "" &&
            task6FirstMessage.textContent == "" &&
            task6FirstMessage.textContent == ""
        ) {
            task6Output.innerHTML =
                ` 
            ${findNum(task6FirstInp.value)} <br>
            ${findNum(task6SecondInp.value)} <br>
            ${findNum(task6ThirdInp.value)} <br> 
            Щасливих квитків: ${countHappyNum()}  
            `;

            clearInputs(task6Inputs);
        }
    });
}


// * TASK 7

const task7Inputs = document.querySelectorAll("#task7-form input");
const task7Inp = document.querySelector("#task7-inp");
const task7Message = document.querySelector("#task7-message");

const task7Btn = document.querySelector("#task7-btn");
const task7Output = document.querySelector("#task7-output");

function findDivisors(num) {
    let arr = [];

    for (let i = 0; i <= num; i++) {
        if (num % i == 0) {
            arr.push(i);
        }
    }
    return arr.length;
}

if (task7Btn) {
    task7Btn.addEventListener("click", function (e) {
        e.preventDefault();

        validateValue(1, 999, task7Inp.value, task7Message, task7Output);

        if (
            task7Message.textContent == ""
        ) {
            task7Output.textContent = `число ${task7Inp.value} має ${findDivisors(+task7Inp.value)} дільників`;

            clearInputs(task7Inputs);
        }
    });
}