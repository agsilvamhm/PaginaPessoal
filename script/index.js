let ul = document.querySelector('header nav ul');
let menubtn = document.querySelector('.menu-btn');

function menuShow(){
    if (ul.classList.contains('open')){
        ul.classList.remove('open');
    } else {
        ul.classList.add('open');
    }
}