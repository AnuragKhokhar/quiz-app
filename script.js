const questions = [
    {
        question: "HTML Stands for:",
        options: [
            {text: "Hyper Text Markup Language", correct: true},
            {text: "Hyper Transfer Markup Language", correct: false},
            {text: "Hyperlink and Text Markup Language", correct: false},
            {text: "High-level Text Markup Language", correct: false},
        ]
    },

    {
        question: "Which of the following is NOT a valid CSS selector?",
        options: [
          { text: ".class-selector", correct: false },
          { text: "#id-selector", correct: false },
          { text: "$element-selector", correct: true },
          { text: "element.class-selector", correct: false }
        ]
      },
    
    {
      question: "What does the acronym 'HTTP' stand for in web development?",
      options: [
        { text: "HyperText Transfer Protocol", correct: true },
        { text: "High-Level Text Protocol", correct: false },
        { text: "Hyperlink and Text Transfer Protocol", correct: false },
        { text: "Hyper Transfer and Text Protocol", correct: false }
      ]
    },
    {
      question: "In JavaScript, which function is used to schedule a function to be called after a specified amount of time?",
      options: [
        { text: "setTimeout()", correct: true },
        { text: "setInterval()", correct: false },
        { text: "setTimer()", correct: false },
        { text: "delay()", correct: false }
      ]
    },
    {
      question: "Which of the following is a server-side scripting language?",
      options: [
        { text: "JavaScript", correct: false },
        { text: "Python", correct: true },
        { text: "HTML", correct: false },
        { text: "CSS", correct: false }
      ]
    },
    {
      question: "What is the purpose of the CSS property box-sizing: border-box;?",
      options: [
        { text: "Includes padding and border in the element's total width and height", correct: true },
        { text: "Excludes padding and border from the element's total width and height", correct: false },
        { text: "Defines the element's box model as circular", correct: false },
        { text: "Changes the element's border shape to dashed", correct: false }
      ]
    },
    {
      question: "Which of the following tags is used to link an external JavaScript file in HTML?",
      options: [
        { text: "<script>", correct: true },
        { text: "<link>", correct: false },
        { text: "<js>", correct: false },
        { text: "<javascript>", correct: false }
      ]
    },
    {
      question: "What is the purpose of the CSS property position: absolute;?",
      options: [
        { text: "Positions the element relative to its normal position in the document flow", correct: true },
        { text: "Removes the element from the normal document flow", correct: false },
        { text: "Centers the element horizontally on the page", correct: false },
        { text: "Floats the element to the left or right", correct: false }
      ]
    },
    {
      question: "Which of the following is a valid way to comment in JavaScript?",
      options: [
        { text: "// This is a comment", correct: true },
        { text: "<!-- This is a comment -->", correct: false },
        { text: "/* This is a comment */", correct: false },
        { text: "# This is a comment", correct: false }
      ]
    },
    {
      question: "What does the acronym 'URL' stand for in web development?",
      options: [
        { text: "Universal Resource Locator", correct: true },
        { text: "Uniform Reference Locator", correct: false },
        { text: "Unique Resource Locator", correct: false },
        { text: "Unified Reference Locator", correct: false }
      ]
    }
]

const ques = document.getElementById("question");
const op1=document.getElementById("op1")
const op2=document.getElementById("op2")
const op3=document.getElementById("op3")
const op4=document.getElementById("op4")

let s = document.getElementById('s');
let que = document.getElementById('q');

let index=0;
let score=0;
let q=1;
function loadQuestion(){
  que.innerText=q
  q++;
  op1.disabled=false;
  op2.disabled=false;
  op3.disabled=false;
  op4.disabled=false;
  op1.style='none';
  op2.style='none';
  op3.style='none';
  op4.style='none';
  ques.innerText=questions[index].question
  op1.innerText=questions[index].options[0].text
  op2.innerText=questions[index].options[1].text
  op3.innerText=questions[index].options[2].text
  op4.innerText=questions[index].options[3].text
}



function getAnswer(optionId, option){
  const correctOptionIndex = questions[index].options.findIndex(opt => opt.correct);
  if(option==correctOptionIndex){
    optionId.style.backgroundColor="#81C784";
    score++;
    s.innerText=score;
  }
  else{
    optionId.style.backgroundColor='#FF8A80';
    if(correctOptionIndex==0) op1.style.backgroundColor='#81C784';
    if(correctOptionIndex==1) op2.style.backgroundColor='#81C784';
    if(correctOptionIndex==2) op3.style.backgroundColor='#81C784';
    if(correctOptionIndex==3) op4.style.backgroundColor='#81C784';
  } 
  op1.disabled=true;
  op2.disabled=true;
  op3.disabled=true;
  op4.disabled=true;
}

op1.addEventListener('click', ()=> getAnswer(op1, 0));
op2.addEventListener('click', ()=> getAnswer(op2, 1));
op3.addEventListener('click', ()=> getAnswer(op3, 2));
op4.addEventListener('click', ()=> getAnswer(op4, 3));


loadQuestion();

const main = document.getElementById('main');
const next = document.getElementById('nxt');
let scr = document.getElementById('scr')
const last = document.getElementById('last')
const restart = document.getElementById('rst')

next.addEventListener('click', ()=>{
  index++;
  if(index<10){
    loadQuestion();
  } 
  else{
    main.style.display='none';
    last.style.display='block';
    scr.innerText = score;
  }
});

restart.addEventListener('click', ()=>{
  index=0;
  score=0;
  s.innerText=score;
  q=1;
  loadQuestion();
  main.style.display='block';
  last.style.display='none'
})

