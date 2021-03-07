"use strict"

//1. Задание

// var a = 1,
//     b = 1,
//     c, d;
// a и b присваивается значение 1, c и d будут не определены (undefined)
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
} else if (Math.sign(a) != Math.sign(b)) {
    result = a + b;
}

alert(result);



//4. Задание 

function sumOperation(a, b) {
    return a + b;
}

function diffOperation(a, b) {
    return a - b;
}

function multpnOperation(a, b) {
    return a * b;
}

function divsnOperation(a, b) {
    return a / b;
}

// 5. Задание

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return sumOperation(arg1, arg2);
        case "-":
            return diffOperation(arg1, arg2);
        case "*":
            return multpnOperation(arg1, arg2);

        case "/":
            return divsnOperation(arg1, arg2);

    }
}


function parseInputs(id1, id2, id3, id4) {
    let a = parseFloat(document.getElementById(id1).value.replace(',', '.'));
    let b = parseFloat(document.getElementById(id2).value.replace(',', '.'));
    let operation = document.getElementById(id3).value;
    if (isNaN(a) != true && isNaN(b) != true) {
        document.getElementById(id4).value = mathOperation(a, b, operation);
    } else alert("Введите числа!")
}

// 6. Задание

function contribution(number) {
    let textForms = ["рубль", "рубля", "рублей"];
    let num = number % 100
    let residue = num % 10
    if (num > 10 && num < 20) {
        return textForms[2]
    }
    if (residue > 1 && residue < 5) {
        return textForms[1]
    }
    if (residue === 1) {
        return textForms[0]
    }
    return textForms[2]
}

function resultEnrollment(id) {
    let enroll = document.getElementById(id).value;
    alert(`Ваша сумма в ${enroll} ${contribution(enroll)} успешно зачислена`);
}