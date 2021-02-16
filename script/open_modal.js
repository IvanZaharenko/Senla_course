( function () {
    'use strict';

    //функция closest для поиска элемента, который находится выше по дереву с нужным классом.
    !function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function () {

    //Записываем в переменные массив элементов-кнопок и подложку.
    let modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay      = document.querySelector('.js-overlay-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close');

    /* Перебираем массив кнопок */
modalButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
        let modalName = this.getAttribute('data-modal'),
            modalElem = document.querySelector('.modal[data-modal="' + modalName +'"]');

        /* После того как нашли нужное модальное окно, добавим классы
           подложке body и окну чтобы показать их. */
        modalElem.classList.add('active');
        overlay.classList.add('active');
        document.body.classList.add('hidden_body')
    })// end click
    });// end foreach

    closeButtons.forEach(function (cross) {
        cross.addEventListener('click', function () {
            let parentModal = this.closest('.modal');
            parentModal.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('hidden_body')
        })
    });

    document.body.addEventListener('keyup', function (e) {
        let key = e.keyCode;
        
        if (key === 27) {
            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
            document.body.classList.remove('hidden_body')
        }
    },false);

    overlay.addEventListener('click', function () {
            document.querySelector('.modal.active').classList.remove('active');
            this.classList.remove('active');
            document.body.classList.remove('hidden_body')
    })
})
}());