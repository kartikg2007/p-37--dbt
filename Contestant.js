class Constestant{
    constructor(){
        this.name = null
        this.distance = 0;
        this.index = null;
    }


    getCount(){
        var countRef = database.ref('playerCount')
        countRef.on("value", function(data){
            playerCount = data.val();
        });
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        });

        
    }

    update(name){
        var playerIndex = "players/player" + this.index
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        })


    }

    static getPlayerInfo(){
        var playerInfo = database.ref("players")
        playerInfo.on("value", (data) =>{
            allPlayers = data.val();
        })
    }
}