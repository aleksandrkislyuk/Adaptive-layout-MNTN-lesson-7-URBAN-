const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;
const text = document.querySelector('.logo');


//Клик по кнопке
navBtn.addEventListener('click', function(event){
    event.stopPropagation();
    mobileNav.classList.toggle('mobile-nav-active');
    navBtn.classList.toggle('nav-button-close');
    body.classList.toggle('no-scroll');
if (text.style.color === 'black') {
    text.style.color = 'white';
  } else {
    text.style.color = 'black';
  }
})

//Клик по окну за пределами навигации
window.addEventListener('click', function(event){
    if(body.classList.contains('no-scroll')){
        body.classList.toggle('no-scroll');
        navBtn.classList.toggle('nav-button-close');
        mobileNav.classList.toggle('mobile-nav-active');
        if (text.style.color === 'black') {
            text.style.color = 'white';
          } else {
            text.style.color = 'black';
          }
    }
})

//Останавливаем клик внутри открытой мобильной навигации
mobileNav.addEventListener('click',function(event){
    event.stopPropagation();
})