const wordListParent = document.getElementById('list');
const wordListElement = document.createElement('li');
wordListElement.innerHTML = '<input type="text" required/> <span>-></span> <input type="text" required/> <button onclick="removeWord(this)">X</button>';
function addWord() {
    document.querySelector('#list').appendChild(wordListElement.cloneNode(true));
}
function removeWord(element) {
    element.parentElement.parentElement.removeChild(element.parentElement);
}
function getWords() {
    let words = [ ];
    let elements = document.querySelectorAll('#list li');
    if (elements.length > 0) {
        elements.forEach(element => {
            let word1 = element.querySelector('input:nth-child(1)').value;
            let word2 = element.querySelector('input:nth-child(3)').value;
            if (word1 !== '' && word2 !== '') {
                words.push([word1, word2]);
            }
        });
    }
    return words;
}
function setWords(words, autoResize = true) {
    let listElement = document.querySelector('#list');
    listElement.innerHTML = '';
    let elements = document.querySelectorAll('#list li');
    for (let i = 0; i < words.length; i++) {
        let element = elements[i];
        if (!element && autoResize) {
            element = wordListElement.cloneNode(true);
            wordListParent.appendChild(element);
        } else if (!element && !autoResize) {
            break;
        }
        let elem1 = element.querySelector('input:nth-child(1)');
        let elem2 = element.querySelector('input:nth-child(3)');
        elem1.value = words[i][0];
        elem2.value = words[i][1];
    }
}
function loadPreset(presetName) {
    let element = document.getElementById('load-preset');
    if (!element.classList.contains('hidden')) {
        element.classList.add('hidden');
    }
    let presets = [];
    if (localStorage.getItem('presets')) {
        presets = JSON.parse(localStorage.getItem('presets'));
    } else {
        return;
    }
    for (let i = 0; i < presets.length; i++) {
        if (presets[i].name === presetName) {
            setWords(presets[i].words);
            break;
        }
    }
}
function savePreset(presetName) {
    let presets = [];
    if (localStorage.getItem('presets')) {
        presets = JSON.parse(localStorage.getItem('presets'));
    }
    let preset = {
        name: presetName,
        words: getWords()
    };
    presets.push(preset);
    localStorage.setItem('presets', JSON.stringify(presets));
}
if (localStorage.getItem('words')) {
    setWords(JSON.parse(localStorage.getItem('words')));
}
let backBtn = document.getElementById('back');
backBtn.addEventListener('click', () => {
    localStorage.setItem('words', JSON.stringify(getWords()));
});
let saveBtn = document.getElementById('save');
saveBtn.addEventListener('click', () => {
    let element = document.getElementById('save-preset');
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    }
});
let confirmSaveBtn = document.querySelector('#save-preset .save');
confirmSaveBtn.addEventListener('click', () => {
    let presetName = document.getElementById('preset-name').value;
    savePreset(presetName);
    let element = document.getElementById('save-preset');
    element.classList.add('hidden');
});
let cancelSaveBtn = document.querySelector('#save-preset .cancel');
cancelSaveBtn.addEventListener('click', () => {
    let element = document.getElementById('save-preset');
    element.classList.add('hidden');
});
let loadBtn = document.getElementById('load');
loadBtn.addEventListener('click', () => {
    let element = document.getElementById('load-preset');
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    }
    let presets = [ ];
    if (localStorage.getItem('presets')) {
        presets = JSON.parse(localStorage.getItem('presets'));
    }
    let list = document.getElementById('preset-list');
    list.innerHTML = '';
    for (let i = 0; i < presets.length; i++) {
        let li = document.createElement('li');
        let button = document.createElement('button');
        button.onclick = function() {loadPreset(this.textContent)};
        button.textContent = presets[i].name;
        li.appendChild(button);
        list.appendChild(li);
    }
});
let cancelLoadBtn = document.querySelector('#load-preset .cancel');
cancelLoadBtn.addEventListener('click', () => {
    let element = document.getElementById('load-preset');
    element.classList.add('hidden');
});