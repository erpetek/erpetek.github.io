console.warn('Oszukując tu oszukujesz tylko siebie :)');
const rng = (min, max) => Math.floor(Math.random() * (max - min) + min);
const roundDecimal = (num, n = 4) => parseFloat(num.toFixed(n));
function clearSession() {
    if (localStorage.getItem('session')) {
        localStorage.removeItem('session');
    }
    window.location.href = 'index.html';
}
function testRandom() {
    const randomFunction = rng;
    let min = 0;
    let max = 5;
    let distribution = { };
    for (let i = 0; i !== max; i++) {
        distribution[i] = 0;
    }
    for (let i = 0; i < 1000; i++) {
        let numbah = rng(min, max);
        distribution[numbah]++;
    }
    for (let i = 0; i < max; i++) {
        console.log('Num of', i + 's', ':', distribution[i]);
    }
}
function stringSimilarity(string1, string2) {
    let passes = 0;
    for (let i = 0; i < string1.length; i++) {
        if (string1[i] === string2[i]) {
            passes++;
        } else if (string2[i] === undefined) {
            break;
        }
    }
    return (string2.length > string1.length) ? passes / string2.length : passes / string1.length;
}
function chooseNextWord(session, words, deleteCurrentWord = true) {
    if (deleteCurrentWord) {
        let index = words.findIndex(i => i === session.current);
        let availableIndex = session.available.indexOf(index);
        session.available.splice(availableIndex, 1);
    }
    let index = rng(0, session.available.length);
    let availableIndex = session.available[index];
    session.current = words[availableIndex];
}
function nextWord(session, words, deleteCurrentWord = true) {
    chooseNextWord(session, words, deleteCurrentWord);
    localStorage.setItem('session', JSON.stringify(session));
    let wordCount = document.getElementById('word-count');
    let word = document.getElementById('current-word');
    wordCount.textContent = `Słowo ${words.length - session.available.length + 1} z ${words.length}:`;
    word.textContent = session.current[0];
}
function showPopup(title, msg1, msg2, titleClass = '') {
    let popupElement = document.getElementById('popup');
    if (popupElement.classList.contains('hidden')) {
        popupElement.classList.remove('hidden');
    }
    let titleElement = document.getElementById('popup-title');
    let msg1Element = document.getElementById('popup-msg1');
    let msg2Element = document.getElementById('popup-msg2');
    titleElement.textContent = title;
    titleElement.className = titleClass;
    msg1Element.textContent = msg1;
    msg2Element.textContent = msg2;
}
function hidePopup() {
    let popupElement = document.getElementById('popup');
    if (!popupElement.classList.contains('hidden')) {
        popupElement.classList.add('hidden');
    }
}
let session;
let words;
if (localStorage.getItem('words')) {
    words = JSON.parse(localStorage.getItem('words'));
} else {
    document.getElementById('container').innerHTML = '<h1>Nie ustawiono żadnych słów!</h1><a href="index.html"><button>Powrót</button></a>';
}
if (localStorage.getItem('session')) {
    session = JSON.parse(localStorage.getItem('session'));
} else {
    session = {
        available : [...Array(words.length).keys()],
        current : '',
        fails: 0
    };
}
let continueBtn = document.getElementById('continue');
continueBtn.addEventListener('click', () => {
    hidePopup();
});
let checkBtn = document.getElementById('check-answer');
checkBtn.addEventListener('click', () => {
    let word = document.getElementById('answer').value;
    let correctWord = session.current[1];
    let wordMsg = `Twoja odp.: ${word}`;
    let correctWordMsg = `Rozwiązanie: ${correctWord}`;
    let similarity = roundDecimal(stringSimilarity(correctWord, word));
    let errorMargin = roundDecimal(1 - (1 / correctWord.length));
    let deleteCurrentWord = false;
    if (similarity === 1) {
        showPopup('DOBRZE!', wordMsg, correctWordMsg, 'green');
        deleteCurrentWord = true;
    } else if (similarity >= errorMargin) {
        showPopup('LITERÓWKA', wordMsg, correctWordMsg, 'orange');
        session.fails++;
    } else {
        showPopup('ŹLE!', wordMsg, correctWordMsg, 'red');
        session.fails++;
    }
    if (session.available.length === 1 && deleteCurrentWord) {
        continueBtn.addEventListener('click', () => {
            showPopup('PODSUMOWANIE', `Ilość słów: ${words.length}`, `Ilość nieudanych prób: ${session.fails}`);
            continueBtn.textContent = 'Powrót do menu';
            continueBtn.onclick = clearSession;
        });
    } else {
        continueBtn.onmouseup = function() {
            nextWord(session, words, deleteCurrentWord);
            document.getElementById('answer').value = '';
        }
    }
});
if (session.available.length !== 0) {
    nextWord(session, words, false);
} else {
    let container = document.getElementById('container');
    container.innerHTML = '<h1>Nie zaczales nowej sesji!</h1>';
    container.innerHTML += '<a href="index.html"><button>Powrot</button></a>';
}