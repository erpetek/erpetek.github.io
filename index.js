const kapitelVier = [
    {"ger": "der Feiertag, -e", "pol": "dzień świąteczny"},
    {"ger": "das Fest, -e", "pol": "święto"},
    {"ger": "der Geburtstag, -e", "pol": "urodziny"},
    {"ger": "Heilige Drei Könige", "pol": "święto Trzech Króli"},
    {"ger": "der Hochzeitstag, -e", "pol": "rocznica ślubu"},
    {"ger": "das Neujahr", "pol": "Nowy Rok"},
    {"ger": "der Nikolaustag", "pol": "mikołajki"},
    {"ger": "das Silvester", "pol": "Sylwester"},
    {"ger": "das Weihnachten", "pol": "Boże Narodzenie"},
    {"ger": "feiern", "pol": "świętować"},
    {"ger": "sich hin|setzen", "pol": "usiąść"},
    {"ger": "lachen", "pol": "śmiać się"},
    {"ger": "ganz anders", "pol": "całkiem inaczej"},
    {"ger": "nie mehr", "pol": "nigdy więcej"},
    {"ger": "überhaupt nicht", "pol": "w ogóle, wcale"},
    {"ger": "über die Feiertage", "pol": "w okresie świątecznym"},
    {"ger": "bei der Firma arbeiten", "pol": "pracować w firmie"},
    {"ger": "in die Heimat fliegen", "pol": "lecieć do kraju ojczystego"},
    {"ger": "Urlaub nehmen", "pol": "brać urlop"},
    {"ger": "die Absage, -n", "pol": "odmowa"},
    {"ger": "die Einladung, -en", "pol": "zaproszenie"},
    {"ger": "die Geburtstagsparty, -s", "pol": "impreza urodzinowa"},
    {"ger": "das Geschenk, -e", "pol": "prezent"},
    {"ger": "das Lebensjahr, -e", "pol": "rok życia"},
    {"ger": "die Zusage, -n", "pol": "przyjęcie (zaproszenia)"},
    {"ger": "ein|laden", "pol": "zapraszać"},
    {"ger": "sich entscheiden", "pol": "decydować się"},
    {"ger": "mit|bringen", "pol": "przynosić ze sobą"},
    {"ger": "nach|feiern", "pol": "świętować w późniejszym terminie"},
    {"ger": "sorgen", "pol": "zadbać"},
    {"ger": "wünschen", "pol": "życzyć"},
    {"ger": "Bescheid sagen", "pol": "powiadomić"},
    {"ger": "einen Geburtstag ein|laden", "pol": "zapraszać na urodziny"},
    {"ger": "eine Party machen", "pol": "organizować imprezę"},
    {"ger": "18 (Jahre alt) werden", "pol": "kończyć 18 lat"},
    {"ger": "gute Laune", "pol": "dobry humor"},
    {"ger": "zu dritt", "pol": "w trójkę, w trzech, we troje"},
    {"ger": "Alles Gute zum Geburtstag!", "pol": "Wszystkiego najlepszego z okazji urodzin!"},
    {"ger": "Zum Geburtstag viel Glück!", "pol": "Dużo szczęścia z okazji urodzin!"},
    {"ger": "Lass es dir gutgehen!", "pol": "Powodzenia!"},
    {"ger": "Herzlichen Glückwunsch!", "pol": "Serdeczne życzenia!"},
    {"ger": "die 3-Stunden-Exkursion, -en", "pol": "wycieczka trzygodzinna"},
    {"ger": "das 4-Gänge-Menü, -s", "pol": "czterodaniowe menu"},
    {"ger": "das Farbberatung, -en", "pol": "doradztwo w doborze kolorów"},
    {"ger": "das Geburtstagsgeschenk, -e", "pol": "prezent urodzinowy"},
    {"ger": "die Geschenkidee, -n", "pol": "pomysł na prezent"},
    {"ger": "der Grillkurs, -e", "pol": "kurs grillowania"},
    {"ger": "die Höhle, -n", "pol": "jaskinia"},
    {"ger": "die Höhlenwanderung, -en", "pol": "wędrówka po jaskiniach"},
    {"ger": "die Leihausrüstung, -en", "pol": "wypożyczony sprzęt"},
    {"ger": "der Saunabesuch, -e", "pol": "wizyta w saunie"},
    {"ger": "die Shoppingtour, -en", "pol": "wyprawa na zakupy"},
    {"ger": "das Sicherheitstraining, -s", "pol": "trening bezpieczeństwa"},
    {"ger": "die Stilberatung, -en", "pol": "doradztwo stylu"},
    {"ger": "das Thermalbad, -er", "pol": "kąpielisko termalne"},
    {"ger": "das Traumgeschenk, -e", "pol": "wymarzony prezent"},
    {"ger": "die Wahl, -en", "pol": "wybór"},
    {"ger": "der Warenkorb, -e", "pol": "koszyk"},
    {"ger": "inklusive", "pol": "wliczone (w cenę)"},
    {"ger": "schenken", "pol": "dawać w prezencie"},
    {"ger": "besondere Geschenke", "pol": "wyjątkowe prezenty"},
    {"ger": "gelungene Geschenke", "pol": "udane prezenty"},
    {"ger": "erfahrene Guides", "pol": "doświadczeni przewodnicy"},
    {"ger": "Komplex von Höhlen unter Anleitung", "pol": "kompleks jaskiń pod okiem instruktora"},
    {"ger": "sich amüsieren", "pol": "bawić się"},
    {"ger": "sich langweilen", "pol": "nudzić się"},
    {"ger": "sich unterhalten", "pol": "bawić się, rozmawiać"},
    {"ger": "nichts ab|bekommen", "pol": "nic nie dostać"},
    {"ger": "sich total freuen", "pol": "cieszyć się niesamowicie"},
    {"ger": "Geschenke bekommen", "pol": "dostawać prezenty"},
    {"ger": "Gäste ein|laden", "pol": "zapraszać gości"},
    {"ger": "sich super unterhalten", "pol": "rozmawiać super"},
    {"ger": "Spaß haben", "pol": "mieć przyjemność"},
    {"ger": "Keine Ahnung.", "pol": "Nie mam pojęcia."},
    {"ger": "Echt super!", "pol": "Naprawdę świetnie!"},
    {"ger": "Echt schade.", "pol": "Szkoda."},
    {"ger": "Ich freue mich schon darauf.", "pol": "Już się na to cieszę."},
    {"ger": "So ist das Leben.", "pol": "Takie jest życie."},
    {"ger": "Schauen wir mal.", "pol": "Zobaczymy."}
];

