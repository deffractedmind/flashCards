var fs = require('fs');
var ExecTest = require('./selfTest.js')
var AdminCmd = function() {
  var argCommand = process.argv[2];

  if (argCommand === 'addQ&A' && process.argv.length === 5) {
    //add questions mode
    var argQuestion = process.argv[3];
    var argAnswer = process.argv[4]

    var appendItem = ',{\n"question":"' + argQuestion + '",\n"answer":"' + argAnswer + '"\n}';
    // var appendItem = ',{"question":"' + argQuestion + '","answer":"' + argAnswer + '"}';

    fs.appendFile("QandA.json", appendItem, function(err) {
      if (err) console.log(err);
      console.log("Add another Q&A or 'node CLI.js selfTest to execute the self test.'");
    });
  }
  else if (argCommand === 'selfTest') {
    //testing mode
    console.log(argCommand);
    ExecTest();
  }
  else {
    console.log("usage: node flashCardApp.js [addQ&A 'Question' 'Answer' | selfTest]");
  }
}

AdminCmd();
module.exports = AdminCmd;
