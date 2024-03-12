function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

createBtn.addEventListener("click", handleClickCreate);
destroyBtn.addEventListener("click", handleClickDestroy);

function handleClickCreate() {
  const amount = Number(inputEl.value);
  if (amount <= 0 || amount > 100) {
    return;
  }
  handleClickDestroy();
  const boxesArr = [];
  for (let i = 0; i < amount; i += 1) {
    const boxSize = 30 + i * 10;
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesArr.push(box);
  }
  boxesEl.append(...boxesArr);
  inputEl.value = "";
}
function handleClickDestroy() {
  boxesEl.innerHTML = "";
}