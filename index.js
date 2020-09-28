let text = document.querySelector("h1");
let counter = 0;
let sampleText = "This is sample text!";

let resultText = sampleText;

let colors = []

resultText.split("").forEach(function(el,i){
  if(i%2 == 0){
    colors.push('red')
  }else if(i%3 == 0){
    colors.push('green')
  }else if(i%5 == 0){
    colors.push('blue')
  }else{
    colors.push('black')
  }
})

setInterval(function () {
  if (counter < resultText.length) {
    text.innerHTML += sampleText.charAt(counter++);
    text.style.color = colors[counter]
  } else {
    resultText = resultText.split("");
    resultText.pop();
    resultText = resultText.join("");
    text.innerHTML = resultText;
    text.style.color = colors[Math.floor(counter/2)]
    counter++;

    if (counter == sampleText.length * 2) {
      resultText = sampleText;
      counter = 0;
      text.innerHTML = "";
    }
  }
}, 500);
