let palavra;

function setup() {
  createCanvas(400, 400);
  
   let palavras = ["SOUR","brutal","traitor","drivers license","1 step forward, 3 steps back","deja vu","good 4 u","enough for you","happier","jealousy, jealousy", "favorite crime","hope ur ok"]
  palavra = random(palavras);
}

function inicializaCores() {
  background(171, 108, 213);
  fill(62, 2, 64);
  textSize(43);
  textAlign(CENTER, CENTER);

}

function draw() {
  inicializaCores();
  
  let maximo = width;
  let minimo = 0;
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 200, 200);
  
}
