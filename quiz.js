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

var CharacterQuizContainer = document.getElementById('cequiz');
var BlankQuizContainer = document.getElementById('bquiz');
var EsseyQuizContainer = document.getElementById('equiz');
var SurveyQuizContainer = document.getElementById('squiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');



var finalScore = 0;
var characterScore = 0;
var blankScore = 0;
var esseyScore = 0;
var surveyScore = 0;
var specialScore = 0;

var characterQuestions = [];
var blankQuestions = [];
var esseyQuestions = [];
var surveyQuestions = [];
var result = '';

function generatecharacterQuiz(url, quizContainer, resultsContainer, submitButton)
{
    finalScore = 0;

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
    
    // show questions right away
    loadcharacterQuestions(quizContainer);
    

}
function generateEsseyQuiz(url, quizContainer, resultsContainer, submitButton)
{
    function loadEsseyQuestions(quizContainer){

        var output = [];
        var answers;

        $.getJSON(url,function(result){
            
            for(var i = 0; i < result.length; i++)
            {
                var current = result[i];
                esseyQuestions.push(current);
                answers = 
                    '<label>'
                        + '<input type="radio" name="esseyquestion'+i+'" value="'+1+'">'
                        +'A: '
                        +current.A
                    + '</label>'
                    + '<label>'
                        + '<input type="radio" name="esseyquestion'+i+'" value="'+2+'">'
                        +'B: '
                        +current.B
                    + '</label>'
                ;
              
            // add this question and its answers to the output
                output.push(
                '<div class="question">' +(i+1)+'. '+current.quest+ '</div>'
                + '<div class="answers">' + answers + '</div>'
                );
            }
            //console.log(output);
            quizContainer.innerHTML = output.join('');
        });
       
    }
    loadEsseyQuestions(quizContainer);
}



function generateBlankQuiz(url, quizContainer, resultsContainer, submitButton)
{
    finalScore = 0;

    function loadBlankQuestions(quizContainer){

        var output = [];
        var answers;

        $.getJSON(url,function(result){
            
            for(var i = 0; i < result.length; i++)
            {
                var current = result[i];
                blankQuestions.push(current);
                answers = 
                    '<label>'
                        + '<input type="radio" name="blankquestion'+i+'" value="'+1+'">'
                        +'A: '
                        +current.A
                    + '</label>'
                    + '<label>'
                        + '<input type="radio" name="blankquestion'+i+'" value="'+2+'">'
                        +'B: '
                        +current.B
                    + '</label>'
                ;
              
            // add this question and its answers to the output
                output.push(
                '<div class="question">' +(i+1)+'. '+current.quest+ '</div>'
                + '<div class="answers">' + answers + '</div>'
                );
            }
            //console.log(output);
            quizContainer.innerHTML = output.join('');
        });
       
    }
    function calculateScore(resultsContainer){
        

        // gather answer containers from our quiz
        
        // keep track of user's answers
        var userAnswer = '';
        blankScore = 0;
        characterScore = 0;
        esseyScore = 0;
        surveyScore = 0;
        specialScore = 0;

        // for each question...
        //character
        var answerContainers = CharacterQuizContainer.querySelectorAll('.answers');
        for(var i=0; i<characterQuestions.length; i++){

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

        var answerContainers = BlankQuizContainer.querySelectorAll('.answers');
        for(var i=0; i<blankQuestions.length; i++){

            // find selected answer

            userAnswer = (answerContainers[i].querySelector('input[name=blankquestion'+i+']:checked')||{}).value;
             console.log(userAnswer);
            //console.log(userAnswer);
            // if answer is correct
            //if(userAnswer == 1)characterScore = characterScore -2;
            //if(userAnswer == 2)characterScore = characterScore;
            //if(userAnswer == 3)characterScore = characterScore+1;
            //if(userAnswer == 4)characterScore = characterScore+2;

            if(userAnswer == 1)blankScore = blankScore+blankQuestions[i].Score1;
            if(userAnswer == 2)blankScore = blankScore+blankQuestions[i].Score2;
           

        }

        var answerContainers = EsseyQuizContainer.querySelectorAll('.answers');
        for(var i=0; i<esseyQuestions.length; i++){

            // find selected answer

            userAnswer = (answerContainers[i].querySelector('input[name=esseyquestion'+i+']:checked')||{}).value;
             console.log(userAnswer);
             

            if(userAnswer == 1)esseyScore = esseyScore+esseyQuestions[i].Score1;
            if(userAnswer == 2)esseyScore = esseyScore+esseyQuestions[i].Score2;
           

        }

        var answerContainers = SurveyQuizContainer.querySelectorAll('.answers');
        for(var i=0; i<surveyQuestions.length; i++){

            // find selected answer

            userAnswer = (answerContainers[i].querySelector('input[name=surveyquestion'+i+']:checked')||{}).value;
        

            if(userAnswer == 1)surveyScore = surveyScore+surveyQuestions[i].Score1;
            if(userAnswer == 2)surveyScore = surveyScore+surveyQuestions[i].Score2;
            if(userAnswer == 3)surveyScore = surveyScore+surveyQuestions[i].Score3;
            if(userAnswer == 4)surveyScore = surveyScore+surveyQuestions[i].Score4;
            if(userAnswer == 5)surveyScore = surveyScore+surveyQuestions[i].Score5;
            if(userAnswer == 6)surveyScore = surveyScore+surveyQuestions[i].Score6;
           

        }

        finalScore = characterScore + blankScore + esseyScore + surveyScore + specialScore;
        // show number of correct answers out of total
        
    }

    // show questions right away
    loadBlankQuestions(quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        calculateScore(resultsContainer);
        result = '';
        result += '<p>'+'认知题得分：' + characterScore+'</p>';
        result += '<p>'+'填空题得分：' + blankScore+'</p>';
        result += '<p>'+'问答题得分：' + esseyScore+'</p>';
        result += '<p>'+'问卷题得分：' + surveyScore+'</p>';
        result += '<p>'+'特别加分：' + specialScore+'</p>';
        result += '<p>'+'总分：' + finalScore+'</p>';
        resultsContainer.innerHTML = result;
    }

}




generatecharacterQuiz("https://youxiriji.github.io/char_easy.json", CharacterQuizContainer, resultsContainer, submitButton);
generateBlankQuiz("https://youxiriji.github.io/blank_easy.json", BlankQuizContainer, resultsContainer, submitButton);
generateEsseyQuiz("https://youxiriji.github.io/essey_easy.json", EsseyQuizContainer, resultsContainer, submitButton);
generateSurveyQuiz("https://youxiriji.github.io/survey_easy.json", SurveyQuizContainer, resultsContainer, submitButton);