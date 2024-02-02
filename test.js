

//start the game
var level = 2;
var speed = 600;


colors = randomColor(level, speed);
console.log(colors);

guess();






// random a color: 1/green 2/red 3/yellow 4/blue
function randomColor(level, speed){
    
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
    

    for (var i = 0; i<colors.length; i++){
        
        (function(index){
            
            setTimeout(function(){
                buttonAnimation(colors[index]);
            }, speed * index);
        })(i);
    }

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
    var colors = [];
    $(".item").on("click", function(){
        var colorClicked = $(this).attr("class").split(" ")[1];
        buttonAnimation(colorClicked);

        colors.push(colorClicked);
    })


}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

