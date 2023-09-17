const clickMe = document.getElementById('clickMe');
const gifContainer = document.getElementById('gifContainer');
const popup = document.getElementById('popup');
const gifUrl = 'your-gif-url.gif'; // Replace with your GIF URL

clickMe.addEventListener('click', () => {
    createPopup();
});

// Close pop-ups when clicking on them
gifContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup')) {
        event.target.style.display = 'none';
    }
});

function createPopup() {
    const clone = popup.cloneNode(true);
    clone.style.display = 'block';

    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 100);
    clone.style.left = `${randomX}px`;
    clone.style.top = `${randomY}px`;

    gifContainer.appendChild(clone);

    setTimeout(() => {
        clone.style.display = 'none';
    }, 3000); // Adjust the delay as needed

    // Recursively create new pop-ups
    setTimeout(() => {
        createPopup();
    }, 500); // Adjust the delay between pop-ups as needed
}
