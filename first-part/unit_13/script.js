function showObj(domElem, obj) {
    document.querySelector(domElem).innerHTML = obj;
}

// Task 1.
// Выведите массив a1 на страницу.

const a1 = {
    3: 'Hello',
    'one': 'hi'
};
let out = '';

for (let key in a1) {
    out += key + a1[key];
}

showObj('.out-1', out);

// 2 Task.
// Выведите на страницу элементы из масиива a2 у которых символов больше 4.


const a2 = {
    3: 'Hello',
    'one': 'hi',
    'testt': 'vodoley',
    'ivan': 'ivanov',
}

let result2 = '';

for (let key in a2) {
    if (a2[key].length > 4) {
        result2 += a2[key] + ' ';
    }
}

showObj('.out-2', result2);

// 3 Task.
// Выведите на страницу элементы из масиива a3 у которых ключ содержит больше 4 символов.

a3 = {
    3: 'hello',
    'one': 'hi',
    'testt': 'vodoley',
    'ivan': 'ivanov'
};

let result3 = '';
for (let key in a3) {
    if (key.length > 4) {
        result3 += key + ' '
    }
}

showObj('.out-3', result3);

// 4 Task
// Выведите на страницу элементы из масиива a4 у которых значение - число.

a4 = {
    3: 'hello',
    'one': 4,
    'testt': 'vodoley',
    'ivan': 6
};

let result4 = '';
for (let key in a4) {
    if (typeof a4[key] == 'number') {
        result4 += a4[key] + ' ';
    }
}

showObj('.out-4', result4);

// 5 Task.
// Дан ассоциативный массив a5. Найдите сумму элементов находящихся в нем.

a5 = {
    a: 7,
    z: 4,
    45: 12,
    f: 6
};

let sum5 = 0;
for (let key in a5) {
    sum5 += a5[key];
}

showObj('.out-5', sum5);

// 6 Task
// Создайте ассоциативный массив a6, который содержит ключи name, age, sex, height и значения любого
//  персонажа. Выведите массив на страницу.

let donaldTrump = {
    post: 'President USA',
    sex: 'male',
    age: 74,
    birthDate: '14 june',
    birthYear: 1946,
    comeIn: 'Republic party',
}

let donaldProp = '';

for (let key in donaldTrump) {
    donaldProp += `${key} --- ${donaldTrump[key]} <br>`;
}

showObj('.out-6', donaldProp);

// 7 Task
// Создайте ассоциативный массив a7, два input (u7-key__input, u7-value__input) и кнопку. При нажатии кнопки
//  добавляйте в массив новое значение с соответствующим ключем. Выводите массив на страницу.

// Мы взяли значение с первого поля и используем как ключ, хотя и объект пустой и обращаясь с помощью ключа 
// присваиваем к несуществующему еще свойству значение. Первый инпут вместо прописаного свойства и второй 
// вместо прописаного значения.
// Мы говорим значению свойства объекта присвоить то что ввел пользователь у второе поле.

const keyObj = document.querySelector('.u7-key__input');
const valueObj = document.querySelector('.u7-value__input');
let obj = {};

function addProp() {
    let str = '';
    obj[keyObj.value] = valueObj.value;

    for (keyObj.value in obj) {
        str += `${keyObj.value}: ${obj[keyObj.value]} <br>`;
    }
    showObj('.out-7', str);
    console.log(obj);
}

document.querySelector('.b-7').onclick = addProp;

// 8 Task.
// Добавьте к предыдущей задачи input.u8-key__input и кнопку. При нажатии кнопки - удаляйте значение
//  с соответствующим ключем. Выводите массив на страницу.

function deleteProp() {
    const keySearch = document.querySelector('.u8-key__input').value;
    let out = '';

    for (keyObj.value in obj) {
        if (keyObj.value == keySearch) {
            delete obj[keySearch];
        }
        if (obj[keyObj.value] != undefined) {
            out += `${keyObj.value}: ${obj[keyObj.value]} <br>`
        }
    }
    showObj('.out-8', out);
    console.log(obj);
}

document.querySelector('.b-8').onclick = deleteProp;

// Task 9.
// Добавьте к предыдущей задачи input.u9-delete-value__input и кнопку. При нажатии кнопки - удаляйте
//  записи с соответствующим значением. Выводите массив на страницу.

