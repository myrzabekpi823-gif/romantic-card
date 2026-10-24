
document.addEventListener("DOMContentLoaded", () => {
  const envelopeButton = document.getElementById("envelopeButton");
  const envelope = document.getElementById("envelope");
  const loveLetter = document.getElementById("loveLetter");
  const envelopeCaption = document.getElementById("envelopeCaption");
  const surpriseButton = document.getElementById("surpriseButton");
  const secretMessage = document.getElementById("secretMessage");
  const floatingHearts = document.getElementById("floatingHearts");

  if (!envelopeButton || !envelope || !loveLetter) {
    console.error("Не найдены элементы конверта. Проверь index.html.");
    return;
  }

  envelopeButton.addEventListener("click", () => {
    const opening = loveLetter.hidden;

    loveLetter.hidden = !opening;
    envelope.classList.toggle("is-open", opening);
    envelopeButton.setAttribute("aria-expanded", String(opening));

    envelopeCaption.textContent = opening
      ? "Твоё письмо открыто ❤️"
      : "Нажми, чтобы открыть письмо 💌";

    if (opening) {
      createHearts(18);
      setTimeout(() => {
        loveLetter.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      }, 200);
    } else if (secretMessage && surpriseButton) {
      secretMessage.hidden = true;
      surpriseButton.setAttribute("aria-expanded", "false");
      surpriseButton.textContent = "Здесь есть ещё кое-что… 💗";
    }
  });

  if (surpriseButton && secretMessage) {
    surpriseButton.addEventListener("click", () => {
      const opening = secretMessage.hidden;
      secretMessage.hidden = !opening;
      surpriseButton.setAttribute("aria-expanded", String(opening));

      surpriseButton.textContent = opening
        ? "Спрятать послание 💌"
        : "Здесь есть ещё кое-что… 💗";

      if (opening) {
        createHearts(24);
      }
    });
  }

  function createHearts(amount) {
    if (!floatingHearts) return;

    const symbols = ["♡", "♥", "💗", "💕", "✧"];

    for (let i = 0; i < amount; i++) {
      const heart = document.createElement("span");
      heart.className = "floating-heart";
      heart.textContent = symbols[
        Math.floor(Math.random() * symbols.length)
      ];
      heart.style.left = `${5 + Math.random() * 90}%`;
      heart.style.fontSize = `${16 + Math.random() * 18}px`;
      heart.style.animationDelay = `${Math.random() * 0.8}s`;

      floatingHearts.appendChild(heart);
      heart.addEventListener("animationend", () => heart.remove(), {
        once: true
      });
    }
  }
});
