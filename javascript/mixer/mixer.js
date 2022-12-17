function mix(){
  let r = parseInt(document.getElementById("red").value);
  let g = parseInt(document.getElementById("green").value);
  let b = parseInt(document.getElementById("blue").value);
  let span = document.getElementById("hex");
  console.log(r,g,b);
    console.log(isNaN(r));
  if(r > 255 || r < 0 ||g > 255 || g < 0 ||b > 255 || b < 0){
    span.innerHTML="ENTER VALID NUMBERS.";

  }else if(isNaN(r)==false && isNaN(g)==false && isNaN(b)==false){

    preHex=parseInt(""+r+g+b);
    newr=r.toString(16);
    if(newr.length<2){newr="0"+newr; }
    newg=g.toString(16);
    if(newg.length<2){newg="0"+newg; }
    newb=b.toString(16);
    if(newb.length<2){newb="0"+newb; }
    console.log(newr,newg,newb);
    newColor="#"+newr+newg+newb;
    span.innerHTML=newColor;
    document.getElementById("color").style.backgroundColor=newColor;
  }else{
    span.innerHTML="ENTER VALID NUMBERS.";

  }
}
















function hex(n){
let out = n < 16? "0" + n.toString(16): n.toString(16)
return out.toUpperCase();
}