const kapitelVierZdania = [
    {"ger": "Ist der 1. (erste) Januar ein Montag?", "pol": "Czy 1 stycznia wypada w poniedziałek?"},
    {"ger": "Nein, der 1. (erste) Januar ist ein Sonntag.", "pol": "Nie, 1 stycznia jest w niedzielę."},
    {"ger": "Ist der 31. (einunddreißigste) Dezember frei?", "pol": "Czy 31 grudnia jest dniem wolnym?"},
    {"ger": "Ja, Silvester ist schulfrei.", "pol": "Tak, Sylwester jest dniem wolnym w szkołach."},
    {"ger": "Was feierst du am 3. (dritten) April?", "pol": "Co świętujesz 3 kwietnia?"},
    {"ger": "Den Geburtstag von meiner Oma.", "pol": "Urodziny mojej babci."},
    {"ger": "Wann arbeitet man nicht?", "pol": "Kiedy się nie pracuje?"},
    {"ger": "Zwischen den Jahren.", "pol": "W okresie międzyświątecznym."},
    {"ger": "Wann hast du Geburtstag?", "pol": "Kiedy masz urodziny?"},
    {"ger": "Ich habe am 2. (zweiten) Juni Geburtstag.", "pol": "Mam urodziny 2 czerwca."},
    {"ger": "Wann und wo machst du die Geburtstagsparty?", "pol": "Gdzie i kiedy robisz imprezę urodzinową?"},
    {"ger": "Am Samstag bei mir zu Hause.", "pol": "W sobotę u mnie w domu."},
    {"ger": "Kommst du zu meiner Party?", "pol": "Przyjdziesz na moją imprezę?"},
    {"ger": "Danke für die Einladung. Ich komme gern.", "pol": "Dziękuję za zaproszenie. Chętnie przyjdę."},
    {"ger": "Ich lade dich zu meinem Geburtstag ein.", "pol": "Zapraszam cię na moje urodziny."},
    {"ger": "Leider kann ich nicht kommen.", "pol": "Niestety nie mogę przyjść."},
    {"ger": "Was schenken wir Hannes?", "pol": "Co podarujemy Hannesowi?"},
    {"ger": "Wir schenken ihm einen Fallschirmsprung.", "pol": "Podarujemy mu skok ze spadochronem."},
    {"ger": "Was geben wir Amelie?", "pol": "Co damy Amelie?"},
    {"ger": "Wir geben ihr eine Sportuhr.", "pol": "Damy jej sportowy zegarek."},
    {"ger": "Wie gefällt dir diese Idee?", "pol": "Jak podoba ci się ten pomysł?"},
    {"ger": "Ich finde, dass der Grillkurs eine gute Idee ist.", "pol": "Uważam, że kurs grillowania to dobry pomysł."},
    {"ger": "Was ist dein Traumgeschenk?", "pol": "Jaki jest twój wymarzony prezent?"},
    {"ger": "Mir gefällt die Höhlenwanderung.", "pol": "Podoba mi się wędrówka po jaskiniach."},
    {"ger": "Wie war es auf der Party?", "pol": "Jak było na imprezie?"},
    {"ger": "Na ja, irgendwie langweilig.", "pol": "Tak sobie, jakoś nudno."},
    {"ger": "Hast du dich gut amüsiert?", "pol": "Czy dobrze się bawiłeś?"},
    {"ger": "Ja, ich amüsiere mich immer gut.", "pol": "Tak, zawsze się dobrze bawię."},
    {"ger": "Das Essen hat mir gut geschmeckt.", "pol": "Jedzenie mi smakowało."},
    {"ger": "Ich hatte nach der Party noch Hunger.", "pol": "A ja po imprezie byłem jeszcze głodny."},
    {"ger": "Ich konnte leider nicht kommen.", "pol": "Nie mogłam niestety przyjść."},
    {"ger": "Echt schade.", "pol": "Naprawdę szkoda."}
]

