const itemNames = ["Minis","Jolly Ranchers","Air Heads","Gummies","Sour Patch","Caramel","Punch","Kisses","Skittles","Candy"];
const price = [2,3,4,5,6,7,8,9,10,11]
const itemPics = ["<img src='images/candy1.jpg'/>","<img src='images/candy2.jpg'/>","<img src='images/candy3.jpg'/>","<img src='images/candy4.jpg'/>","<img src='images/candy5.jpg'/>","<img src='images/candy6.jpg'/>","<img src='images/candy7.jpg'/>","<img src='images/candy8.jpg'/>","<img src='images/candy9.jpg'/>","<img src='images/candy10.jpg'/>"];


let table = document.getElementById("items");
document.getElementById("show").addEventListener("click",function(){
  console.log("_")
  table.innerHTML = "<tr><th>Item</th><th>Price</th><th>Image</th><th>Quantity</th></tr>";
  for(let i = 0; i<itemNames.length; i++){
    price=i+2;
    table.innerHTML += "<tr><td>" + itemNames[i] + "</td>" +"<td>$"+price+"</td>"+ "<td>" + itemPics[i] + "</td>" + "</tr>";
  }
});
