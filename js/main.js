const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

//Клик по кнопке
navBtn.addEventListener('click', function(event){
    event.stopPropagation();
    mobileNav.classList.toggle('mobile-nav-active');
    navBtn.classList.toggle('nav-button-close');
    body.classList.toggle('no-scroll');
})

//Клик по окну за пределами навигации
window.addEventListener('click', function(event){
    if(body.classList.contains('no-scroll')){
        body.classList.toggle('no-scroll');
        navBtn.classList.toggle('nav-button-close');
        mobileNav.classList.toggle('mobile-nav-active');
    }
})

//Останавливаем клик внутри открытой мобильной навигации
mobileNav.addEventListener('click',function(event){
    event.stopPropagation();
})