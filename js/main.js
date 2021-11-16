//Burger menu
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
//--------------------------------------------------------
//Checkbox style
let check = document.querySelector('.agreement');
let agree = document.querySelector('.agree');

agree.addEventListener('click', ()=>{
  if(check.checked){
    check.checked = false
  }else{
    check.checked = true
  }
  agree.classList.toggle('active');
});
//--------------------------------------------------------
//Slider
let width = window.innerWidth;
slider(width);

window.addEventListener('resize',()=>{
  width = window.innerWidth;
  slider(width)
})

function slider (size){
  if (size < 769){
    $('.slider').not('.slick-initialized').slick({
      arrows: true,
      dots: true,
      slidesToShow: 1,
      infinite: false,
      waitForAnimate: false,
      mobileFirst: true,
      responsive: [
      {
        breakpoint: 769,
        settings: "unslick"
      },
      {
        breakpoint: 410,
        settings: {
          slidesToShow:2
        }
      },
    ]
    })
  }
}
//-----------------------