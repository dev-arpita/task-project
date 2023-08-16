const menuBtn = document.querySelector('.menu-btn');    
const sideBar = document.querySelector('.sidebar');
const exitBtn = document.querySelector('.sidebar__btn-menu');

menuBtn.addEventListener('click', function() {
    sideBar.style.transform = 'translateX(0)';
})

exitBtn.addEventListener('click', function () {
        sideBar.style.transform = 'translateX(-100%)';
    })
