const progressBar = document.querySelector('.progress-bar');
const nextButton = document.querySelector('.next-button');
const questionContainers = document.querySelectorAll('.question-container');


let currentQuestion = 0;  
const totalQuestions = questionContainers.length;
// Corrigir esse trecho para apenas uma função se possível; ----------------------------------------------------
function enableNextButton() {
console.log(nextButton);
document.getElementById("next-button").removeAttribute("disabled");

}
function disableNextButton(){
console.log(nextButton);
document.getElementById("next-button").setAttribute("disabled", true);
}
// -----------------------------------------------------------------------------------------------------
function showQuestion() {
// Esconde todas as divs de pergunta
questionContainers.forEach(container => {
  container.classList.add('d-none');
});

// Exibe apenas a div de pergunta correspondente à pergunta atual
questionContainers[currentQuestion].classList.remove('d-none');
}
function nextQuestion() {
if (currentQuestion < totalQuestions - 1) {    
  showQuestion();    
} 

}

nextButton.addEventListener('click', () => {
currentQuestion++;
const progressPercent = (currentQuestion / totalQuestions) * 100;
if (currentQuestion < totalQuestions) { // verificação adicionada
progressBar.style.width = progressPercent + '%';
progressBar.setAttribute('aria-valuenow', progressPercent);
progressBar.textContent = progressPercent + '%';
} else {
progressBar.style.width = '100%';
progressBar.setAttribute('aria-valuenow', 100);
progressBar.textContent = '100%';
}

if (progressPercent <= 80) {
questionContainers[currentQuestion - 1].classList.add('d-none');
questionContainers[currentQuestion].classList.remove('d-none');
} else {
swal("Bom Trabalho", {
          text: "Voce Terminou o Quiz do Módulo 1!",
          icon: "success",
          buttons: "OK"
        });
}
});
// Exibe a primeira pergunta quando a página é carregada
showQuestion();

