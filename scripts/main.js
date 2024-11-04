// main.js - gérer la navigation ou des éléments globaux si nécessaire

// Fonction simple pour charger les points de prestige stockés (si nécessaire)
let prestigePoints = JSON.parse(localStorage.getItem('prestigePoints')) || { wealth: 0 };

// Mettre à jour l'affichage dans le menu principal (si besoin)
function displayPrestigePoints() {
    if (document.getElementById("prestige-points")) {
        document.getElementById("prestige-points").textContent = prestigePoints.wealth;
    }
}

window.onload = displayPrestigePoints;
