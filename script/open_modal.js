( function () {
    'use strict';

    //функция closest для поиска элемента, который находится выше по дереву с нужным классом.
    !function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function () {

    //Записываем в переменные массив элементов-кнопок и подложку.
    let modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay      = document.querySelector('.js-overlay-modal'),
        overlayNav = document.getElementById('js_overlay_modal_nav'),
        closeNav = document.getElementsByClassName('close_nav') ,
        closeButtons = document.querySelectorAll('.js-modal-close'),
        drop_nav = document.getElementById('drop_nav');

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

    /* Открытие и закрытие nav */
    closeNav[0].addEventListener('click', function () {
       if (drop_nav.classList.contains('active') !== true) {
           drop_nav.classList.add('active');
           overlayNav.classList.add('active');
           document.body.classList.add('hidden_body');
           closeNav[0].classList.add('activ_burger');
       } else {
           drop_nav.classList.remove('active');
           overlayNav.classList.remove('active');
           document.body.classList.remove('hidden_body');
           closeNav[0].classList.remove('activ_burger');
       }
    });

    // close modal on click
    closeButtons.forEach(function (cross) {
        cross.addEventListener('click', function () {
            let parentModal = this.closest('.modal');
                    parentModal.classList.remove('active');
                    overlay.classList.remove('active');
                    overlayNav.classList.remove('active');
                    document.body.classList.remove('hidden_body');
                    closeNav[0].classList.remove('activ_burger');
        })
    });

    // close modal on ESC
    document.body.addEventListener('keyup', function (e) {
        let key = e.keyCode;
        
        if (key === 27) {
            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
            document.body.classList.remove('hidden_body');
            overlayNav.classList.remove('active');
            closeNav[0].classList.remove('activ_burger');

        }
    },false);

    // close modal on clck on area
    overlay.addEventListener('click', function () {
            document.querySelector('.modal.active').classList.remove('active');
            this.classList.remove('active');
            document.body.classList.remove('hidden_body');
    });
    overlayNav.addEventListener('click', function () {
        document.body.classList.remove('hidden_body');
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
        closeNav[0].classList.remove('activ_burger');
    })
})
}());