console.clear();

const card = document.querySelector(".card");
const ButtonBookmark = document.querySelector(".button--bookmark");

ButtonBookmark.addEventListener("click", () => {
  card.classList.toggle("clicked");
});

document.querySelectorAll(".button--show-answers").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    const answer = card.querySelector(".card--answer--hidden");

    // Toggle Sichtbarkeit der Antwort
    answer.classList.toggle("show");

    // Toggle Buttontext
    const isShown = answer.classList.contains("show");
    button.textContent = isShown ? "Hide answer" : "Show answer";

    // Optional: Toggle aria-pressed für Barrierefreiheit
    button.setAttribute("aria-pressed", isShown ? "true" : "false");
  });
});

console.log("Script läuft");
