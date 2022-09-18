/*database=[
    {"name": "Depression", "mood swings": True, "for long": True, "loss of interest": True, "bad mood": True, "peace in life": False,"friends/family":False,"sleep lot":True,"body numbness":False,"maniac":False,"people fool":False,"memory":False},
    {"name": "cervical", "mood swings": False, "for long": True, "loss of interest": False, "bad mood": True, "peace in life": True,"friends/family":True,"sleep lot":False,"body numbness":True,"maniac":False,"people fool":False,"memory":False},
    {"name": "Bipolar Disorder", "mood swings": True, "for long": True, "loss of interest": True, "bad mood": True, "peace in life": False,"friends/family":False,"sleep lot":True,"body numbness":False,"maniac":True,"people fool":False,"memory":False},
    {"name": "schizophrenia", "mood swings": True, "for long": True, "loss of interest": True, "bad mood": False, "peace in life": False,"friends/family":True,"sleep lot":False,"body numbness":False,"maniac":True,"people fool":True,"memory":True},
    {"name": "anxiety", "mood swings": True, "for long": True, "loss of interest": True, "bad mood": True, "peace in life": False,"friends/family":False,"sleep lot":True,"body numbness":False,"maniac":False,"people fool":False,"memory":False},
    {"name": "PTSD", "mood swings": True, "for long": False, "loss of interest": False, "bad mood": True, "peace in life": False,"friends/family":False,"sleep lot":True,"body numbness":True,"maniac":False,"people fool":True,"memory":False}

  ];

  function health(answer, property){
    if(answer == "y"){ans = True}; 
        to_remove=[];
    for (d in database)
    {if(d[property] != ans)
        {to_remove.append(d);
        }
        };
    {for(i in to_remove){database.remove(i);
    }
    if(len(database) == 1){ 
        console.log("Rough Category assigned to you is  "+database[0]["name"]);
    quit();
}
       
  

  }
    
    


ans = input("Do you have mood swings?(y,n)");
health(ans, "mood swings");


ans = input("Have you been facing this issue for a long time now?(y,n)");
health(ans, "for long");

ans = input("Have you lost interest while performing any task ?(y,n)");
health(ans,"loss of interest");

ans = input("Are you always in bad mood?(y,n)");
health(ans,"bad mood");

ans = input("Do you find your life hectic with no peace?(y,n)");
health(ans,"peace in life");

ans = input("Do your friends/family support you in your highs and lows?(y,n)");
health(ans,"friends/family");

ans = input("Do you sleep more than you used to earlier?(y,n)");
health(ans,"sleep lot");

ans = input("Do you have a lot of body pain usually and sit in a single posture for long hours?(y,n)");
health(ans,"body numbness");

ans = input("Do you face those maniac episodes after every few days?(y,n)");
health(ans,"maniac");

ans = input("Do people around you often judge /make fun of/tell you things that hurt you?(y,n)");
health(ans,"people fool");

ans = input("Do you feel like forgetting stuff when others say you did something but you never remember doing it?(y,n)");
health(ans,"memory");
*/









const quizData = [
    {
        question: "Do you have mood swings?",
        a: "yes",
        b: "no",
        correct: "d",
    },
    {
        question: "Have you been facing this issue for a long time now?",
        a: "yes",
        b: "no",
        correct: "b",
    },
    {
        question: "Have you lost interest while performing any task ?",
        a: "yes",
        b:"no",
        correct: "a",
    },
    {
        question: "Are you always in bad mood?",
        a: "yes",
        b: "no",
        correct: "b",
    },
    {
        question: "Do you find your life hectic with no peace?",
        a: "yes",
        b: "no",
        correct: "b",
    },
    {
        question: "Do your friends/family support you in your highs and lows?",
        a: "yes",
        b: "no",
        correct: "b",
    },
    {
        question: "Do you sleep more than you used to earlier?",
        a: "yes",
        b: "no",
        correct: "b",
    },
    {
        question: "Do you have a lot of body pain usually and sit in a single posture for long hours?",
        a: "yes",
        b: "no",
        correct: "b",
    },
    {
        question: "Do you face those maniac episodes after every few days?",
        a: "yes",
        b: "no",
        correct: "b",
    },
    {
        question: "Do people around you often judge /make fun of/tell you things that hurt you?",
        a: "yes",
        b: "no",
        correct: "b",
    },
    {
        question: "Do you feel like forgetting stuff when others say you did something but you never remember doing it?",
        a: "yes",
        b: "no",
        correct: "b",
    }


];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
})}