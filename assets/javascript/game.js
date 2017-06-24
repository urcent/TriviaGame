// A $( document ).ready() block.
$( document ).ready(function() {

	var progress = $('#progress'), 
    progressKeeper = $('#progressKeeper'), 
    notice = $("#notice"), 
    progressWidth = 548, 
    answers= kroggy.answers, 
    userAnswers = [], 
    questionLength= answers.length, 
    questionsStatus = $("#questionNumber") 
    questionsList = $(".question");

    var kroggy = { answers: [ 'b', 'd', 'a', 'c', 'a', 'd', 'b', 'a', 'd', 'a', 'd', 'c', 'a', 'b', 'd' ] }

    function roundReloaded(num, dec) { 
    var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec); 
    return result; 
}
function judgeSkills(score) { 
    var returnString; 
        if (score==100) returnString = "Albus, is that you?"
        else if (score>90) returnString = "Outstanding, noble sir!"
        else if (score>70) returnString = "Exceeds expectations!"
        else if (score>50) returnString = "Acceptable. For a muggle."
        else if (score>35) returnString = "Well, that was poor."
        else if (score>20) returnString = "Dreadful!"
        else returnString = "For shame, troll!"
    return returnString; 
}
function checkAnswers() { 
    var resultArr = [],  
                flag = false; 
    for (i=0; i<answers.length; i++) { 
        if (answers[i] == userAnswers[i]) { 
            flag = true; 
        } 
        else { 
            flag = false; 
        } 
        resultArr.push(flag); 
    } 
    return resultArr; 
}

    //console.log( "ready!" );
   // $('#button').click(function){
    //	$('timer')
    }
});

/*
//timer
var count = 30;
var counter=setInterval(timer,1000);

function timer (){
	count=count-1;
	if (count <0){

	clearInterval(counter);
	return;
}
document.getElementById('timer').innerHTML=count + 'secs';
}
//place questions into variables
var questions = [{
    question: "What was Google's name originally at its conception in 1996?",
    choices: ["superSearch", "Backrub", "Intuitive Engine", "global X"],
    correctAnswer: 2
}, {
    question: "What are the names of Google's founders",
    choices: ["Reid Hoffman & Allen Blue", "Kevin Systrom & Mike Krieger", "Evan Spiegel & Miranda Kerr", "Larry Page & Sergey Brin"],
    correctAnswer: 2
}, {
    question: "What major tech- company recently sued google for allgedly incorrectly using there API?",
    choices: ["Oracle","Apple", "Windows", "IBM"],
    correctAnswer: 0
}, {
    question: "What company is not owned by Google's founders under the Alphabet Inc?",
    choices: ["YouTube", "Amazon", "Calico", "Android"],
    correctAnswer: 0
}, {
    question: "Google has a tool to assist with weddings",
    choices: ["True", "False"],
    correctAnswer: 0

    }, {
    question: "Google has a tool to assist with weddings",
    choices: ["True", "False"],
    correctAnswer: 0
}];


	
   

		


//start 

//1 question shown at a time 

//click answer  timer stops if correct show picture

//without click or choosing question the page automatically shows next question*/