## Web APIs Challenge: Code Quiz# User Story

## User Story
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

## Criteria 
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

Pseudo code:
1. Have a button, when clicked ->
    * Game start
        * Display question
            if answer is correct move to next question
            else subtract the clock by # of time
        * After answer question another question appear
    * Timer Start
        * when timer reach 0
            * if all question is answer == win 
            * else == game is over
2. When game is over
    * I can save my initial + score:

This is a Mock Up if This Project
![Mock Up](./asset/images/04-web-apis-homework-demo.gif)