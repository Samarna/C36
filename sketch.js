var database;
var position;
var gameState = 0;
var playerCount;
var form, player, game;
var allPlayers;

function setup(){
  database = firebase.database();

  createCanvas(400,400);
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");
  
}
