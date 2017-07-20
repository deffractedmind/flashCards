var inquirer = require("inquirer");
var fs = require("fs");
var ExecTest = function() {

  fs.readFile("QandA.json", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }

    var qaObj = JSON.parse(
      '{"qa":['
        + data +
      ']}'
    );

    var nextQuestion = 0;
    var question = "";
    var answer = "";
    // var question = qaObj.qa[0].question;
    // var answer = qaObj.qa[0].answer;
    function runTest() {
      if (nextQuestion <= qaObj.qa.length-1) {
        question = qaObj.qa[nextQuestion].question;
        answer = qaObj.qa[nextQuestion].answer;

        // console.log(qaObj.qa[nextQuestion].question);
        // console.log(qaObj.qa[nextQuestion].answer);

        inquirer.prompt([

          {
            type: "input",
            name: "answer",
            message: question
          }

        ]).then(function(goTestYourself) {

          // If the user guesses the password...
          if (goTestYourself.answer === answer) {
            console.log('correct');
            nextQuestion++;
            runTest();
          }


          // If the user doesn't guess the password...
          else {
            // console.log(goTestYourself.answer);
            console.log("The correct answer is " + answer);
            nextQuestion++;
            runTest();
          }
        });

        }
        else {
          //test is over
          inquirer.prompt([

            {
              type: "confirm",
              name: "answer",
              message: "The test is over, do you want to do it again?"
            }

          ]).then(function(doAgain) {
            if (doAgain.answer === true) {
              nextQuestion = 0;
              runTest();
            }
            else {
              console.log("Thanks!");
              return;
            }
          });
        }

      } // end runTest()
      runTest();
    });
    // end read from QandA.json

}

ExecTest();
module.exports = ExecTest;
