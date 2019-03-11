var correctAnswers = 0;
var intervalId;
var timerRunning = false;
var counter = 59;

// triviaTimer = setTimeout(function() {
//     $('#timeout-modal').modal("show");
//   }, 30000);

$(document).ready(function(){

$("#question-box").hide();
$("#answer-box").hide();
$("#timer-box").hide();

// function countdown() {

//     time--;
  
//     var converted = timeConverter(time);
//     console.log(converted);
  
//     $("#trivia-display").text(converted);
//   }

// function timeConverter(t) {

//     var minutes = Math.floor(t / 60);
//     var seconds = t - (minutes * 60);
  
//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     }
  
//     if (minutes === 0) {
//       minutes = "00";
//     }
//     else if (minutes < 10) {
//       minutes = "0" + minutes;
//     }
  
//     return minutes + ":" + seconds;
//   }

// converted = timeConverter(time);


$("#start-btn").on("click", function() {
    console.log("Start Button Clicked!");
    $("#question-box").show();
    $("#timer-box").show();
    $("#intro-box").hide();
    setInterval(function() {
        counter--;
        if (counter > 9) {
            span = document.getElementById("timer-display");
            span.innerHTML = "00:" + counter;
        }
        if (counter >= 0 && counter < 10) {
            span = document.getElementById("timer-display");
            span.innerHTML = "00:0" + counter;
        }

        if (counter === 0) {
            $('#timeout-modal').modal("show");
            clearInterval(counter);
        }
    
      }, 1000);
    
});

$("#reset-btn").on("click", function() {
    correctAnswers = 0;
    //This doesn't work even though it is calling to a function it should have in scope?
    $("#question-box").show();
    $("#answer-box").hide();
    $("#timer-box").show();
    $("button").attr('disabled', false);
    counter = 59
    setInterval(function() {
        counter--;
        if (counter > 9) {
            span = document.getElementById("timer-display");
            span.innerHTML = "00:" + counter;
        }
        if (counter >= 0 && counter < 10) {
            span = document.getElementById("timer-display");
            span.innerHTML = "00:0" + counter;
        }
        if (counter === 0) {
            $('#timeout-modal').modal("show");
            clearInterval(counter);
        }
    
      }, 0);
    buttonReset1 = $(".btn-success");
    buttonReset2 = $(".btn-dark");
    // if($("button").attr("class") === "btn-dark" || $("button").attr("class") === "btn-success") {
    // }
    $( "#score-display" ).empty();
});

$("#score-btn").on("click", function() {
    clearInterval(counter);
    $("#timer-box").hide();
    console.log("Answers Requesteds!");
    console.log("Player received a score of " + correctAnswers + "/10.");
    $("#intro-box").hide();
    $("#question-box").hide();
    $("#answer-box").show();
    $("#score-display").append("You got a score of:<br><br>" + correctAnswers + "/10!");
    if(correctAnswers <= 3) {
        $("#score-display").append("<br><br> The important thing is that you tried. Let's try agin.");
    };
    if(correctAnswers > 3 && correctAnswers <= 7) {
        $("#score-display").append("<br><br> This is average. <br>You are average.");
    };
    if(correctAnswers > 7 && correctAnswers < 10) {
        $("#score-display").append("<br><br> You're good and you should feel good!");
    };
    if(correctAnswers >= 10) {
        $("#score-display").append("<br><br> You are a true Japanophile. Congrats!");
    };
});

$("#score-btn-modal").on("click", function() {
    $('#timeout-modal').modal("hide");
    clearInterval(counter);
    $("#timer-box").hide();
    console.log("Answers Requesteds!");
    console.log("Player received a score of " + correctAnswers + "/10.");
    $("#intro-box").hide();
    $("#question-box").hide();
    $("#answer-box").show();
    $("#score-display").append("You got a score of:<br><br>" + correctAnswers + "/10!");
    if(correctAnswers <= 3) {
        $("#score-display").append("<br><br> The important thing is that you tried... Did you try?");
    };
    if(correctAnswers > 3 && correctAnswers <= 7) {
        $("#score-display").append("<br><br> This is average. <br>You are average.");
    };
    if(correctAnswers > 7 && correctAnswers < 10) {
        $("#score-display").append("<br><br> You're good and you should feel good!");
    };
    if(correctAnswers >= 10) {
        $("#score-display").append("<br><br> You are a true Japanophile. Congrats!");
    };
});

$(".q1").on("click", function() {
    $(".q1").attr('disabled', true);
    if($(this).attr("id") === "right") {
        $(".q1#right").toggleClass("btn-danger btn-success");
        correctAnswers++
    } else {
        $(this).toggleClass("btn-danger btn-dark");
        $(".q1#right").toggleClass("btn-danger btn-success");
    }
    console.log("Question one answered")
    console.log("Correct Answers: " + correctAnswers + "/10")
})

$(".q2").on("click", function() {
    $(".q2").attr('disabled', true);
    if($(this).attr("id") === "right") {
        $(".q2#right").toggleClass("btn-danger btn-success");
        correctAnswers++
    } else {
        $(this).toggleClass("btn-danger btn-dark");
        $(".q2#right").toggleClass("btn-danger btn-success");
    }
    console.log("Question two answered")
    console.log("Correct Answers: " + correctAnswers + "/10")
})

$(".q3").on("click", function() {
    $(".q3").attr('disabled', true);
    if($(this).attr("id") == "right") {
        $(".q3#right").toggleClass("btn-danger btn-success");
        correctAnswers++
    } else {
        $(this).toggleClass("btn-danger btn-dark");
        $(".q3#right").toggleClass("btn-danger btn-success");
    }
    console.log("Question three answered")
    console.log("Correct Answers: " + correctAnswers + "/10")
})

$(".q4").on("click", function() {
    $(".q4").attr('disabled', true);
    if($(this).attr("id") == "right") {
        $(".q4#right").toggleClass("btn-danger btn-success");
        correctAnswers++
    } else {
        $(this).toggleClass("btn-danger btn-dark");
        $(".q4#right").toggleClass("btn-danger btn-success");
    }
    console.log("Question four answered")
    console.log("Correct Answers: " + correctAnswers + "/10")
})

$(".q5").on("click", function() {
    $(".q5").attr('disabled', true);
    if($(this).attr("id") == "right") {
        $(".q5#right").toggleClass("btn-danger btn-success");
        correctAnswers++
    } else {
        $(this).toggleClass("btn-danger btn-dark");
        $(".q5#right").toggleClass("btn-danger btn-success");
    }
    console.log("Question five answered")
    console.log("Correct Answers: " + correctAnswers + "/10")
})

$(".q6").on("click", function() {
    $(".q6").attr('disabled', true);
    if($(this).attr("id") == "right") {
        $(".q6#right").toggleClass("btn-danger btn-success");
        correctAnswers++
    } else {
        $(this).toggleClass("btn-danger btn-dark");
        $(".q6#right").toggleClass("btn-danger btn-success");
    }
    console.log("Question six answered")
    console.log("Correct Answers: " + correctAnswers + "/10")
})

$(".q7").on("click", function() {
    $(".q7").attr('disabled', true);
    if($(this).attr("id") == "right") {
        $(".q7#right").toggleClass("btn-danger btn-success");
        correctAnswers++
    } else {
        $(this).toggleClass("btn-danger btn-dark");
        $(".q7#right").toggleClass("btn-danger btn-success");
    }
    console.log("Question seven answered")
    console.log("Correct Answers: " + correctAnswers + "/10")
})

$(".q8").on("click", function() {
    $(".q8").attr('disabled', true);
    if($(this).attr("id") == "right") {
        $(".q8#right").toggleClass("btn-danger btn-success");
        correctAnswers++
    } else {
        $(this).toggleClass("btn-danger btn-dark");
        $(".q8#right").toggleClass("btn-danger btn-success");
    }
    console.log("Question eight answered")
    console.log("Correct Answers: " + correctAnswers + "/10")
})

$(".q9").on("click", function() {
    $(".q9").attr('disabled', true);
    if($(this).attr("id") == "right") {
        $(".q9#right").toggleClass("btn-danger btn-success");
        correctAnswers++
    } else {
        $(this).toggleClass("btn-danger btn-dark");
        $(".q9#right").toggleClass("btn-danger btn-success");
    }
    console.log("Question nine answered")
    console.log("Correct Answers: " + correctAnswers + "/10")
})

$(".q10").on("click", function() {
    $(".q10").attr('disabled', true);
    if($(this).attr("id") == "right") {
        $(".q10#right").toggleClass("btn-danger btn-success");
        correctAnswers++
    } else {
        $(this).toggleClass("btn-danger btn-dark");
        $(".q10#right").toggleClass("btn-danger btn-success");
    }
    console.log("Question ten answered")
    console.log("Correct Answers: " + correctAnswers + "/10")
});

});

