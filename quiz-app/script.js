const quizData = [
    {
        question: "How old is Uncle John",
        a: '10',
        b: '20',
        c: '30',
        d: '50',
        correct: 'd'
    }, 
    {
        question: "What is the capital of India",
        a: 'Delhi',
        b: 'Agra',
        c: 'Goa',
        d: 'Bombay',
        correct: 'a' 
    },
    {
        question: "What is the best programming language",
        a: 'Javascript',
        b: 'C++',
        c: 'Java',
        d: 'Python',
        correct: 'a'
    },
    {
        question: "What HTML stands for ",
        a: 'Cascading style sheets',
        b: 'Hypertext Markup language',
        c: 'Jason Object Notation',
        d: 'Application Programming Interface',
        correct: 'b'
    }
];

const questionEl = document.getElementById("question");
const submitBtn = document.getElementById("submit");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const quiz = document.getElementById("quiz");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

submitBtn.addEventListener("click", () => {

    if(a.checked || b.checked || c.checked || d.checked) {
        let checkedPoint  = returnString();
        checkAnswer(checkedPoint);
        currentQuiz++;
    } else {
        alert("Please Select an option");
    } 

    if(currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        // Show results
        alert("You finished");
        quiz.innerHTML = `<h2> You score is ${score}/${quizData.length}`;
    }

    
}); 

function returnString() {
    return a.checked ? 'a' : b.checked ? 'b' : c.checked ? 'c' : d.checked ? 'd' : ''; 
}

function checkAnswer(checkedPoint) {
    console.log(quizData[currentQuiz].correct, checkedPoint);
    if(quizData[currentQuiz].correct === checkedPoint) {
        score++;
    } 
};






