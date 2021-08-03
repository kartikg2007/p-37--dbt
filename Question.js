class Quiz{
    constructor(){
        this.input = createInput("name")
        this.button = createButton("play")
        this.greeting = createElement("h2")
    }
    hideElements(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }



display(){

    var title = createElement('h1')
    stroke("black")
    title.html("My Quiz Game")
    title.position(130, 200)
    //title.display();

    var Ques = createElement('h2')
    Ques.html("Question:- What starts and ends with letter 'E' but has only one letter")
    Ques.position(200, 100)
    //Ques.display();

    var opt1 = createElement('h3')
    opt1.html("1. Everyone")
    opt1.position(250, 100)
    //opt1.display();

    var opt2 = createElement('h3')
    opt2.html("2. Envelope")
    opt2.position(300, 100)
    //opt2.display();

    var opt3 = createElement('h3')
    opt3.html("3. Estimate")
    opt3.position(350, 100)
    //opt3.display();

    var opt4 = createElement('h3')
    opt4.html("4. Example")
    opt4.position(400, 100)
    //opt4.display();



     
    
    this.input.position(130, 160)
    this.button.position(250, 200)
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.updateCount(playerCount);
        player.update();


    }
    )


    
}
}
