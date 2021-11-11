let burger = document.querySelector('.menu__burger');
let menu = document.querySelector('.header__menu');
let headerTop = document.querySelector('.header__top')
let body = document.body;
burger.addEventListener('click',()=>{
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  headerTop.classList.toggle('active')
  body.classList.toggle('lock');
})