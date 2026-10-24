document.getElementById("display").innerHTML = "0";

function clr() {
  document.getElementById("amount").value = "";
  document.getElementById("display").innerHTML = "0";
  document.getElementById("result").innerHTML = "";
}

document.getElementById("amount").oninput = function () {
  let d = document.getElementById("amount").value;

  if (d === "") {
    document.getElementById("display").innerHTML = "0";
  }

  else {
    document.getElementById("display").innerHTML = d;
  }

}

function withdraw() {
  let a = document.getElementById("amount").value;
  a = Number(a);

  let b = document.getElementById("result");
  b.innerHTML = "";

  if (a <= 0 || a == "") {
    b.innerHTML = '<div class = "alert alert-danger"><strong style= font-size:20px ;>INPUT VALUE</strong></div>';
    return;
  }

  if (a > 50000) {
    b.innerHTML = '<div class = "alert alert-warning"> <strong style= font-size:20px ;>LIMIT IS FULL</strong></div>';
    return;
  }

  if (a % 500 !== 0) {
    b.innerHTML = '<div class = "alert alert-danger"> <strong style= font-size:20px ;>INVALID AMOUNT</strong></div>'
    return;
  }

  var c = a;

  while (c >= 5000) {
    c = c - 5000;
  }

  while (c >= 1000) {
    c = c - 1000;

  }

  while (c >= 500) {
    c = c - 500;

  }

  if (c === 0) {
    b.innerHTML = '<div class = "alert alert-success"><strong style= font-size:18px ;>TRANSACTION SUCCESSFUL</strong></div>'
  }

  else {
    b.innerHTML = 'div class = "alert alert-danger"><strong style= font-size:20px ;>INVALD NUMBER</strong></div>'
  }
}