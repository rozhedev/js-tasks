// Task 1
// Создайте button - при нажатии на него выводите alert с номером задачи.

function f1(){
    alert(1);
}

document.querySelector('.b-1').onclick = f1;


// Task 2
// Создайте input type=button - при нажатии на него выводите alert с номером задачи.

function f2(){
    alert(2);
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// Создайте p - при нажатии на него выводите alert с номером задачи.

function f3(){
    alert(3);
}

document.querySelector('.b-3').onclick = f3;


// Task 4. Создайте input(checkbox) и button - при нажатии на него выводите true если checkbox выбран и false если нет.

document.querySelector('.b-4').onclick = () => {
    document.querySelector('.out-4').innerHTML = document.querySelector('.i-4').checked; 
}

// Task 5. Создайте input(checkbox) и button. Добавьте value для checkbox. При нажатии на него выводите value если checkbox выбран и false если нет.

function f5(){
    const out5 = document.querySelector('.out-5');
    let checkbox2  = document.querySelector('.i-5');

    if (checkbox2.checked) {
        out5.innerHTML = checkbox2.value;
    }
    else {
        out5.innerHTML = checkbox2.checked;
    }
}

document.querySelector('.b-5').onclick = f5;


// Task 6. Создайте input(hidden) и button - при нажатии на него выводите alert с value прописанным в input.

function f6(){
    alert(document.querySelector('.i-6').value);
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// Создайте input(password) и button - при нажатии на него выводите alert с value прописанным в input. Выводите в консоль предупреждение, если длина пароля меньше 6 символов.

function f7(){
    const pass = document.querySelector('.i-7').value;
    alert(pass);

    if (pass.length < 6) {
        console.log(`Длина вашего пароля ${pass} меньше 6 символов`);
    }
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// Создайте div и кнопку. При нажатии кнопки создавайте внутри div элемент input и кнопку (innerHTML). Добавьте на созданную кнопку событие - при клике выводить alert c содержимым созданного input.

const outerBlock = document.querySelector('.out-8');
const b8 = document.querySelector('.b-8');

b8.onclick = () => {
    outerBlock.innerHTML = '<input type="text" value="This new input" id="inner-inp"><button id="inner-btn">Click me</button>';

    const innerInp = document.querySelector('#inner-inp').value;
    let innerBtn = document.querySelector('#inner-btn');

    innerBtn.style.backgroundColor = 'lightblue';   // добавил, чтобы было виднее)
    innerBtn.style.color = '#fff';
    innerBtn.style.margin = '10px 0px';
    // Привычка дизайнера все стилизировать

    innerBtn.onclick = () => {
        alert(innerInp + ' Вложенная функция... Интересно)');
    }
}

// Task 9
// Создайте один input(radio) . и button - при нажатии на button выводите alert с value прописанным в активном (если он активен, если нет - то alert - false) radiobutton.

function f9(){
    const radioBtn = document.querySelector('.i-9');

    if  (radioBtn.checked) {
        alert(radioBtn.value);
    }
    else {
        alert(radioBtn.checked);
    }
}

document.querySelector('.b-9').onclick = f9;

// Task 10
//    Создайте input(color) и button - при нажатии на него окрашивайте div выбранным цветом.

function f10(){
    let colorPicker = document.querySelector('.i-10').value;
    let out10 = document.querySelector('.out-10');

    out10.style.width = '300px';
    out10.style.backgroundColor = colorPicker;
}

document.querySelector('.b-10').onclick = f10;


// Task     11
// Создайте input(color) - два элемента и button - при нажатии на кнопку присвойте цвет из первого input в value второго.

function f11(){
    document.querySelector('#i-112').value = document.querySelector('#i-111').value;
}

document.querySelector('.b-11').onclick = f11;

// Task 12
//Создайте input(date) и button - при нажатии на кнопку выводите на страницу выбранную дату.

document.querySelector('.b-12').onclick = () => {
    document.querySelector('.out-12').innerHTML = document.querySelector('#i-12').value;
}

// Task 13
// Создайте input(range) и button - при нажатии на кнопку выводите на страницу значение из input. Добавьте событие oninput на range и тоже выводите значение на страницу.

const b13 = document.querySelector('.b-13');
const out131 = document.querySelector('.out-131');
const out132 = document.querySelector('.out-132');

let range = document.querySelector('.i-13');

b13.onclick = () => {
    out131.innerHTML = range.value;
}

range.oninput = () => {
    out132.innerHTML = range.value;
}

// Task 14.
// Создайте text-area и button - при нажатии на кнопку выводите на страницу значение из textarea.

document.querySelector('.b-14').onclick = () => {
    document.querySelector('.out-14').innerHTML = document.querySelector('#textarea-1').value;
}

// Task 15.
// Создайте text-area, input и button - при нажатии на кнопку выводите текс из input в textarea и на страницу.

const b15 = document.querySelector('.b-15');
const out15 = document.querySelector('.out-15');

let i15 = document.querySelector('#i-15');
i15.style.margin = '20px 0px'; // Чтобы не слипалось

b15.onclick = () => {
    let textarea2 = document.querySelector('#textarea-2').value;
    
    i15.value = textarea2;
    out15.innerHTML = textarea2;
}

// Task 16.
// Создайте select и button - при нажатии на кнопку выводите на страницу value выбраннов в select option.

const b16 = document.querySelector('.b-16');
const out16 = document.querySelector('.out-16');

b16.onclick = () => {
    out16.innerHTML = document.querySelector('#first-select').value;
}

// Task 17.
// Эту задачу пока не делаем!!!!!

// Task 18.
// Создайте select добавьте на него событие onchange. По данному событию выводите value выбранного option на страницу.

const out18 = document.querySelector('.out-18');
let secondSelect = document.querySelector('#second-select');

secondSelect.onchange = () => {
    out18.innerHTML = secondSelect.value;
}

// Task 19.
// Создайте форму. В ней input(text) и input(password) - и кнопку. По нажатию кнопки выводите значение text и password в консоль!

document.querySelector('#b-19').onclick = () => {
    let login = document.querySelector('#login').value;
    let userPass = document.querySelector('#password').value;

    console.log(`Ваш логин ${login}. Ваш пароль ${userPass}.`);
    // в консоль выводится(на момент нажатия), но сразу же исчезает, поэтому выведу через alert().
    alert(`Ваш логин ${login}. Ваш пароль ${userPass}.`);
}

// 20 Task.
// Создайте форму. В ней input(text) и input(password) - и кнопку. По нажатию кнопки выводите значение text и password в консоль! Используйте form.elements (читать)

document.querySelector('#b-20').onclick = () => {
    let myForm = document.forms.signup;
    let userName = myForm.elements.login2.value;
    let password = myForm.elements.password2.value;

    console.log(`Ваш логин ${userName}. Ваш пароль ${password}`);
    alert(`Ваш логин ${userName}. Ваш пароль ${password}`);
}