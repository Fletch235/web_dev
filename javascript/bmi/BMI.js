function calcBMI ()
{
  //Example of an if statement
  //Define the input and output elements from the webpage
  let weightInput = document.getElementById('inputWeight').value;
  let heightInput = document.getElementById('inputHeight').value;
  let putAnswer = document.getElementById('calculatedBMI');
  let putHealthMessage = document.getElementById('healthMessage');

  //get the weight and height values from the elements

  //Calculate the BMI (but only if heigh and weight are positive)
  let bmi = weightInput / (heightInput * heightInput);
  //Report it to the webpage
  putAnswer.innerHTML=bmi;
  //Report a health message based on BMI
  if(bmi<18.5){
    putHealthMessage.innerHTML="You are 'Under Weight'";
    document.body.style.backgroundColor = "lightblue";
  }else if(bmi>18.5 && bmi<25){
    putHealthMessage.innerHTML="You are 'Normal Weight'";
    document.body.style.backgroundColor = "lightgreen";
  }else if(bmi>25 && bmi<30){
    putHealthMessage.innerHTML="You are 'Over Weight'";
    document.body.style.backgroundColor = "yellow";
  }else if(bmi>30){
    putHealthMessage.innerHTML="You are 'Obese'";
    document.body.style.backgroundColor = "red";
  }
}

function convert(){
  let weightInput = document.getElementById('inputWeightConvert').value;
  let heightInput = document.getElementById('inputHeightConvert').value;
  let putWeight = document.getElementById('convertedWeight');
  let putHeight = document.getElementById('convertedHeight');

  putHeight.innerHTML= heightInput/3.281;
  document.getElementById("inputHeight").value= heightInput/3.281;
  putWeight.innerHTML= weightInput/2.205;
  document.getElementById("inputWeight").value= weightInput/2.205;
  calcBMI();
}

/*
If you finish early, please create a conversion program to convert from feet to meters and from pounds to kilograms. This should be at the bottom of the BMI page and has a separate functionality.

Also consider using CSS to style the page. Can you change the background color based on the calculation? Use color instead of the alert to indicate if there is an issue with the input data?
*/
