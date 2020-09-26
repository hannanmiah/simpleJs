let text = document.querySelector('h1')
let counter = 0
let sampleText = 'This is sample text!'

setInterval(function(){
  text.innerHTML += sampleText.charAt(counter++)
  if(counter > sampleText.length){
    counter = 0
    text.innerHTML = ''
  }
},100)