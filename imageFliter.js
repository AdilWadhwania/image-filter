var image,unchanged_image,reset_image;
var canvas=document.getElementById("can");
function upload(){ 
  var fileinput=document.getElementById("finput");
 image=new SimpleImage(fileinput); 
  reset_image=new SimpleImage(fileinput);
  image.drawTo(canvas);
}
function v_rainbow(){
  
}
function turngray(){
 unchanged_image=new SimpleImage(image);
  for(var pixel of image.values()){
    var avg=(pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  image.drawTo(canvas);
  var w=image.width;
  var h=image.height;
  document.getElementById("dimensions").innerHTML=w+"*"+h;
}
function red(){
  
  unchanged_image=new SimpleImage(image);
  for(var pixel of image.values()){
    var avg=(pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    if(avg<128){
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen((2*avg)-255);
      pixel.setBlue((2*avg)-255);
    }
  }
  image.drawTo(canvas);
  var w=image.width;
  var h=image.height;
  document.getElementById("dimensions").innerHTML=w+"*"+h;
}
function horizontalrainbow(){
    unchanged_image=new SimpleImage(image);
  
  for(pixel of image.values()){
    var y=pixel.getY();
    var h=image.getHeight();
    var avg=(pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    if(y<=h/7){
    if(avg<128){
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }else{
        pixel.setRed(255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(2*avg-255);
      }
    }
   else if(y>h/7 && y<=(h*2)/7){
      if(avg<128){
        pixel.setRed(2*avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
      }else{
        pixel.setRed(255);
        pixel.setGreen(1.2*avg-51);
        pixel.setBlue(2*avg-255);
      }
    }
    else if(y>(h*2)/7 && y<=(h*3)/7){
      if(avg<128){
        pixel.setRed(2*avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      }else{
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
      }
    }
   else if(y>(h*3)/7 && y<=(h*4)/7){
      if(avg<128){
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      }else{
        pixel.setRed(2*avg-255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
      }
    }
   else if(y>(h*4)/7 && y<=(h*5)/7){
      if(avg<128){
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      }else{
        pixel.setRed(2*avg-255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);
      }
    }
  else if(y>(h*5)/7 && y<=(h*6)/7){
      if(avg<128){
        pixel.setRed(0.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      }else{
        pixel.setRed(1.2*avg-51);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);
      }
    } 
    else{
      if(avg<128){
        pixel.setRed(1.6*avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
      }else{
        pixel.setRed(0.4*avg+153);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(0.4*avg+153);
      }
    }   
  }
  image.drawTo(canvas);
  var w=image.width;
  var h=image.height;
  document.getElementById("dimensions").innerHTML=w+"*"+h;
}
function verticalrainbow(){
    unchanged_image=new SimpleImage(image);
  
  for(pixel of image.values()){
    var x=pixel.getX();
    var w=image.getWidth();
    var avg=(pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    if(x<=w/7){
      if(avg<128){
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }else{
        pixel.setRed(255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(2*avg-255);
      }
    }
   else if(x>w/7 && x<=(w*2)/7){
      if(avg<128){
        pixel.setRed(2*avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
      }else{
        pixel.setRed(255);
        pixel.setGreen(1.2*avg-51);
        pixel.setBlue(2*avg-255);
      }
    }
    else if(x>(w*2)/7 && x<=(w*3)/7){
      if(avg<128){
        pixel.setRed(2*avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      }else{
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
      }
    }
   else if(x>(w*3)/7 && x<=(w*4)/7){
      if(avg<128){
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      }else{
        pixel.setRed(2*avg-255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
      }
    }
   else if(x>(w*4)/7 && x<=(w*5)/7){
      if(avg<128){
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      }else{
        pixel.setRed(2*avg-255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);
      }
    }
  else if(x>(w*5)/7 && x<=(w*6)/7){
      if(avg<128){
        pixel.setRed(0.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      }else{
        pixel.setRed(1.2*avg-51);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);
      }
    } 
    else{
      if(avg<128){
        pixel.setRed(1.6*avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
      }else{
        pixel.setRed(0.4*avg+153);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(0.4*avg+153);
      }
    }   
  }
  image.drawTo(canvas);
  var w=image.width;
  var h=image.height;
  document.getElementById("dimensions").innerHTML=w+"*"+h;
}
function tryit(){
  unchanged_image=new SimpleImage(image);
  for (var pixel of image.values()) {
  var x = pixel.getX();
  var y = pixel.getY();
  if ((x + y)/2 == Math.round((x + y)/2)) {
    pixel.setRed(255);
    pixel.setGreen(255);
    pixel.setBlue(255);
  }
  
}
image.drawTo(canvas);
  var w=image.width;
  var h=image.height;
  document.getElementById("dimensions").innerHTML=w+"*"+h;
}
function graycircle(){
  unchanged_image=new SimpleImage(image);
  var x_center = Math.floor(image.getWidth()/2);
  var y_center = Math.floor(image.getHeight()/2);
  var r = Math.min(x_center, y_center);
    for (var pixel of image.values()) {
      var avg = (pixel.getRed()+pixel.getGreen()
+pixel.getBlue())/3;
      var x = pixel.getX();
      var y = pixel.getY();
      if (Math.pow((x - x_center),2) + Math.pow((y - y_center),2) <= Math.pow(r,2)) {
          pixel.setRed(avg);
          pixel.setGreen(avg);
          pixel.setBlue(avg);
      }
    }
image.drawTo(canvas);
  var w=image.width;
  var h=image.height;
  document.getElementById("dimensions").innerHTML=w+"*"+h;
}
function rain_gray(){
  unchanged_image=new SimpleImage(image);
  verticalrainbow();
  graycircle();
  
}
function rain_dot(){
  unchanged_image=new SimpleImage(image);
  tryit();
  verticalrainbow();
}
function h_rain_gray(){
  unchanged_image=new SimpleImage(image);
  horizontalrainbow();
  graycircle();
}

function h_rain_dot(){
  unchanged_image=new SimpleImage(image);
  tryit();
   horizontalrainbow();
}
function unchanged(){
  unchanged_image.drawTo(canvas);
}
function reset(){
  reset_image.drawTo(canvas);
}
