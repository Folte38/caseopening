const SITE_PASSWORD = "OJT25";

function checkPassword() {
    const input = document.getElementById("password-input").value;
    const error = document.getElementById("password-error");

    if (input === SITE_PASSWORD) {
        document.getElementById("password-overlay").style.display = "none";
    } else {
        error.style.display = "block";
    }
}

// ================================
// STREAMER + KISTEN (1:1 DEINE DATEN)
// ================================
const streamerData = {
    obsick: {
        classicImg: "./items/obsick/classic.png",
        opImg: "./items/obsick/rank_op.png",
        classic: [
            { name: "64x Diamanten", img: "./items/obsick/classic/item1.png", chance: 25, rarity: "rare" },
            { name: "10.000$", img: "./items/obsick/classic/item2.png", chance: 45, rarity: "common" },
            { name: "5.000$", img: "./items/obsick/classic/item2.png", chance: 45, rarity: "common" },
            { name: "7.500$", img: "./items/obsick/classic/item2.png", chance: 45, rarity: "common" },
            { name: "15.000$", img: "./items/obsick/classic/item2.png", chance: 45, rarity: "common" },
            { name: "64x Diamantenerz", img: "./items/obsick/classic/item5.png", chance: 25, rarity: "rare" },
			{ name: "25.000$", img: "./items/obsick/classic/item3.png", chance: 25, rarity: "rare" },
            { name: "50.000$", img: "./items/obsick/classic/item3.png", chance: 12, rarity: "epic" },
            { name: "100.000$", img: "./items/obsick/classic/item3.png", chance: 5, rarity: "legendary" },
			{ name: "64x Diamanten Blöcke", img: "./items/obsick/classic/item8.png", chance: 5, rarity: "legendary" },
            { name: "10 Minuten Abbauen", img: "./items/obsick/classic/item7.png", chance: 12, rarity: "epic" },
            { name: "250.000$", img: "./items/obsick/classic/item3.png", chance: 0.05, rarity: "jackpot" },
            { name: "1x Leuchtfeuer", img: "./items/obsick/classic/item6.png", chance: 0.02, rarity: "jackpot" },
            { name: "Kisten Upgrade", img: "./items/obsick/classic/item9.png", chance: 0.01, rarity: "jackpot" },			
            { name: "OBSI JACKPOT", img: "./items/obsick/classic/jackpot_classic.png", chance: 0.0001, rarity: "jackpot" }
        ],
        op: [
            { name: "Drachenei", img: "./items/obsick/big/item1.png", chance: 12, rarity: "epic" },
			{ name: "25.000$", img: "./items/obsick/classic/item3.png", chance: 45, rarity: "common" },
			{ name: "75.000$", img: "./items/obsick/classic/item3.png", chance: 45, rarity: "common" },
			{ name: "Shulker", img: "./items/obsick/big/item3.png", chance: 25, rarity: "rare" },
			{ name: "50.000$", img: "./items/obsick/classic/item3.png", chance: 45, rarity: "common" },
			{ name: "64x Diamantenerz", img: "./items/obsick/classic/item5.png", chance: 45, rarity: "common" },
			{ name: "10 Minuten Abbauen", img: "./items/obsick/classic/item7.png", chance: 25, rarity: "rare" },
			{ name: "Plot Bewertung", img: "./items/obsick/big/item5.png", chance: 12, rarity: "epic" },
			{ name: "1x Respin", img: "./items/obsick/big/item2.png", chance: 12, rarity: "epic" },
			{ name: "64x Diamanten Blöcke", img: "./items/obsick/classic/item8.png", chance: 12, rarity: "epic" },
			{ name: "250.000$", img: "./items/obsick/classic/item3.png", chance: 5, rarity: "legendary" },
			{ name: "1x Leuchtfeuer", img: "./items/obsick/classic/item6.png", chance: 3, rarity: "legendary" },
			{ name: "3x Respin", img: "./items/obsick/big/item2.png", chance: 0.5, rarity: "jackpot" },
            { name: "OBSI JACKPOT", img: "./items/obsick/classic/jackpot_classic.png", chance: 0.1, rarity: "jackpot" }
        ]
    },

    rqvenrr: {
        classicImg: "./items/rqvenrr/classic.png",
        opImg: "./items/rqvenrr/rank_op.png",
        classic: [
            { name: "Coins", img: "./items/rqvenrr/classic/item1.png", chance: 50, rarity: "common" },
            { name: "RQ JACKPOT", img: "./items/rqvenrr/classic/jackpot_classic.png", chance: 5, rarity: "jackpot" }
        ],
        op: [
            { name: "RQ OP Item", img: "./items/rqvenrr/classic/item2.png", chance: 25, rarity: "legendary" }
        ]
    },

    tobi: {
        classicImg: "./items/tobi/classic.png",
        opImg: "./items/tobi/rank_op.png",
        classic: [
            { name: "Item 1", img: "./items/tobi/classic/item1.png", chance: 45, rarity: "common" },
            { name: "TOBI JACKPOT", img: "./items/tobi/classic/jackpot_classic.png", chance: 5, rarity: "jackpot" }
        ],
        op: [
            { name: "TOBI OP Item", img: "./items/tobi/classic/item2.png", chance: 25, rarity: "epic" }
        ]
    }
};

