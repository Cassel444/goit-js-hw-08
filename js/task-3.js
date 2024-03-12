const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", handleInput);

function handleInput() {
    const inputValue = inputEl.value.trim();
    if (inputValue === "") {
        spanEl.textContent = "Anonymous";
    } else {
        spanEl.textContent = inputValue;
    }
}