function deleteByValue() {
    let delValue = document.querySelector('.u9-delete-value__input').value;
    let out = '';

    for (keyObj.value in obj) {
        if (delValue == obj[keyObj.value]) {
            delete obj[keyObj.value];
        }
        if (obj[keyObj.value] != undefined) {
            out += `${keyObj.value}: ${obj[keyObj.value]} <br>`;
        }
    }
    console.log(obj);
    showObj('.out-9', out);
}

document.querySelector('.b-9').onclick = deleteByValue;

// 10 Task
// Добавьте к предыдущей задачи input.u10-has-key__input и кнопку. При нажатии кнопки
//  - возвращайте true если такой ключ есть в массиве, и false если нет.

function checkByKey() {
    const checkKey = document.querySelector('.u10-has-key__input').value;
    let str = '';
    for (keyObj.value in obj) {
        if (keyObj.value == checkKey) {
            str = true;
        }
        else {
            str = false;
        }
    }
    console.log(str);
    showObj('.out-10', str);
}

document.querySelector('.b-10').onclick = checkByKey;

// 11 Task.
// Создайте массив, который описывает метро киевского метрополитена, выведите его на страницу.

const a11 = {
    "red": ['Академгородок', 'Житомирская', 'Святошин', 'Нивки', 'Берестейская', 'Шулявская',
        'Политехнический институт', 'Вокзальная', 'Университет', 'Театральная', 'Хрещатик', 'Арсенальная',
        'Днепр', 'Гидропарк', 'Левобережная', 'Дарница', 'Черниговская', 'Лесовая'],

    "green": ['Сирец', 'Дорогожичи', 'Лук`яновская', 'Золотые ворота', 'Дворец спорта', 'Кловская', 'Печерская',
        'Дружбы народов', 'Видубичи', 'Славутич', 'Осокорки', 'Позняки', 'Харковская', 'Вырлица', 'Бориспольская',
        'Красный хутор'],

    "blue": ['Героев Днепра', 'Минская', 'Оболонь', 'Почайная', 'Петровка', 'Тараса Шевченка', 'Контрактовая площадь',
        'Почтовая площадь', 'Майдан независимости', 'Площадь Льва Толстого', 'Олимпийская', 'Дворец "Украина"',
        'Лыбидьская', 'Демиевская', 'Голосиевская', 'Васильковская', 'Выставочный центр', 'Иподром', 'Теремки']
}

let str11 = '';

for (let key in a11) {
    for (let i = 0; i < a11[key].length; i++) {
        str11 += a11[key][i] + ' ';
    }
    str11 += '<hr>'
}

document.querySelector('.out-11').innerHTML = str11;

// Task 12.
// Добавьте к предыдущей задаче select.u12-branch и кнопку. Пользователь может выбрать цвет ветки и нажать
//  кнопку, после чего на страницу будут выведены только станции данной ветки.

const selectBranch = document.querySelector('.u12-branch');

function showStation() {
    let str = '';

    switch (selectBranch.value) {
        case 'red':
            for (let i = 0; i < a11['red'].length; i++) {
                str += a11['red'][i] + '<br>';
            }
            break;
        case 'green':
            for (let k = 0; k < a11['green'].length; k++)
                str += a11['green'][k] + '<br>';
            break;
        case 'blue':
            for (let j = 0; j < a11['blue'].length; j++) {
                str += a11['blue'][j] + '<br>';
            }
    }
    document.querySelector('.out-12').innerHTML = str;
}

document.querySelector('.u12-show-station').onclick = showStation;

// Task 13.
// Добавьте к предыдущей задаче кнопку button.u13-reverse которая при нажатии выводит станции ветки в
//  обратном порядке. Внимание! Все подобные задачи не меняют массив, а меняют только вывод!!!

function showReverse() {
    let str = '';

    switch (selectBranch.value) {
        case 'red':
            for (let i = a11['red'].length - 1; i >= 0; i--) {
                str += a11['red'][i] + '<br>';
            }
            break;
        case 'green':
            for (let j = a11['green'].length - 1; j >= 0; j--) {
                str += a11['green'][j] + '<br>';
            }
            break;
        case 'blue':
            for (let k = a11['blue'].length - 1; k >= 0; k--) {
                str += a11['blue'][k] + '<br>';
            }
    }
    document.querySelector('.out-13').innerHTML = str;
}

