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


var count = 5
var win = 0
var index = 0

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
document.getElementById("start").addEventListener("click", function (event) {
    event.preventDefault;


// MAINIPULATE TEXT BOX USING METHOD
    document.getElementById("intro").classList.remove("visible");
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
    document.getElementById("game").classList.add("visible");
    
    
// SET INTERVAL FOR FUNCTION timeOut.
    const timeLapse=setInterval(timeOut, 1000);

    function timeOut() {
        if (count > 0) {
            count--;
            //something = true
            document.getElementById("timeLeft").textContent(count)
        }
        if (count == 0) {
            clearInterval(timeLapse);
            document.getElementById("game").classList.remove("visible");
            document.getElementById("game").classList.add("hidden");
            document.getElementById("gameOver").classList.remove("hidden")
            document.getElementById("gameOver").classList.add("visible")
        }
    }

})