const apiURL = "https://api.adviceslip.com/advice";

// console.log(await getAdvice());

const adviceElement = document.querySelector("#advice");
const adviceCounterElement = document.querySelector("#adviceNumber");
const diceButtonElement = document.querySelector("#diceButton");
appendResult(await getAdvice());
async function getAdvice() {
  let data = (
    await (
      await fetch(`${apiURL}`, {
        cache: "reload", // no-store, reload, no-cache, force-cache, or only-if-cached
      })
    ).json()
  ).slip;
  return data;
}

function appendResult(data) {
  console.log(data);
  adviceElement.innerHTML = `&ldquo;${data.advice}&rdquo;`;
  adviceCounterElement.textContent = data.id;
}

diceButtonElement.addEventListener("click", async () => {
  appendResult(await getAdvice());
});
