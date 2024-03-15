const leftt = document.getElementById("left");
const rightt = document.getElementById("right");
const display = document.getElementById("temperature");
const type = document.getElementById("typett");
const celcius = document.getElementById("celcius");
const kelvin = document.getElementById("kelvin");
const fahrenheit = document.getElementById("fahrenheit");
const convertbtn = document.getElementById("convertbtn");
let actype = 1;
let actemp = 0; 
type.addEventListener("change", event => {
  switch (type.textContent) {
    case "C°":
      type.textContent = "C°";
      leftt.textContent = "K";
      rightt.textContent = "F°";
      actype = 1;
      break;
    case "F°":
      type.textContent = "F°";
      leftt.textContent = "C°";
      rightt.textContent = "K";
      actype = 3;
      break;
    case "K":
      type.textContent = "K";
      leftt.textContent = "F°";
      rightt.textContent = "C°";
      actype = 2;
      break;
  }
});
leftt.addEventListener("click", event => {
  switch (type.textContent) {
    case "C°":
      type.textContent = "K";
      leftt.textContent = "F°";
      rightt.textContent = "C°";
      actype = 2;
      break;
    case "F°":
      type.textContent = "C°";
      leftt.textContent = "K";
      rightt.textContent = "F°";
      actype = 1;
      break;
    case "K":
      type.textContent = "F°";
      leftt.textContent = "C°";
      rightt.textContent = "K";
      actype = 3;
      break;
  }
});

rightt.addEventListener("click", event => {
  switch (type.textContent) {
    case "C°":
      type.textContent = "F°";
      leftt.textContent = "C°";
      rightt.textContent = "K";
      actype = 3;
      break;
    case "F°":
      type.textContent = "K";
      leftt.textContent = "F°";
      rightt.textContent = "C°";
      actype = 2;
      break;
    case "K":
      type.textContent = "C°";
      leftt.textContent = "K";
      rightt.textContent = "F°";
      actype = 1;
      break;
  }
});

convertbtn.onclick = function(){
  if (celcius.checked === true){
    if(actype === 1){
      actemp = parseFloat(display.value);
      type.textContent = "C°";
      actype = 1;
    }
    else if(actype === 2){
      actemp = parseFloat(display.value) - 273.15;
      type.textContent = "C°";
      actype = 1;
    }
    else if(actype === 3){
      actemp = (parseFloat(display.value) -32) / 1.8;
      type.textContent = "C°";
      actype = 1;
    }
    type.textContent = "C°";
    leftt.textContent = "K";
    rightt.textContent = "F°";
    actype = 1;
  }
  else if(kelvin.checked === true){
    if(actype === 1){
      actemp = parseFloat(display.value) + 273.15;
      type.textContent = "K";
      actype = 2;
    }
    else if(actype === 2){
      actemp = parseFloat(display.value); 
      type.textContent = "K";
      actype = 2;
    }
    else if(actype === 3){
      actemp = (parseFloat(display.value) - 32) / 1.8 + 273.15; 
      type.textContent = "K";
      actype = 2;
    }
    type.textContent = "K";
    leftt.textContent = "F°";
    rightt.textContent = "C°";
    actype = 2;
  }
  else if(fahrenheit.checked === true){
    if(actype === 1){
      actemp = (parseFloat(display.value) * 1.8 + 32); 
      type.textContent = "F°";
      actype = 3;
    }
    else if(actype === 2){
      actemp = (parseFloat(display.value) - 273.15) * 1.8 + 32; 
      type.textContent = "F";
      actype = 3;
    }
    else if(actype === 3){
      actemp = parseFloat(display.value);
      type.textContent = "F°";
      actype = 3;
    }
    type.textContent = "F°";
    leftt.textContent = "C°";
    rightt.textContent = "K";
    actype = 3;
  }
  display.value = actemp.toFixed(2);
}