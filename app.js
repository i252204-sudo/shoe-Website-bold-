const menu = document.querySelector('.burger');

const bigBody = document.querySelector('body');
const navMoblinks = document.querySelector('.nav-mob-links');
const quantityCounter = document.querySelectorAll('.quantity-counter'); 
let count = 0;
let priceVal = 15999;
let minu = 0;
quantityCounter.forEach(product => {
    
     const iconMinus = product.querySelector('.icon-right');
const iconPlus = product.querySelector('.icon-left');
const counterText = product.querySelector('.counter-text');
const priceText = product.querySelector('.price-text');
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


})

menu.addEventListener('click', () => {
   bigBody.classList.toggle('obj');
    navMoblinks.classList.toggle('top-change');
});
