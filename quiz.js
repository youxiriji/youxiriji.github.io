var SpecialQuestions = [
    {
        question: "拥有以下成就则获得相应加分：",
        answers: {
            a: '省赛区及以上等级的电子竞技比赛前三 +100',
            b: '打破过社区承认的速通记录 +100',
            c: '制作过一款游戏并上架主要平台 +100',
            d: '为某款游戏制作过内容扩充型的MOD +50',
            e: '创建和维护过某款游戏的维基/资料站 +50',
            f: '在某款游戏中投入时间超过2000个小时 +50',
            g: '从事与传统游戏相关的工作（开发，媒体，主播等） + 20',
            h: '为某款游戏写过详细攻略 +20',
            i: '为某款游戏进行过二次创作（各类绘画、同人等） +10',
            j: '购买过某游戏的豪华限定版 +5'

        },
    },

    {
        question: "除Galgame外获得全成就（白金奖杯）等游戏的数量为：（每个+2）",
       
    }
];
document.title = "游戏玩家核心度自测"
var CharacterQuizContainer = document.getElementById('cequiz');
var BlankQuizContainer = document.getElementById('bquiz');
var EsseyQuizContainer = document.getElementById('equiz');
var SurveyQuizContainer = document.getElementById('squiz');
var MediaQuizContainer = document.getElementById('mquiz');
var SpecialQuizContainer = document.getElementById('specialquiz');
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
var mediaQuestions = [];
var result = '';


function hide (elements) {
    elements.style.display = 'none';
}

function show (elements) {
    elements.style.display = 'block';
}
hide(document.getElementById('levels'));



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

