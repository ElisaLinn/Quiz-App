console.clear();

const card = document.querySelector(".card");
const ButtonBookmark = document.querySelector(".button--bookmark");

ButtonBookmark.addEventListener("click", () => {
  ButtonBookmark.classList.toggle("button--bookmark--clicked");
});

const ShowAnswerButton = document.querySelector(".button--show-answers");
const CardAnswerHidden = document.querySelector(".card--answer--hidden");

ShowAnswerButton.addEventListener("click", () => {
  CardAnswerHidden.classList.toggle("card--answer--hidden-show");
  if (CardAnswerHidden.classList.contains("card--answer--hidden-show")) {
    ShowAnswerButton.textContent = "Hide answer";
  } else {
    ShowAnswerButton.textContent = "Show answer";
  }
});

const TextShown = ShowAnswerButton;

console.log("Script läuft");
