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



var finalScore = 0;
var characterScore = 0;

var characterQuestions = [];
function generatecharacterQuiz(url, quizContainer, resultsContainer, submitButton)
{

    function loadcharacterQuestions(quizContainer){

        var output = [];
        var answers;

        $.getJSON(url,function(result){
            
            for(var i = 0; i < result.length; i++)
            {
                var current = result[i];
                characterQuestions.push(current);
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
                '<div class="question">' +(i+1)+'. '+current.char + '</div>'
                + '<div class="answers">' + answers + '</div>'
                );
            }
            //console.log(output);
            quizContainer.innerHTML = output.join('');
        });
       
    }
    function calculatecharacterScore(quizContainer, resultsContainer){
        

        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        characterScore = 0;
        // for each question...
        for(var i=0; i<20; i++){

            // find selected answer

            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            //console.log(userAnswer);
            // if answer is correct
            //if(userAnswer == 1)characterScore = characterScore -2;
            //if(userAnswer == 2)characterScore = characterScore;
            //if(userAnswer == 3)characterScore = characterScore+1;
            //if(userAnswer == 4)characterScore = characterScore+2;

            if(userAnswer == 1)characterScore = characterScore+characterQuestions[i].Score1;
            if(userAnswer == 2)characterScore = characterScore+characterQuestions[i].Score2;
            if(userAnswer == 3)characterScore = characterScore+characterQuestions[i].Score3;
            if(userAnswer == 4)characterScore = characterScore+characterQuestions[i].Score4;

        }
        finalScore = finalScore + characterScore;
        // show number of correct answers out of total
        resultsContainer.innerHTML = '最终得分：' + finalScore;
    }

    // show questions right away
    loadcharacterQuestions(quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        finalScore = 0;
        calculatecharacterScore(quizContainer, resultsContainer);
    }

}

generatecharacterQuiz("https://youxiriji.github.io/char_easy.json", CharacterEasyQuizContainer, resultsContainer, submitButton);
