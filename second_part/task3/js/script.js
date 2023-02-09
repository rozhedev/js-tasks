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
const task1ThirdInp = document.querySelector("#task1-third-inp");
const task1FouthInp = document.querySelector("#task1-fouth-inp");
const task1FifthInp = document.querySelector("#task1-fifth-inp");

const task1FirstMessage = document.querySelector("#task1-first-message");
const task1SecondMessage = document.querySelector("#task1-second-message");
const task1ThirdMessage = document.querySelector("#task1-third-message");
const task1FouthMessage = document.querySelector("#task1-fouth-message");
const task1FifthMessage = document.querySelector("#task1-fifth-message");

const task1Btn = document.querySelector("#task1-btn");
const task1Output = document.querySelector("#task1-output");


function findPositiveNum(inpArr) {
    let numArr = [];
    Array.from(inpArr);

    for (let i = 0; i < inpArr.length; i++) {
        if (+inpArr[i].value > 0) {
            numArr.push(+inpArr[i].value);
        }
    }
    return numArr.length;
}

if (task1Btn) {
    task1Btn.addEventListener("click", function (e) {
        e.preventDefault();

        validateValue(-999, 999, task1FirstInp.value, task1FirstMessage, task1Output);
        validateValue(-999, 999, task1SecondInp.value, task1SecondMessage, task1Output);
        validateValue(-999, 999, task1ThirdInp.value, task1ThirdMessage, task1Output);
        validateValue(-999, 999, task1FouthInp.value, task1FouthMessage, task1Output);
        validateValue(-999, 999, task1FifthInp.value, task1FifthMessage, task1Output);

        if (
            task1FirstInp.textContent == "" &&
            task1SecondInp.textContent == "" &&
            task1ThirdInp.textContent == "" &&
            task1FouthInp.textContent == "" &&
            task1FifthInp.textContent == ""
        ) {
            task1Output.textContent = findPositiveNum(task1Inputs);

            clearInputs(task1Inputs);
        }
    });
}


// * TASK 2

const task2Inputs = document.querySelectorAll("#task2-form input");
const task2FirstInp = document.querySelector("#task2-first-inp");
const task2SecondInp = document.querySelector("#task2-second-inp");
const task2ThirdInp = document.querySelector("#task2-third-inp");
const task2FourthInp = document.querySelector("#task2-fourth-inp");
const task2FifthInp = document.querySelector("#task2-fifth-inp");

const task2FirstMessage = document.querySelector("#task2-first-message");
const task2SecondMessage = document.querySelector("#task2-second-message");
const task2ThirdMessage = document.querySelector("#task2-third-message");
const task2FourthMessage = document.querySelector("#task2-fourth-message");
const task2FifthMessage = document.querySelector("#task2-fifth-message");

const task2Btn = document.querySelector("#task2-btn");
const task2Output = document.querySelector("#task2-output");

function findMaxNum(numArr) {
    Array.from(numArr);
    let max = 0;
    for (let i = 0; i < numArr.length; i++) {
        if (+numArr[i].value > max) {
            max = +numArr[i].value;
        }
    }
    return max;
}

if (task2Btn) {
    task2Btn.addEventListener("click", function (e) {
        e.preventDefault();

        validateValue(-999, 999, task2FirstInp.value, task2FirstMessage, task2Output);
        validateValue(-999, 999, task2SecondInp.value, task2SecondMessage, task2Output);
        validateValue(-999, 999, task2ThirdInp.value, task2ThirdMessage, task2Output);
        validateValue(-999, 999, task2FourthInp.value, task2FourthMessage, task2Output);
        validateValue(-999, 999, task2FifthInp.value, task2FifthMessage, task2Output);

        if (
            task2FirstMessage.textContent == "" &&
            task2SecondInp.textContent == "" &&
            task2ThirdInp.textContent == "" &&
            task2FourthInp.textContent == "" &&
            task2FifthInp.textContent == ""
        ) {
            task2Output.textContent = findMaxNum(task2Inputs);

            clearInputs(task2Inputs);
        }
    });
}


// * TASK 3

const task3Inputs = document.querySelectorAll("#task3-form input");
const task3FirstInp = document.querySelector("#task3-first-inp");
const task3SecondInp = document.querySelector("#task3-second-inp");
const task3ThirdInp = document.querySelector("#task3-third-inp");
const task3FourthInp = document.querySelector("#task3-fourth-inp");
const task3FifthInp = document.querySelector("#task3-fifth-inp");

const task3FirstMessage = document.querySelector("#task3-first-message");
const task3SecondMessage = document.querySelector("#task3-second-message");
const task3ThirdMessage = document.querySelector("#task3-third-message");
const task3FourthMessage = document.querySelector("#task3-fourth-message");
const task3FifthMessage = document.querySelector("#task3-fifth-message");

