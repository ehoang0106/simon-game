

//start the game
var level = 1;
var speed = 200;
// $("body").keydown(function(event){
    
//     if(event.key == "a"){
//         $("h2").text("Level " + level);

//         var answerColors = answer(level, 500);
//         var guessColors = guess1();
        
        
//         if (guessColors.length === level) {
//             console.log("User guessed: ", guessColors);
//             console.log("Correct answer: ", answerColors);
//             if (arraysEqual(guessColors, answerColors)) {
//                 console.log("Correct!");
//                 level += 1;
//             } else {
//                 console.log("Wrong!");
//             }
//         }

        
        
//     }
// })

$("body").keydown(function(event){
    
    if(event.key == "a"){
        $("h2").text("Level " + level);

        var answerColors = answer(level, speed);
        var guessColors = [];
        
        
        $(".item").click(function(){
            var colorClicked = $(this).attr("class").split(" ")[1];
            guessColors.push(colorClicked);
            buttonAnimation(colorClicked);

            if (guessColors.length === level){
                if(arraysEqual(guessColors, answerColors)){
                    console.log("Correct!");
                    level += 1;
                    speed += 100;
                }
                else{
                    console.log("Incorrect!");
                }
            }
        })

        
        
    }
})


// random a color: 1/green 2/red 3/yellow 4/blue
function randomColor (level){
    
    var colors = [];
    
    for (var i=0; i<level; i++){
        var color = Math.floor(Math.random() * 4) + 1;
        if(color == "1"){
            colors.push("green");
        }
        else if(color == "2"){
            colors.push("red");
        }
        else if(color == "3"){
            colors.push("yellow");
        }
        else if(color == "4"){
            colors.push("blue");
        }

    }
    
    for(var i=0; i<colors.length;i++){
        return colors;
    }
    
}

function answer(level, speed) {
    var colors = randomColor(level);

    for (var i = 0; i<colors.length; i++){
        
        (function(index){
            
            setTimeout(function(){
                console.log(colors[index]);
                buttonAnimation(colors[index]);
            }, speed * index);
        })(i);
    }

    //console.log(colors);
    return colors;
}



// animation
function buttonAnimation(color) {

    var activeButton = $("." + color)
    activeButton.addClass("pressed");

    setTimeout(function() {
        activeButton.removeClass("pressed");
    }, 150)
}

// add animation when click the right color
function guess(){
    //create array to save answer
    var guessColors = [];
    for (var i=0; i<$(".item").length; i++){

        var colorItem = $(".item")[i].classList[1];
    
        function J(colorItemJ) {
            $("." + colorItemJ).click(function(){
                buttonAnimation(colorItemJ);
                console.log(colorItemJ);
                guessColors.push(colorItemJ);
                console.log(guessColors);
            });
        }
        J(colorItem);
    }

    return guessColors;
    
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

