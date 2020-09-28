let text = document.querySelector("h1");
let counter = 0;
let sampleText = "This is sample text!";

let resultText = sampleText;

setInterval(function () {
  if (counter < resultText.length) {
    text.innerHTML += sampleText.charAt(counter++);
  } else {
    resultText = resultText.split("");
    resultText.pop();
    resultText = resultText.join("");
    text.innerHTML = resultText;
    counter++;

    if (counter == sampleText.length * 2) {
      resultText = sampleText;
      counter = 0;
      text.innerHTML = "";
    }
  }
}, 100);
