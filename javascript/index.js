    // for first dice----------------------------
    var randomFor1 = Math.random() * 6;
    var randomNumber1 = Math.floor( randomFor1 ) + 1;
    var randomDiceImg1 = "images/dice" + randomNumber1 + ".png";

    var img1 = document.querySelector(".img1");

    img1.setAttribute("src", randomDiceImg1 );

    
    // for secound dice----------------------------
    var randomFor2 = Math.random() * 6;
    var randomNumber2 = Math.floor( randomFor2 ) + 1;
    var randomDiceImg2 = "images/dice" + randomNumber2 + ".png";

    var img2 = document.querySelector(".img2");

    img2.setAttribute("src" , randomDiceImg2);
    
    
    // for player winnig sta.------------------------
    if(randomNumber1 > randomNumber2){
        
        document.querySelector(".heading").innerHTML = " 🚩 Player 1 win!";
        
    }
    else if(randomNumber2 > randomNumber1){
        
        document.querySelector(".heading").innerHTML = "Player 2 win!🚩";
        
    }
    if(randomNumber1 === randomNumber2) {

    document.querySelector(".heading").innerHTML = "🚩 Draw 🚩";
    }

    
    console.log(randomNumber1);
    console.log(randomNumber2);