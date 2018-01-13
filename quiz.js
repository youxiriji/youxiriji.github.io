

var CharacterQuiz = [
    {
        question: "马里奥",
        answers: {
            a: "不知道",
            b: "知道",
            c: "了解",
            d: "熟悉"
        },
		score: 5
    },
    {
        question: "马里奥",
        answers: {
            a: "不知道",
            b: "知道",
            c: "了解",
            d: "熟悉"
        },
        score: 5
    },
    {
        question: "马里奥",
        answers: {
            a: "不知道",
            b: "知道",
            c: "了解",
            d: "熟悉"
        },
        score: 5
    },
    {
        question: "马里奥",
        answers: {
            a: "不知道",
            b: "知道",
            c: "了解",
            d: "熟悉"
        },
        score: 5
    },
    {
        question: "马里奥",
        answers: {
            a: "不知道",
            b: "知道",
            c: "了解",
            d: "熟悉"
        },
        score: 5
    },
    {
        question: "马里奥",
        answers: {
            a: "不知道",
            b: "知道",
            c: "了解",
            d: "熟悉"
        },
        score: 5
    },
    {
        question: "马里奥",
        answers: {
            a: "不知道",
            b: "知道",
            c: "了解",
            d: "熟悉"
        },
        score: 5
    },
    {
        question: "马里奥",
        answers: {
            a: "不知道",
            b: "知道",
            c: "了解",
            d: "熟悉"
        },
        score: 5
    },
    {
        question: "马里奥",
        answers: {
            a: "不知道",
            b: "知道",
            c: "了解",
            d: "熟悉"
        },
        score: 5
    },
    {
        question: "马里奥",
        answers: {
            a: "不知道",
            b: "知道",
            c: "了解",
            d: "熟悉"
        },
        score: 5
    },
    {
        question: "马里奥",
        answers: {
            a: "不知道",
            b: "知道",
            c: "了解",
            d: "熟悉"
        },
        score: 5
    },
    {
        question: "马里奥",
        answers: {
            a: "不知道",
            b: "知道",
            c: "了解",
            d: "熟悉"
        },
        score: 5
    },
    {
        question: "马里奥",
        answers: {
            a: "不知道",
            b: "知道",
            c: "了解",
            d: "熟悉"
        },
        score: 5
    },
    {
        question: "马里奥",
        answers: {
            a: "不知道",
            b: "知道",
            c: "了解",
            d: "熟悉"
        },
        score: 5
    },
    {
        question: "马里奥",
        answers: {
            a: "不知道",
            b: "知道",
            c: "了解",
            d: "熟悉"
        },
        score: 5
    },
    {
        question: "马里奥",
        answers: {
            a: "不知道",
            b: "知道",
            c: "了解",
            d: "熟悉"
        },
        score: 5
    },
    {
        question: "马里奥",
        answers: {
            a: "不知道",
            b: "知道",
            c: "了解",
            d: "熟悉"
        },
        score: 5
    },
    {
        question: "马里奥",
        answers: {
            a: "不知道",
            b: "知道",
            c: "了解",
            d: "熟悉"
        },
        score: 5
    },
    {
        question: "马里奥",
        answers: {
            a: "不知道",
            b: "知道",
            c: "了解",
            d: "熟悉"
        },
        score: 5
    },
    {
        question: "马里奥",
        answers: {
            a: "不知道",
            b: "知道",
            c: "了解",
            d: "熟悉"
        },
        score: 5
    },
];

var BlankQuiz = [
    {
        question: "What is 10/2?",
        answers: {
            a: '3',
            b: '5',
            c: '115'
        },
        correctAnswer: 'b',
		score: 5
    },
    {
        question: "What is 30/3?",
        answers: {
            a: '3',
            b: '5',
            c: '10'
        },
        correctAnswer: 'c',
		score: 10
    }
];

var EsseyQuiz = [
    {
        question: "What is 10/2?",
        answers: {
            a: '3',
            b: '5',
            c: '115'
        },
        correctAnswer: 'b',
		score: 5
    },
    {
        question: "What is 30/3?",
        answers: {
            a: '3',
            b: '5',
            c: '10'
        },
        correctAnswer: 'c',
		score: 10
    }
];

var SurveyQuiz = [
    {
        question: "What is 10/2?",
        answers: {
            a: '3',
            b: '5',
            c: '115'
        },
        correctAnswer: 'b',
        score: 5
    },
    {
        question: "What is 30/3?",
        answers: {
            a: '3',
            b: '5',
            c: '10'
        },
        correctAnswer: 'c',
        score: 10
    }
];


var CharacterQuizContainer = document.getElementById('cquiz');
var BlankQuizContainer = document.getElementById('bquiz');
var EsseyQuizContainer = document.getElementById('equiz');
var SurveyQuizContainer = document.getElementById('squiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

generateQuiz(CharacterQuiz, CharacterQuizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton)
{

    function loadQuestions(){

    }
    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function calculateScore(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var score = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                score = score + questions[i].score;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = '最终得分：' + score;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        calculateScore(questions, quizContainer, resultsContainer);
    }

}