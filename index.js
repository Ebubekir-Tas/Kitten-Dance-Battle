
//Scores
let p1Score = 0;    //Player 1 Score

let p2Score = 0;  //Player 2 Score


//Functions and Variables

var scoreCap = 100;

var increment = 9; //9 by default, can be changed in browser through Game Settings tab.

var refreshTimer = 3000 //3 seconds

function stop(){if ($("h2").not(':empty')){$('body').on("keydown", false)}}        //Winner announcement = Disable keyboard inputs)
                                                                                  
function refresh(){window.location.reload(true);}                                //refresh
                                                                                
function randomScore1(){p1Score += Math.floor(Math.random() * increment) + 1;}         //Player 1 random score generator (Must be different from Player 2)                                                                 
function randomScore2(){p2Score += Math.floor(Math.random() * increment) + 1;}       //Player 2 random score generator (Must be different from Player 1)
                                                                            
function p1Wins(){$('h2').css("color", "#fff").text('Player 1 wins!')}     //Player 1 Winner Declaraion                                                             
function p2Wins(){$('h2').css("color", "#fff").text('Player 2 wins!')}   //Player 2 Winner Declaraion

function p1Flash(){$('#player1').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)}
function p2Flash(){$('#player2').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)}


//Audio

var music = 'dance.mp3';
var sound = false;
function play() {
    if(!sound){
        sound = new Audio(music);
    }
    sound.play();
}



//Press the Z key                                                      
document.addEventListener("keydown", function (e) {                   
  if (e.code == "KeyZ" && $("img#player1").attr("src") == "images/Cat2.png"){    //If you press Z
    $("#player1").attr("src", "images/Cat1.png");                  //The image swaps to Cat1
    randomScore1();  
    play();                                               
    console.log(p1Score);                           
    $('#xpbar1').html('Player 1 Score: ' + p1Score  + '/' + scoreCap)    
    if (p1Score >= scoreCap && $('h2').is(':empty')){                
      p1Wins();                                                
          setTimeout(function(){                              
        refresh()}, refreshTimer)                                    
        stop();                                            
        p1Flash();
      }
  }
});


//Press the X key
document.addEventListener("keydown", function (e) {
  if (e.code == "KeyX" && $("img#player1").attr("src") == "images/Cat1.png"){    //If you press X
    $("#player1").attr("src", "images/Cat2.png");                 //The image swaps to Cat2
    randomScore1();     
    play();                                           
    console.log(p1Score);
    $('#xpbar1').html('Player 1 Score: ' + p1Score + '/' + scoreCap)    
    if (p1Score >= scoreCap && $('h2').is(':empty')){               
      p1Wins();                                               
          setTimeout(function(){
        refresh()}, refreshTimer)                                   
        stop();                                           
        p1Flash();
      }
  }
});


//Press the N key
document.addEventListener("keydown", function (f) {
  if (f.code == "KeyN" && $("img#player2").attr("src") == "images/SecondCat1.png"){    //If you press N
    $("#player2").attr("src", "images/SecondCat2.png");                 //The image swaps to Second Cat 2
    randomScore2(); 
    play();                                               
    console.log(p2Score);                                        
    $('#xpbar2').html('Player 2 Score: ' + p2Score + '/' + scoreCap)    
    if (p2Score >= scoreCap && $('h2').is(':empty')){               
      p2Wins();                                               
          setTimeout(function(){                             
        refresh()}, refreshTimer)                                   
        stop();                                           
        p2Flash();
    }
  }
});


//Press the M key
document.addEventListener("keydown", function (f) {
  if (f.code == "KeyM" && $("img#player2").attr("src") == "images/SecondCat2.png"){    //If you press M
    $("#player2").attr("src", "images/SecondCat1.png");                 //The image swaps to Second Cat 2
    randomScore2();                                               
    console.log(p2Score);
    $('#xpbar2').html('Player 2 Score: ' + p2Score + '/' + scoreCap)    
    if (p2Score >= scoreCap && $('h2').is(':empty')){               
      p2Wins();
      play();                                                
          setTimeout(function(){
        refresh()}, refreshTimer)                                   
        stop();                                            
        p2Flash();
    }
  }
});


// Bootstrap Game Settings
  $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show'); 			
    $(this).parent().toggleClass('show'); 	
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass('show'); 	
      $('.dropdown-submenu.show').removeClass('show'); 		
    });
    return false;
  });


//Dropdown Score Cap
  $( ".100" ).click(function() {
  scoreCap = 100;
  $('#xpbar1').html('Player 1 Score: 0/100')
  $('#xpbar2').html('Player 1 Score: 0/100')
  });
  $( ".200" ).click(function() {
    scoreCap = 200;
    $('#xpbar1').html('Player 1 Score: 0/200')
    $('#xpbar2').html('Player 1 Score: 0/200')
  });
  $( ".300" ).click(function() {
    scoreCap = 300;
    $('#xpbar1').html('Player 1 Score: 0/300')
    $('#xpbar2').html('Player 1 Score: 0/300')
  });
  $( ".500" ).click(function() {
    scoreCap = 500;
    $('#xpbar1').html('Player 1 Score: 0/500')
    $('#xpbar2').html('Player 1 Score: 0/500')
  });
  $( ".1000" ).click(function() {
    scoreCap = 1000;
    $('#xpbar1').html('Player 1 Score: 0/1000')
    $('#xpbar2').html('Player 1 Score: 0/1000')
  });

  //Dropdown Score Increment
  $('.inc10').click(function(){
    increment = 9;
  })

  $('.inc20').click(function(){
    increment = 19;
  })

  $('.inc30').click(function(){
    increment = 29;
  })

  $('.inc40').click(function(){
    increment = 39;
  })

  $('.inc50').click(function(){
    increment = 49;
  })

