const colors = ["green", "red", "rgba[133, 122, 200]", "blue","pink"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", 
  function() {
    const randomNum = num();
    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];
  }
)

function num() {
    return Math.floor(Math.random() * colors.length);
}