// content.js

let isScrolling = false;
let scrollInterval;

function scrollPixels() {
    // Adjust the values below as needed
    window.scrollBy(0, 100); // Scroll 100 pixels vertically
}

function toggleScrolling() {
    if (isScrolling) {
        clearInterval(scrollInterval);
    } else {
        scrollInterval = setInterval(scrollPixels, 1000); // Scroll every 1000 milliseconds (1 second)
    }
    isScrolling = !isScrolling;
}

// Listen for messages from the popup
safari.self.addEventListener('message', function (event) {
    if (event.name === 'startScrolling') {
        toggleScrolling();
    }
});

// Your other content script logic goes here
