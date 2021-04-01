"use strict"

// 1. Задание

function numericSeparator(num) {
    let digitsOfNumbers = {};
    if (Number.isInteger(num) && 0 <= num && num <= 999) {
        let number = num % 100
        let residue = number % 10
        digitsOfNumbers.units = residue;
        digitsOfNumbers.tens = Math.floor(number / 10);
        digitsOfNumbers.hundreds = Math.floor(num / 100);
    } else console.log("Вы ввели некорректное число");
    console.log(digitsOfNumbers)
}

numericSeparator(785);

// 2. Задание

// на es5

// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }

// Product.prototype.make25PersentDiscount = function() {
//     this.price = this.price - (this.price * 0.25);
// };

// на es6

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PersentDiscount() {
        this.price = this.price - (this.price * 0.25);
    }
}

let product1 = new Product('apple', 200);
product1.make25PersentDiscount();
console.log(product1);

// 3. Задание

// на es5

// function Post(author, text, date) {
//     this.author = author;
//     this.text = text;
//     this.date = date;
// }

// Post.prototype.edit = function(text) {
//     this.text = text;
// }

// function AttachedPost(author, text, date) {
//     Post.call(this, author, text, date);
//     this.highlighted = false;
// }

// AttachedPost.prototype = Object.create(Post.prototype);
// AttachedPost.prototype.constructor = AttachedPost;

// AttachedPost.prototype.makeTextHighlighted = function() {
//     this.highlighted = true;
// }

// на es6

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let post = new AttachedPost('Akim', 'hello', '18.03.21');
post.edit('goodbye');
post.makeTextHighlighted();
console.log(post);