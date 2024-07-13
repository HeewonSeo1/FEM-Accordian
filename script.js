const questions = document.querySelectorAll('.wrapper');

questions.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
    })
});