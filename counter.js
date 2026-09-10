var num = document.getElementById("Displayednumber");

function increment() {
  if (+num.innerHTML == 0) {
    changecolour();
  }
  num.innerHTML = +num.innerHTML + 1;
}

function decrement() {
  if (+num.innerHTML == 1) {
    num.className = "text-danger m-auto";
  }

  if (+num.innerHTML != 0) {
    num.innerHTML = +num.innerHTML - 1;
  }
}

function changecolour() {
  num.className = "text-primary m-auto";
}
