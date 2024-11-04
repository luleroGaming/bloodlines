let prestigePoints = JSON.parse(localStorage.getItem('prestigePoints')) || { wealth: 0 };

function updatePrestigeDisplay() {
    document.getElementById("wealth-points").textContent = prestigePoints.wealth;
}

function buyUpgrade(type) {
    if (prestigePoints.wealth > 0) {
        prestigePoints.wealth -= 1;
        localStorage.setItem('prestigePoints', JSON.stringify(prestigePoints));
        // Appliquer l'amélioration - par exemple, augmenter les gains d'or de base
        // Code ici selon l'amélioration
        updatePrestigeDisplay();
    }
}

function returnToMain() {
    window.location.href = "../index.html";
}

updatePrestigeDisplay();
