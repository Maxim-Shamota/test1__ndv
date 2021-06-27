const toggle = document.querySelector('.header-title__toggle');
const ipadMenu = document.querySelector('.header__ipad-main__menu')
const ipadDescr = document.querySelector('.header__ipad-descr')


toggle.onclick = function () {
    toggle.classList.toggle('active');
    ipadMenu.classList.toggle('active');
    ipadDescr.classList.toggle('deactive');
}