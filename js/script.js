const burger = document.querySelector('.burger'),
      reference = document.querySelectorAll('.header__link'),
      menu = document.querySelector('.nav'),
      overlay = document.querySelector('.first-screen__overlay'),
      popapClose = document.querySelector('.popap__close'),
      popapArea = document.querySelector('.popap__area'),
      btnPopup = document.querySelector('.btnPopap'),
      popup = document.querySelector('.popap'),
      body = document.querySelector('body');
function toggle() {
    menu.classList.toggle('show');
    burger.classList.toggle('show');
    overlay.classList.toggle('show');
    body.classList.toggle('stop-scroll');
}
function toggleSecond() {
    popapClose.classList.toggle('showIs');
    popup.classList.toggle('showIs');
    popapArea.classList.toggle('showIs');
    body.classList.toggle('stop-scroll');
}
function toggleRemove () {
    overlay.classList.remove('show');
    burger.classList.toggle('show');
    menu.classList.toggle('show');
    body.classList.remove('stop-scroll');
}
function listener(list, event = 'click', callback) {
    list.addEventListener( event, callback);
}
listener(overlay, 'click', toggle);
listener(burger, 'click', toggle);
listener(btnPopup, 'click', toggleSecond);
listener(popapArea,'click', toggleSecond);
listener(popapClose,'click', toggleSecond);
listener(body, 'click', function (e) {
    if(e.target.classList.contains('header-overlay')) toggle();
});
reference.forEach(item => {
   item.addEventListener('click', toggleRemove);
});



//slider

    let position = 0;
    const slidesToShow = 3;
    const slidesToScroll = 1;
    const container = document.querySelector('.slider-container');
    const track = document.querySelectorAll('.slider-track');
    const btnPrev = document.querySelectorAll('.btn-prev');    
    const btnNext = document.querySelectorAll('.btn-next');
    const items = document.querySelectorAll('.slider-item'); //all
    const itemsCount = items.length;
    const itemWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    items.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;
    });

    btnNext.forEach((item) => {
        item.addEventListener('click', () => {
            const itemsLeft = (Math.abs(position) + slidesToShow * itemWidth ) / itemWidth;
    
            position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    
            setPosition();
            checkBtns();
        });
    });
    
    btnPrev.forEach((item) => {
        item.addEventListener('click', () => {
            const itemsLeft = Math.abs(position) / itemWidth;
    
            position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    
            setPosition();
            checkBtns();
        });
    });    

    const setPosition = () => {
        track.forEach((item) => {
            item.style.transform = `translateX(${position}px)`;
        });
    };

    const checkBtns = () => {
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    };


    checkBtns();

// scroll

window.onscroll = function() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    document.querySelector('.menu').style.backgroundColor = scrolled>=200?"#c2643b":"";
};

// cookies

let cookies = document.querySelector('.first-screen__cookies-btn'),
    cookiesElem = document.querySelector('.first-screen__cookies'),
    cookiesAdd = document.querySelector('.first-screen__btn');

cookies.addEventListener('click', () => {
    cookiesElem.remove();
});


// pictures slides

let picOne = document.querySelector('.wild-way__first'),
    picTwo= document.querySelector('.wild-way__second');

picOne.addEventListener('click', zIndexUp);
picTwo.addEventListener('click', zIndexDown);

function zIndexUp() {
    picOne.style.zIndex = 2;
    picTwo.style.zIndex = 1;
}
function zIndexDown() {
    picOne.style.zIndex = 1;
    picTwo.style.zIndex = 2;
}


// words

let firstSquare = document.querySelector('.words__btns_one'),
    secondSquare = document.querySelector('.words__btns_two'),
    itemFirst = document.querySelector('.words__item_first'),
    itemSecond = document.querySelector('.words__item_second');
    

firstSquare.addEventListener('click', fillBlack);
secondSquare.addEventListener('click', fillWhite);

function fillBlack() {
    firstSquare.style.backgroundColor = 'black';
    secondSquare.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    itemSecond.style.order = 2;
    itemFirst.style.order = 1;
}

function fillWhite() {
    firstSquare.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    secondSquare.style.backgroundColor = 'black';
    itemFirst.style.order = 2;
    itemSecond.style.order = 1;
}

// pictures slides #2

let conceptPicOne = document.querySelector('.concept__picture-1'),
    conceptPicTwo= document.querySelector('.concept__picture-2'),
    conceptPicThree= document.querySelector('.concept__picture-3');

    conceptPicOne.addEventListener('click', zIndexFirst);
    conceptPicTwo.addEventListener('click', zIndexSecond);
    conceptPicThree.addEventListener('click', zIndexThird);

function zIndexFirst() {
    conceptPicOne.style.zIndex = 3;
    conceptPicTwo.style.zIndex = 2;
    conceptPicThree.style.zIndex = 1;
    
}
function zIndexSecond() {
    conceptPicOne.style.zIndex = 2;
    conceptPicTwo.style.zIndex = 3;
    conceptPicThree.style.zIndex = 1;
}
function zIndexThird() {
    conceptPicOne.style.zIndex = 1;
    conceptPicTwo.style.zIndex = 2;
    conceptPicThree.style.zIndex = 3;
}

// pictures slides #3

let treasuresPicOne = document.querySelector('.treasures__picture-1'),
    treasuresPicTwo= document.querySelector('.treasures__picture-2'),
    treasuresPicThree= document.querySelector('.treasures__picture-3');

    treasuresPicOne.addEventListener('click', treasuresPicThreezIndexFirst);
    treasuresPicTwo.addEventListener('click', treasuresPicThreezIndexSecond);
    treasuresPicThree.addEventListener('click', treasuresPicThreezIndexThird);

function treasuresPicThreezIndexFirst() {
    treasuresPicOne.style.zIndex = 3;
    treasuresPicTwo.style.zIndex = 2;
    treasuresPicThree.style.zIndex = 1;
    
}
function treasuresPicThreezIndexSecond() {
    treasuresPicOne.style.zIndex = 2;
    treasuresPicTwo.style.zIndex = 3;
    treasuresPicThree.style.zIndex = 1;
}
function treasuresPicThreezIndexThird() {
    treasuresPicOne.style.zIndex = 1;
    treasuresPicTwo.style.zIndex = 2;
    treasuresPicThree.style.zIndex = 3;
}


