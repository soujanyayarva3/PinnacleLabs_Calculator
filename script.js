const display =
document.getElementById("display");

const historyList =
document.getElementById("history-list");

/* Add Value */

function appendValue(value){

  display.value += value;

}

/* Clear */

function clearDisplay(){

  display.value = "";

}

/* Delete */

function deleteLast(){

  display.value =
  display.value.slice(0,-1);

}

/* Calculate */

function calculate(){

  try{

    let expression =
    display.value;

    let result =
    eval(expression);

    display.value = result;

    /* Add History */

    let li =
    document.createElement("li");

    li.textContent =
    expression + " = " + result;

    historyList.prepend(li);

  }

  catch{

    display.value = "Error";

  }

}

/* Keyboard Support */

document.addEventListener("keydown",
function(event){

  const key = event.key;

  if(
    "0123456789+-*/.%"
    .includes(key)
  ){

    appendValue(key);

  }

  else if(key === "Enter"){

    calculate();

  }

  else if(key === "Backspace"){

    deleteLast();

  }

  else if(key === "Escape"){

    clearDisplay();

  }

});

/* Clock */

function updateClock(){

  const now =
  new Date();

  const time =
  now.toLocaleTimeString();

  document.getElementById("clock")
  .innerText = time;

}

setInterval(updateClock,1000);
updateClock();