import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "DinoNuggie Clicker";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

//Step 1
const button = document.createElement("button");
button.innerText = "Click for 🦖";
app.append(button);


//Step 2
let counter: number = 0;
const counterReport = document.createElement("div");
counterReport.innerText = "Total DinoNuggies: " + Math.trunc(counter);
app.append(counterReport)

button.addEventListener("click", function () {
    counter++;
    counterReport.innerText = "Total DinoNuggies: " + counter;
    checkUpgradeAvailable();
});


//Step 3
/**
function autoClicker() {
    counter++;
    counterReport.innerText = "Total DinoNuggies: " + counter;
}

setInterval(autoClicker, 1000);
*/

let growthRate: number = 0;

//Step 4
let lastTime = Date.now();

function updateCounter() {
    const currentTime = Date.now();
    const deltaTime = (currentTime - lastTime) / 1000;
    counter += deltaTime * growthRate;
    lastTime = currentTime;

    counterReport.innerText = "Total DinoNuggies: " + Math.trunc(counter);
    checkUpgradeAvailable();
    requestAnimationFrame(updateCounter)
}

requestAnimationFrame(updateCounter);

//Step 5
const upgradeButton = document.createElement("button");
upgradeButton.innerText = "Buy 1 Growth Per Second\nCost: 10 DinoNuggies";
upgradeButton.disabled = true;
app.append(upgradeButton);

function checkUpgradeAvailable() {
    upgradeButton.disabled = counter < 10;
}

upgradeButton.addEventListener("click", function() {
    if (counter >= 10){
        counter -= 10;
        growthRate += 1;
        counterReport.innerText = "Total DinoNuggies: " + Math.trunc(counter);
        checkUpgradeAvailable();
    }
});