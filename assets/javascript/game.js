//game.js
'use strict';
// A $( document ).ready() block.
$( document ).ready(function() {
    //global counter 
    var win = 0;
	var loss = 0;
	var finalScore = 0;
	var gameOn = 0;

    //Global variables 
    var gemR = Math.ceil(Math.random()*12);
	var gemD = Math.ceil(Math.random()*12);
	var gemC = Math.ceil(Math.random()*12);
	var gemE = Math.ceil(Math.random()*12);
	
    function reset()
    {
		var gameOn = parseInt(Math.floor(Math.random() * (120-18)) + 18);
		var gemR = Math.ceil(Math.random()*12);
		var gemD = Math.ceil(Math.random()*12);
		var gemC = Math.ceil(Math.random()*12);
		var gemE = Math.ceil(Math.random()*12);
		finalScore = 0;
		
		//html
		$(".points").html(gameOn);
		//$('.score').html(' ', finalScore);
		$('.score').html(finalScore);
		$('#win').text(win);
		$('#loss').text(loss);
		
	}


   //function Calls
	function startGame()
	{
	    reset();
	    // Generates and displays a random number when green button is clicked 
		//$(".points").on("click", function(){
	    gameOn = Math.floor(Math.random() * (120-18)) + 18;
		console.log(gameOn);
	   	//$(".points").append(gameOn);

	    //});
	     $("#diamond").on("click", function() {
			var gemD = Math.ceil(Math.random()*12);
			// gives each gem stone a value
			$('#diamond').attr("data-value",gemD);
			var result1 = $(this).attr('data-value');
			console.log(result1);
			finalScore=parseInt(finalScore) + parseInt(result1);
			console.log("first finalscore is:", finalScore);
			$(".score").html(finalScore);
			checkAns();
		 	//console.log('diamond', result);
		 }); // diamond
		
		$("#rock" ).on("click", function() {
			var gemR = Math.ceil(Math.random()*12);
			$('#rock').attr("data-value",gemR); 
			var result2 = $(this).attr('data-value');
			finalScore=parseInt(finalScore) + parseInt(result2);
			console.log("2nd finalscore is:", finalScore);
			$(".score").html(finalScore);
			checkAns();
		 }); // rock
		
		$("#citrine" ).on("click", function() {
			var gemC = Math.ceil(Math.random()*12);
			$('#citrine').attr("data-value",gemC); 
			var result3 = $(this).attr('data-value');
			finalScore=parseInt(finalScore) + parseInt(result3);

			$(".score").html(finalScore); 
		 	checkAns();	
		 }); // citrine
		
		$("#emerald" ).on("click", function() {
			var gemE = Math.ceil(Math.random()*12);
			$('#emerald').attr("data-value",gemE); 
			var result4 = $(this).attr('data-value');	
			finalScore=parseInt(finalScore) + parseInt(result4); 
			$(".score").html(finalScore);
			checkAns();
		}); // emerald
			
			//displays and saves to the final score
			//off() prevents it repeats the click twoce without saves
			//last number and adds it to the total score
			/*$(".displayScore").off().on('click', function()	{
				*/
				//var result =$(this).attr('data-value');
				//finalScore =parseInt(finalScore) + parseInt(result);
				//console.log("the resul value is: ", result);
				//console.log("finalScore is: ", finalScore);
				//$(".totalScore").html(finalScore);

				
			//});
		 reset();
		}//end startGame

		function checkAns(){
			if (gameOn === finalScore) {
				win++;
				$("#win").html(win);
				//status keeps track of the addition of the crystals
				$("#status").html("You win", finalScore);
				// then we need to clear values again
				
			}//end of if  
			else if (finalScore > gameOn){
				// need to update loss counter
				loss++;
				$("#loss").html(loss);
				$("#status").html("You loose", finalScore);
				// then we need to clear values again
				
			}//end of else if


		}//end checkAns
	startGame();
//reset();

});// end of ready function

