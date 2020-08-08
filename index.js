//Kitten Dance Battle

<<<<<<< HEAD
let p1Score = 0; //Player 1 Score

let p2Score = 0; //Player 2 Score
=======
var p1Score = 0; 

var p2Score = 0;
>>>>>>> d0ecedced91569238bcc02915d3000a381e246e1

const refreshTimer = 3000; //3 seconds

function end() {
  if ($("h2").not(":empty")) {
    $("body").on("keydown", false);
  }
} //Winner announcement / Disable keyboard inputs

function refresh() {
  window.location.reload(true);
} 

function randomScore1() {
  p1Score += Math.floor(Math.random() * increment) + 1;
} //Player 1 random score generator
function randomScore2() {
  p2Score += Math.floor(Math.random() * increment) + 1;
} //Player 2 random score generator

function p1Wins() {
  $("h2").css("color", "#fff").text("Player 1 wins!");
} //Player 1 Winner Declaration
function p2Wins() {
  $("h2").css("color", "#fff").text("Player 2 wins!");
} //Player 2 Winner Declaration

function p1Flash() {
  $("#player1");
  for (let i = 1; i <= 4; i++) {
    function flash() {
      fade = $("#player1").fadeOut(100).fadeIn(100);
    }
    flash();
  }
}

function p2Flash() {
  $("#player2");
  for (let i = 1; i <= 4; i++) {
    function flash() {
      fade = $("#player2").fadeOut(100).fadeIn(100);
    }
    flash();
  }
}

//Audio
const music = "dance.mp3";
let sound = false;
function play() {
  if (!sound) {
    //sound only plays if there isn't sound already
    sound = new Audio(music);
  }
  sound.play();
}

//Press the Z key
document.addEventListener("keydown", function (z) {
  if (z.code == "KeyZ" && $("img#player1").attr("src") == "images/Cat2.png") {
    //If you press Z
    $("#player1").attr("src", "images/Cat1.png"); //The image swaps to Cat1
    randomScore1();
    play();
    $("#xpbar1").html("Player 1 Score: " + p1Score + "/" + scoreCap);
    if (p1Score >= scoreCap && $("h2").is(":empty")) {
      p1Wins();
      setTimeout(function () {
        refresh();
      }, refreshTimer);
      end();
      p1Flash();
    }
  }
});

//Press the X key
document.addEventListener("keydown", function (x) {
  if (x.code == "KeyX" && $("img#player1").attr("src") == "images/Cat1.png") {
    //If you press X
    $("#player1").attr("src", "images/Cat2.png"); //The image swaps to Cat2
    randomScore1();
    $("#xpbar1").html("Player 1 Score: " + p1Score + "/" + scoreCap);
    if (p1Score >= scoreCap && $("h2").is(":empty")) {
      p1Wins();
      setTimeout(function () {
        refresh();
      }, refreshTimer);
      end();
      p1Flash();
    }
  }
});

//Press the N key
document.addEventListener("keydown", function (n) {
  if (
    n.code == "KeyN" &&
    $("img#player2").attr("src") == "images/SecondCat2.png"
  ) {
    //If you press N
    $("#player2").attr("src", "images/SecondCat1.png"); //The image swaps to Second Cat 2
    randomScore2();
    $("#xpbar2").html("Player 2 Score: " + p2Score + "/" + scoreCap);
    if (p2Score >= scoreCap && $("h2").is(":empty")) {
      p2Wins();
      setTimeout(function () {
        refresh();
      }, refreshTimer);
      end();
      p2Flash();
    }
  }
});

//Press the M key
document.addEventListener("keydown", function (m) {
  if (
    m.code == "KeyM" &&
    $("img#player2").attr("src") == "images/SecondCat1.png"
  ) {
    //If you press M
    $("#player2").attr("src", "images/SecondCat2.png"); //The image swaps to Second Cat 2
    randomScore2();
    play();
    $("#xpbar2").html("Player 2 Score: " + p2Score + "/" + scoreCap);
    if (p2Score >= scoreCap && $("h2").is(":empty")) {
      p2Wins();
      setTimeout(function () {
        refresh();
      }, refreshTimer);
      end();
      p2Flash();
    }
  }
});

// Bootstrap Game Settings
$(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
  if (!$(this).next().hasClass("show")) {
    $(this).parents(".dropdown-menu").first().find(".show").removeClass("show");
  }
  const $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass("show");
  $(this).parent().toggleClass("show");
  $(this)
    .parents("li.nav-item.dropdown.show")
    .on("hidden.bs.dropdown", function (e) {
      $(".dropdown-submenu .show").removeClass("show");
      $(".dropdown-submenu.show").removeClass("show");
    });
  return false;
});

//Dropdown Score Cap
<<<<<<< HEAD
const pointsList = [100, 200, 300, 500, 1000];
=======
let pointsList = [100, 200, 300, 500, 1000];
>>>>>>> d0ecedced91569238bcc02915d3000a381e246e1
let scoreCap = 100;

const totalPoints = () => {
  pointsList.map((points) => {
    const dropdownId = `.${points}`;
    $(dropdownId).click(() => {
      scoreCap = points;
      $("#xpbar1").html(`Player 1 Score: 0/${points}`);
      $("#xpbar2").html(`Player 1 Score: 0/${points}`);
    });
  });
};

totalPoints();

//Dropdown Score Increment
let incrementList = [9, 19, 29, 39, 49];
let increment = 9;

const newIncrements = () => {
  incrementList.map((num) => {
    const incrementsId = `.${"inc" + num}`;
    $(incrementsId).click(() => {
      increment = num;
    });
  });
};

newIncrements();
