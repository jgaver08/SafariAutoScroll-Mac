// popup.js

alert('Popup script loaded!');

document.addEventListener('DOMContentLoaded', function () {
    alert('Popup script loaded!');
    // Find the start button in the popup
    const startButton = document.getElementById('startButton');

    // Add a click event listener to the start button
    startButton.addEventListener('click', function () {
        // Send a message to the content script to start scrolling
        safari.extension.dispatchMessage('startScrolling');
    });
});
