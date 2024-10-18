import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "🦖DinoNuggie🦖 Clicker";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

//Step 1
const button = document.createElement("button");
button.innerText = "Click for 🦖DinoNuggies🦖";
app.append(button);


//Step 2
let counter: number = 0;
const counterReport = document.createElement("div");
counterReport.innerText = "Total 🦖DinoNuggies🦖: " + Math.trunc(counter);
app.append(counterReport)

button.addEventListener("click", function () {
    counter++;
    counterReport.innerText = "Total 🦖DinoNuggies🦖: " + counter;
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

    counterReport.innerText = "Total 🦖DinoNuggies🦖: " + Math.trunc(counter);
    growthText.innerText = "Current growth rate: " + growthRate.toFixed(1) + " 🦖DinoNuggies🦖/sec";
    checkUpgradeAvailable();
    requestAnimationFrame(updateCounter)
}

requestAnimationFrame(updateCounter);

//Step 6

const growthText = document.createElement("div");
growthText.innerText = "Current growth rate: " + growthRate.toFixed(1) + " 🦖DinoNuggies🦖/sec";
app.append(growthText);

const upgrade1Button = document.createElement("button");
let upgrade1Price: number = 10;

upgrade1Button.innerText = "Buy ⛏️Archeologist⛏️\n0.1 Growth Per Second\nCost: " + upgrade1Price.toFixed(2) + " 🦖DinoNuggies🦖";
upgrade1Button.disabled = true;
app.append(upgrade1Button);
upgrade1Button.addEventListener("click", function() {
    if (counter >= upgrade1Price){
        counter -= upgrade1Price;
        growthRate += 0.1;
        upgrade1Price *= 1.15;
        counterReport.innerText = "Total 🦖DinoNuggies🦖: " + Math.trunc(counter);
        upgrade1Button.innerText = "Buy ⛏️Archeologist⛏️\n0.1 Growth Per Second\nCost: " + upgrade1Price.toFixed(2) + " 🦖DinoNuggies🦖";
        checkUpgradeAvailable();
    }
});

const upgrade2Button = document.createElement("button");
let upgrade2Price: number = 100;
upgrade2Button.innerText = "Buy 👨‍🍳Chef👨‍🍳\n2 Growth Per Second\nCost: " + upgrade2Price.toFixed(2) + " 🦖DinoNuggies🦖";
upgrade2Button.disabled = true;
app.append(upgrade2Button);
upgrade2Button.addEventListener("click", function() {
    if (counter >= upgrade2Price){
        counter -= upgrade2Price;
        growthRate += 2;
        upgrade2Price *= 1.15;
        counterReport.innerText = "Total 🦖DinoNuggies🦖: " + Math.trunc(counter);
        upgrade2Button.innerText = "Buy 👨‍🍳Chef👨‍🍳\n2 Growth Per Second\nCost: " + upgrade2Price.toFixed(2) + " 🦖DinoNuggies🦖";
        checkUpgradeAvailable();
    }
});

const upgrade3Button = document.createElement("button");
let upgrade3Price: number = 1000;
upgrade3Button.innerText = "Buy 🏭DinoNuggie Factory🏭\n50 Growth Per Second\nCost: " + upgrade3Price + " 🦖DinoNuggies🦖";
upgrade3Button.disabled = true;
app.append(upgrade3Button);
upgrade3Button.addEventListener("click", function() {
    if (counter >= upgrade3Price){
        counter -= upgrade3Price;
        growthRate += 50;
        upgrade3Price *= 1.15;
        counterReport.innerText = "Total 🦖DinoNuggies🦖: " + Math.trunc(counter);
        upgrade3Button.innerText = "Buy 🏭DinoNuggie Factory🏭\n50 Growth Per Second\nCost: " + upgrade3Price + " 🦖DinoNuggies🦖";
        checkUpgradeAvailable();
    }
});

function checkUpgradeAvailable() {
    upgrade1Button.disabled = counter < upgrade1Price;
    upgrade2Button.disabled = counter < upgrade2Price;
    upgrade3Button.disabled = counter < upgrade3Price;
}