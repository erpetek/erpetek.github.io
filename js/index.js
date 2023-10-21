function clearSession() {
    if (localStorage.getItem('session')) {
        localStorage.removeItem('session');
    }
}
let startBtn = document.getElementById('new-session');
let continueBtn = document.getElementById('continue-session');
let words = '';
if (localStorage.getItem('words')) {
    words = JSON.parse(localStorage.getItem('words'));
}
if (words.length === 0) {
    clearSession();
    startBtn.disabled = true;
    startBtn.parentElement.href = '';
    let warningContainer = document.getElementById('warning');
    let warning = document.createElement('h6');
    warning.textContent = 'Zacznij od dodania slow!';
    warningContainer.appendChild(warning);
}
if (!localStorage.getItem('session')) {
    continueBtn.disabled = true;
}
startBtn.addEventListener('click', () => {
    clearSession();
});