document.querySelector('.u13-reverse').onclick = showReverse;

// 14 Task.
// Добавьте к предыдущей задаче select.u14-find-station и кнопку. В select - пользователь может выбрать
//  станцию, а вы перебирая массив - вывести ветку на которой эта станция находится.

const selectStation = document.querySelector('.u14-find-station');

function showBranch() {
    let str = '';
    // console.log(selectStation.value)
    for (let i = 0; i < a11['red'].length; i++) {
        if (selectStation.value == a11['red'][i]) {
            str = 'red';
        }
    }
    for (let f = 0; f < a11['green'].length; f++) {
        if (selectStation.value == a11['green'][f]) {
            str = 'green';
        }
    }
    for (let k = 0; k < a11['blue'].length; k++) {
        if (selectStation.value == a11['blue'][k]) {
            str = 'blue';
        }
    }
    showObj('.out-14', str);
}

document.querySelector('.u14-show-branch').onclick = showBranch;

// 15 Task.
// Добавьте к предыдущему заданию 2 select где пользователь может выбрать 2 станции, и если они на одной
//  ветке - то по нажатию на кнопку будет показано сколько станций между ними (сами станции не включаем. 
// Если это соседние станции - то 0).

function showDistance() {
    const station1 = document.querySelector('.station1').value;
    const station2 = document.querySelector('.station2').value;
    let num = '';

    for (let key in a11) {
        let index1 = a11[key].indexOf(station1);
        let index2 = a11[key].indexOf(station2);

        if (index1 != -1 && index2 != -1) {
            if (index1 > index2) {
                num = index1 - index2 - 1;
            }
            if (index1 < index2) {
                num = index2 - index1 - 1;
            }
            if (index1 == index2) {
                num = 'Выбрано 2 одинаковых станции';
            }
        }
    }
    document.querySelector('.out-15').innerHTML = num;
}

document.querySelector('.u15-show-distance').onclick = showDistance;

// Task 16;
// Добавьте 3 radiobutton.u16-radio которые содержат value = red, green, blue - в соотвтествии с цветом веток
//  метро. Добавьте пустой select.u16-select. При выборе radio - программа должна в select добавлять option с 
//  названиями станций метро. Т.е. выбрали radio(value="green") то внутрь select должны быть записаны option со
//  станциями зеленой ветки. Выбрали red - select должен быть очищен и добавлены option со станциями красной ветки.

// Создай цикл, по перебору радиокнопок, внутри него другой цикл по перебору ключей в массиве
//  и уже внутри него сравниваешь, равно ли значения ключа и value радиокнопки.

function checkBranch() {
    let radio, u16, a;
    radio = document.querySelectorAll('.u16-radio');
    u16 = document.querySelector('.u16-select');
    u16.innerHTML = '';

    // for (let i = 0; i < radio.length; i++) {
    //     for (let k = 0; k < Object.keys(a11); k++) {
    //         if (radio[i].checked) {
    //             for (let key in a11) {
    //                 for (let m = 0; m < a11[key].length; m++) {
    //                     a = document.createElement('option');
    //                     a.innerHTML = a11['red'][i];
    //                     u16.append(a);
    //                 }
    //             }
    //         }
    //     }
    // }

    if (radio[0].checked) {
        for (let i = 0; i < a11['red'].length; i++) {
            a = document.createElement('option');
            a.innerHTML = a11['red'][i];
            u16.append(a);
        }
    }
    if (radio[1].checked) {
        for (let i = 0; i < a11['green'].length; i++) {
            a = document.createElement('option');
            a.innerHTML = a11['green'][i];
            u16.append(a);
        }
    }
    if (radio[2].checked) {
        for (let i = 0; i < a11['blue'].length; i++) {
            a = document.createElement('option');
            a.innerHTML = a11['blue'][i];
            u16.append(a);
        }
    }
}

document.querySelector('.u16-check').onclick = checkBranch;

// Task 17.
// Создайте массив, который описывает метро киевского метрополитена и обозначаются конечные и станции перехода,
//  выведите его на страницу. Конечные - обозначать 0, перехода - 1.

