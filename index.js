
// $(".green").click(function(){
//     buttonAnimation("green");
// })

// $(".red").click(function(){
//     buttonAnimation("red");
// })

// $(".yellow").click(function(){
//     buttonAnimation("yellow");
// })

// $(".blue").click(function(){
//     buttonAnimation("blue");
// })


//add animation
function buttonAnimation(color) {

    var activeButton = $("." + color)
    activeButton.addClass("pressed");

    setTimeout(function() {
        activeButton.removeClass("pressed");
    }, 150)
}


// for (var i=0; i<$(".item").length; i++){
//     var colorItem = $(".item")[i].classList[1];
//     $("." + colorItem).click(function(){
//         buttonAnimation(colorItem);
//         console.log(colorItem);
//     });

// }

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


