document.getElementById('toggleButton').addEventListener('click', function() {
    var backButton = document.getElementById('backButton');
    if (backButton.style.display === 'block') {
        backButton.style.opacity = '0';
        setTimeout(() => {
            backButton.style.display = 'none';
        }, 300); // Match the CSS transition duration
    } else {
        backButton.style.display = 'block';
        setTimeout(() => {
            backButton.style.opacity = '1';
        }, 10); // Slight delay to ensure display change takes effect before transition
    }
});
