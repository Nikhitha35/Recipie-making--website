function navigateToAnotherPage() {
    window.location.href = 'http://127.0.0.1:5500/Project/home.html';
}

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnlogin-popup');
const iconclose = document.querySelector('.iconclose');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});
btnpopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});
iconclose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

