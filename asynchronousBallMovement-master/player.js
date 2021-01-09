class player{
    constructor(){

    }
    getCount(){ 
        var playercountRef = db.ref('playercount');
         playercountRef.on("value",function(data){ 
             playercount = data.val(); }) } 
            updateCount(count){ db.ref('/').update({ playercount: count }); } 
            update(name){ 
            var playerIndex = "player" + playercount;
            db.ref(playerIndex).set({ name:name }); }
}
