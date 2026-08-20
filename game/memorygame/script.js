const levels = [
    ['💻','💻','🚀','🚀','🦊','🦊','🎨','🎨',
     '🍕','🍕','🎮','🎮','💡','💡','🎵','🎵'],

    ['👑','👑','🪐','🪐','💎','💎','🔥','🔥',
     '🌈','🌈','⚡','⚡','🐉','🐉','🎯','🎯',
     '🧠','🧠','🎭','🎭','🦄','🦄','🌙','🌙'],

    ['🐼','🐼','🦁','🦁','🐸','🐸','🐧','🐧',
     '🍎','🍎','🍉','🍉','🍔','🍔','🍩','🍩',
     '🚗','🚗','✈️','✈️','🚲','🚲','🚢','🚢'],

    ['⚽','⚽','🏀','🏀','🏏','🏏','🎾','🎾',
     '🎸','🎸','🎹','🎹','📚','📚','⭐','⭐',
     '🌍','🌍','☀️','☀️','🌊','🌊','🚀','🚀']
];

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === "match") {
        osc.type = "triangle";
        osc.frequency.value = 600;
    }

    if (type === "miss") {
        osc.type = "sawtooth";
        osc.frequency.value = 120;
    }

    gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(
        0.01,
        audioCtx.currentTime + 0.3
    );

    osc.start();
    osc.stop(audioCtx.currentTime + 0.3);
}

function updateBackgroundColor() {
    const hue1 = Math.floor(Math.random() * 360);
    const hue2 = Math.floor(Math.random() * 360);

    document.body.style.background =
        `linear-gradient(
            135deg,
            hsl(${hue1},70%,15%),
            hsl(${hue2},70%,8%)
        )`;
}

let currentLevel = 1;
let activeItems = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matchedPairsCount = 0;

const gridEl = document.getElementById("grid");
const levelDisplay = document.getElementById("level-display");
const movesDisplay = document.getElementById("moves-display");
const modal = document.getElementById("level-modal");

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] =
        [array[j], array[i]];
    }

    return array;
}

function buildGameMap() {

    gridEl.innerHTML = "";

    firstCard = null;
    secondCard = null;
    lockBoard = false;
    moves = 0;
    matchedPairsCount = 0;

    movesDisplay.textContent = moves;
    levelDisplay.textContent = currentLevel;

    const levelIndex =
        (currentLevel - 1) % levels.length;

    activeItems =
        shuffle([...levels[levelIndex]]);

    if (activeItems.length === 16) {
        gridEl.className = "game-grid grid-4x4";
    } else {
        gridEl.className = "game-grid grid-6x4";
    }

    activeItems.forEach(icon => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.dataset.icon = icon;

        card.innerHTML = `
            <div class="card-face card-back">?</div>
            <div class="card-face card-front">
                ${icon}
            </div>
        `;

        card.addEventListener(
            "click",
            flipCard
        );

        gridEl.appendChild(card);
    });
}

function flipCard() {

    if (lockBoard) return;

    if (this === firstCard) return;

    this.classList.add("flipped");

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;

    moves++;
    movesDisplay.textContent = moves;

    checkMatch();
}

function checkMatch() {

    if (
        firstCard.dataset.icon ===
        secondCard.dataset.icon
    ) {

        updateBackgroundColor();

        playSound("match");

        firstCard.removeEventListener(
            "click",
            flipCard
        );

        secondCard.removeEventListener(
            "click",
            flipCard
        );

        matchedPairsCount++;

        resetBoard();

        if (
            matchedPairsCount ===
            activeItems.length / 2
        ) {

            setTimeout(() => {

                modal.style.display = "flex";

            }, 700);
        }

    } else {

        lockBoard = true;

        updateBackgroundColor();

        playSound("miss");

        setTimeout(() => {

            firstCard.classList.remove(
                "flipped"
            );

            secondCard.classList.remove(
                "flipped"
            );

            resetBoard();

        }, 1000);
    }
}

function resetBoard() {

    firstCard = null;

    secondCard = null;

    lockBoard = false;
}

function advanceGame() {

    currentLevel++;

    modal.style.display = "none";

    updateBackgroundColor();

    buildGameMap();
}

buildGameMap();