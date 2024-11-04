let gold = 0;

const goldDisplay = document.getElementById("gold");
const earnGoldButton = document.getElementById("earn-gold");

earnGoldButton.addEventListener("click", () => {
    gold += 1;
    goldDisplay.textContent = gold;
});
