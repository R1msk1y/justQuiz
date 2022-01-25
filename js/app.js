const questions = [

    {
        question: "Метод в JS, для поиска родителя элемента?",
        answers: ["parceInt", "map", "push", "closest"],
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
        aim: 2,
    },

    {
        question: "Какие ковычки следует использовать для написания шаблоннных строк в JS",
        answers: ["обычные", "обратные", "одинарные", "никаких"],
        aim: 2,
    },


];

console.log(questions);


let score = 0;
let qIndex = 0;




const headerOfBlock = document.querySelector(`#header`);
const bodyOfBlock = document.querySelector(`#bodyOfQ`);

function renderQ () {


    headerOfBlock.innerHTML = "";

    let templateOftitle = ` <h2 class="quiz__header-title" id="titleOfQuiz">%title%</h2>`;

    let title = templateOftitle.replace(`%title%`, questions[qIndex]["question"]);

    headerOfBlock.innerHTML = title;


};

renderQ();


function renderA () {

    bodyOfBlock.innerHTML = ``;

    for(item of questions[qIndex][`answers`]){

        let templateOfAnswers = `<div class="answer">
        <input class="input" id="quiz-input" type="radio" name="radio-quiz">
        <label class="label" for="quiz-input">%forAnswer%</label>
     </div>`;

     let answerWithOutValue = templateOfAnswers.replace(`%forAnswer%`, item);

     bodyOfBlock.innerHTML += answerWithOutValue;



    }



};

renderA();

