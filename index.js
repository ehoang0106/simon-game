
var colors = ["green", "red", "yellow", "blue"];

var answerColors = [];
var guessedColors = [];


var isStarted = false;

var level = 0;


$("button").click(function () {
    if(!isStarted) {
        $("#level-title").text("Level " + level);
        nextLevel();
        isStarted = true;
    }
})

$(".btn").on("click", function() {
    var colorClicked = $(this).attr("id");
    guessedColors.push(colorClicked);

    buttonAnimation(colorClicked);
    console.log(colorClicked);

    answerCheck(guessedColors.length-1);

    console.log(answerColors);
})



function buttonAnimation(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function promptAnimation(currentColor) {
    $("#" + currentColor).addClass("prompted");

    setTimeout(function() {
        $("#" + currentColor).removeClass("prompted");
    }, 100);
}

function restartGame() {
    level = 0;
    answerColors = [];
    isStarted = false;
}

function nextLevel() {
    guessedColors = [] ;
    level++;

    $("#level-title").text("Level " + level);

    var ranNum = Math.floor(Math.random() * 4);
    var ranColor = colors[ranNum];
    answerColors.push(ranColor);

    promptAnimation(ranColor);
    
}

function answerCheck(level) {
    if(answerColors[level] === guessedColors[level]) {
        if (guessedColors.length === answerColors.length){
            setTimeout(function() {
                nextLevel();
            }, 1000);
        }
    }
    else {
        $("body").addClass("wrong");
        $("#level-title").text("Oops, your memory is so bad!");

        setTimeout(function() {
            $("body").removeClass("wrong");
        }, 200);

        restartGame();
    }
}

