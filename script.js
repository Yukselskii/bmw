const confettiContainer = document.querySelector('.confetti');
const colors = ['#0072bb', '#ffffff', '#d2082d']; // M Power logo colors
const confettiCount = 100; // Number of confetti pieces

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti-piece');
  confetti.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  confetti.style.animationDuration = Math.random() * 2 + 3 + 's'; // Between 3s and 5s
  confetti.style.animationDelay = Math.random() * 2 + 's'; // Random delay
  confettiContainer.appendChild(confetti);

  // Remove confetti after animation ends
  confetti.addEventListener('animationend', () => confetti.remove());
}

// Generate multiple confetti pieces
for (let i = 0; i < confettiCount; i++) {
  createConfetti();
}
