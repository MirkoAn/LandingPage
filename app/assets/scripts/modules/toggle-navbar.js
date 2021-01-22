const navToggle = document.querySelector('.menu-icon');
const items = document.querySelectorAll('.items');

navToggle.addEventListener('click', function() {
    for(let i = 0; i < items.length; i++) {
        items[i].classList.toggle('show-items');
    }    
})
