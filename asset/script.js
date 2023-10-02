var count = 60
var interval;
const index = 0;
const rightAns = "";
const wrongAns = "";
const questionS = [{
    question: "question 1",
    answer: ["a", "b", "c",],
    correct: "a"

}, {
    question: "question 2",
    answer: ["d", "e", "f",],
    correct: "f"
}];
document.getElementById("start").addEventListener("click",
    function (event) {
        event.preventDefault;
        console.log("Javascript is here")
        setInterval(() => {
            if (count > 0) {
                count--;
                let timeLeft = document.querySelector("timeDisplay")
                timeLeft.textContent = count;

                //  let timeLeft = document.getElementById("timeLeft").textContent;
                // timeLeft.textContent=count;

            } else {
                clearInterval(interval)
            }
        }, 1000);
        document.getElementById("intro").classList.remove("visible");
        document.getElementById("intro").classList.add("hidden");
        document.getElementById("game").classList.remove("hidden");
        document.getElementById("game").classList.add("visible");
        displayQuestion();
    }
);
function displayQuestion() {
    document.querySelector("h3").textContent = questionS[index].question;
    document.querySelector("choices").textContent = questionS.answer[i];
}
