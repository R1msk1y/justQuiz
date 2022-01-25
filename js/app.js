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

function renderQ () {


    headerOfBlock.innerHTML = "";

    let templateOftitle = ` <h2 class="quiz__header-title" id="titleOfQuiz">%title%</h2>`;

    let title = templateOftitle.replace(`%title%`, questions[qIndex]["question"]);

    headerOfBlock.innerHTML = title;









};

renderQ();

