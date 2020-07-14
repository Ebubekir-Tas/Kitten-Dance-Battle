

//Animation Stick 1 - Pressing Z or X will switch frames of stick image 

let P1Score = 0;

let P2Score = 0;

document.addEventListener("keydown", function (e) {
  if (e.code == "KeyZ" && $("img#stick1").attr("src") == "images/stick1.png"){
    $("#stick1").attr("src", "images/stick2.png");
    P1Score += Math.floor(Math.random() * 9) + 1;         //Random number from 1-10
    console.log(P1Score)
    $('#xpbar1').html('Player 1 Score: ' + P1Score)
  }
});


document.addEventListener("keydown", function (e) {
  if (e.code == "KeyX" && $("img#stick1").attr("src") == "images/stick2.png"){
    $("#stick1").attr("src", "images/stick1.png");
    P1Score += Math.floor(Math.random() * 9) + 1;         //Random number from 1-10
    console.log(P1Score);
    $('#xpbar1').html('Player 1 Score: ' + P1Score)
    if (P1Score >= 299 && $('h2').is(':empty')){          //Win at 300 or more points
      $('h2').css("color", "white").text('Player 1 wins!')
          setTimeout(function(){
        window.location.reload(true);}, 2000)
    }
  }
});


//Animation Stick 2 - Pressing Z or X will switch frames of stick image
document.addEventListener("keydown", function (f) {
  if (f.code == "KeyN" && $("img#stick2").attr("src") == "images/stick2.png"){
    $("#stick2").attr("src", "images/stick1.png");
    P2Score += Math.floor(Math.random() * 9) + 1;          //Random number from 1-10
    console.log(P2Score)
    $('#xpbar2').html('Player 2 Score: ' + P2Score)
  }
});


document.addEventListener("keydown", function (f) {
  if (f.code == "KeyM" && $("img#stick2").attr("src") == "images/stick1.png"){
    $("#stick2").attr("src", "images/stick2.png");
    P2Score += Math.floor(Math.random() * 9) + 1;          //Random number from 1-10
    console.log(P2Score);
    $('#xpbar2').html('Player 2 Score: ' + P2Score)
    if (P2Score >= 299&& $('h2').is(':empty')){            //Win at 300 or more points
      $('h2').css("color", "black").text('Player 2 wins!')
          setTimeout(function(){
        window.location.reload(true);}, 2000)
    }
  }
});
