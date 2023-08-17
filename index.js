const menuBtn = document.querySelector('.menu-btn');    
const sideBar = document.querySelector('.sidebar');
const exitBtn = document.querySelector('.sidebar__btn-menu');

let screen = window.matchMedia("(max-width: 767px)")
menuBtn.addEventListener('click', ()=> {
    screen.addListener(myFunctionMenu)
    myFunctionMenu(screen)
    }) 

exitBtn.addEventListener('click', ()=>{
    screen.addListener(myFunctionExitMenu)
    myFunctionExitMenu(screen)
} )

function myFunctionMenu(x) {
  if (x.matches) { // If media query matches
    sideBar.style.transform = 'translateX(0)';
  } else {
    sideBar.style.transform = 'none';
  }
}

function myFunctionExitMenu(x) {
  if (x.matches) { // If media query matches
     sideBar.style.transform = 'translateX(-100%)';
  } else {
    sideBar.style.transform = 'none';
  }
}