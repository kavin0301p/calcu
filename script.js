let outputScreen = document.getElementById("output-screen");

function display(num) {
  outputScreen.value += num;
}

function Calculate() {
  try {
    outputscreen.value = eval(outputScreen.value);
  } catch (err) {
    alert("Invalid");
  }
  function Clear() {
    outputScreen.value = "";
  }
  function del() {
    outputScreen.value = outputScreen.value.slice(2, -1);
  }
}
