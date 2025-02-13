function createInteractiveHearts() {
    const interactiveHearts = document.querySelector('.interactive-hearts');
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement('div');
        heart.classList.add('interactive-heart');
        heart.innerHTML = '❤️';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.fontSize = `${Math.random() * 30 + 20}px`;
        heart.style.animationDuration = `${Math.random() * 5 + 3}s`;
        interactiveHearts.appendChild(heart);
    }
}
createInteractiveHearts();

function createStars() {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        starsContainer.appendChild(star);
    }
}
createStars();

const quotes = [
    "Love is composed of a single soul inhabiting two bodies. – Aristotle",
    "The best thing to hold onto in life is each other. – Audrey Hepburn",
    "We are most alive when we're in love. – John Updike",
    "Love isn't something you find. Love is something that finds you. – Loretta Young"
];

function showRandomQuote() {
    const quoteBox = document.getElementById('quoteBox');
    quoteBox.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    quoteBox.classList.add('show');

    setTimeout(() => {
        quoteBox.classList.remove('show');
    }, 3000);
}

setInterval(showRandomQuote, 30000);

document.getElementById('yesButton').addEventListener('click', function() {
    createHeartExplosion();
});

function createHeartExplosion() {
    const heartExplosion = document.getElementById('heartExplosion');
    const numHearts = 49;

    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.fontSize = `${Math.random() * 30 + 20}px`;
        heart.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
        heartExplosion.appendChild(heart);

        heart.addEventListener('animationend', function() {
            heart.remove();
        });
    }
}

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('modalMessage').textContent = "You make me the happiest men in the world! 🐻💖";
    
    modal.style.display = 'flex';

    characterMessage.textContent = "Yay! You said Yes! 🎉";
    characterMessage.classList.add('show');
    setTimeout(() => {
        characterMessage.classList.remove('show');
    }, 3000);
});

const noButton = document.getElementById('noButton');
const noButtonTexts = [
    "Are you sure? 😢",
    "Really? 😭",
    "Please? 🥺",
    "Don't leave me! 💔",
    "I can't live without you... 😔",
    "Why? What did I do? 😞",
    "You're breaking my heart... 💔",
];
let noButtonClickCount = 0;

noButton.addEventListener('click', function() {
    noButton.textContent = noButtonTexts[noButtonClickCount % noButtonTexts.length];
    noButtonClickCount++;

    noButton.classList.add('shrink');
    setTimeout(() => {
        noButton.classList.remove('shrink');
    }, 300);

    const colors = ["#ff6f61", "#ff4a4a", "#ff2d2d", "#ff0000"];
    noButton.style.backgroundColor = colors[noButtonClickCount % colors.length];

    noButton.style.animation = "pulseSad 1s infinite";
    setTimeout(() => {
        noButton.style.animation = "";
    }, 1000);

    if (noButtonClickCount >= noButtonTexts.length) {
        showSadMessage();
    }
});

function showSadMessage() {
    const tearsContainer = document.querySelector('.tears-container');
    for (let i = 0; i < 20; i++) {
        const tear = document.createElement('div');
        tear.classList.add('tear');
        tear.style.left = `${Math.random() * 100}vw`;
        tear.style.top = `${Math.random() * 100}vh`;
        tear.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
        tearsContainer.appendChild(tear);

        tear.addEventListener('animationend', function() {
            tear.remove();
        });
    }
}

document.getElementById('yesButton').addEventListener('mouseenter', function(e) {
    createHeartsAround(e.target);
});

document.getElementById('noButton').addEventListener('mouseenter', function(e) {
    createTearsAround(e.target);
});

function createHeartsAround(button) {
    const rect = button.getBoundingClientRect();
    for(let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.className = 'button-heart';
        heart.style.left = `${rect.left + rect.width/2 + Math.random()*30 - 15}px`;
        heart.style.top = `${rect.top + Math.random()*20 - 10}px`;
        heart.innerHTML = '❤️';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
    }
}

function createTearsAround(button) {
    const rect = button.getBoundingClientRect();
    for(let i = 0; i < 6; i++) {
        const tear = document.createElement('div');
        tear.className = 'button-tear';
        tear.style.left = `${rect.left + rect.width/2 + Math.random()*40 - 20}px`;
        tear.style.top = `${rect.top + rect.height}px`;
        document.body.appendChild(tear);
        setTimeout(() => tear.remove(), 800);
    }
}

document.querySelectorAll('.letter').forEach(letter => {
    letter.addEventListener('mouseover', () => {
        letter.style.transition = 'all 0.3s ease';
        letter.style.transform = `scale(${1 + Math.random()*0.5}) rotate(${Math.random()*20 - 10}deg)`;
        letter.style.color = `hsl(${Math.random()*360}, 70%, 60%)`;
    });

    letter.addEventListener('mouseout', () => {
        letter.style.transform = 'scale(1) rotate(0deg)';
        letter.style.color = '';
    });
});

noButton.addEventListener('mouseenter', () => {
    noButton.classList.add('no-shake');
});

noButton.addEventListener('mouseleave', () => {
    noButton.classList.remove('no-shake');
});

noButton.addEventListener('click', () => {
    noButton.classList.remove('no-shake');
});

noButton.addEventListener('mouseenter', () => {
    noButton.classList.add('no-shake');
});

noButton.addEventListener('mouseleave', () => {
    noButton.classList.remove('no-shake');
});

noButton.addEventListener('click', () => {
    noButton.classList.remove('no-shake');
});

const frostOverlay = document.getElementById('frostOverlay');
let inactivityTimer;

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        frostOverlay.classList.add('active');
    }, 15000);
}

function clearFrost() {
    frostOverlay.classList.remove('active');
    resetInactivityTimer();
}

document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('keydown', resetInactivityTimer);
document.addEventListener('click', resetInactivityTimer);

document.getElementById('yesButton').addEventListener('click', clearFrost);
document.getElementById('noButton').addEventListener('click', clearFrost);

resetInactivityTimer();

const characterMessage = document.getElementById('characterMessage');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close-modal');

window.onload = function() {
    characterMessage.textContent = "Welcome! My sweety! 💖";
    characterMessage.classList.add('show');
    setTimeout(() => {
        characterMessage.classList.remove('show');
    }, 5000);
};

document.getElementById('yesButton').addEventListener('click', function() {
    modal.style.display = 'flex';

    characterMessage.textContent = "Yay! You said Yes! 🎉";
    characterMessage.classList.add('show');
    setTimeout(() => {
        characterMessage.classList.remove('show');
    }, 3000);
});

const sadMessages = [
    "Think again... 😢",
    "Are you sure? 😭",
    "Please reconsider... 🥺",
    "Don't leave me like this! 💔",
    "My heart is breaking... 💔",
    "I can't bear this... 😞",
    "You mean the world to me... 😢"
];

document.getElementById('noButton').addEventListener('click', function() {
    const randomMessage = sadMessages[Math.floor(Math.random() * sadMessages.length)];
    characterMessage.textContent = randomMessage;
    characterMessage.classList.add('show');
    setTimeout(() => {
        characterMessage.classList.remove('show');
    }, 3000);
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = `${Math.random() * -100}vh`;
        confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        confettiContainer.appendChild(confetti);

        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
}

document.getElementById('yesButton').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
    createConfetti();

    const characterMessage = document.getElementById('characterMessage');
    characterMessage.textContent = "Yay! You said Yes! 🎉";
    characterMessage.classList.add('show');
    setTimeout(() => {
        characterMessage.classList.remove('show');
    }, 3000);
});

document.getElementById('closeModalButton').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
});

document.querySelector('.close-modal').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});