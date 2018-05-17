var wins = 0;
var losses = 0;
var math = 0; 

var randomNumber = Math.floor((Math.random() *100) + 19);

var jewel1 = Math.floor((Math.random() * 12) +1);
var jewel2 = Math.floor((Math.random() * 12) +1);
var jewel3 = Math.floor((Math.random() * 12) +1);
var jewel4 = Math.floor((Math.random() * 12) +1);

var configmath = function() {
$('#wins').empty();
$('#wins').append(wins);
$('#losses').empty();
$('#losses').append(losses);
$('.math').empty();
$('.math').append(math);
}

var set = function (){
math = 0;
randomNumber = Math.floor((Math.random()* 100) + 19);

$('.randomNumber').empty();
$('.randomNumber').append(randomNumber);

jewel1 = Math.floor((Math.random() * 12) + 1);
jewel2 = Math.floor((Math.random() * 12) + 1);
jewel3 = Math.floor((Math.random() * 12) + 1);
jewel4 = Math.floor((Math.random() * 12) + 1);
configmath();
}

var config = function () {
if (math == randomNumber) {
    wins = wins + 1;
    set();
}
else if (math > randomNumber) {
    losses = losses + 1;
    set();
}
else {
    configmath();
}
};

$('.math').append(math);
$('.randomNumber').append(randomNumber);

$(document).ready(function() {
    $('#jewel1').click(function(){
        math = math + jewel1;
        config();
    })
    $('#jewel2').click(function(){
        math = math + jewel2;
        config();
    })
    $('#jewel3').click(function(){
        math = math + jewel3;
        config();
    })
    $('#jewel4').click(function(){
        math = math + jewel4;
        config();
    });

    

});


// function setGame() {
    
    //         var minNumber = 19;
    //         var maxNumber = 120;
    
    //         var randomNumber = randomNumberStart(minNumber, maxNumber);
    
    //         function randomNumberStart(min,max) {
    //             return Math.floor(Math.random()*(max-min+1)+min);
    //         }
    
    //         $("#random-number").html(randomNumber);
    
    //         console.log(randomNumber);
    
    //         var crystalValues = {};
    //         jewel1[1] = Math.floor(Math.random() * 11) + 1;
    //         console.log(jewel1);
    //         jewel2[2] = Math.floor(Math.random() * 11) + 1;
    //         console.log(jewel2);
    //         jewel3[3] = Math.floor(Math.random() * 11) + 1;
    //         console.log(jewel3);
    //         jewel4[4] = Math.floor(Math.random() * 11) + 1;
    //         console.log(jewel4);
    
    //         function getCrystalHandler(crystalKey) {
    //             return function() {
    //                 totalScore = totalScore + crystalValues[crystalKey];
    //                 console.log("New totalScore " + totalScore); 
    //                 $("#total-score").text(totalScore);
    //             }
    //         }
    
    //         $("#jewel1").on("click", getCrystalHandler(1));
    //         $("#jewel2").on("click", getCrystalHandler(2));
    //         $("#jewel3").on("click", getCrystalHandler(3));
    //         $("#jewel4").on("click", getCrystalHandler(4));
    
    //         $("#jewel1").val(jewel1);
    //         $("#jewel2").val(jewel2);
    //         $("#jewel3").val(jewel3);
    //         $("#jewel4").val(jewel4);
    
    //     };
       
    //     $("#start-button").on("click", function () {setGame();});
    
    //         $('.jewels-btn').click; function () {
    //             totalScore += parseInt($(this).text());
    //         };
    //         return totalScore;
    //         console.log(totalScore)
        
    
    
    //         $('.buttons-card').on("click", '.jewels-btn', function () {
    //         $('.jewels-btn').each(function() {
    //             if (totalScore < randomNumber) {
    //             totalScore += parseFloat($(this).text());
    //             $("#total-score").text(totalScore);
    //             }
    
    //         else if (totalScore === randomNumber) {
    //             console.log(totalScore);
    //             console.log(randomNumber);
    //             alert("You win!");
    //             wins++;
    //             $("#wins").text(wins);    
    //         }
    
    //         else ( totalScore > randomNumber) 
    //             alert("You lost");
    //             losses++;
    //             $("#losses").text(losses);
    //         });
    //     });
    
    // });
    
        
    
    
    