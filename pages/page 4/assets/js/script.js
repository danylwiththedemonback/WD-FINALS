document.getElementById('navToggle').addEventListener('click', function() {
    var topNav = document.getElementById('topNav');
    if (topNav.style.display === 'flex') {
        topNav.style.display = 'none';
    } else {
        topNav.style.display = 'flex';
    }
});
