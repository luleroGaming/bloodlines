let gold = 1;
let goldPerSecond = 0;
let generators = [
    { cost: 10, income: 1, owned: 0 },
    { cost: 100, income: 10, owned: 0 },
    { cost: 1000, income: 100, owned: 0 }
];
let prestigePoints = JSON.parse(localStorage.getItem('prestigePoints')) || { wealth: 0 };

function updateDisplay() {
    document.getElementById("gold").textContent = gold;
}

function buyGenerator(index) {
    const generator = generators[index];
    if (gold >= generator.cost) {
        gold -= generator.cost;
        generator.owned += 1;
        goldPerSecond += generator.income;
        generator.cost = Math.floor(generator.cost * 1.15); // Augmenter le coût
        updateDisplay();
    }
}

function prestige() {
    if (gold >= 10000) { // Exige une certaine quantité d'or pour le prestige
        prestigePoints.wealth += 1;  // Gagner un point de prestige "wealth"
        localStorage.setItem('prestigePoints', JSON.stringify(prestigePoints));
        resetGame();
    }
}

function resetGame() {
    gold = 0;
    goldPerSecond = 0;
    generators.forEach(generator => {
        generator.owned = 0;
        generator.cost = Math.floor(generator.cost / Math.pow(1.15, generator.owned));
    });
    updateDisplay();
}

function gameLoop() {
    gold += goldPerSecond;
    updateDisplay();
}

setInterval(gameLoop, 1000);
