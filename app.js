const menu = document.querySelector('.burger');
const bigBody = document.querySelector('body');
const navMoblinks = document.querySelector('.nav-mob-links');
menu.addEventListener('click', () => {
   bigBody.classList.toggle('obj');
    navMoblinks.classList.toggle('top-change');
});


