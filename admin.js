
var fs = require('fs');
// var ExecTest = require('./ExecTest')
var AdminCmd = function() {
  var argCommand = process.argv[2];

  if (argCommand === 'admin' && process.argv.length === 5) {
    //add questions mode
    var argQuestion = process.argv[3];
    var argAnswer = process.argv[4]

    var appendItem = ',{\n"question":"' + argQuestion + '",\n"answer":"' + argAnswer + '"\n}';
    // var appendItem = ',{"question":"' + argQuestion + '","answer":"' + argAnswer + '"}';

    fs.appendFile("QandA.json", appendItem, function(err) {

      if (err) {
        console.log(err);
      }
      else {
        console.log(appendItem);
      }

    });
  }
  else if (argCommand === 'cloze') {
    //testing mode
    console.log(argCommand);
    // ExecTest();
  }
  else {
    console.log("usage: node admin.js [admin 'Question' 'Answer' | cloze]");
  }
}

AdminCmd();
module.exports = AdminCmd;
