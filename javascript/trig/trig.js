let values=[]

const add = document.getElementById("add");

add.addEventListener("click", function(){
  if(isNaN(document.getElementById("input").value)){
    alert("Must be a number.")
  }else{
    values.push(Number(document.getElementById("input").value));
  }
  document.getElementById("arr").textContent=values;
});


const table = document.getElementById("table");

table.addEventListener("click", function(){
  let tab = document.getElementById("tab");
  let inside = "<table><th>Angle</th><th>Sin 0</th><th>Cos 0</th><th>Tan 0</th>";

  for(let i = 0; i<values.length; i++){
    let s = String(Math.sin(values[i]* Math.PI / 180)).substring(0,6);
    let c = String(Math.cos(values[i]* Math.PI / 180)).substring(0,6);
    let t;
    if(Math.tan(values[i]* Math.PI / 180)>10000000000){
      console.log("here");
      t = "&infin;";
    }else{
      t = String(Math.tan(values[i]* Math.PI / 180)).substring(0,6);
    }
    inside += "<tr><td>"+values[i]+"</td>"+"<td>"+s+"</td>"+"<td>"+c+"</td>"+"<td>"+t+"</td></tr>"
  }
  inside+="</table>"
  tab.innerHTML=inside
});
