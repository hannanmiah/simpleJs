let inp1 = document.querySelector(".inp1");
let inp2 = document.querySelector(".inp2");

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");

let result = document.querySelector("#result");

let numbers = [];

btn1.addEventListener("click", function () {
  if (inp1.value) {
    if (inp1.value > 20) {
      result.style.color = "red";
      result.innerHTML = "Number is greater than 20!";
      return;
    }
    numbers.push(inp1.value);
    result.style.color = "black";
    result.innerHTML = "Enter Number " + (numbers.length + 1);
    resetInput(inp1);
  } else {
    result.style.color = "red";
    result.innerHTML = "Please, input correct number!";
  }
});

inp1.addEventListener('click',function(){
  if (numbers.length > 4) {
    box1.style.display = "none";
    box2.style.display = "block";
    result.innerHTML = "";
  }

})

btn2.addEventListener("click", function () {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == inp2.value) {
      result.style.color = "green";
      result.innerHTML = "Hurray! You won the game!";
      break;
    } else {
      result.style.color = "red";
      result.innerHTML = "OOOps! you lost the game!";
    }
  }
  resetInput(inp2, btn2);
  box2.style.display = "none";
  btn3.style.display = "inline-block";
});

btn3.addEventListener("click", function () {
  resetInput(inp1);
  result.innerHTML = "";
  result.style.color = "black";
  btn3.style.display = "none";
  box1.style.display = "block";
  numbers = [];
});

function resetInput(inp) {
  inp.value = "";
}
