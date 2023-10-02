// let count = 60
// var interval;
// var index = 0;
// const rightAns = "";
// const wrongAns = "";
// const questionS = [{
//     question: "question 1",
//     answer: ["a", "b", "c",],
//     correct: "a"

// }, {
//     question: "question 2",
//     answer: ["d", "e", "f",],
//     correct: "f"
// }];
// document.getElementById("start").addEventListener("click",
//     function (event) {
//         event.preventDefault;
//         console.log("Javascript is here")
//         var timing = setInterval(() => {
//             if (count > 0) {
//                 count--;
//                 let timeLeft = document.querySelector("timeLeft")

//                 document.timeLeft.textContent = count.toString;

//                 //  let timeLeft = document.getElementById("timeLeft").textContent;
//                 // timeLeft.textContent=count;

//             } else {
//                 clearInterval(timing)
//             }
//         }, 1000);
//         document.getElementById("intro").classList.remove("visible");
//         document.getElementById("intro").classList.add("hidden");
//         document.getElementById("game").classList.remove("hidden");
//         document.getElementById("game").classList.add("visible");
//         displayQuestion();
//     }
// );
// function displayQuestion() {
//     document.querySelector("h3").textContent = questionS[index].question;
//     document.querySelector("option1").textContent=questionS.answer[0];
//     var option1 = document.querySelector("option1")
//     var option2 = document.querySelector("option2")
//     var option3 = document.querySelector("option3")

// }

var l = 0;
var w = 0;
var index = [0, 1, 2,3]

// QUESTION ARE SORT USING OBJECT and ARRAY
const questionS = [{
    question: "How Many Letter Is in cat ?",
    answer: ["1", "2", "3",],
    correct: "3",

}, {
    question: "The question only take keyup input so can you please input in the selection with 3",
    answer: ["zzzzz", "zzzzzzz", "zzzz3z",],
    correct: "3",
}, {
    question: "Do I deserve an A on this weekly challenge ? ",
    answer: ["1 for Yes", "2 for No", "3 for sure",],
    correct: "3",
}

];

// Add Function to Button that point to the function game start
document.getElementById("start").addEventListener("click", function gameStart(event) {
    event.preventDefault;

    // SET INTERVAL FOR FUNCTION timeOut.
    var timeLapse = setInterval(timeOut, 1000);
    var count = 30
    function timeOut() {
        if (count > 0) {
            gameMode();
            count--;
            console.log(count);
            //something = true
            var countDown = document.querySelector("#countdown");
            countDown.textContent = count;
        }
        if (count < 0) {
            gameOver();

        }
    }
    var index = 0;
    // I WANT THE INDEX TO GOES FROM 0 TO 3 AND 3 BEING THE END OF THE GAME AND THAT WILL TRIGGER THE GAMEOVER FUNCTION.
    var option1 = document.querySelector("#option1");
    var option2 = document.querySelector("#option2");
    var option3 = document.querySelector("#option3");
    document.querySelector("#questionAsk").textContent = questionS[index].question;
    option1.textContent = questionS[index].answer[0];
    option2.textContent = questionS[index].answer[1];
    option3.textContent = questionS[index].answer[2];
    // NOW THAT EVERY SET OF QUESTION IS LINKED WITH A SET OF ANSWER
    // NEXT IS LINKING A THE RIGHT PASSWORD WITH THE RIGHT KEYUP EVENT.
    window.addEventListener("keydown", function (event) {
        console.log(event);
        var key = event.key;
        if (key == questionS[index].correct) {
            index += 1;
            document.querySelector("#questionAsk").textContent = questionS[index].question;
            option1.textContent = questionS[index].answer[0];
            option2.textContent = questionS[index].answer[1];
            option3.textContent = questionS[index].answer[2];
            if (index === 3) {
                gameOver();
                userWon();
                document.getElementById("game").classList.remove("visible");
                document.getElementById("game").classList.add("hidden");
                document.getElementById("gameOver").classList.remove("hidden");
                document.getElementById("gameOver").classList.add("visible");
                endMessage();
            
            }
        } else {
            count -= 5;
            this.document.getElementById("Alert").textContent="- 5s for every wrong answer =)"

        }
        if (index<1 && count < 0) {
            userLost();
            gameOver();
            endMessage();
        }
    if (count<=0){
        document.getElementById("game").classList.remove("visible");
        document.getElementById("game").classList.add("hidden");
        document.getElementById("gameOver").classList.remove("hidden");
        document.getElementById("gameOver").classList.add("visible");
        document.getElementById("").textContent="Game Over"
    }
    })
})
var dialog;
// ONCE USER CLICK GAME MODE IS TURN ON
function gameMode() {
    document.getElementById("intro").classList.remove("visible");
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
    document.getElementById("game").classList.add("visible");
    const dialog = ["The Game have started", " your time is ticking 😝"]
    document.querySelector(".timerBox").textContent = dialog;
};

// THIS IS THE MOVE THE GAME TURN OFF EVERYTHING
function gameOver() {
    document.getElementById("game").classList.remove("visible");
    document.getElementById("game").classList.add("hidden");
    document.getElementById("gameOver").classList.remove("hidden");
    document.getElementById("gameOver").classList.add("visible");
    clearInterval(timeLapse);
    document.querySelector("#greet").textContent = "Game have have ended"
    document.getElementById("Alert").textContent=""

}
function userWon(){
    w++;
   endMessage();
}

function userLost(){
    l++;
    endMessage();

}

function endMessage(){
    document.querySelector(".timerBox").textContent ="You have made it to the end thank you for playing";
    document.getElementById("Alert").textContent=""
    document.getElementById("countdown").textContent="0"
}