// ================================
// SOUNDS
// ================================
const spinSound = new Audio("./sounds/spin.mp3");
const winSound = new Audio("./sounds/win.mp3");
const jackpotSound = new Audio("./sounds/jackpot.mp3");

spinSound.volume = 0.25;
winSound.volume = 0.05;
jackpotSound.volume = 0.1;

// ================================
let activeStreamer = "obsick";
let selectedCaseType = null;

// DOM
const reel = document.getElementById("reel");
const marker = document.getElementById("marker");
const overlay = document.getElementById("winner-overlay");
const winnerImg = document.getElementById("winner-img");
const winnerName = document.getElementById("winner-name");
const winnerType = document.getElementById("winner-type");
const jackpotCountEl = document.getElementById("jackpot-count");
const classicImg = document.getElementById("classic-img");
const opImg = document.getElementById("op-img");
const openBtn = document.getElementById("open-btn");
const fireworks = document.getElementById("fireworks");


// ================================
// JACKPOT COUNTER (PRO STREAMER)
// ================================
function updateJackpot() {
    const key = "jackpot_" + activeStreamer;
    jackpotCountEl.innerText = Number(localStorage.getItem(key)) || 0;
}

function addJackpot() {
    const key = "jackpot_" + activeStreamer;
    let count = Number(localStorage.getItem(key)) || 0;
    count++;
    localStorage.setItem(key, count);
    jackpotCountEl.innerText = count;
}

// ================================
// STREAMER WECHSEL
// ================================
function setStreamer(id) {
    activeStreamer = id;

    document.querySelectorAll(".streamer-btn").forEach(btn =>
        btn.classList.remove("active")
    );

    document
        .querySelector(`.streamer-btn[onclick="setStreamer('${id}')"]`)
        .classList.add("active");

    classicImg.src = streamerData[id].classicImg;
    opImg.src = streamerData[id].opImg;

    selectedCaseType = null;
    openBtn.disabled = true;
    openBtn.classList.remove("enabled");

    updateJackpot();
}

// ================================
// KISTE AUSWÄHLEN
// ================================
function selectCase(type) {
    selectedCaseType = type;
    openBtn.disabled = false;
    openBtn.classList.add("enabled");
}

openBtn.onclick = () => {
    if (!selectedCaseType) return;
    openCase(selectedCaseType);
};

// ================================
function getRandomItem(pool) {
    const bag = [];
    pool.forEach(i => {
        for (let c = 0; c < i.chance; c++) bag.push(i);
    });
    return bag[Math.floor(Math.random() * bag.length)];
}

// ================================
// CASE ÖFFNEN – MARKER ENTSCHEIDET
// ================================
function openCase(type) {
    const pool = streamerData[activeStreamer][type];
    if (!pool) return;

    reel.innerHTML = "";

    spinSound.currentTime = 0;
    spinSound.play().catch(() => {});

    for (let i = 0; i < 40; i++) {
        const item = getRandomItem(pool);
        const div = document.createElement("div");
        div.className = "item " + item.rarity;
        div.dataset.name = item.name;
        div.dataset.rarity = item.rarity;
div.innerHTML = `
    <img src="${item.img}">
    <div class="item-name">${item.name}</div>
`;

        reel.appendChild(div);
    }

    reel.style.transition = "none";
    reel.style.transform = "translateX(0px)";

    setTimeout(() => {
        reel.style.transition = "transform 6s cubic-bezier(.15,.65,.15,1)";
        reel.style.transform = "translateX(-4000px)";
    }, 50);

    setTimeout(() => {
        const items = document.querySelectorAll(".item");
        const markerX = marker.getBoundingClientRect().left;

        let win = items[0];
        let dist = Infinity;

        items.forEach(i => {
            const r = i.getBoundingClientRect();
            const d = Math.abs((r.left + r.width / 2) - markerX);
            if (d < dist) {
                dist = d;
                win = i;
            }
        });

        winnerImg.src = win.querySelector("img").src;
        winnerName.innerText = win.dataset.name;
        winnerType.innerText = win.dataset.rarity.toUpperCase();
		// Winner-Type Farbe nach Seltenheit
winnerType.style.color = "";
winnerType.style.textShadow = "";

switch (win.dataset.rarity) {
    case "common":
        winnerType.style.color = "#bbb";
        break;
    case "rare":
        winnerType.style.color = "#3fa9f5";
        break;
    case "epic":
        winnerType.style.color = "#b84cff";
        break;
    case "legendary":
        winnerType.style.color = "gold";
        break;
    case "jackpot":
        winnerType.style.color = "red";
        winnerType.style.textShadow = "0 0 10px red";
        break;
}


if (win.dataset.rarity === "jackpot") {
    jackpotSound.currentTime = 0;
    jackpotSound.play().catch(() => {});
    addJackpot();

    // 🔥 Feuerwerk NUR BEIM JACKPOT
    fireworks.style.display = "block";
    setTimeout(() => {
        fireworks.style.display = "none";
    }, 2500);

} else {
    winSound.currentTime = 0;
    winSound.play().catch(() => {});
}

overlay.style.display = "flex";

    }, 6200);
}

overlay.onclick = () => overlay.style.display = "none";

// START
setStreamer("obsick");










