let messageIndex = 0;
const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say YES! ❤️"
];

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    // Change "No" button text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Make "Yes" button bigger
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    yesButton.style.padding = `${currentSize * 0.8}px ${currentSize * 1.5}px`;
}

function handleYesClick() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h1 style="color: #d81b60;">Knew you would say yes! ❤️</h1>
        <div class="gif-container">
            <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm1rM2Y4MG05d21jM3dnYTFidTNocmNiZWc3Nzhid3QyeDRkd2htZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HJibfnd7xqk5hAMD4v/giphy.gif">
        </div>
    `;
}
