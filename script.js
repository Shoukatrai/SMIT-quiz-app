let loginBtn = document.getElementById("loginBtn");
let exampleInputEmail1 = document.getElementById("exampleInputEmail1");
let exampleInputPassword1 = document.getElementById("exampleInputPassword1");
const questionElement = document.getElementById("questionElement")
const optionElement = document.getElementById("optionElement")
const pageNumber= document.getElementById("pageNumber")
let allLiElement = optionElement.children;
let rightAnswer = 0;
let wrongAnswer= 0;
let crtAns = document.getElementById("crtAns")
let wrngAns = document.getElementById("wrngAns")
const nextBtn = document.getElementById("nextBtn")
const submitBtn = document.getElementById("submitBtn")
const quizBox = document.getElementById("quizBox")
const LoginPage = document.getElementById("LoginPage")
let quizstart = document.getElementById("startQuiz") 
let resultPage = document.getElementById("resultPage");
let percentage = document.getElementById("percentage");
let second = document.getElementById("second")


const startQuiz = ()=>{
    if(exampleInputPassword1.value.length < 3 && exampleInputEmail1.value.length < 3){
        alert("Oops! It looks like some required fields are missing. Please complete them and try again.")
    }else{
        LoginPage.className ="d-none";
        quizstart .className +="d-block";
    }
}

const showQuiz = ()=>{
    quizstart .className ="d-none";
    quizBox.className +="d-block"
    startTimer() 
}

const questions =  [
    {
        "id": 1,
        "question": "HTML stands for?",
        "options": {
            "a": "Hyper Text Markup Language",
            "b": "Hyper Text Programming Language",
            "c": "Hyper Text Styling Language",
            "d": "Hyper Text Scripting Language"
        },
        "answer": "Hyper Text Markup Language"
    },
    {
        "id": 2,
        "question": "Which HTML tag is used to define an internal style sheet?",
        "options": {
            "a": "style",
            "b": "script",
            "c": "link",
            "d": "css"
        },
        "answer": "style"
    },
    {
        "id": 3,
        "question": "What does the <a> tag define in HTML?",
        "options": {
            "a": "Anchor (hyperlink)",
            "b": "Article",
            "c": "Audio",
            "d": "Address"
        },
        "answer": "Anchor (hyperlink)"
    },
    {
        "id": 4,
        "question": "Which tag is used to display a horizontal rule in HTML?",
        "options": {
            "a": "hr",
            "b": "br",
            "c": "line",
            "d": "hline"
        },
        "answer": "hr"
    },
    {
        "id": 5,
        "question": "What is the purpose of the <head> tag in HTML?",
        "options": {
            "a": "Contains metadata and links to scripts or stylesheets",
            "b": "Defines the main body content",
            "c": "Creates a header",
            "d": "Defines a footer"
        },
        "answer": "Contains metadata and links to scripts or stylesheets"
    },
    {
        "id": 6,
        "question": "Which HTML attribute specifies an alternate text for an image?",
        "options": {
            "a": "alt",
            "b": "title",
            "c": "src",
            "d": "longdesc"
        },
        "answer": "alt"
    },
    {
        "id": 7,
        "question": "Which tag is used to define a table row in HTML?",
        "options": {
            "a": "tr",
            "b": "td",
            "c": "th",
            "d": "table"
        },
        "answer": "tr"
    },
    {
        "id": 8,
        "question": "What does the <title> tag define in an HTML document?",
        "options": {
            "a": "The title of the document in the browser tab",
            "b": "The title of a section",
            "c": "The title of an image",
            "d": "The title of a hyperlink"
        },
        "answer": "The title of the document in the browser tab"
    },
    {
        "id": 9,
        "question": "Which tag is used to create a list with bullets?",
        "options": {
            "a": "ul",
            "b": "ol",
            "c": "li",
            "d": "list"
        },
        "answer": "ul"
    },
    {
        "id": 10,
        "question": "Which attribute specifies the destination URL for a hyperlink?",
        "options": {
            "a": "href",
            "b": "src",
            "c": "target",
            "d": "rel"
        },
        "answer": "href"
    },
    {
        "id": 11,
        "question": "What is the purpose of the <meta> tag in HTML?",
        "options": {
            "a": "Provides metadata about the document",
            "b": "Links stylesheets",
            "c": "Defines sections",
            "d": "Creates hyperlinks"
        },
        "answer": "Provides metadata about the document"
    },
    {
        "id": 12,
        "question": "Which tag is used to create a drop-down list in HTML?",
        "options": {
            "a": "select",
            "b": "option",
            "c": "list",
            "d": "dropdown"
        },
        "answer": "select"
    },
    {
        "id": 13,
        "question": "What does the iframe tag do in HTML?",
        "options": {
            "a": "Embeds another HTML document within the current document",
            "b": "Creates an image frame",
            "c": "Defines a form",
            "d": "Creates a button"
        },
        "answer": "Embeds another HTML document within the current document"
    },
    {
        "id": 14,
        "question": "What is the correct tag for inserting a line break in HTML?",
        "options": {
            "a": "br",
            "b": "break",
            "c": "lb",
            "d": "newline"
        },
        "answer": "br"
    },
    {
        "id": 15,
        "question": "Which HTML tag is used to define emphasized text?",
        "options": {
            "a": "em",
            "b": "i",
            "c": "strong",
            "d": "bold"
        },
        "answer": "em"
    },
    {
        "id": 16,
        "question": "What does the <table> tag define in HTML?",
        "options": {
            "a": "A table structure",
            "b": "A table row",
            "c": "A table cell",
            "d": "A table header"
        },
        "answer": "A table structure"
    },
    {
        "id": 17,
        "question": "Which tag is used to define a section in HTML?",
        "options": {
            "a": "section",
            "b": "div",
            "c": "article",
            "d": "aside"
        },
        "answer": "section"
    },
    {
        "id": 18,
        "question": "Which attribute is used to uniquely identify an element in HTML?",
        "options": {
            "a": "id",
            "b": "class",
            "c": "style",
            "d": "name"
        },
        "answer": "id"
    },
    {
        "id": 19,
        "question": "Which HTML tag is used to insert an image?",
        "options": {
            "a": "img",
            "b": "picture",
            "c": "media",
            "d": "figure"
        },
        "answer": "img"
    },
    {
        "id": 20,
        "question": "Which HTML tag is used to create a form?",
        "options": {
            "a": "form",
            "b": "input",
            "c": "button",
            "d": "fieldset"
        },
        "answer": "form"
    }
]

