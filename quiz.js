var SurveyQuestions = [
    {
        question: "What is 10/2?",
        answers: {
            a: '3',
            b: '5',
            c: '115'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is 30/3?",
        answers: {
            a: '3',
            b: '5',
            c: '10'
        },
        correctAnswer: 'c'
    }
];

var CharacterEasyQuizContainer = document.getElementById('cequiz');
var BlankQuizContainer = document.getElementById('bquiz');
var EsseyQuizContainer = document.getElementById('equiz');
var SurveyQuizContainer = document.getElementById('squiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');


var CharacterEasyQuizContainer = document.getElementById('cequiz');
var BlankQuizContainer = document.getElementById('bquiz');
var EsseyQuizContainer = document.getElementById('equiz');
var SurveyQuizContainer = document.getElementById('squiz');


var CharacterEasyQuizContainer = document.getElementById('cequiz');
var BlankQuizContainer = document.getElementById('bquiz');
var EsseyQuizContainer = document.getElementById('equiz');
var SurveyQuizContainer = document.getElementById('squiz');


function generateCharEasyQuiz(url, quizContainer, resultsContainer, submitButton)
{

    function loadCharEasyQuestions(quizContainer){

        var output = [];
        var answers;

        $.getJSON(url,function(result){
            
            for(var i = 0; i < result.length; i++)
            {
                var current = result[i];
               
                answers = 
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+1+'">'
                        +'A: '
                        +current.a
                    + '</label>'
                    + '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+2+'">'
                        +'B: '
                        +current.b
                    + '</label>'
                    + '<label>'   
                        + '<input type="radio" name="question'+i+'" value="'+3+'">'
                        +'C: '
                        +current.c
                    + '</label>'
                    + '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+4+'">'
                        +'D: '
                        +current.d
                    + '</label>'
                    
                ;
              
            // add this question and its answers to the output
                output.push(
                '<div class="question">' + current.char + '</div>'
                + '<div class="answers">' + answers + '</div>'
                );
            }
            //console.log(output);
            quizContainer.innerHTML = output.join('');
        });
       
    }
    function calculateCharEasyScore(quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var score = 0;
        
        // for each question...
        for(var i=0; i<20; i++){

            // find selected answer

            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            console.log(userAnswer);
            // if answer is correct
            if(userAnswer == 1)score = score -2;
            if(userAnswer == 2)score = score;
            if(userAnswer == 3)score = score+1;
            if(userAnswer == 4)score = score+2;

        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = '最终得分：' + score;
    }

    // show questions right away
    loadCharEasyQuestions(quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        calculateCharEasyScore(quizContainer, resultsContainer);
    }

}

generateCharEasyQuiz("https://youxiriji.github.io/char_easy.json", CharacterEasyQuizContainer, resultsContainer, submitButton);
