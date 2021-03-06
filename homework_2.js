"use strict"

//1. Задание

// var a = 1,
//     b = 1,
//     c, d;
// /*в данном примере используется префиксная форма инкремента,
//  т.е. наша переменная увеличивается на единицу, а префиксная форма позвляет нам получить значение после уведичения*/
// c = ++a;
// alert(c); // 2

// /* в данном примере используется постфиксная форма инкремента,
//  мы получаем значение переменной до ее увеличения, т.е. 1*/
// d = b++;
// alert(d); // 1

// /* ++a нам дает значение 3, т.к. до этого в примере выше у нас уже была произведена операция по увеличению ее на 1,
// далее складываем 2 с 3 получаем 5 */
// c = (2 + ++a);
// alert(c); // 5

// /*b++ дает нам знаечение 2, а не 3 т.к. получаем значение до ее увеличения,
// далее складываем 2 с 2 получаем 4 */
// d = (2 + b++);
// alert(d); // 4

// /*после всех операций произведенных в примерах выше (а именно это два раза увеличение на единицу) получаем в переменных a и b по 3*/
// alert(a); // 3
// alert(b); // 3

// //2. Задание

// /*1. выполняется действие в скобках, а именно произведение с присваиванием, получаем 4
// 2. далее суммируем числа 1 и 4, получаем 5 */
// var a = 2;
// var x = 1 + (a *= 2);
// alert(x);

//3. Задание

let a = +prompt("Введите целое число");
let b = +prompt("Введите второе целое число");
let result;

if (a >= 0 && b >= 0) {
    result = a - b;
} else if (a < 0 && b < 0) {
    result = a * b;
} else if (a < 0 && b >= 0 || a >= 0 && b < 0) {
    result = a + b;
}

alert(result);



//4. Задание 

function sumOperation(a, b) {
    let summ = a + b;
    return summ;
}

function diffOperation(a, b) {
    let diff = a - b;
    return diff;
}

function multpnOperation(a, b) {
    let multpn = a * b;
    return multpn;
}

function divsnOperation(a, b) {
    let divsn = a / b;
    return divsn;
}

// 5. Задание

function mathOperation(id1, id2, id3, id4) {
    let a = parseFloat(document.getElementById(id1).value.replace(',', '.'));
    let b = parseFloat(document.getElementById(id2).value.replace(',', '.'));
    let operation = document.getElementById(id3).value;
    if (isNaN(a) != true && isNaN(b) != true) {
        switch (operation) {
            case "+":
                document.getElementById(id4).value = sumOperation(a, b);
                break;
            case "-":
                document.getElementById(id4).value = diffOperation(a, b);
                break;
            case "*":
                document.getElementById(id4).value = multpnOperation(a, b);
                break;
            case "/":
                document.getElementById(id4).value = divsnOperation(a, b);
                break;

        }
    } else alert("Введите числа!")
}

// 6. Задание

function contribution(id) {
    let numbers = [{
        endings: ["0", "5", "6", "7", "8", "9"]
    }, {
        endings: ["1"]
    }, {
        endings: ["2", "3", "4"]
    }]
    let i = 0;


    let userNumber = (document.getElementById(id).value)[(document.getElementById(id).value).length - 1];
    if (isNaN(document.getElementById(id).value) != true) {
        for (let number of numbers) {
            if (number.endings.indexOf(userNumber) !== -1 && i == 0) {
                alert(`Ваша сумма в ${document.getElementById(id).value} рублей успешно зачислена`);
                break;
            } else if (number.endings.indexOf(userNumber) !== -1 && i == 1) {
                alert(`Ваша сумма в ${document.getElementById(id).value} рубль успешно зачислена`);
                break;
            } else if (number.endings.indexOf(userNumber) !== -1 && i == 2) {
                alert(`Ваша сумма в ${document.getElementById(id).value} рубля успешно зачислена`);
                break;
            }
            i++;
        }
    } else alert("Введите число");



}