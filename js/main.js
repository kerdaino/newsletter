const form = document.querySelector('form');
const card1 = document.querySelector('.content-wrapper');
const card2 = document.querySelector('.content-wrapper2');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    card1.classList.add('hide');
    card2.classList.remove('hide');
});