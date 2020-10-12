let input = document.querySelector('input')
let button = document.querySelector('button')
let h1 = document.querySelector('h1')
let h5 = document.querySelector('h5')
let h6 = document.querySelector('h6')
let text = 'This is typing text...'
let counter = 0

button.addEventListener('click', function(){
    if(input.value){
        h6.innerHTML = `Your text is ${input.value.length} characters long!`
        clearInput()
        typeText()
    }else{
        h1.style.color = 'red'
        h1.innerHTML = 'You must enter something!'
    }
})

function typeText(){
    let stop = setInterval(function(){
        h1.innerHTML += text.charAt(counter++)
        if (counter > text.length) {
          clearInterval(stop);
          h5.innerHTML = "Typing finished!";
        }
    },100)
}

function clearInput(){
    h1.innerHTML = "";
    h1.style.color = "black";
    h5.innerHTML = ''
    text = input.value;
    input.value = "";
    counter = 0
}