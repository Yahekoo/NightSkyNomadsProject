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
        question: "______ takes place when the Earth intersects the umbra portion of the Moon\’s shadow.",
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
    let currentQuiz = 0;
    let score = 0;

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
    loadQuiz();
    submitButton.addEventListener("click", () => {
        const answer = getSelected();
        if (answer) {
            if (answer === quizData[currentQuiz].correct) score++;
            currentQuiz++;
            if (currentQuiz < quizData.length) loadQuiz();
            else {
                quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="history.go(0)">Take the quiz again</button>
                ` 
            }
        }
    });