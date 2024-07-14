document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const navigationMenu = document.querySelector('.navigation-menu');

    menuButton.addEventListener('click', function() {
        navigationMenu.classList.toggle('open');
    });
});
