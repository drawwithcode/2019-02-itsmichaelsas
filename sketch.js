function preload(){
  // put preload code here
}



function setup(){
  pixelDensity(1);
  createCanvas(windowWidth,windowHeight);
  background('#2b2b2a');
  angleMode(DEGREES);

    // base sfondo simil-puntinato
    background('#2b2b2a');
    for (var a=0; a<width; a+=15 ){
    for (var b=0; b<height; b+=15){
    stroke('#5e5e5c');
    ellipseMode(CENTER);
    ellipse(a, b, 0.2, 0.2);
    }
    }
    // testo
    fill('white');
    text('RELOAD TO GLITCH', 300,50);
    textAlign(CENTER,CENTER);
    textSize(100);
}

function draw(){
  var h= random(1,10);
  var colorList = ['#e86584',
                '#3c5979',
                '#018cb7',
                '#7fffd4',
                '#fc6c85',
                '#c0c0c0',
                '#d3305d',
                '#fae093'];
  var index = floor(noise(random()/h)*colorList.length);
  var colorHex= colorList[index];
  // generazione di quadrati che si sovrappongono con colore random
  // il numero dei colori che vengono usati è casuale e dipendente da "h"
  push();
  for (u=0; u<width; u+=40){
  for (v=0; v<height; v+=20){
  fill(color(colorHex));
  noStroke();
  ellipseMode(CENTER);
  ellipse(u*random(), height/4+v, 20, 20);
  }
  }
  pop();

}