const porzadkowe = [
    {"ger": "erste", "pol": "pierwszy"},
    {"ger": "zweite", "pol": "drugi"},
    {"ger": "dritte", "pol": "trzeci"},
    {"ger": "vierte", "pol": "czwarty"},
    {"ger": "fünfte", "pol": "piąty"},
    {"ger": "sechste", "pol": "szósty"},
    {"ger": "siebte", "pol": "siódmy"},
    {"ger": "achte", "pol": "ósmy"},
    {"ger": "neunte", "pol": "dziewiąty"},
    {"ger": "zehnte", "pol": "dziesiąty"},
    {"ger": "elfte", "pol": "jedenasty"},
    {"ger": "zwölfte", "pol": "dwunasty"},
    {"ger": "dreizehnte", "pol": "trzynasty"},
    {"ger": "vierzehnte", "pol": "czternasty"},
    {"ger": "fünfzehnte", "pol": "piętnasty"},
    {"ger": "sechzehnte", "pol": "szesnasty"},
    {"ger": "siebzehnte", "pol": "siedemnasty"},
    {"ger": "achtzehnte", "pol": "osiemnasty"},
    {"ger": "neunzehnte", "pol": "dziewiętnasty"},
    {"ger": "zwanzigste", "pol": "dwudziesty"}
]

