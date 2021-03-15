"use strict"


let t_c = parseFloat(prompt('Введите температуру в градусах по цельсию').replace(',', '.'));
let t_f = (9 / 5) * t_c + 32;
alert('Температура по фарингейту составит: ' + t_f.toFixed(2))

let name = "\"Василий\"";
let admin = name;
console.log(admin);

/*
1. 10 плюс 10 получаем 20
2. 20 приводится в строку и склеивается со строкой "10"
3. получаем 2010  
*/
let first_example = 10 + 10 + "10";
console.log(first_example);

/*
1. 10 приводится в строку и склеивается со строкой "10"
2. 1010 склеивается с 10 (которое в свою очередь приводится в строку)
3. получаем 101010  
*/
let second_example = 10 + "10" + 10;
console.log(second_example);

/*
1. 10 плюс 10 получаем 20
2. 20 плюс 10 (+ перед "10" равносилен Number(), приводим строку в число)
3. получаем 30  
*/
let third_example = 10 + 10 + -"10";
console.log(third_example);

/*
1. - "" приводится в -0
2. 10 делится на -0
3. получаем бесконечно малое отрицательное число  
*/
let fourth_example = 10 / -"";
console.log(fourth_example);

/*
1. из-за того, что в записи "2,5" запятая вместо ".", нельзя привести эту строку в число (дробные чила записываются через точку), поэтому мы получаем значение NaN 
2. 10 делим на NaN
3. получаем NaN (не число)  
*/
let fifth_example = 10 / +"2,5";
console.log(fifth_example);