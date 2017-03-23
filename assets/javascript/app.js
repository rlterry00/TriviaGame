$(document).ready(function () {

var time = 30;

var countDown;

var unanswered = 3;

var right = 0;

var wrong = 0;

function timer() {
      countDown = setInterval(decrement, 1000);
    }

    function decrement() {

      time--;

      $("#timer").html("<h2>" + "Time Remaining:" + " " +
      	time + " " + "Seconds" + "</h2>");


      if (time === 0) {

        stop();

        
        $(".questions").html("<h2>" + "Right Answers:" + " " + right + "</h2>");

        $(".questions").append("<h2>" + "Wrong Answers:" + " " + wrong + "</h2>");

        $(".questions").append("<h2>" + "Unanswered Questions:" + " " + unanswered + "</h2>");
      }
    }

    function stop() {
     
      clearInterval(countDown);
    }

    timer();

    function answers() {

       $("input[type='radio']").click(function () {
        	
        	
        	var firstAnswer = $("input[name='anOne']:checked").val();
          
            var secondAnswer = $("input[name='anTwo']:checked").val();

            var thirdAnswer = $("input[name='anThree']:checked").val();

            
            
            console.log(firstAnswer, secondAnswer, thirdAnswer);


            if(firstAnswer || secondAnswer || thirdAnswer  === "right") {
                
                right++;

                unanswered--;
            }



            else if (firstAnswer || secondAnswer || thirdAnswer === "wrong")  {

            	wrong++;

            	unanswered--;
            }
        });

       }

       answers();

       });