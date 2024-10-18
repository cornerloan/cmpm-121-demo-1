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
    growthText.innerText = "Current growth rate: " + growthRate.toFixed(1) + " DinoNuggies/sec";
    checkUpgradeAvailable();
    requestAnimationFrame(updateCounter)
}

requestAnimationFrame(updateCounter);

//Step 6

const growthText = document.createElement("div");
growthText.innerText = "Current growth rate: " + growthRate.toFixed(1) + " DinoNuggies/sec";
app.append(growthText);

const upgrade1Button = document.createElement("button");
upgrade1Button.innerText = "Buy 0.1 Growth Per Second\nCost: 10 DinoNuggies";
upgrade1Button.disabled = true;
app.append(upgrade1Button);
upgrade1Button.addEventListener("click", function() {
    if (counter >= 10){
        counter -= 10;
        growthRate += 0.1;
        counterReport.innerText = "Total DinoNuggies: " + Math.trunc(counter);
        checkUpgradeAvailable();
    }
});

const upgrade2Button = document.createElement("button");
upgrade2Button.innerText = "Buy 2 Growth Per Second\nCost: 100 DinoNuggies";
upgrade2Button.disabled = true;
app.append(upgrade2Button);
upgrade2Button.addEventListener("click", function() {
    if (counter >= 100){
        counter -= 100;
        growthRate += 2;
        counterReport.innerText = "Total DinoNuggies: " + Math.trunc(counter);
        checkUpgradeAvailable();
    }
});

const upgrade3Button = document.createElement("button");
upgrade3Button.innerText = "Buy 50 Growth Per Second\nCost: 1000 DinoNuggies";
upgrade3Button.disabled = true;
app.append(upgrade3Button);
upgrade3Button.addEventListener("click", function() {
    if (counter >= 1000){
        counter -= 1000;
        growthRate += 50;
        counterReport.innerText = "Total DinoNuggies: " + Math.trunc(counter);
        checkUpgradeAvailable();
    }
});

function checkUpgradeAvailable() {
    upgrade1Button.disabled = counter < 10;
    upgrade2Button.disabled = counter < 100;
    upgrade3Button.disabled = counter < 1000;
}