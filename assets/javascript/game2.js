

//at start of game random number generated (between 19-120)
var counter = 0;
var winCount = 0;
var lossCount = 0;
var randomNumber = 0;

function startGame(){
counter=0;
$("#score").html(counter);
var minNumber = 19;
var maxNumber = 120;


randomNumber = randomNumberFromRange(minNumber, maxNumber);



function randomNumberFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
//need to push this value to ".valueNeed"
 $(".valueNeed").text(randomNumber);

console.log(randomNumber);

//four crystals- hidden value added to scoreboard onclick. hidden value stays same throughout game. Value is between 1-12
var myArray = [];
var crystalMin = 1;
var crystalMax = 12;

for(var i = 0; i < 4; i++) {
    var numberIsInArray = false;
    var rand = randomCrystalNumber(crystalMin, crystalMax);
	function randomCrystalNumber(min,max){
return Math.floor(Math.random()*(max-min+1)+min);
}
    for(var j = 0; j < myArray.length; j++){
        if(rand === myArray[j]) {
            numberIsInArray = true;
            i--;
        }
    }
    if(!numberIsInArray){
       myArray.push(rand);
    }
}
//how to push these array values to mouse, fish, cat-food, can?
$("#mouse").attr("data-attr", myArray[0]);
$("#fish").attr("data-attr", myArray[1]);
$("#cat-food").attr("data-attr", myArray[2]);
$("#can").attr("data-attr", myArray[3]);
}

startGame();
//assign value to data attribute or .mouse

//need to push a scoreboard updated each time one of the photos is selected (mouse, fish, cat-food, can)



//var startGame = function {
    // var counter = 0;
    // var randomNumber = 0;
//need to push all array values in

//}

  $(".points").on("click", function() {

///    counter += xxx;
console.log($(this).attr("data-attr"));
var value=parseInt($(this).attr("data-attr"));

counter+=value;
$("#score").html(counter);

if (counter === randomNumber) {

      alert("Purrfect! Meow!");
     
      winCount++;
      $("#winCounter").html(winCount);

       console.log(winCount);
       startGame();



    }
else if (counter >= randomNumber) {

      // Then they are alerted with a loss.
      alert("You lost. RUN! The claws are coming out!!");
      lossCount++;
       $("#lossCounter").html(lossCount);
        startGame();
       
    }
  
  });


