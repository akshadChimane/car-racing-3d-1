var gamestate=0;
var playercount;
var form,player,game;
var db,pos;
function setup(){
    createCanvas(500,500);
    db=firebase.database()
    game= new game();
    game.getState()
    game.start()
}

function draw(){
    background("white");
}
    
    
