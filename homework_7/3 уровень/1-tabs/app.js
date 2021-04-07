'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/

let divTextItem = document.querySelector(".text");
let navList = document.querySelectorAll(".nav-link");

navList.forEach((navItem) => {
    navItem.addEventListener("click", clickHandler);
});

/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event Ссылка на .nav-link на котором произошло событие клика.
 */
function clickHandler(event) {
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.
    changeText(event.target);
    changeActiveClass(event.target);
}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event Объект .nav-link на котором произошло событие.
 * @param {Object} navActive Объект на котором установлен класс .active в момент обработки клика.
 */
function changeActiveClass(event) {
    if (document.querySelector(".active")) {
        let navActive = document.querySelector(".active");
        navActive.classList.remove("active");
    }
    event.classList.add("active");
}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event Объект .nav-link на котором произошло событие.
 * @param {number} navLngt Длина строки содержащейся в .nav-link.
 * @param {number} navNmb Номер ссылки на которой произошло событие.
 */
function changeText(event) {
    let navLngt = event.textContent.length;
    let navNmb = parseInt(event.textContent[navLngt - 1]);
    divTextItem.textContent = texts[`text${navNmb}`];
}