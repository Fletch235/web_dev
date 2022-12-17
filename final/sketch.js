let numOptions = [

  10,
  12,
  14,
  15,
  16,
  18,
  20,
  24,
  30,
  32,
  35,
  36,
  45,
  54,
  64,
  72,
  80,
  90


];
let score=0;
let run = true;
let started = false;
let lines = [];
let boxes=[];
let keys = [];
let current = 1;
let stand = 600-(650/4);
let r=600-(650/4);
let rr=600-(650/4);
let rrr=600-(650/4);
let rrrr=600-(650/4);
var timerValue = 4;
var startButton;
var swi=false;
    let rCount = 0;
    let rrCount = 0;
    let rrrCount = 0;
    let rrrrCount = 0;
function setup() {
  var canvas =   createCanvas(650, 700);
  canvas.parent('gameWindow');
  for (let i = -1; i < 10; i++) {
    append(keys, new key(i));
  }
  setInterval(timeIt, 1000);
}

function timeIt() {
    timerValue++;

}
function mouseClicked(){
  started =true;
}
function draw() {
  if((timerValue)%4==0 && swi){
      boxes.push(new boxx(numOptions[floor(random((numOptions.length)))]))
    swi=false;
  }else if((timerValue)%4!=0){
    swi=true;
  }
  background(0, 50, 100);
  //console.log(keys[0].x,keys[0].y);
  if(run && started){
  fill(0);
  fill(255);
  textSize(30);

    text("Current Number: "+current, 50, 75);
    text("Score: "+score, 50, 100);
  for (let i = 2; i < 10; i++) {
    fill(255);
    rect(keys[i].x, keys[i].y, keys[i].width, 200);
    fill(0);
    textSize(20);
    text(i, keys[i].x + 0.45 * keys[i].width, keys[i].y + 50);
  }
     rCount = 0;
     rrCount = 0;
     rrrCount = 0;
     rrrrCount = 0;
  for (let i = 0; i < boxes.length;i++) {
    fill(10,150,150);
    rect(boxes[i].x,boxes[i].y,boxes[i].width,boxes[i].width);
    fill(0);
    text(boxes[i].num, boxes[i].x + 0.45 * boxes[i].width, boxes[i].y + 80);


    if(boxes[i].a==0){
      if(boxes[i].y<r-1){
              boxes[i].down();

      }else{rCount+=1;}
    }else if(boxes[i].a==1){
      if(boxes[i].y<rr-1){
              boxes[i].down();



      }else{rrCount+=1;}
    }else if(boxes[i].a==2){
      if(boxes[i].y<rrr-1){
                boxes[i].down();


      }else{rrrCount+=1;}
    }else if(boxes[i].a==3){
      if(boxes[i].y<rrrr-1){
        boxes[i].down();

      }else{rrrrCount+=1;}
    }

  }

      r=stand-(rCount*width/4);
    rr=stand-(rrCount*width/4);
    rrr=stand-(rrrCount*width/4);
    rrrr=stand-(rrrrCount*width/4);
    console.log(rCount,rrCount,rrrCount,rrrrCount)
  if(rCount>3||rrCount>3||rrrCount>3||rrrrCount>3){
    run = false;
  }
  }else if(started == false){
    fill(250)
    text("Use your keyboard to get rid of boxes with multiplication\n                                  Click to start",width/2-245,height/2)
      for (let i = 2; i < 10; i++) {
    fill(255);
    rect(keys[i].x, keys[i].y, keys[i].width, 200);
    fill(0);
    textSize(20);
    text(i, keys[i].x + 0.45 * keys[i].width, keys[i].y + 50);
  }
  }else{
    fill(250)
    text("You Died",width/2-50,height/2)
  }
}


function keyPressed() {
  if (keyCode - 48 <= 9 && keyCode - 48 >= 1) {
    keys[keyCode - 48].pressed();
    current *= keyCode - 48;
  }
  if(keyCode == 32){
    //boxes.push(new boxx(numOptions[floor(random((numOptions.length)))]))

  }
  for(let i=0; i <boxes.length;i++){
    if(boxes[i].num == current){
      for(let ii = 0; ii <boxes.length;ii++){
        if(boxes[ii].a==boxes[i].a){
            boxes[ii].y +=width/4;

        }
      }
      boxes.splice(i,1);
      score++;


    }
  }
}

function keyReleased() {
  if (keyCode - 48 <= 9 && keyCode - 48 >= 1) {
    keys[keyCode - 48].unpressed();
    current /= keyCode - 48;
  }
}

class key {
  constructor(num) {
    this.num = num;
    this.width = width / 8;
    this.y = 600;
    this.x = (num - 1) * this.width;
  }
  pressed() {
    this.y = 625;
  }
  unpressed() {
    this.y = 600;
  }
}

class boxx {
  constructor(num){
    this.num = num;
    this.width = width / 4;
    this.y = -150;
    this.a = floor(random(0,4));
    this.x = this.a*(width/4);
  }
  down(){
    this.y+=4;
  }
}
