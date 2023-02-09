let arr = [];

function addProp() {
    arr.push([keyObj.value, valueObj.value]);
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i][0]}: ${arr[i][1]}, <br>`;
    }
    obj = Object.fromEntries(arr);
    showObj('.out-7', str);
    console.log(obj);
}

function deleteProp() {
    let str = '';
    obj = Object.entries(obj);
    for (let i = 0; i < obj.length; i++) {
        if (keySearch.value == obj[i][0]) {
            obj[i].shift();
            obj[i].pop();
            str += obj[i];
        }
    }
    obj = Object.fromEntries(obj);
    console.log(obj);
    showObj('.out-8', str);
}

// 16 Task.

const radioKeys = Object.keys(a11);
// console.log(Object.keys(a11));

// for (key in a11) {
    //     for (let b = 0; b < radio.length; b++) {
    //         if (radio[b].checked) {
    //             for (let e = 0; e < radioKeys.length; e++) {
    //                 if (radioKeys[e] == radio[b].value) {
    //                     for (let i = 0; i < a11[key].length; i++) {
    //                         let a = document.createElement('option');
    //                         a.innerHTML = a11[key][i];
    //                         u16.append(a);
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }

    // Task 20.

    function chooseCountry() {
        let select = document.querySelector('.u20-choose-country');
        let keys = Object.keys(a19);
        let str = '';
        console.log(select);
    
    //     for (let i = 0; i < select.length; i++) {
    //         for (let c = 0; c < keys.length; c++) {
    //             if (select[i].value == keys[c]) {
    //                 for (let key in a19) {
    //                     for (let prop in a19[key]) {
    //                         str += a19[key][prop] + '<br>';
    //                     }
    //                 }
    //             }
    //         }
    //     }
    //     document.querySelector('.out-20').innerHTML = str;
    }
    
    document.querySelector('.choose-country').onclick = chooseCountry;