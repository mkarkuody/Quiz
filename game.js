var setScore= document.querySelector(".score")
var setTimer= document.querySelector(".timer")
var score= 100;
var questionNum= 4;
time= 80;
let score=0;

var timeEl= setInterval(function() {
    time -=1;
    setTimer.textContent= " Remaining time : " + time;
    if (time === 0) {
        clearInterval(timeEl);
        return window.location.assign('./end.html')
    }
},1000)

function scorePage(){

}

let questions = [
    {
        question: 'What is the hottest planet in the Solar System?',
        Answer1: 'Mercury',
        Answer2: 'Venus',
        Answer3: 'Uranus',
        Answer4: 'Mars',
        answer: 2,
    },
    {
        question:
            "What is the largest planet in the Solar System?",
        Answer1: "Jupiter",
        Answer2: "Sun",
        Answer3: "Uranus",
        Answer4: "Neptun",
        answer: 1,
    },
    {
        question: "What is the third planet from the Sun?",
        Answer1: "Venus",
        Answer2: "Mars",
        Answer3: "Earth",
        Answer4: "Uranus",
        answer: 3,
    },
    {
        question: "How does the Moon stay in orbit?",
        Answer1: "By the Earth's gravity",
        Answer2: "By the Sun's gravity",
        Answer3: "By the Mikly way's gravity",
        Answer4: "All above!",
        answer: 1,
    }
]

gameon()