const task3Btn = document.querySelector("#task3-btn");
const task3Output = document.querySelector("#task3-output");

function findNegativeNum(inpArr) {
    let numArr = [];
    Array.from(inpArr);

    for (let i = 0; i < inpArr.length; i++) {
        if (+inpArr[i].value < 0) {
            numArr.push(+inpArr[i].value);
        }
    }
    return numArr.length;
}

if (task3Btn) {
    task3Btn.addEventListener("click", function (e) {
        e.preventDefault();

        validateValue(-999, 999, task3FirstInp.value, task3FirstMessage, task3Output);
        validateValue(-999, 999, task3SecondInp.value, task3SecondMessage, task3Output);
        validateValue(-999, 999, task3ThirdInp.value, task3ThirdMessage, task3Output);
        validateValue(-999, 999, task3FourthInp.value, task3FourthMessage, task3Output);
        validateValue(-999, 999, task3FifthInp.value, task3FifthMessage, task3Output);

        if (
            task3FirstMessage.textContent == "" &&
            task3SecondInp.textContent == "" &&
            task3ThirdInp.textContent == "" &&
            task3FourthInp.textContent == "" &&
            task3FifthInp.textContent == ""
        ) {
            task3Output.textContent = findNegativeNum(task3Inputs);

            clearInputs(task3Inputs);
        }
    });
}


// * TASK 4

const task4Inputs = document.querySelectorAll("#task4-form>*");
const task4Textarea = document.querySelector("#task4-textarea");
const task4Message = document.querySelector("#task4-message");

const task4Btn = document.querySelector("#task4-btn");
const task4Output = document.querySelector("#task4-output");

// const symbolsArr = [" ", "?", ":", "!", "@", "%", "&", "(", ")", "-", "+", "=", "/", "*"];
//  &&
// inpText[i] != checkArr[1] &&
// inpText[i] != checkArr[2] &&
// inpText[i] != checkArr[3] &&
// inpText[i] != checkArr[4] &&
// inpText[i] != checkArr[5] &&
// inpText[i] != checkArr[6] &&
// inpText[i] != checkArr[7] &&
// inpText[i] != checkArr[8] &&
// inpText[i] != checkArr[9] &&
// inpText[i] != checkArr[10] &&
// inpText[i] != checkArr[11] &&
// inpText[i] != checkArr[12] &&
// inpText[i] != checkArr[13]

function wordCount(inpText) {
    let count = 1;

    for (let i = 0; i < inpText.length; i++) {
        if (inpText[i] == " ") {
            count++;
        }
    }
    return count;
}

if (task4Btn) {
    task4Btn.addEventListener("click", function (e) {
        e.preventDefault();

        if (
            task4Message.textContent == ""
        ) {
            task4Output.textContent = wordCount(task4Textarea.value);

            clearInputs(task4Inputs);
        }
    });
}


// * TASK 5

const task5Inputs = document.querySelectorAll("#task5-form>*");
const task5Textarea = document.querySelector("#task5-textarea");
const task5FirstInp = document.querySelector("#task5-first-inp");
const task5SecondInp = document.querySelector("#task5-second-inp");

const task5FirstMessage = document.querySelector("#task5-first-message");
const task5SecondMessage = document.querySelector("#task5-second-message");
const task5ThirdMessage = document.querySelector("#task5-third-message");

const task5Btn = document.querySelector("#task5-btn");
const task5Output = document.querySelector("#task5-output");

function wordReplace(text, wordBefore, wordAfter) {
    if (text.indexOf(wordBefore) == - 1) {
        return `Слова "${wordBefore}" не має в даному тексті`;
    } else {
        let regex = new RegExp(`${wordBefore}`, "gi")
        let newText = text.replace(regex, wordAfter);

        return newText;
    }
}

if (task5Btn) {
    task5Btn.addEventListener("click", function (e) {
        e.preventDefault();

        if (
            task5FirstMessage.textContent == "" &&
            task5SecondMessage.textContent == "" &&
            task5ThirdMessage.textContent == ""
        ) {
            task5Output.textContent = wordReplace(task5Textarea.value, task5FirstInp.value, task5SecondInp.value);
            clearInputs(task5Inputs);
        }
    });
}


// * TASK 6

const task6Inputs = document.querySelectorAll("#task6-form>*");
const task6Textarea = document.querySelector("#task6-textarea");
const task6Message = document.querySelector("#task6-message");

const task6Btn = document.querySelector("#task6-btn");
const task6Output = document.querySelector("#task6-output");

function textTrimming(text) {
    let textArr = text.split(" ");
    let result = textArr.join(" ");
    return result;
}

if (task6Btn) {
    task6Btn.addEventListener("click", function (e) {
        e.preventDefault();

        if (
            task6Message.textContent == ""
        ) {
            task6Output.textContent = textTrimming(task6Textarea.value);
            clearInputs(task6Inputs);
        }
    });
}