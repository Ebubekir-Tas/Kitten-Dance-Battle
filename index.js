//When I press Z I want #stick1 src to be "images/stick1.png". When I press X I want #stick1 src to be "images/stick2.png"


//Animation Stick 1
document.addEventListener("keydown", function(e){
    if(e.code == "KeyZ"){
        $('#stick1').attr("src", "images/stick1.png");  
    }
    })

document.addEventListener("keydown", function(e){
    if(e.code == "KeyX"){
        $('#stick1').attr("src", "images/stick2.png");
        P1ScoreX = Math.floor(Math.random() * 9)+1; //Random number from 1-10
        return P1ScoreX;
    }
    }) 

//Animation Stick 2
document.addEventListener("keydown", function(f){
    if(f.code == "KeyN"){
        $('#stick2').attr("src", "images/stick2.png");
    }
    })

document.addEventListener("keydown", function(f){
    if(f.code == "KeyM"){
        $('#stick2').attr("src", "images/stick1.png");
    }
    })

//Stick 1 Score


document.addEventListener("keydown", function(e){
    if(e.code == "KeyZ"){
        P1ScoreZ = Math.floor(Math.random() * 9)+1; //Random number from 1-10
    }   
    })

document.addEventListener("keydown", function(e){
    if(e.code == "KeyX"){
        P1ScoreX = Math.floor(Math.random() * 9)+1; //Random number from 1-10
        
    }
    })




