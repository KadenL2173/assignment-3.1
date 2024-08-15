function playCraps(){
    //this is a one line comment
    /*this is function to play craps in game.html
    rules for craps
    Roll two dice
    add up to 7 or 11, you lose
    if they are doubles and even, you win!
    everything else is a push
    Kaden Longworth
    13August2024
    */
    console.log("playCraps() started");
    //roll the dice
    var die1 = Math.floor(Math.random() * 6) + 1;
    console.log(die1);
    document.getElementById("die1Res").innerHTML = "die1 result = " + die1;

    var die2 = Math.floor(Math.random() * 6) + 1;
    console.log(die2);
    document.getElementById("die2Res").innerHTML = "die2 result = " + die2;

    var sum = die1 + die2;
    console.log(sum);
    document.getElementById("sumRes").innerHTML = "sum result = " + sum;

    //look for a loss
    if(sum == 7 || sum == 11){
       console.log("loss");
       document.getElementById("gameRes").innerHTML = "You lost to the Blade Runner!";
    } else if(die1 == die2 && die1 % 2 == 0){           //look for a win
        console.log("win");
       document.getElementById("gameRes").innerHTML = "You beat the Blade Runner!";
    }else{  //everything else is a push
        console.log("tie");
        document.getElementById("gameRes").innerHTML = "You did not win or lose.";
    }

    


    



}