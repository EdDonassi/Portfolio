let navLinks = document.querySelector('.links');
let menuIcon = document.querySelector('#menu-icon');
let links = document.getElementById('#links');

menuIcon.addEventListener('click', function () {
    navLinks.classList.toggle('is-active');
})

links.forEach(sec => {
    sec.addEventListener('click', func => {
        sec.classList.add('active');
    })
});