function generateMediaQuiz(url, quizContainer, resultsContainer, submitButton)
{
    function loadMediaQuestions(quizContainer){

        var output = [];
        var answers;

        $.getJSON(url,function(result){
            
            for(var i = 0; i < result.length; i++)
            {
                var current = result[i];
                mediaQuestions.push(current);
                answers = 
                    '<label>'
                        + '<input type="radio" name="mediaquestion'+i+'" value="'+1+'">'
                        +'A: '
                        +current.A
                    + '</label>'
                    + '<label>'
                        + '<input type="radio" name="mediaquestion'+i+'" value="'+2+'">'
                        +'B: '
                        +current.B
                    + '</label>'
                ;
              
            // add this question and its answers to the output
                output.push(
                '<div class="question">' +(i+21)+'. '+current.quest+ '</div>'
                +'<br>'
                +'<img src=' + current.link+' width=450>'
                + '<div class="answers">' + answers + '</div>'
                );
            }
            //console.log(output);
            quizContainer.innerHTML = output.join('');
        });
       
    }
    loadMediaQuestions(quizContainer);
}
function generateSurveyQuiz(url, quizContainer, resultsContainer, submitButton)
{
    function loadSurveyQuestions(quizContainer){

        var output = [];
        var answers;

        $.getJSON(url,function(result){
            
            for(var i = 0; i < result.length; i++)
            {
                var current = result[i];
                surveyQuestions.push(current);
                answers = 
                    '<label>'
                        + '<input type="radio" name="surveyquestion'+i+'" value="'+1+'">'
                        +'A: '
                        +current.A
                        +'<br>'
                    + '</label>'
                    + '<label>'
                        + '<input type="radio" name="surveyquestion'+i+'" value="'+2+'">'
                        +'B: '
                        +current.B
                        +'<br>'
                    + '</label>'
                    + '<label>'
                        + '<input type="radio" name="surveyquestion'+i+'" value="'+3+'">'
                        +'C: '
                        +current.C
                        +'<br>'
                    + '</label>'
                    + '<label>'
                        + '<input type="radio" name="surveyquestion'+i+'" value="'+4+'">'
                        +'D: '
                        +current.D
                        +'<br>'
                    + '</label>'
                    + '<label>'
                        + '<input type="radio" name="surveyquestion'+i+'" value="'+5+'">'
                        +'E: '
                        +current.E
                        +'<br>'
                    + '</label>'
                    + '<label>'
                        + '<input type="radio" name="surveyquestion'+i+'" value="'+6+'">'
                        +'F: '
                        +current.F
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
    loadSurveyQuestions(quizContainer);
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
    function loadSpecialQuestions()
    {
        var output = [];
        var answers = '';
        //console.log(SpecialQuestions[0].answers);

        var ct = 1;
        for(set in SpecialQuestions[0].answers)
        {
             answers += 
                    '<label>'
                        + '<input type="checkbox" id="specialquestion'+ct+'" value="'+ct+'">'
                        +SpecialQuestions[0].answers[set]
                        +'<br>'
                    + '</label>'
                ;
              
            // add this question and its answers to the output
                
            ct++;
            
        }
        output.push(
                '<div class="question">' +1+'. '+SpecialQuestions[0].question+ '</div>'
                + '<div class="answers">' + answers + '</div>'
                );
        
        output.push(
             '<div class="question">' +2+'. '+SpecialQuestions[1].question+ '</div>'
                );

        output.push(
                '<label>'
                + '<input type="textarea" id="specialtext'+'" value="'+0+'">'
                +'<br>'+'<br>'
                + '</label>'
            )

        SpecialQuizContainer.innerHTML = output.join('');
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
            // console.log(userAnswer);
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
             //console.log(userAnswer);
             

            if(userAnswer == 1)esseyScore = esseyScore+esseyQuestions[i].Score1;
            if(userAnswer == 2)esseyScore = esseyScore+esseyQuestions[i].Score2;
           

        }
        var answerContainers = MediaQuizContainer.querySelectorAll('.answers');
        for(var i=0; i<mediaQuestions.length; i++){

            // find selected answer

            userAnswer = (answerContainers[i].querySelector('input[name=mediaquestion'+i+']:checked')||{}).value;
            // console.log(userAnswer);
             
            //media questions will be added to essey score.
            if(userAnswer == 1)esseyScore = esseyScore+mediaQuestions[i].Score1;
            if(userAnswer == 2)esseyScore = esseyScore+mediaQuestions[i].Score2;
           

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


        if(document.getElementById('specialquestion1').checked)specialScore = specialScore+100;
        if(document.getElementById('specialquestion2').checked)specialScore = specialScore+100;
        if(document.getElementById('specialquestion3').checked)specialScore = specialScore+100;
        if(document.getElementById('specialquestion4').checked)specialScore = specialScore+50;
        if(document.getElementById('specialquestion5').checked)specialScore = specialScore+50;
        if(document.getElementById('specialquestion6').checked)specialScore = specialScore+50;
        if(document.getElementById('specialquestion7').checked)specialScore = specialScore+20;
        if(document.getElementById('specialquestion8').checked)specialScore = specialScore+20;
        if(document.getElementById('specialquestion9').checked)specialScore = specialScore+10;
        if(document.getElementById('specialquestion10').checked)specialScore = specialScore+5;
        specialScore  = specialScore + 2 * document.getElementById('specialtext').value;
        //var answerContainers = SpecialQuizContainer.querySelectorAll('.answers');
        //userAnswer = (answerContainers[i].querySelector('input[name=specialquestion'+1+']:checked')||{}).value;
        
           

        finalScore = characterScore + blankScore + esseyScore + surveyScore + specialScore;
        // show number of correct answers out of total
        
    }

    // show questions right away
    loadBlankQuestions(quizContainer);
    loadSpecialQuestions();
    // on submit, show results
    submitButton.onclick = function(){
        calculateScore(resultsContainer);
        result = '';
        result += '<br>'+'认知题得分：' + characterScore;
        result += '<br>'+'填空题得分：' + blankScore;
        result += '<br>'+'问答题得分：' + esseyScore;
        result += '<br>'+'问卷题得分：' + surveyScore;
        result += '<br>'+'特别加分：' + specialScore+'<br>';
        result += '<br>'+'<strong>总分</strong>：' + finalScore+'<br><br><br>';
        resultsContainer.innerHTML = result;
        show(document.getElementById('levels'));
        document.getElementById("submit").scrollIntoView();
    }

}




generatecharacterQuiz("https://youxiriji.github.io/char_easy.json", CharacterQuizContainer, resultsContainer, submitButton);
generateBlankQuiz("https://youxiriji.github.io/blank_easy.json", BlankQuizContainer, resultsContainer, submitButton);
generateEsseyQuiz("https://youxiriji.github.io/essey_easy.json", EsseyQuizContainer, resultsContainer, submitButton);
generateSurveyQuiz("https://youxiriji.github.io/survey_easy.json", SurveyQuizContainer, resultsContainer, submitButton);
generateMediaQuiz("https://youxiriji.github.io/media_easy.json", MediaQuizContainer, resultsContainer, submitButton);