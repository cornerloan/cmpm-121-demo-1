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
updateTotalNuggies();
app.append(counterReport)

function updateTotalNuggies() {
  const totalNuggiesText = `Total 🦖DinoNuggies🦖: ${Math.trunc(counter)}`;
  counterReport.innerText = totalNuggiesText;
  }

button.addEventListener("click", function () {
    counter++;
    updateTotalNuggies();
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

    updateTotalNuggies();
    growthText.innerText = "Current growth rate: " + growthRate.toFixed(2) + " 🦖DinoNuggies🦖/sec";
    checkUpgradeAvailable();
    requestAnimationFrame(updateCounter);
}

requestAnimationFrame(updateCounter);

//Step 6

const growthText = document.createElement("div");
growthText.innerText = "Current growth rate: " + growthRate.toFixed(2) + " 🦖DinoNuggies🦖/sec";
app.append(growthText);

interface Item {
  name: string;
  description: string;
  cost: number;
  rate: number;
}

const availableItems: Item[] = [
  { name: "🥚DinoNuggie Egg🥚", description: "An egg that will hatch into a DinoNuggie. Eventually.", cost: 1, rate: 0.01 },
  { name: "⛏️Nuggie Archaeologist⛏️", description: "An archaeologist that helps dig for DinoNuggies.", cost: 10, rate: 0.1 },
  { name: "👨‍🍳DinoNuggie Chef👨‍🍳", description: "A personal chef to help cook up some DinoNuggies.", cost: 100, rate: 2 },
  { name: "🏭DinoNuggie Factory🏭", description: "A factory that mass produces DinoNuggies.", cost: 1000, rate: 50 },
  { name: "🏰DinoNuggie Jurassic Park🏰", description: "Open a theme park that produces DinoNuggies for the masses.", cost: 10000, rate: 120}
];

const upgradeCostMultiplier = 1.15;

availableItems.forEach((item) => {
  const upgradeButton = document.createElement("button");
  //let itemPrice: number = item.cost;
  
  upgradeButton.innerText = `Buy ${item.name}\n${item.rate} Growth Per Second\nCost: ${item.cost.toFixed(2)} 🦖DinoNuggies🦖\n${item.description}`;
  upgradeButton.disabled = true;
  app.append(upgradeButton);

  upgradeButton.addEventListener("click", function () {
    if (counter >= item.cost) {
      counter -= item.cost;
      growthRate += item.rate;
      item.cost *= upgradeCostMultiplier; // Increase price
      updateTotalNuggies();
      upgradeButton.innerText = `Buy ${item.name}\n${item.rate} Growth Per Second\nCost: ${item.cost.toFixed(2)} 🦖DinoNuggies🦖\n${item.description}`;
      checkUpgradeAvailable();
    }
  });
});

function checkUpgradeAvailable() {
  availableItems.forEach((item, index) => {
    const upgradeButton = app.querySelectorAll("button")[index + 1];
    upgradeButton.disabled = counter < item.cost;
  });
}