var questions = [
  ['What was the name of the Timbers first mascot before Timber Joey?', 'timber jim'],
  ['Who is the all time goal scoring leader for the Timbers?', 'diego valeri'],
  ['In what year did the Timbers play their first season?', '1975'],
  ['Who did the Timbers play in their first MLS game?', 'colorado rapids'],
  ['What was Providence Park called originally?', 'multnomah stadium'],
  ['What minor league baseball team played at Providence Park before the Timbers?', 'portland beavers'],
  ['What is the name of the main Timbers supporting group?', 'timbers army'],
  ['On the Timbers current roster, how many different countries are the players from?', '13'],
  ['How many head coaches have the Timbers had since joining MLS?', '3'],
  ['Who scored the first goal for the Timbers in MLS?', 'kenny cooper']
];
var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var wrong = [];

function print(message) {
  document.write(message);
}

function buildList(arr) {
  var listHTML = '<ol>';
    for (var i = 0; i < arr.length; i += 1) {
      listHTML += '<li>' + arr[i] + '</li>';
    }
    listHTML += '</ol>'
    return listHTML;
}

for (var i = 0; i < questions.length ; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt((question));

  if (response.toLowerCase() === answer) {
    correctAnswers += 1;
    correct.push(question);
  } else {
    wrong.push(question);
  }
}

html = "You got " + correctAnswers + " question(s) right.";
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrong);
print(html);
