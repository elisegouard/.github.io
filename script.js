document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('clickButton');
    const counterDisplay = document.getElementById('counter');
    const heartsContainer = document.getElementById('hearts');
    let count = 0;

    button.addEventListener('click', () => {
        count++;
        counterDisplay.textContent = count;
        createHeart();
    });

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Création initiale de quelques cœurs
    for (let i = 0; i < 10; i++) {
        setTimeout(createHeart, Math.random() * 3000);
    }
});
