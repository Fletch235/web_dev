function changeColor()
{
  let h = document.getElementById('myTarget');
  h.style.color = "red";
}

function changeText()
{
    let h = document.getElementById('myTarget');
    h.textContent = "A change for the better";
}

function doubleMe()
{
  let h = document.getElementById('gonnaGrow');
  h.textContent = h.textContent + h.textContent;
}

function mulitplyBy2 ()
{
  let myNumber = document.getElementById('inputNumber');
  let answer = document.getElementById('answer');
  answer.textContent = 2 * myNumber.value;
}

function changePicture1()
{
    let h = document.getElementById('pageImage1');
    h.src="twototoo.jpg";
    h.style.border = "1px black solid";
}

function changePicture2()
{
    let h = document.getElementById('pageImage1');
    h.src="obiwan.jpg";
    h.style.border = "3px red solid";
}

function togglePicture()
{
    let h = document.getElementById('pageImage1');
    if(h.src.indexOf("obiwan.jpg")>0){
      changePicture1();
    }
    else {
      changePicture2();
    }
}
