function calcSum(){
  let input = Number(document.getElementById("inputValue").value);
  let n = 0;
  let ans = 0;
  while(n < input){
    n+=1;
    ans+=n;
  }
  document.getElementById("answer").innerHTML=ans;
}

function calcTopProduct(){
  let input = Number(document.getElementById("inputValue").value);
  let n = input;
  let ans = input;

  if(input>0 && input<100){
    while(n<100){
      n=n+1;
      ans=n*ans;
    }
  }else{
    ans="invalid";
  }

  document.getElementById("answer").innerHTML=ans;
}

function asciiSquare(){
  let input = Number(document.getElementById("inputValue").value);
  let n = Math.sqrt(input);
  let ans="";
  let i = 0;
  let ast = "'   ";
  while(i<Math.floor(n)){
    if(i+n<input){
      ans+="<br>"+ast.repeat(n);
      i+=1;
    }else{
      ans+="<br>"+ast.repeat(input-i);

    }
  }



  document.getElementById("answer").innerHTML=ans;
}

function asciiTriangle(){
  let input = Number(document.getElementById("inputValue").value);
  let n = 0;
  let ans="";
  let ast="'  ";
  let i=0;
  while(i<input){
    n+=1;
    i+=n;
    ans+="<br>"+ast.repeat(n)
  }

  document.getElementById("answer").innerHTML=ans;
}

function howManyTimes(){
  let input = Number(document.getElementById("inputValue").value);
  let ans=1;

  if(input>0 && input<100){
    let rand = Math.floor(100*(Math.random(0,1)));
    while(rand!=input){
      ans+=1;
      rand = Math.floor(100*(Math.random(0,1)));
    }
  }

  document.getElementById("answer").innerHTML=ans;
}

function calcPi(){
  let input = Number(document.getElementById("inputValue").value);
  let sign = 0;
  let ans = 0;
  let i = 1;

  while(input>i){
    if(sign==0){
      ans+=1/((2*i)-1);
      i+=1;
      sign=1;
    }else{
      ans-=1/((2*i)-1);
      i+=1;
      sign=0;
    }
  }
  ans = ans*4;
  document.getElementById("answer").innerHTML=ans;
  }
