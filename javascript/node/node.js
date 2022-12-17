document.getElementById("headLeft").addEventListener("click", function(){
  const elements = document.querySelectorAll("h1, h2");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.textAlign = "left";
  }
});

document.getElementById("headRight").addEventListener("click", function(){
  const elements = document.querySelectorAll("h1, h2");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.textAlign = "right";
  }
});

document.getElementById("headCenter").addEventListener("click", function(){
  const elements = document.querySelectorAll("h1, h2");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.textAlign = "center";
  }
});


document.getElementById("parLeft").addEventListener("click", function(){
  const elements = document.querySelectorAll("p");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.textAlign = "left";
  }
});

document.getElementById("parRight").addEventListener("click", function(){
  const elements = document.querySelectorAll("p");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.textAlign = "right";
  }
});

document.getElementById("parCenter").addEventListener("click", function(){
  const elements = document.querySelectorAll("p");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.textAlign = "center";
  }
});

document.getElementById("emphPlain").addEventListener("click", function(){
  const elements = document.querySelectorAll(".emph");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.fontWeight = "normal";
  }
});

document.getElementById("emphBold").addEventListener("click", function(){
  const elements = document.querySelectorAll(".emph");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.fontWeight = "bold";
  }
});

document.getElementById("bgColor").addEventListener("change", function(){
  document.body.style.background = document.getElementById("bgColor").value;
});

document.getElementById("textColor").addEventListener("change", function(){
  const elements = document.querySelectorAll("*");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = document.getElementById("textColor").value;
    elements[i].style.borderColor = document.getElementById("textColor").value;
  }
});
