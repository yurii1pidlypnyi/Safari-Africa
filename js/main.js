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


//Слайдер

let check = document.querySelector('.agreement');
let agree = document.querySelector('.agree');

agree.addEventListener('click', ()=>{
  if(check.checked){
    check.checked = false
  }else{
    check.checked = true
  }
  agree.classList.toggle('active');
})