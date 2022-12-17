class Square{
  constructor(originX = 0, originY = 0, width = 10){
    this.originX = originX;
    this.originY = originY;
    this.width = width;
  }
  perimiter(){
    return this.width * 4;
  }
  area(){
    return this.width * this.width;
  }
  diagonal(){
    return Math.sqrt(this.width**2+this.width**2)
  }
  isin(pointX, pointY){
    if(pointX>=this.originX && pointX<=this.originX+this.width && pointY>=this.originY && pointY<=this.originY+this.width){
      return true;
    }else{
      return false;
    }
  }
  overlap(square){
    function isin(pointX, pointY){
      if(pointX>=this.originX && pointX<=this.originX+this.width && pointY>=this.originY && pointY<=this.originY+this.width){
        return true;
      }else{
        return false;
      }
    }
    if(isin(square.originX,square.originY) || isin(square.originX+square.width,square.originY) || isin(square.originX,square.originY+square.width) || isin(square.originX+square.width,square.originY+square.width)){
      return true;
    }else{
      return false;
    }
  }
}
