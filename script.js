
const surpriseButton = document.getElementById("surpriseButton");
const secretMessage = document.getElementById("secretMessage");
const floatingHearts = document.getElementById("floatingHearts");

surpriseButton.addEventListener("click", () => {
  const isOpening = secretMessage.hidden;

  secretMessage.hidden = !isOpening;
  surpriseButton.setAttribute("aria-expanded", String(isOpening));

  surpriseButton.textContent = isOpening
    ? "Спрятать послание 💌"
    : "Для тебя есть ещё слова 💗";

  if (isOpening) {
    createHearts(18);
  }
});

function createHearts(amount) {
  const symbols = ["♡", "♥", "💗", "💕", "✧"];

  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = `${5 + Math.random() * 90}%`;
    heart.style.fontSize = `${16 + Math.random() * 18}px`;
    heart.style.animationDelay = `${Math.random() * 0.8}s`;

    floatingHearts.appendChild(heart);

    heart.addEventListener(
      "animationend",
      () => heart.remove(),
      { once: true }
    );
  }
}
