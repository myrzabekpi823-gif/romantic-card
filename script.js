const startScreen = document.getElementById('startScreen');
const letterScreen = document.getElementById('letterScreen');
const endScreen = document.getElementById('endScreen');
const heartsContainer = document.getElementById('hearts');

function showScreen(screenToShow) {
  [startScreen, letterScreen, endScreen].forEach((screen) => {
    screen.hidden = screen !== screenToShow;
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('openBtn').addEventListener('click', () => {
  showScreen(letterScreen);
  burstHearts();
});

document.getElementById('closeBtn').addEventListener('click', () => {
  showScreen(endScreen);
  burstHearts();
});

document.getElementById('againBtn').addEventListener('click', () => {
  showScreen(letterScreen);
  burstHearts();
});

function createHeart() {
  const heart = document.createElement('span');
  heart.className = 'floating-heart';
  heart.textContent = Math.random() > 0.5 ? '♥' : '♡';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 24}px`;
  heart.style.animationDuration = `${5 + Math.random() * 6}s`;
  heartsContainer.appendChild(heart);
  heart.addEventListener('animationend', () => heart.remove(), { once: true });
}

function burstHearts() {
  for (let i = 0; i < 18; i++) {
    setTimeout(createHeart, i * 70);
  }
}

// Ненавязчивые сердечки на фоне.
for (let i = 0; i < 9; i++) {
  setTimeout(createHeart, i * 450);
}
setInterval(createHeart, 1500);
