
var buttonColors = ['green','red','yellow','blue'];

var gamePattern = [];

var userClickedPattern = [];

var level = 0 ;

var started = false;






function nextSequence(){
    //when this function is triggerd it resets the user clicked array to empty
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var n = Math.random();
    n = n *4;
    var randomNumber = Math.floor(n);

    var randomColorChooser = buttonColors[randomNumber];
    gamePattern.push(randomColorChooser)
    $('#'+randomColorChooser).fadeOut(100).fadeIn(100).fadeIn(100);
    playSound(randomColorChooser);
    console.log(gamePattern);
    
     

}


var lastAnswer = 0 ;

$('.btn').click(function(){
   
    var userChoosenColor = $(this).attr('id');
    userClickedPattern.push(userChoosenColor);
    playSound(userChoosenColor);
    anmatePress(userChoosenColor);
    console.log(userClickedPattern);

    lastAnswer = userClickedPattern.length -1;

    checkAnswer(lastAnswer);
    

    
    
    
 });
 







 function playSound(name){

    var source = 'sounds/'+name+'.mp3';
    var audio = new Audio(source);
    audio.play();
                
    }

function anmatePress(currentColor){


    $('#'+currentColor).addClass('pressed');


    setTimeout(function(){
        $('#'+currentColor).removeClass('pressed');
        

    },100);  
    
}


$(document).keydown(function(event){
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
      }

    
    
 });

 function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        console.log('success');

        if (userClickedPattern.length === gamePattern.length){

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }
    
      }
      else{
       // console.log('wrong');
       var audio = new Audio('sounds/wrong.mp3');
       audio.play();

       $('body').addClass('game-over');
       setTimeout(function(){
        $('body').removeClass('game-over');
       },200);

       $('h1').text('Game Over, Press Any Key to Restart');
       startOver();
      }
    
 }

 function startOver(){
    gamePattern = [];
    level = 0 ;
    started = false;
 }




$('.container').fadeOut(5000).fadeIn(5000);