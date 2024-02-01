

//start the game

$("body").keydown(function(event){
    if(event.key == "a"){
        $("h2").text("Level 1");
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
//level 1

// var newColors = randomColor(1);
// var x = newColors[0];
// console.log(x);
// buttonAnimation(x);
// console.log("end level 1");

//level 2

var test = randomColor(4);


// for (var i=0; i<test.length; i++){
//     console.log(test[i]);
//     buttonAnimation(test[i]);
    
// }

for (var i = 0; i<test.length; i++){
    
    (function(index){
        
        setTimeout(function(){
            console.log(test[index]);
            buttonAnimation(test[index]);
        }, 500 * index);
    })(i);
}

console.log(test);

// animation
function buttonAnimation(color) {

    var activeButton = $("." + color)
    activeButton.addClass("pressed");

    setTimeout(function() {
        activeButton.removeClass("pressed");
    }, 150)
}

// add animation when click the right color

for (var i=0; i<$(".item").length; i++){

    var colorItem = $(".item")[i].classList[1];

    function J(colorItemJ) {
        $("." + colorItemJ).click(function(){
            buttonAnimation(colorItemJ);
            console.log(colorItemJ);
        });
    }
    J(colorItem);
}


