const menu = document.querySelector('.burger');
const iconMinus = document.querySelector('.icon-right');
const iconPlus = document.querySelector('.icon-left');
const counterText = document.querySelector('.counter-text');
const priceText = document.querySelector('.price-text');
const bigBody = document.querySelector('body');
const navMoblinks = document.querySelector('.nav-mob-links');
let count = 0;
let priceVal = 15999;
let minu = 0;
menu.addEventListener('click', () => {
   bigBody.classList.toggle('obj');
    navMoblinks.classList.toggle('top-change');
});
iconMinus.addEventListener('click', () => {
    if (count > 0) {
    count--;
    minu -= 15999;
    }
    counterText.innerText = count;
    priceText.innerText = `Price: ${minu}`;
});
iconPlus.addEventListener('click', () => {
    count++;   
    counterText.innerText = count;
        minu +=  15999;
    
    counterText.innerText = count;
    priceText.innerText = `Price: ${minu}`;
});