const a17 = {
    "red": [['Академгородок', 0], ['Житомирская', 0], ['Святошин', 0], ['Нивки', 0], ['Берестейская', 1],
    ['Шулявская', 0], ['Политехнический институт', 1], ['Вокзальная', 1], ['Университет', 0], ['Театральная', 1],
    ['Хрещатик', 1], ['Арсенальная', 0], ['Днепр', 0], ['Гидропарк', 0], ['Левобережная', 1], ['Дарница', 0],
    ['Черниговская', 0], ['Лесовая', 0]],

    "green": [['Сирец', 0], ['Дорогожичи', 0], ['Лук`яновская', 0], ['Золотые ворота', 1], ['Дворец спорта', 1],
    ['Кловская', 0], ['Печерская', 0], ['Дружбы народов', 0], ['Видубичи', 1], ['Славутич', 0], ['Осокорки', 0],
    ['Позняки', 0], ['Харковская', 0], ['Вырлица', 0], ['Бориспольская', 0], ['Красный хутор', 0]],

    "blue": [['Героев Днепра', 0], ['Минская', 0], ['Оболонь', 0], ['Почайная', 0], ['Петровка', 1],
    ['Тараса Шевченка', 0], ['Контрактовая площадь, 0'], ['Почтовая площадь', 0], ['Майдан независимости', 1],
    ['Площадь Льва Толстого', 1], ['Олимпийская', 0], ['Дворец "Украина"', 0], ['Лыбидьская', 0],
    ['Демиевская', 0], ['Голосиевская', 0], ['Васильковская', 0], ['Выставочный центр', 0], ['Иподром', 0],
    ['Теремки', 0]],
}

let str17 = '';
for (key in a17) {
    for (let i = 0; i < a17[key].length; i++) {
        str17 += a17[key][i] + '<br>';
    }
    str17 += '<hr>';
    console.log(a17['blue'][0]);
}

document.querySelector('.out-17').innerHTML = str17;

// Task 18.
// Выведите на страницу только станции с переходами из массива a17.

let str18 = '';

for (key in a17) {
    for (let i = 0; i < a17[key].length; i++) {
        if (a17[key][i][1] == 1) {
            str18 += a17[key][i] + '<br>';
        }
    }
}

document.querySelector('.out-18').innerHTML = str18;

// 19 Task.
// Создайте ассоциативный массив где ключами являются страны азии, а вложенными массивами - ассоциативный
//  массив содержащий название столицы, количество населения, площадь. Выведите его на страницу.

const a19 = {
    "Russia": {
        "contry name": 'Russia',
        "square": '17 125 191 square km',
        "capital": 'Moskow',
        "population": '146,795 million',
    },
    "China": {
        "country name": 'China',
        "square": '9 598 962 square km',
        "capital": 'Beijing',
        "population": '1,395 billon',
    },
    "Korea": {
        "country name": 'Korea',
        "square": '100 210 square km',
        "capital": 'Seoul',
        "population": '53 million',
    },
    "Israel": {
        "country name": 'Israel',
        "square": '22 075 square km',
        "capital": 'Jerusalem',
        "population": '8,972 million',
    },
    "Kazakhstan": {
        "country name": 'Kazakhstan',
        "square": '2 724 902 square km',
        "capital": 'Nur Sultan',
        "population": '18,6111 million',
    },
    "Japan": {
        "country name": 'Japan',
        "square": '377 915 square km',
        "capital": 'Tokyo',
        "population": '126,8 million',
    },
    "India": {
        "country name": 'India',
        "square": '3 287 263 square km',
        "capital": 'New Delhi',
        "population": '1,340468 billion'
    },
    "Vietnam": {
        "country name": 'Vietnam',
        "square": '331 210 square km',
        "capital": 'Hanoi',
        "population": '93,976 million',
    },
}

let str19 = '';

for (let key in a19) {
    for (let prop in a19[key]) {
        str19 += a19[key][prop] + '<br>';
    }
    str19 += '<hr>';
}

document.querySelector('.out-19').innerHTML = str19;

// Task 20.
// Дополните массив из задачи 19 так, чтобы пользователь мог сам выбирать страну в select, а необходимая
//  информация подтягивалась на страницу.

const select = document.querySelector('.u20-choose-country');

function chooseCountry(firstStart, country) {
    let str = '';
    if (firstStart != "Russia") country = this.value;
    else country = firstStart;

    for (let key in a19[country]) {
        str += `${key}: ${a19[country][key]}<br>`
    }
    showObj('.out-20', str);
}

chooseCountry("Russia");
select.onchange = chooseCountry;