let preferences = [false, false, false];
let availableWords = create_word_array(true, true, true);
let answer;

const appDiv = document.getElementById("app");
const resultDiv = document.getElementById("result");

const lastInputSpan = document.getElementById("last-input");
const expectedSpan = document.getElementById("output");
const toTranslateSpan = document.getElementById("to-translate");

const input = document.getElementById("input");
const submitBtn = document.getElementById("submit");
const okBtn = document.getElementById("ok");

const opcje = document.getElementById("opcje");
const optionsok = document.getElementById("optionsok");
const optionsDiv = document.getElementById("options");
const ansDiv = document.getElementById("ans");

let mode = 0;

function create_word_array() {
    let array = [];
    if (preferences[0]) array = array.concat(kapitelVier);
    if (preferences[1]) array = array.concat(kapitelVierZdania);
    if (preferences[2]) array = array.concat(porzadkowe);
    return array;
}

function apply_settings() {
    let ok = document.querySelectorAll(".option input:checked");
    preferences[0] = false;
    preferences[1] = false;
    preferences[2] = false;
    ok.forEach(e => {
        switch (e.id) {
            case "gerpol":
                mode = 0;
                break;
            case "polger":
                mode = 1;
                break;
            case "random":
                mode = 2;
                break;
            case "keins":
                preferences[0] = true;
                break;
            case "kzwei":
                preferences[1] = true;
                break;
            case "prateritum":
                preferences[2] = true;
                break;
            default:
                break;
        }
    });
    availableWords = create_word_array();
}

{
    let opts = JSON.parse(localStorage.getItem("options"));
    if (opts !== undefined && opts !== null) {
        for (let i = 0; i < opts.length; i++) {
            let e = document.getElementById(opts[i][0]);
            e.checked = opts[i][1];
        }
    }
    apply_settings();
}

function rng(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function draw_word() {
    let randomIndex = rng(0, availableWords.length);
    let word = availableWords[randomIndex];
    availableWords.splice(randomIndex, 1);
    let t = word.ger;
    let a = word.pol;
    if (word.pra !== undefined) {
        t = `${t} => ${word.pra}`;
    }
    let ok = mode;
    if (ok === 2) {
        ok = rng(0, 2);
    }
    if (ok) {
        return [a, t];
    } else {
        return [t, a];
    }
}

function submit() {
    if (answer === undefined) {
        answer = draw_word();
        toTranslateSpan.textContent = answer[0];
        return;
    }
    lastInputSpan.textContent = input.value;
    ansDiv.textContent = answer[0];
    expectedSpan.textContent = answer[1];
    appDiv.classList.add("hidden");
    resultDiv.classList.remove("hidden");
}

submitBtn.addEventListener("click", submit);

function new_word() {
    answer = draw_word();
    toTranslateSpan.textContent = answer[0];
    if (availableWords.length === 0)
        availableWords = create_word_array(preferences[0], preferences[1], preferences[2]);
    input.value = "";
    appDiv.classList.remove("hidden");
    resultDiv.classList.add("hidden");
    input.focus();
}

okBtn.addEventListener("click", new_word);

opcje.addEventListener("click", function() {
     optionsDiv.classList.remove("hidden");
});

optionsok.addEventListener("click", function() {
    optionsDiv.classList.add("hidden");
    let real = document.querySelectorAll(".option input");
    let s = [];
    real.forEach(e => {
         s.push([e.id, e.checked]);
    });
    localStorage.setItem("options", JSON.stringify(s));
    apply_settings();
    answer = undefined;
    toTranslateSpan.textContent = "Kliknij przycisk aby wylosowac ok?";
});

const tenadole = document.getElementById("te-na-dole");
document.querySelector("#tenadole").addEventListener("click", () => {
    tenadole.classList.toggle("hidden");
});

document.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        if (document.activeElement === input && !appDiv.classList.contains("hidden")) {
            submit();
        } else if (appDiv.classList.contains("hidden")) {
            new_word();
        }
    }
});