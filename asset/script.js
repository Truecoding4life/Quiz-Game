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


var win = 0
var index = [0, 1, 2]

// QUESTION ARE SORT USING OBJECT and ARRAY
const questionS = [{
    question: "question 1",
    answer: ["a", "b", "c",],
    correct: "a"

}, {
    question: "question 2",
    answer: ["d", "e", "f",],
    correct: "f"
}, {
    question: "question 3",
    answer: ["d", "e", "f",],
    correct: "f"
}

];

// Add Function to Button
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
        if (count == 0) {
            clearInterval(timeLapse);
            gameOver();

        }
    }
    var index = 0;
    // I WANT THE COMPUTER TO GENERATE A RANDOM INDEX, EACH INDEX REPRESENT A PROBLEM && ANSWER SET :)
    //var index = Math.floor(Math.random()*3);
    //var randomQuestion = Math.floor(Math.random() * questionS[index].answer[length]);
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
            if (index > 2) {
                gameOver();
                userWon();
            
            }
        } else {
            count -= 5;
            this.document.getElementById("Alert").textContent="- 5s for every wrong answer =)"

        }
        // SETTING KEY EVENT


    })
})

// ONCE USER CLICK GAME MODE IS TURN ON
function gameMode() {
    document.getElementById("intro").classList.remove("visible");
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
    document.getElementById("game").classList.add("visible");
    var dialog = ["The Game have started", " your time is ticking 😝"]
    document.querySelector(".timerBox").textContent = dialog;
};

function gameOver() {
    document.getElementById("game").classList.remove("visible");
    document.getElementById("game").classList.add("hidden");
    document.getElementById("gameOver").classList.remove("hidden");
    document.getElementById("gameOver").classList.add("visible");
}
function userWon(){
    alert ("You have made it to the end thank you for playing");
    clearInterval(timeLapse);
}

// function nextQuestion(value){
//     value=Math.floor(Math.random()*3)    
// }