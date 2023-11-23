let isScrolling = false;
let scrollInterval;

function scrollPixels() {
    // Adjust the values below as needed
    window.scrollBy(0, 1); // Scroll 100 pixels vertically
}

function toggleScrolling() {
    if (isScrolling) {
        clearInterval(scrollInterval);
    } else {
        scrollInterval = setInterval(scrollPixels, 120); // Scroll every 1000 milliseconds (1 second)
    }
    isScrolling = !isScrolling;
}

document.getElementById('startButton').addEventListener('click', toggleScrolling);
