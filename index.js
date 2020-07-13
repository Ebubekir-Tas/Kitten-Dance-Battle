//When I press Z I want #stick1 src to be "images/stick1.png". When I press X I want #stick1 src to be "images/stick2.png"



//Animation Stick 1
document.addEventListener("keydown", function (e) {
  if (e.code == "KeyZ") {
    $("#stick1").attr("src", "images/stick1.png");
  }
});

document.addEventListener("keydown", function (e) {
  if (e.code == "KeyX") {
    $("#stick1").attr("src", "images/stick2.png");
    P1Score += Math.floor(Math.random() * 9) + 1; //Random number from 1-10
    return P1Score;
  }
});

//Animation Stick 2
document.addEventListener("keydown", function (f) {
  if (f.code == "KeyN") {
    $("#stick2").attr("src", "images/stick2.png");
  }
});

document.addEventListener("keydown", function (f) {
  if (f.code == "KeyM") {
    $("#stick2").attr("src", "images/stick1.png");
  }
});

//Stick 1 Score and Winner

let P1Score = 0;


document.addEventListener("keydown", function (e) {
  if (e.code == "KeyZ") {
    P1Score += Math.floor(Math.random() * 9) + 1; //Random number from 1-10
    console.log(P1Score)
    $('#xpbar1').html('Player 1 Score: ' + P1Score)
  }
});

document.addEventListener("keydown", function (e) {
  if (e.code == "KeyX") {
    P1Score += Math.floor(Math.random() * 9) + 1; //Random number from 1-10
    console.log(P1Score);
    $('#xpbar1').html('Player 1 Score: ' + P1Score)
    if (P1Score >= 300){
        $('h2').text('Player 1 wins!')
        setTimeout(function(){
            window.location.reload(true);}, 2000)
    }
  }
});

//Stick 2 Score and Winner

let P2Score = 0;

document.addEventListener("keydown", function (f) {
    if (f.code == "KeyN") {
      P2Score += Math.floor(Math.random() * 9) + 1; //Random number from 1-10
      console.log(P2Score)
      $('#xpbar2').html('Player 2 Score: ' + P2Score)
    }
  });
  
  document.addEventListener("keydown", function (f) {
    if (f.code == "KeyM") {
      P2Score += Math.floor(Math.random() * 9) + 1; //Random number from 1-10
      console.log(P2Score);
      $('#xpbar2').html('Player 2 Score: ' + P2Score)
      if (P2Score >= 300){
        $('h2').css("color", "black").text('Player 2 wins!')
            setTimeout(function(){
          window.location.reload(true);}, 2000)
      }
    }
  });
