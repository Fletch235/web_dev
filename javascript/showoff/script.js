
const pic = document.getElementById("pic");
let i = 0;

function prev(){
  if(i>0){
    i-=1;
  }else{
    i=4;
  }
  pic.innerHTML = "<img src='images/"+i+".jpg'/>"
}

function next(){
  if(i<4){
    i+=1;
  }else{
    i=0;
  }
  pic.innerHTML = "<img src='images/"+i+".jpg'/>"
    
}
