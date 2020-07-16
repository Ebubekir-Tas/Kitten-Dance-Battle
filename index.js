
//Scores

let P1Score = 0;    //Player 1 Score

let P2Score = 0;  //Player 2 Score

//Variables


function stop(){if ($("h2").not(':empty')){$('body').on("keydown", false)}}        //Winner announcement = Disable keyboard inputs)
                                                                                  
function refresh(){window.location.reload(true);}                                //refresh
                                                                                
function randomScore1(){P1Score += Math.floor(Math.random() * 9) + 1;}         //Player 1 random score generator (Must be different from Player 2)
                                                                              
function randomScore2(){P2Score += Math.floor(Math.random() * 9) + 1;}       //Player 2 random score generator (Must be different from Player 1)
                                                                            
function p1Wins(){$('h2').css("color", "#fff").text('Player 1 wins!')}     //Player 1 Winner Declaraion
                                                                          
function p2Wins(){$('h2').css("color", "#fff").text('Player 2 wins!')}   //Player 2 Winner Declaraion

function blink(){fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)}


                                                                        
//Press the Z key                                                      
document.addEventListener("keydown", function (e) {                   
  if (e.code == "KeyZ" && $("img#player1").attr("src") == "images/stick2.png"){    //If you press Z
    $("#player1").attr("src", "images/stick1.png");                  //The image swaps to stick1 (arms down)
    randomScore1();                                                //Random number from 1-10
    console.log(P1Score);                                         
    $('#xpbar1').html('Player 1 Score: ' + P1Score  + '/300')    //Score bar default text
    if (P1Score >= 300 && $('h2').is(':empty')){                //Win at 300 points
      p1Wins();                                                //Winner declaration
          setTimeout(function(){                              
        refresh()}, 2000)                                    // the number in milliseconds to refresh
        stop();                                             //Disable keyboard inputs after a winner is declared
        $('#player1').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      }
  }
});


//Press the X key
document.addEventListener("keydown", function (e) {
  if (e.code == "KeyX" && $("img#player1").attr("src") == "images/stick1.png"){    //If you press X
    $("#player1").attr("src", "images/stick2.png");                 //The image swaps to stick2 (arms up)
    randomScore1();                                               //Random number from 1-10
    console.log(P1Score);
    $('#xpbar1').html('Player 1 Score: ' + P1Score + '/300')    //Score bar default text
    if (P1Score >= 300 && $('h2').is(':empty')){               //Win at 300 points
      p1Wins();                                               //Winner declaration
          setTimeout(function(){
        refresh()}, 2000)                                   // the number in milliseconds to refresh
        stop();                                            //Disable keyboard inputs after a winner is declared
        $('#player1').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      }
  }
});


//Press the N key
document.addEventListener("keydown", function (f) {
  if (f.code == "KeyN" && $("img#player2").attr("src") == "images/playerdos1.png"){    //If you press N
    $("#player2").attr("src", "images/playerdos2.png");                 //The image swaps to playerdos2 (arms up)
    randomScore2();                                               //Random number from 1-10
    console.log(P2Score);                                        
    $('#xpbar2').html('Player 2 Score: ' + P2Score + '/300')    //Score bar default text
    if (P2Score >= 300 && $('h2').is(':empty')){               //Win at 300 points
      p2Wins();                                               //Winner declaration
          setTimeout(function(){                             
        refresh()}, 2000)                                   // the number in milliseconds to refresh
        stop();                                            //Disable keyboard inputs after a winner is declared
        $('#player2').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    }
  }
});


//Press the M key
document.addEventListener("keydown", function (f) {
  if (f.code == "KeyM" && $("img#player2").attr("src") == "images/playerdos2.png"){    //If you press M
    $("#player2").attr("src", "images/playerdos1.png");                 //The image swaps to playerdos1 (arms down)
    randomScore2();                                               //Random number from 1-10
    console.log(P2Score);
    $('#xpbar2').html('Player 2 Score: ' + P2Score + '/300')    //Score bar default text
    if (P2Score >= 300 && $('h2').is(':empty')){               //Win at 300 points
      p2Wins();                                               //Winner declaration
          setTimeout(function(){
        refresh()}, 2000)                                   // the number in milliseconds to refresh
        stop();                                            //Disable keyboard inputs after a winner is declared
        $('#player2').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    }
  }
});
