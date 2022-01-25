const questions = [

    {
        question: "Метод в JS, для поиска родителя элемента?",
        answers: ["parseInt", "map", "push", "closest"],
        aim: 4,
    },

    {
        question: "Команда в GIT, для обращения к определенной ветке?",
        answers: ["branch", "on", "checkout", "link"],
        aim: 3,
    },

    {
        question: "Команда для вывода в консоль длинны массива",
        answers: ["typeof", "math", "length", "log"],
        aim: 3,
    },
    {
        question: "С какого значения начинаются индексы у массивов в JS?",
        answers: ["С нуля", "С единицы", "С двух", "С минус одного"],
        aim: 1,
    },

    {
        question: "Какие ковычки следует использовать для написания шаблоннных строк в JS",
        answers: ["обычные", "обратные", "одинарные", "никаких"],
        aim: 2,
    },


];





let score = 0;
let qIndex = 0;




const headerOfBlock = document.querySelector(`#header`);
const bodyOfBlock = document.querySelector(`#bodyOfQ`);
const btnOfBlock = document.querySelector(`#btnOfBlock`);

function renderQ () {


    headerOfBlock.innerHTML = "";

    let templateOftitle = ` <h2 class="quiz__header-title" id="titleOfQuiz">%title%</h2>`;

    let title = templateOftitle.replace(`%title%`, questions[qIndex]["question"]);

    headerOfBlock.innerHTML = title;


};

renderQ();


function renderA () {

    bodyOfBlock.innerHTML = ``;


    let valueForInput = 1;

    for(item of questions[qIndex][`answers`]){

        let templateOfAnswers = `<div class="answer">
        <input value = "%value%" class="input" id="quiz-input" type="radio" name="radio-quiz">
        <label class="label" for="quiz-input">%forAnswer%</label>
     </div>`;

     let answerWithOutValue = templateOfAnswers.replace(`%forAnswer%`, item);

    let answerPlusValue =  answerWithOutValue.replace("%value%", valueForInput);

     bodyOfBlock.innerHTML += answerPlusValue;

     valueForInput++;





    }



};

renderA();



function checkAnswers (){

    let checkedInput = bodyOfBlock.querySelector(`input:checked`);

    if(checkedInput){



        let parceForCheckedInput = checkedInput.value = parseInt(checkedInput.value);
        console.log(parceForCheckedInput);


        if(parceForCheckedInput === questions[qIndex][`aim`]){




            score = score +1;


        }


        if(qIndex !== questions.length - 1) {

            qIndex++;
            renderQ();
            renderA();



        }else{

            console.log(score);



            resultsRender();


        }

    }

};


btnOfBlock.addEventListener(`click`, checkAnswers);


function clearPager (){

    bodyOfBlock.innerHTML = ``;
    headerOfBlock.innerHTML = ``;


};



function resultsRender (){

    clearPager();

    const reultsTemplate = `
    <h2 class="title">%title%</h2>
    <h3 class="message">%message%</h3>
    <p class="result">%result%</p>`;


    let title;
    let message;

    if(score === questions.length){

        title = `Превосходно`;
        message = `Вы ответили правильно на все вопросы!`;

    } else if ((score * 100) / questions.length >= 50){


        title = `Хороший результат`;
        message = `Больше чем в половие случаев вы отвечали правильно`;




    } else {

        title = `Можно лучше`;
        message = `Пока у вас меньше половины правильных ответов`;

    }

    let result = `${score} из ${questions.length}`;


    const finalMes = reultsTemplate
    .replace(`%title%`, title)
    .replace(`%message%`, message)
    .replace(`%result%`, result);

    headerOfBlock.innerHTML = finalMes;



    btnOfBlock.innerText = `Попробовать еще раз`;
    btnOfBlock.onclick = function(){
        history.go();
    };






}