let indexNumber = 0;
const quiz = () =>{
    nextBtn.style.pointerEvents = "none"
    if(indexNumber < 9){
        questionElement.innerHTML = `0${indexNumber + 1}: ${questions[indexNumber].question}`;
        pageNumber.innerHTML = `0${indexNumber + 1}`
    }else{
        questionElement.innerHTML = `${indexNumber + 1}: ${questions[indexNumber].question}`;
        pageNumber.innerHTML = `${indexNumber + 1}`
    }
    optionElement.innerHTML = ""
    const optionObj = questions[indexNumber].options;
    for (const key in optionObj) {
        optionElement.innerHTML += `<li onclick = "checkAnswer(this)" class = "li">${optionObj[key]}</li>`
    }
}
let sec = 30;
const nextQuestion = ()=>{ 
    if(indexNumber < questions.length-1){
        indexNumber++;
        quiz()
        sec=30
    }else{
        nextBtn.style.display = "none"
        submitBtn.style.display = "block"
    }
}

const checkAnswer = (element)=>{
    let correctAnswer = questions[indexNumber].answer;
    let userAnswer = element.innerHTML;
    if(correctAnswer.toLowerCase() == userAnswer.toLowerCase()){
        rightAnswer++;
        console.log("rightAnswer" ,rightAnswer)
       
    }else{
        element.style.backgroundColor = "red";
        wrongAnswer++;
        console.log("wrongAnswer", wrongAnswer)
    }


    for(var i = 0; i < allLiElement.length;i++){
        if(allLiElement[i].innerHTML == correctAnswer){
            allLiElement[i].style.backgroundColor = "green";
        } 
    }
    for(var i = 0; i < allLiElement.length;i++){
        allLiElement[i].style.pointerEvents = "none";
    }
    nextBtn.style.pointerEvents = "all"

}

const showResult = () =>{
    quizBox.className = "d-none";
    resultPage.style.display = "block";
    crtAns.innerHTML = rightAnswer;
    wrngAns.innerHTML = wrongAnswer;
    percentage.innerHTML = (rightAnswer/questions.length) * 100;
    
    
    console.log(rightAnswer)
    console.log(wrongAnswer)
}



let interval;

second.innerHTML = sec;
const startTimer=()=>{
    interval = setInterval(timer, 1000)
}

const stopTimer =()=>{
clearInterval(interval)
}

const timer =()=>{
    sec--
    second.innerHTML = sec;
    if(sec == 0){
        sec = 30;
        second.innerHTML = sec
        nextQuestion()
        sec=30;
    }
}