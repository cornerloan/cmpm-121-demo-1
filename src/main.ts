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
counterReport.innerText = "Total DinoNuggies: " + counter;
app.append(counterReport)

button.addEventListener("click", function () {
    counter++;
    counterReport.innerText = "Total DinoNuggies: " + counter;
});


//Step 3
/**
function autoClicker() {
    counter++;
    counterReport.innerText = "Total DinoNuggies: " + counter;
}

setInterval(autoClicker, 1000);
*/


//Step 4
let lastTime = Date.now();

function updateCounter() {
    const currentTime = Date.now();
    const deltaTime = (currentTime - lastTime) / 1000;
    counter += deltaTime;
    lastTime = currentTime;

    counterReport.innerText = "Total DinoNuggies: " + Math.trunc(counter);
    requestAnimationFrame(updateCounter)
}

requestAnimationFrame(updateCounter);