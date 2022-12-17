function timeGet(){
  document.getElementById('time').innerHTML = Date();
}
function changeFont(){
  document.getElementById("font").style.fontSize = "larger";
}
function root(){
  valOne=document.getElementById("valOne").value;
  valTwo=document.getElementById("valTwo").value;
  document.getElementById("root").textContent=valOne * valTwo;
}
