// JavaScript to trigger the "boom" effect when the page loads
window.onload = function() {
    setTimeout(function() {
        document.querySelector('.boom-effect').style.opacity = 1;
    }, 1000); // Delay the boom effect by 1 second after the page loads
};
