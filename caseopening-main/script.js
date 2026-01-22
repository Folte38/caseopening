const SITE_PASSWORD = "OJT25";

function checkPassword() {
    const input = document.getElementById("password-input").value;
    const error = document.getElementById("password-error");

    if (input === SITE_PASSWORD) {
        document.getElementById("password-overlay").style.display = "none";
        // Start obsick avatar animation after successful password entry
        animateObsickAvatar();
    } else {
        error.style.display = "block";
    }
}

// ENTER-Taste für Passwort-Eingabe
document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password-input");
    if (passwordInput) {
        passwordInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                checkPassword();
            }
        });
    }
});

// ================================
// OBSICK AVATAR ANIMATION
// ================================
function animateObsickAvatar() {
    const obsickAvatar = document.querySelector('.obsick-avatar');
    if (!obsickAvatar) return;
    
    // Phase 1: Professionelles Einfliegen von links
    obsickAvatar.style.transition = 'transform 1.2s cubic-bezier(0.23, 1, 0.32, 1)';
    obsickAvatar.style.transform = 'translateY(0) translateX(calc(50vw + 100px)) rotate(-5deg) scale(1.2)';
    
    setTimeout(() => {
        // Subtile Anpassung in der Mitte
        obsickAvatar.style.transition = 'transform 0.4s ease-out';
        obsickAvatar.style.transform = 'translateY(-10px) translateX(calc(50vw + 100px)) rotate(2deg) scale(1.15)';
    }, 1200);
    
    setTimeout(() => {
        // Perfekte Zentrierung
        obsickAvatar.style.transition = 'transform 0.3s ease-in-out';
        obsickAvatar.style.transform = 'translateY(0) translateX(calc(50vw + 100px)) rotate(0deg) scale(1.2)';
    }, 1600);
    
    // Nach der Pause: Professionelles Ausfliegen nach rechts
    setTimeout(() => {
        obsickAvatar.style.transition = 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
        obsickAvatar.style.transform = 'translateY(20px) translateX(calc(100vw + 200px)) rotate(3deg) scale(1.1)';
        
        // Reset nach der Animation
        setTimeout(() => {
            obsickAvatar.style.transition = 'none';
            obsickAvatar.style.transform = 'translateY(0)';
        }, 1500);
    }, 2600); // 1.6s (erste Animation) + 1s pause
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
    }
};

// ================================
// NEW FEATURES - GLOBAL VARIABLES
// ================================
let soundEnabled = true;
let stats = {
    totalOpens: 0,
    totalJackpots: 0,
    totalLegendary: 0,
    totalEpic: 0
};
let history = [];
let autoOpenInterval = null;
let isAutoOpening = false;

// PARTICLES SYSTEM
class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particles-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });
        this.createParticles();
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        for (let i = 0; i < 80; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 4 + 1,
                speedX: (Math.random() - 0.5) * 0.8,
                speedY: (Math.random() - 0.5) * 0.8,
                opacity: Math.random() * 0.6 + 0.2,
                color: this.getRandomParticleColor(),
                originalSpeedX: (Math.random() - 0.5) * 0.8,
                originalSpeedY: (Math.random() - 0.5) * 0.8
            });
        }
    }

    getRandomParticleColor() {
        const colors = [
            'rgba(240, 208, 128, ', // Gold
            'rgba(63, 169, 245, ',  // Blue (Rare)
            'rgba(184, 76, 255, ',  // Purple (Epic)
            'rgba(220, 100, 100, ',  // Red (Jackpot)
            'rgba(255, 255, 255, '  // White
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    createBurst(x, y, color, count = 30) {
        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 * i) / count;
            const speed = Math.random() * 5 + 3;
            this.particles.push({
                x: x,
                y: y,
                size: Math.random() * 6 + 2,
                speedX: Math.cos(angle) * speed,
                speedY: Math.sin(angle) * speed,
                opacity: 1,
                color: color,
                isBurst: true,
                life: 1
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles = this.particles.filter(particle => {
            // Mouse interaction
            const dx = this.mouseX - particle.x;
            const dy = this.mouseY - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150 && !particle.isBurst) {
                const force = (150 - distance) / 150;
                particle.speedX += (dx / distance) * force * 0.2;
                particle.speedY += (dy / distance) * force * 0.2;
            } else if (!particle.isBurst) {
                // Return to original speed
                particle.speedX += (particle.originalSpeedX - particle.speedX) * 0.05;
                particle.speedY += (particle.originalSpeedY - particle.speedY) * 0.05;
            }

            // Update position
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            // Handle burst particles
            if (particle.isBurst) {
                particle.life -= 0.02;
                particle.opacity = particle.life;
                particle.speedX *= 0.98;
                particle.speedY *= 0.98;
                particle.size *= 0.98;
                
                if (particle.life <= 0) return false;
            }

            // Bounce off walls
            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.speedX *= -1;
                if (particle.isBurst) return false;
            }
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.speedY *= -1;
                if (particle.isBurst) return false;
            }

            // Draw particle
            this.ctx.fillStyle = particle.color + particle.opacity + ')';
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fill();

            return true;
        });

        // Maintain minimum particle count
        while (this.particles.filter(p => !p.isBurst).length < 60) {
            this.createParticles();
        }

        requestAnimationFrame(() => this.animate());
    }
}

