//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200; 
let diametro = 15;
let raio = diametro / 2;

//variáveis da velocidade da bolinha
let velXBolinha = 6;
let velYBolinha = 6;

//variáveis da minha raquete
let xRaquete = 5, yRaquete = 150, compRaquete = 10, altRaquete = 90;
//variaveis oponente
let xRaqueteOponente=585, yRaqueteOponente=190, velXOponente, velYOponente;

let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  desenhaBolinha();
  movimentaBolinha();
  colisaoBolinha();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  movimentaOponente();
  //colisaoRaqueteBolinha();
  colisaoRaquete(xRaquete, yRaquete);
  colisaoRaquete(xRaqueteOponente, yRaqueteOponente);
}

//Bolinha

function desenhaBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velXBolinha;
  yBolinha += velYBolinha;
}

function colisaoBolinha() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
  velXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
  velYBolinha *= -1;
  }
}

//Minha raquete

function mostraRaquete(x, y) {
  rect(x, y, compRaquete, altRaquete);
}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}
function movimentaOponente() {
  velYOponente = yBolinha - yRaqueteOponente - 
  compRaquete /2 -30;
  yRaqueteOponente += velYOponente;
}


function colisaoRaqueteBolinha () {
  if (xBolinha - raio < xRaquete + compRaquete &&
    yBolinha - raio < yRaquete + altRaquete &&
    yBolinha + raio > yRaquete) {
    velXBolinha *= -1;
  }
}

function colisaoRaquete (x, y) {
  colidiu = collideRectCircle(x, y, compRaquete, altRaquete, xBolinha, yBolinha, raio);
  if (colidiu) {
    velXBolinha *= -1;
  }
}