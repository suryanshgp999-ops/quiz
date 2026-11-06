
let questions = [
    {
        q: "HTML stands for?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "Home Tool Markup Language", "None"],
        answer: 0
    },
    {
        q: "CSS is used for?",
        options: ["Structure", "Styling", "Database", "Server"],
        answer: 1
    },
    {
        q: "JavaScript is used for?",
        options: ["Interactivity", "Only Styling", "Hardware", "None"],
        answer: 0
    }
];

let index = 0;
let score = 0;

function loadQuestion() {
    let q = questions[index];

    document.getElementById("question").innerText = q.q;

    ["a", "b", "c", "d"].forEach((id, i) => {
        document.getElementById(id).innerText = q.options[i];
    });

    document.getElementById("result").innerText = "";
}

function checkAnswer(choice) {
    if (choice === questions[index].answer) {
        score++;
        document.getElementById("result").innerText = "Correct!";
    } else {
        document.getElementById("result").innerText = "Wrong!";
    }
}

function nextQuestion() {
    index++;

    if (index < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText =
            "Quiz Completed! Score: " + score;

        ["a", "b", "c", "d"].forEach(id => {
            document.getElementById(id).style.display = "none";
        });
    }
}

loadQuestion();
