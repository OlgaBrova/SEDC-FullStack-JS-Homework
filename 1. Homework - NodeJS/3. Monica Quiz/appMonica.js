const API_URL = 'http://localhost:3000';

const getQuizBtn = document.querySelector("#getQuizBtn");
const form = document.querySelector("#questionsForm");
const result = document.querySelector(".result");


getQuizBtn.addEventListener('click', () => {
    getQuestions();
   
});

const getQuestions = () => {
    fetch(`${API_URL}/monica`)
        .then((response) => response.json())
        .then((result) => {
            
            renderQuestions(result);
        })
}


const renderQuestions = (questions) => {
    let inner = '';
    
    questions.forEach(question => {
        inner += `
        <div class="my-5">
            <p class="lead font-weight-normal">${question.question}</p>
            <div class="form-check my-2 text-dark">
                <input type="radio" class="radio" name="q${question.id}" value="A">
                <label class="form-check-label">${question.answer1}</label>
            </div>
            <div class="form-check my-2 text-dark">
                <input type="radio" class="radio" name="q${question.id}" value="B">
                <label class="form-check-label">${question.answer2}</label>
            </div>
        </div>
        `;
    });
    
    inner += `<div class="text-center">
                <input type="submit" class="btn btn-light">
            </div>`;
    form.innerHTML += inner;
  
}


let correctAnswers = ['A', 'B', 'A', 'B', 'A'];

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    console.log(userAnswers);
    
    userAnswers.forEach((answer, i) => {

        if (answer === correctAnswers[i]) {
            score += 20;
        }
    });

    window.scrollTo(0, 0);
    
    result.classList.remove('d-none');

    
    let output = 0;
    let timer = setInterval(() => {

        result.querySelector('span').textContent = `${output}%`;

        if (output === score) {
            clearInterval(timer);
        }else {
            output++;
        }

    }, 10);

});


