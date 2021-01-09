class game{
    constructor(){

    }
    getState(){ 
        var gamestateRef = db.ref('gamestate');
        gamestateRef.on("value",function(data){ gamestate = data.val(); }); } 
        update(state){
        db.ref('/').update({ gamestate: state }); } 
        start(){
         if(gamestate === 0){ 
            player = new player(); 
            player.getCount();
            form = new form() 
            form.display();
        
            
     }
}