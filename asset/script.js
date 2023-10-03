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
var index = [0, 1, 2, 3,]
var userName = "";
// QUESTION ARE SORT USING OBJECT and ARRAY
const questionS = [{
    question: "How Many Letter Is in cat ?, type 1, 2 or 3.",
    answer: ["1", "2", "3",],
    correct: "3",

}, {
    question: "Can you please type the name of option with 3, type 1, 2 or 3.",
    answer: ["zzzzz", "zzzzzzz", "zzzz3z",],
    correct: "3",
}, {
    question: "How many week is in a year, type 1, 2 or 3 ",
    answer: ["54", "53", "52",],
    correct: "3",
}, {
    question: "You have reached the end of the game do you want to continue ?, Type 1 or 2.",
    answer: ["Option 1: Try Again", "Option 2: Save Score",],
    correct: ["1", "2"],
    saveScore: ['', w,],
}
];


displayUser();

// Add Function to Button that point to the function game start
document.getElementById("start").addEventListener("click", function gameStart(event) {
    event.preventDefault;

    // SET INTERVAL FOR FUNCTION timeOut.
    var timeLapse = setInterval(timeOut, 1000);
    var count = 60
    function timeOut() {
        if (count > 0) {
            gameMode();
            count--;
            console.log(count);
            var countDown = document.querySelector("#countdown");
            countDown.textContent = "YOU GOT " + count + " SECONDs !";
        }
        if (count < 10) {
            countDown.textContent = "YOU GOT " + count + " SECOND ";
        }
        if (count <= 0) {
            gameOver();

        }
    }

    var index = 0;
    // I WANT THE INDEX TO GOES FROM 0 TO 3 AND 4 BEING THE END OF THE GAME.
    var option1 = document.querySelector("#option1");
    var option2 = document.querySelector("#option2");
    var option3 = document.querySelector("#option3");
    document.querySelector("#questionAsk").textContent = questionS[index].question;
    option1.textContent = questionS[index].answer[0];
    option2.textContent = questionS[index].answer[1];
    option3.textContent = questionS[index].answer[2];

    // NOW THAT EVERY SET OF QUESTION IS LINKED WITH A SET OF ANSWER
    // NEXT IS LINKING A THE RIGHT PASSWORD WITH THE RIGHT KEYUP EVENT.

    window.addEventListener("keyup", function (event) {
        console.log(event);
        var key = event.key;
        if (key == questionS[index].correct) {
            index += 1;
            w++;
            document.querySelector("#questionAsk").textContent = questionS[index].question;
            option1.textContent = questionS[index].answer[0];
            option2.textContent = questionS[index].answer[1];
            option3.textContent = questionS[index].answer[2];

            if (index >= 3 && count > 0) {
                userWon();
            }


            // NEXT I'M GONNA MAKE A FUNCTION FOR THE SCOREBOARD
        } else {
            count -= 5;
            this.document.getElementById("Alert").textContent = "- 5s for every wrong answer =)"

        }
        if (index < 3 && count <= 0 || count <= 0) {
            userLost();
            gameOver();
        }
        if (index == 3) {
            document.getElementById("greetTitle").textContent = "YOU WON !! ";
            document.getElementById("greet").textContent = "TIMER HAS STOPPED ";
            document.getElementById("Alert").textContent = ""
            clearInterval(timeLapse);
        }

        if (key == questionS[index].correct[1]) {
            var userInputName = this.prompt("Please Enter Name");
            console.log("The Window got this Input: " + userInputName);
            this.localStorage.setItem("username", userInputName);
            this.localStorage.setItem("score", w);
            displayUser();
            console.log(userInputName +" Have been added to Local Storage")

        }

    })

})

function displayUser() {
    document.querySelector("#user1").textContent = localStorage.getItem("username");
    document.querySelector("#user2").textContent = localStorage.getItem("username");
}
// ONCE USER CLICK GAME MODE IS TURN ON
function gameMode() {
    document.getElementById("intro").classList.remove("visible");
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
    document.getElementById("game").classList.add("visible");
    var dialog = "THE GAME HAVE STARTED";
    document.querySelector(".timerBox").textContent = dialog;
};

// THIS IS THE MOVE THE GAME TURN OFF EVERYTHING IF TIMER SHUTDOWN
function gameOver() {
    document.getElementById("game").classList.remove("visible");
    document.getElementById("game").classList.add("hidden");
    document.getElementById("gameOver").classList.remove("hidden");
    document.getElementById("gameOver").classList.add("visible");
    document.getElementById("greetTitle").textContent = "YOU GONE OUT OF TIME";
    document.getElementById("greet").textContent = "YOUR BEST SCORE YET ?"
    document.getElementById("Alert").textContent = ""
    clearInterval(timeLapse);

}


function userWon() {
    w++;

}

function userLost() {
    l++;
}


