"use strict"

// 1. Задание

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(i + " - это ноль");
    } else if (i % 2 !== 0) {
        console.log(i + " - нечетное число");
    } else {
        console.log(i + " - четное число");
    }

}

// 2. Задание

const post = {
    author: "John",
    postId: 23,
    comments: [{
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2
            }
        },
        {
            userId: 5,
            userName: "Jane",
            text: "lorem ipsum 2",
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
}

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// 3. Задание

const products1 = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products1.forEach(function(item) {
    item.price = item.price - (item.price * 0.15);
});
console.log(products1);

// 4. Задание

const products2 = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let newArr = products2.filter(function(item) { return item.photos != undefined && item.photos.length > 0 });
console.log(newArr);

products2.sort(function(price1, price2) {
    if (price1.price > price2.price) {
        return 1;
    } else if (price1.price < price2.price) {
        return -1;
    }
    return 0;

});
console.log(products2);

// 5. Задание

for (let i = 0; i < 10; i = counter(i)) {};

function counter(a) {
    console.log(a);
    return ++a;
}

// 6. Задание
let x = "";
for (let i = 0; i < 20; i++) {
    x += "x";
    console.log(x);

}