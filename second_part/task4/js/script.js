// * RegExp
const regExp = /[1,2][0,9][0-9]{2}/;

// * Валидация

function validateValue(value, messageOutput, answerOutput) {
    if (value == undefined || value == "") {
        messageOutput.textContent = "Оберіть дату";
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


function parseYear(inpValue, regex) {
    // * Создаем регулярное выражение, чтобы извлеч текущий год
    let value = inpValue;
    let currentYear = value.match(regex).join("");

    // * Парсим дату из инпута и начало года
    let selectedDate = Date.parse(inpValue);
    let startYear = `${currentYear}-01-01`;
    let yearDate = Date.parse(startYear);
    return [selectedDate, yearDate];
}

// * TASK 1

let task1Inputs = document.querySelectorAll("#task1-form input");
const task1Date = document.querySelector("#task1-date");
const task1Message = document.querySelector("#task1-message");

const task1Btn = document.querySelector("#task1-btn");
const task1Output = document.querySelector("#task1-output");


function findWeek(inpValue) {
    // * Получаем к-ство мс с начала года и после этого к-ство недель 
    let yearInterval = parseYear(inpValue, regExp)[0] - parseYear(inpValue, regExp)[1];
    let weeksCount = Math.ceil((yearInterval + 1) / 1000 / 60 / 60 / 24 / 7);
    return weeksCount;
}

// * Более лаконичное решение
// function findWeek(inpValue) {
//     return Math.ceil((selectedDate.valueOf() + 7200001 - Date.parse(selectedDate.getFullYear())) / 604800000)
// }

if (task1Btn) {
    task1Btn.addEventListener("click", function (e) {
        e.preventDefault();

        validateValue(task1Date, task1Message, task1Output);

        if (
            task1Date.textContent == ""
        ) {
            task1Output.textContent = `номер тижня: ${findWeek(task1Date.value, regExp)}`;

            clearInputs(task1Inputs);
        }
    });
}


// * TASK 2

let task2Inputs = document.querySelectorAll("#task2-form input");
const task2Date = document.querySelector("#task2-date");
const task2Message = document.querySelector("#task2-message");

const task2Btn = document.querySelector("#task2-btn");
const task2Output = document.querySelector("#task2-output");

const zodiacArr = {
    capricorn: {
        label: "Козерог (Capricorn)",
        interval: [1, 19, 356, 366],
    },
    aquarius: {
        label: "Водолей (Aquarius)",
        interval: [20, 59]
    },
    pisces: {
        label: "Рыбы (Pisces)",
        interval: [60, 89],
    },
    aries: {
        label: "Овен (Aries)",
        interval: [90, 129],
    },
    taurus: {
        label: "Телец (Taurus)",
        interval: [130, 160],
    },
    gemini: {
        label: "Близнецы (Gemini)",
        interval: [161, 192],
    },
    cancer: {
        label: "Рак (Cancer)",
        interval: [193, 223],
    },
    leo: {
        label: "Лев (Leo)",
        interval: [224, 254],
    },
    virgo: {
        label: "Дева (Virgo)",
        interval: [255, 285],
    },
    libra: {
        label: "Весы (Libra)",
        interval: [286, 316],
    },
    scorpio: {
        label: "Скорпион (Scorpio)",
        interval: [317, 335],
    },
    sagittarius: {
        label: "Стрелец (Sagittarius)",
        interval: [336, 355],
    },
}

function checkZodiac(inpValue, dataObj) {
    let yearInterval = parseYear(inpValue, regExp)[0] - parseYear(inpValue, regExp)[1];

    let daysCount = Math.ceil(yearInterval / 1000 / 60 / 60 / 24);

    if (
        daysCount >= dataObj.capricorn.interval[0] &&
        daysCount <= dataObj.capricorn.interval[1] ||
        daysCount >= dataObj.capricorn.interval[2] &&
        daysCount <= dataObj.capricorn.interval[3]
    ) {
        return dataObj.capricorn.label;
    } else if (
        daysCount >= dataObj.aquarius.interval[0] &&
        daysCount <= dataObj.aquarius.interval[1]
    ) {
        return dataObj.aquarius.label;
    } else if (
        daysCount >= dataObj.pisces.interval[0] &&
        daysCount <= dataObj.pisces.interval[1]
    ) {
        return dataObj.pisces.label;
    } else if (
        daysCount >= dataObj.aries.interval[0] &&
        daysCount <= dataObj.aries.interval[1]
    ) {
        return dataObj.aries.label;
    } else if (
        daysCount >= dataObj.taurus.interval[0] &&
        daysCount <= dataObj.taurus.interval[1]
    ) {
        return dataObj.taurus.label;
    } else if (
        daysCount >= dataObj.gemini.interval[0] &&
        daysCount <= dataObj.gemini.interval[1]
    ) {
        return dataObj.gemini.label;
    } else if (
        daysCount >= dataObj.cancer.interval[0] &&
        daysCount <= dataObj.cancer.interval[1]
    ) {
        return dataObj.cancer.label;
    } else if (
        daysCount >= dataObj.leo.interval[0] &&
        daysCount <= dataObj.leo.interval[1]
    ) {
        return dataObj.leo.label;
    } else if (
        daysCount >= dataObj.virgo.interval[0] &&
        daysCount <= dataObj.virgo.interval[1]
    ) {
        return dataObj.virgo.label;
    } else if (
        daysCount >= dataObj.libra.interval[0] &&
        daysCount <= dataObj.libra.interval[1]
    ) {
        return dataObj.libra.label;
    } else if (
        daysCount >= dataObj.scorpio.interval[0] &&
        daysCount <= dataObj.scorpio.interval[1]
    ) {
        return dataObj.scorpio.label;
    } else if (
        daysCount >= dataObj.sagittarius.interval[0] &&
        daysCount <= dataObj.sagittarius.interval[1]
    ) {
        return dataObj.sagittarius.label;
    }
}

if (task2Btn) {
    task2Btn.addEventListener("click", function (e) {
        e.preventDefault();

        validateValue(task2Date, task2Message, task2Output);

        if (
            task2Date.textContent == ""
        ) {
            task2Output.textContent = `Знак зодиака: ${checkZodiac(task2Date.value, zodiacArr)}`;

            clearInputs(task2Inputs);
        }
    });
}


// * TASK 3

let task3Inputs = document.querySelectorAll("#task3-form input");
const task3Date = document.querySelector("#task3-date");
const task3Message = document.querySelector("#task3-message");

const task3Btn = document.querySelector("#task3-btn");
const task3Output = document.querySelector("#task3-output");

const task3Data = [
    {
        color: "зелений",
        yearName: "роком пацюка",
    },
    {
        color: "синий",
        yearName: "роком корови",
    },
    {
        color: "чорний",
        yearName: "роком тигра",
    },
    {
        color: "білий",
        yearName: "роком зайця",
    },
    {
        color: "світло-сірий",
        yearName: "роком дракона",
    },
    {
        color: "жовтий",
        yearName: "роком змії",
    },
    {
        color: "золотий",
        yearName: "роком коня",
    },
    {
        color: "червоний",
        yearName: "роком вівці",
    },
    {
        color: "оранжевий",
        yearName: "роком мавпи",
    },
    {
        color: "синій",
        yearName: "роком курки",
    },
    {
        color: "світло-синій",
        yearName: "роком собаки",
    },
    {
        color: "світло-зелений",
        yearName: "роком свині",
    },
];

function findYearData(interval, arr) {
    let result = {
        color: "",
        yearName: "",
    };
    for (let k = 0; k <= interval; k++) {

        if (k % arr.length == 0 && k != 0) {
            k -= arr.length;
            interval -= arr.length;
        } else {
            result.color = arr[k].color;
            result.yearName = arr[k].yearName;
        }
    }
    return [result.color, result.yearName];
}

function determineYearName(inpValue, dataArr, regex) {
    let currentYear = +(inpValue.match(regex).join(""));
    let startYear = 1984;
    let yearInterval = currentYear - startYear;

    if (yearInterval >= 0) {
        return [currentYear, findYearData(yearInterval, dataArr)[0], findYearData(yearInterval, dataArr)[1]];
    } else {
        return [currentYear, findYearData(Math.abs(yearInterval), dataArr)[0], findYearData(Math.abs(yearInterval), dataArr)[1]];
    }
}

if (task3Btn) {
    task3Btn.addEventListener("click", function (e) {
        e.preventDefault();

        validateValue(task3Date, task3Message, task3Output);

        if (
            task3Date.textContent == ""
        ) {
            task3Output.textContent =
                `
             ${determineYearName(task3Date.value, task3Data, regExp)[0]} має 
             ${determineYearName(task3Date.value, task3Data, regExp)[1]} колір та є
             ${determineYearName(task3Date.value, task3Data, regExp)[2]}
             `;

            clearInputs(task3Inputs);
        }
    });
}