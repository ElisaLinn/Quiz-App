console.clear();

const main = document.querySelector('[data-js="main"]');
const textInputQuestion = document.querySelector(
  '[data-js="textInputQuestion"]'
);
const textInputAnswer = document.querySelector('[data-js="textInputAnswer"]');
const textInputTag = document.querySelector('[data-js="textInputTag"]');
const submitButton = document.querySelector('[data-js="submit"]');

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const Card = document.createElement("div");
  Card.classList.add("card");

  const CardTitle = document.createElement("h2");
  CardTitle.classList.add("card--title");
  CardTitle.textContent = textInputQuestion.value;

  const Bookmark = document.createElement("button");
  Bookmark.classList.add("button--bookmark");
  Bookmark.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 24 24" 
       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
       class="lucide lucide-bookmark-icon lucide-bookmark">
    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
  </svg>
`;

  const Answer = document.createElement("section");
  Answer.classList.add("card--answer--layout");

  const HiddenAnswer = document.createElement("p");
  HiddenAnswer.classList.add("card--answer--hidden");
  HiddenAnswer.textContent = textInputAnswer.value;

  const ShowAnswerPositioning = document.createElement("div");
  ShowAnswerPositioning.classList.add("button--show-answers-postioning");

  const ButtonShowAnswer = document.createElement("button");
  ButtonShowAnswer.classList.add("button--show-answers");
  ButtonShowAnswer.textContent = "Show answer";

  const CardCategory = document.createElement("ul");
  CardCategory.classList.add("card--category");

  const ButtonCategory = document.createElement("li");
  ButtonCategory.classList.add("button--answers");
  ButtonCategory.textContent = textInputTag.value;

  CardCategory.appendChild(ButtonCategory);

  ShowAnswerPositioning.appendChild(ButtonShowAnswer);
  Answer.appendChild(HiddenAnswer);

  Card.appendChild(CardTitle);
  Card.appendChild(Bookmark);
  Card.appendChild(ShowAnswerPositioning);
  Card.appendChild(Answer);
  Card.appendChild(CardCategory);

  main.append(Card);

  textInputQuestion.value = "";
  textInputAnswer.value = "";
  textInputTag.value = "";
});

console.log("I still work don't worry");
console.log(main);
