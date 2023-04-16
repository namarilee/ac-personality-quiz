/*Add your JavaScript here*/

var marinaScore = 0;
var julianScore = 0;
var questionCount = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", marina);
q1a2.addEventListener("click", julian);
q2a1.addEventListener("click", julian);
q2a2.addEventListener("click", marina);
q3a1.addEventListener("click", marina);
q3a2.addEventListener("click", julian);


var restart = document.getElementById("restart");

restart.addEventListener("click", restartQuiz);

function marina() {
  marinaScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " marinaScore = " + marinaScore);
  
  if (questionCount == 3) {
    console.log("The quiz is done!");
    updateResult();
  }
}



function julian() {
  julianScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " julianScore = " + julianScore);

  if (questionCount == 3) {
    console.log("The quiz is done!");
    updateResult();
  }
}

document.getElementById("q1a1").onclick = function() {
  document.getElementById("q1a1").style.opacity = 1;
  document.getElementById("q1a2").style.opacity = 0.5;
}

document.getElementById("q1a2").onclick = function() {
  document.getElementById("q1a1").style.opacity = 0.5;
  document.getElementById("q1a2").style.opacity = 1;
}

document.getElementById("q2a1").onclick = function() {
  document.getElementById("q2a1").style.opacity = 1;
  document.getElementById("q2a2").style.opacity = 0.5;
}

document.getElementById("q2a2").onclick = function() {
  document.getElementById("q2a1").style.opacity = 0.5;
  document.getElementById("q2a2").style.opacity = 1;
}

document.getElementById("q3a1").onclick = function() {
  document.getElementById("q3a1").style.opacity = 1;
  document.getElementById("q3a2").style.opacity = 0.5;
}

document.getElementById("q3a2").onclick = function() {
  document.getElementById("q3a1").style.opacity = 0.5;
  document.getElementById("q3a2").style.opacity = 1;
}

function updateResult() {
  if (marinaScore >= 2)  {
    document.getElementById("result").innerHTML = "You are Marina!";
    document.getElementById("img-result").src = "assets/marina_result.png";
    document.getElementById("result-desc").innerHTML = "Intelligent, creative, and down-to-earth, your personality is similar to Marina, an adorable pink octopus who enjoys singing and daydreaming. You are often friendly to others and can be found peacfully meditating during late hours.";
    console.log("You are Marina!");
  } else if (julianScore >= 2) {
    document.getElementById("result").innerHTML = "You are Julian!";
    document.getElementById("img-result").src = "assets/julian_result.png";
    document.getElementById("result-desc").innerHTML = "Spirited, witty, and arrogant, your personality is similar to Julian, a charming blue unicorn who enjoys playing guitar and reading. Although you often boast about your own achievements, you are very kind and polite in nature and personality.";

    console.log("You are Julian!");
  }
}

function restartQuiz() {
  marinaScore = 0;
  julianScore = 0;
  questionCount = 0;
  document.getElementById("result").innerHTML = "";
  document.getElementById("img-result").src = "assets/whitespace.png";
  document.getElementById("result-desc").innerHTML = "";
  document.getElementById("q1a1").style.opacity = 1;
  document.getElementById("q1a2").style.opacity = 1;
  document.getElementById("q2a1").style.opacity = 1;
  document.getElementById("q2a2").style.opacity = 1;
  document.getElementById("q3a1").style.opacity = 1;
  document.getElementById("q3a2").style.opacity = 1;

}