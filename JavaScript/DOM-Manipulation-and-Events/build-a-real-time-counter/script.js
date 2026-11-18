const textArea = document.querySelector("#text-input");
let charCount = document.querySelector("#char-count");

textArea.addEventListener("input", () => {
  let charCountNum = 0;
  if (textArea.value.length >= 50) {
    textArea.value = textArea.value.slice(0, 50);
  }
  charCountNum = textArea.value.length;
  charCount.innerHTML = `Character Count: ${charCountNum}/50`;
  if (charCountNum === 50) {
    charCount.classList.add("red");
  } else {
    charCount.classList.remove("red");
  }
});
