const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generatejoke);

function generatejoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch("https://icanhazdadjoke.com", config)
    .then((response) => response.json())
    .then((data) => {
      jokeEl.innerText = data.joke;
    });
}
generatejoke();
