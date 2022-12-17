// Code for Challenge One

function raiseToPower(){

    let n = Number(document.getElementById("inputNumber").value);
    let p = Number(document.getElementById("inputPower").value);
    let ans=0;
    if(p<0){
      alert("Please input positive value for power");
      document.getElementById("inputPower").value="";
    }else{
      ans=n**p;
    }
    if(ans>0){
      document.getElementById("answerPower").style.color="blue";
    }else{
      document.getElementById("answerPower").style.color="green";
    }
    document.getElementById("answerPower").textContent = ans;
}

// Code for Challenge Two

function randomNumber(){
    let randomSpot = document.getElementById("randoNumber");
    let sum = document.getElementById("sum");

    let val = Math.floor(Math.random() * 101)+100;
    let c = 0;
    let i = 0;
    while(i<=val){
      c+=i;
      i++;
    }
   randomSpot.textContent = val;
   sum.textContent = c;
}


// Code for Challenge Three

window.addEventListener("load",main);

function main(){
    let headBox = document.getElementById("headingBox");
    headBox.addEventListener("click", function(){
      console.log("click");
      let list = document.querySelectorAll("h1,h2");
      for(let i = 0; i<list.length;i++){
        list[i].style.color = "red";
      }

    });
    headBox.addEventListener("dblclick", function(){
      console.log("dblclick");
      let list = document.querySelectorAll("h1,h2");
      for(let i = 0; i<list.length;i++){
        list[i].style.color = "blue";
      }
    });
}


// Code for Challenge Four

let animalArray = ["dog", "cat", "rabbit","giraffe", "bear","elephant"];
function addToArray(){

    let animalList = document.getElementById("animalList");
    let arrayLocation = document.getElementById("arrayLocation").value;
    let animal = document.getElementById("animal").value;
    console.log(arrayLocation);
    if(arrayLocation==2){
      animalArray.push(animal);
    }else if(arrayLocation==1){
      animalArray.unshift(animal);
    }

    animalList.textContent = animalArray;

}
