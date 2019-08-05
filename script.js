$(document).ready(function() { //start JQuery wrapper

  var magic8Ball = {};
	magic8Ball.listOfAnswers = ["You're almost right", "Maybe so", "You're beautiful", "It could happen", "Hahaha"];
	magic8Ball.returnAnswer = function(question)
	{
    // Change image to be the answer side
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
    $("#8ball").effect("shake");
    // Fade in the answer text
    $("#answer").fadeIn(4000);
    // Output the question to console
		console.log(question);
    // Generate a random answer from the array
		var randomNum = Math.random();
		var randomArrayNum = randomNum * this.listOfAnswers.length;
		var randomIndex = Math.floor(randomArrayNum);
		var randomAnswer = this.listOfAnswers[randomIndex];
    // output the random answer to the console
		console.log(randomAnswer);
     $("#answer").text(randomAnswer);
     // $("#answer").fadeIn(4000);
	};

  // Hide the answer text in the 8 ball to start with.
  $("#answer").hide();

	var onClick = function()
	{
    // Clear the previous answer if there is one
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
    // Hide the previous answer text
    $("#answer").hide();
    // Function that creates the pop up question prompt
    var askQuestion = function()
    {
      var question = prompt("What is your question?");
  		magic8Ball.returnAnswer(question);
    }
    // Set the askQuestion function to run after 1 second
    setTimeout(askQuestion, 1000);
	};

	$("#questionButton").click(onClick);

}); // end of JQuery wrapper