// SOUND MANAGEMENT
function toggleSound() {
    soundEnabled = !soundEnabled;
    document.getElementById('sound-icon').textContent = soundEnabled ? '🔊' : '🔇';
    
    if (!soundEnabled) {
        spinSound.pause();
        winSound.pause();
        jackpotSound.pause();
    }
}

function playSound(sound) {
    if (soundEnabled) {
        sound.currentTime = 0;
        sound.play().catch(() => {});
    }
}

// STATISTICS MANAGEMENT
function updateStats() {
    document.getElementById('total-opens').textContent = stats.totalOpens;
    document.getElementById('total-jackpots').textContent = stats.totalJackpots;
    document.getElementById('total-legendary').textContent = stats.totalLegendary;
    document.getElementById('total-epic').textContent = stats.totalEpic;
    
    localStorage.setItem('caseStats', JSON.stringify(stats));
}

function addToHistory(item) {
    history.unshift({
        name: item.name,
        img: item.img,
        rarity: item.rarity,
        timestamp: new Date().toLocaleTimeString()
    });
    
    if (history.length > 10) history.pop();
    
    localStorage.setItem('caseHistory', JSON.stringify(history));
    renderHistory();
}

function renderHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    
    history.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="history-item-info">
                <div class="history-item-name">${item.name}</div>
                <div class="history-item-rarity">${item.rarity} - ${item.timestamp}</div>
            </div>
        `;
        historyList.appendChild(historyItem);
    });
}

function toggleStats() {
    document.getElementById('stats-panel').classList.toggle('show');
}

function toggleHistory() {
    document.getElementById('history-panel').classList.toggle('show');
}

// KEYBOARD SHORTCUTS
document.addEventListener('keydown', (e) => {
    if (document.getElementById('password-overlay').style.display !== 'none') return;
    
    switch(e.key) {
        case '1':
            selectCase('classic');
            break;
        case '2':
            selectCase('op');
            break;
        case 'Enter':
        case ' ':
            if (!openBtn.disabled) {
                openCase(selectedCaseType);
            }
            break;
        case 's':
        case 'S':
            toggleSound();
            break;
        case 'a':
        case 'A':
            toggleAutoOpen();
            break;
    }
});

// AUTO OPEN FEATURE
function toggleAutoOpen() {
    if (isAutoOpening) {
        clearInterval(autoOpenInterval);
        isAutoOpening = false;
        openBtn.textContent = 'Kiste öffnen';
    } else {
        if (!selectedCaseType) {
            selectCase('classic');
        }
        isAutoOpening = true;
        openBtn.textContent = 'Auto-Open Stop';
        autoOpenInterval = setInterval(() => {
            if (selectedCaseType) {
                openCase(selectedCaseType);
            }
        }, 12000); // Open every 12 seconds (10s animation + 2s pause)
    }
}

// HOVER SOUNDS
function addHoverSounds() {
    const buttons = document.querySelectorAll('button, .streamer-btn, #classic-img, #op-img');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            if (soundEnabled) {
                const hoverSound = new Audio('./sounds/hover.mp3');
                hoverSound.volume = 0.1;
                hoverSound.play().catch(() => {});
            }
        });
    });
}

// LOAD SAVED DATA
function loadSavedData() {
    const savedStats = localStorage.getItem('caseStats');
    if (savedStats) {
        stats = JSON.parse(savedStats);
        updateStats();
    }
    
    const savedHistory = localStorage.getItem('caseHistory');
    if (savedHistory) {
        history = JSON.parse(savedHistory);
        renderHistory();
    }
}

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    // Initialize particle system
    window.particleSystem = new ParticleSystem();
    
    // Load saved data
    loadSavedData();
    
    // Add hover sounds
    addHoverSounds();
    
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
});

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
    
    // Clear case selection
    classicImg.classList.remove("selected");
    opImg.classList.remove("selected");

    updateJackpot();
}

// ================================
// KISTE AUSWÄHLEN
// ================================
function selectCase(type) {
    selectedCaseType = type;
    openBtn.disabled = false;
    openBtn.classList.add("enabled");
    
    // Remove selected class from both images
    classicImg.classList.remove("selected");
    opImg.classList.remove("selected");
    
    // Add selected class to the clicked image
    if (type === "classic") {
        classicImg.classList.add("selected");
    } else if (type === "op") {
        opImg.classList.add("selected");
    }
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

    // Update statistics
    stats.totalOpens++;
    updateStats();

    // 3D Open Animation
    const selectedImg = document.getElementById(type === 'classic' ? 'classic-img' : 'op-img');
    selectedImg.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    selectedImg.style.transform = 'scale(1.2) rotateY(720deg) rotateX(360deg)';

    // Start subtle visual effects
    document.getElementById('reel').classList.add('spinning');
    document.getElementById('marker').classList.add('spinning');

    reel.innerHTML = "";

    playSound(spinSound);

    for (let i = 0; i < 40; i++) {
        const item = getRandomItem(pool);
        const div = document.createElement("div");
        div.className = "item " + item.rarity + " spinning";
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
        reel.style.transition = "transform 10s cubic-bezier(.15,.65,.15,1)";
        reel.style.transform = "translateX(-4000px)";
        
        // Reset case animation
        selectedImg.style.transform = '';
    }, 50);

    setTimeout(() => {
        // Stop visual effects
        document.getElementById('reel').classList.remove('spinning');
        document.getElementById('marker').classList.remove('spinning');
        
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

        // Remove spinning class from all items
        items.forEach(item => {
            item.classList.remove('spinning');
        });

        const winItem = {
            name: win.dataset.name,
            img: win.querySelector("img").src,
            rarity: win.dataset.rarity
        };

        // Create particle burst based on rarity
        const rarityColors = {
            common: 'rgba(187, 187, 187, ',
            rare: 'rgba(63, 169, 245, ',
            epic: 'rgba(184, 76, 255, ',
            legendary: 'rgba(240, 208, 128, ',
            jackpot: 'rgba(220, 100, 100, '
        };
        
        const burstColor = rarityColors[winItem.rarity] || 'rgba(255, 255, 255, ';
        const burstCount = winItem.rarity === 'jackpot' ? 50 : 20;
        
        // Get particle system instance and create burst
        if (window.particleSystem) {
            const markerRect = marker.getBoundingClientRect();
            window.particleSystem.createBurst(
                markerRect.left + markerRect.width / 2,
                markerRect.top + markerRect.height / 2,
                burstColor,
                burstCount
            );
        }

        // Update statistics based on rarity
        switch (win.dataset.rarity) {
            case "jackpot":
                stats.totalJackpots++;
                break;
            case "legendary":
                stats.totalLegendary++;
                break;
            case "epic":
                stats.totalEpic++;
                break;
        }
        updateStats();

        // Add to history
        addToHistory(winItem);

        winnerImg.src = winItem.img;
        winnerName.innerText = winItem.name;
        winnerType.innerText = winItem.rarity.toUpperCase();
        // Winner-Type Farbe nach Seltenheit
        winnerType.style.color = "";
        winnerType.style.textShadow = "";

        switch (winItem.rarity) {
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
                winnerType.style.color = "#f0d080";
                break;
            case "jackpot":
                winnerType.style.color = "#dc6464";
                winnerType.style.textShadow = "0 0 10px #dc6464";
                break;
        }

        if (winItem.rarity === "jackpot") {
            playSound(jackpotSound);
            addJackpot();

            // Feuerwerk NUR BEIM JACKPOT
            fireworks.style.display = "block";
            setTimeout(() => {
                fireworks.style.display = "none";
            }, 2500);

        } else {
            playSound(winSound);
        }

        overlay.style.display = "flex";

    }, 10200);
}

overlay.onclick = () => overlay.style.display = "none";

// START
setStreamer("obsick");










