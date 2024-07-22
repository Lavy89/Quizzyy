document.addEventListener('DOMContentLoaded',() => {
  const startQuizBtn=document.getElementById('startQuiz');
  const homeSection = document.getElementById('home');
  const quizSection= document.getElementById('quizSection');

  startQuizBtn.addEventListener("click", ()=>{
    homeSection.style.display = 'none';
    quizSection.style.display = 'block';
    loadQuiz();
  });
});
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correct: 2,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: 1,
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correct: 3,
  },
  {
    question: "What is the chemical symbol of gold?",
    options: ["Au", "Ag", "Pb", "Pt"],
    correct: 0,
  },
  {
    question: "Who is known as the father of Computer?",
    options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
    correct: 0,
  }
];

const quiz = document.querySelector("#quiz");
const answerElm = document.querySelectorAll('.answer');
const [questionElm, option_1, option_2, option_3, option_4] = document.querySelectorAll("#question , #option_1, #option_2, #option_3, #option_4");
const submitBtn = document.getElementById("submit");
const previousBtn = document.getElementById('previous');
let currentQuiz = 0;
let score = 0;
let selectedAnswers = [];

const loadQuiz = () => {
   const {question, options} = quizData[currentQuiz];
   console.log(question);
   questionElm.innerText = `${currentQuiz+1}. ${question}`;
   options.forEach((curOption , index)=>(window[`option_${ index + 1 }`].innerText=curOption));
   if(selectedAnswers[currentQuiz] !== undefined){
    answerElm[selectedAnswers[currentQuiz]].checked= true;
   }
};
loadQuiz();

const getSelectOption=()=>{
  let ans_index;
  answerElm.forEach((curOption , index)=>{
   if(curOption.checked){
    ans_index=index;
   }
  });
  return ans_index;
};

const deSelectedAnswer=()=>{
  answerElm.forEach((curElem)=>curElem.checked=false);
}

submitBtn.addEventListener("click",()=>{
  const selectOptionIndex = getSelectOption();
  console.log(selectOptionIndex);

  if(selectOptionIndex === quizData[currentQuiz].correct){
    score++;
  }
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    deSelectedAnswer();
    loadQuiz();
  }
  else{
    quiz.innerHTML = `<div class = "result">
    <h2> Your Score: ${score}/${quizData.length}</h2>
    <p> Congratulations on completing the quiz!</p>
    <button class="reload-button" onclick="location.reload()"> Back To Home </button>
    </div>`;
    
  }
});
previousBtn.addEventListener("click",()=>{
  if(currentQuiz>0){
    currentQuiz--;
    // deSelectedAnswer();
    loadQuiz();
  }
});

