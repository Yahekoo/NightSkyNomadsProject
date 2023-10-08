const quizData = [
        {
        question: "Which eclipse is NOT safe to watch with the naked eye?",
        a: "Solar eclipse",
        b: "Lunar eclipse",
        c: "both",
        d: "no one",
        correct: "a",
        },
        {
        question: "In an eclipse where the Moon, Sun, and Earth are involved, they are nearly in a _____.",
        a: "Circle shape",
        b: "Oval shape",
        c: "Straight line",
        d: "Polygon shape",
        correct: "c",
        },
        {
            question: "______ takes place when the Earth intersects the umbra portion of the Moon s shadow.",
            a: "Partial solar eclipse",
            b: "Total solar eclipse",
            c: "Partial lunar eclipse",
            d: "Total lunar eclipse",
            correct: "b",
        },
        {
        question: "Why don't we have a solar eclipse every month?",
        a: " Because the Moon is made of cheese",
        b: "Because the Earth's shadow is too big",
        c: "Because the Moon's orbit is tilted, so it doesn't always line up with the Sun",
        d: "Because the Sun goes on vacation sometimes :)",
        correct: "c",
        },
    ];
    const quiz = document.getElementById("quiz");
    const answerElements = document.querySelectorAll(".answer");
    const questionElement = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitButton = document.getElementById("submit");
    const submitdiv = document.getElementById("submitdiv");
    const nextButton = document.getElementById("next");
    const choices = document.getElementById("choices");
    const start =document.getElementById("start");
    let currentQuiz = 0;
    let score = 0;
    let falsanswer=0;
    let answer=null;
    let x=1;
    nextButton.style.display="none";
    const deselectAnswers = () => {
        answerElements.forEach((answer) => (answer.checked = false));
    };
    const getSelected = () => {
        let answer;
        answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
        });
        return answer;
    };
    const loadQuiz = () => {
        deselectAnswers();
        const currentQuizData = quizData[currentQuiz];
        questionElement.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
    };
    start.addEventListener("click", () => {
        submitButton.style.display="block";
        choices.style.display="block";
        start.style.display="none";
        loadQuiz();
    });

    submitButton.addEventListener("click", () => {
        answer=0;
        answer = getSelected();
        if (answer) {
            if (answer === quizData[currentQuiz].correct) score++;
            else {
                const wronganswer = document.getElementById(answer+"_text");
                wronganswer.style.backgroundColor="red";
                falsanswer=1;
            } 
            /* change the colore of the true answer to green */
            const correctanswer = document.getElementById(quizData[currentQuiz].correct+"_text");
            correctanswer.style.backgroundColor="green";

            submitButton.style.display="none";
            nextButton.style.display="block";

        }
    });

    nextButton.addEventListener("click", () => {
                if(falsanswer){
                    const wronganswer = document.getElementById(answer+"_text");
                    wronganswer.style.removeProperty("background-color");
                }
                falsanswer=0;
            const correctanswer = document.getElementById(quizData[currentQuiz].correct+"_text");
            correctanswer.style.removeProperty("background-color");
            currentQuiz++;
            submitButton.style.display="block";
            nextButton.style.display="none";
            if (currentQuiz < quizData.length) loadQuiz();
            else {
                if (score/quizData.length <0.25) message = "You're off to a good start, and we can work together to make it even better. \n <h1> 😅 </h1>";
                    else if (score/quizData.length >=0.25 && score/quizData.length<0.5) message = "You're learning, and that's great! Let's keep practicing to improve. \n <h1> 🌱 </h1>";
                        else if (score/quizData.length >=0.5 && score/quizData.length<0.75) message = "You're doing well! Keep it up. \n <h1> 👏 </h1>";
                            else  message = "Wow, you're doing amazing! Your understanding is impressive. Keep challenging yourself. \n <h1> 🏆 </h1>";
                quiz.innerHTML = `
                <h2>You answered <i> ${score}/${quizData.length} </i> questions correctly</h2>
                <h2>${message}</h2>
                <button class="button" onclick="history.go(0)">Take the quiz again</button>
                ` 
            }

        });