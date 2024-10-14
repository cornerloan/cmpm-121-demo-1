import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "DinoNuggie Clicker";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const button = document.createElement("button");
button.innerText = "Click for 🦖";
app.append(button);

let counter: number = 0;
const counterReport = document.createElement("div");
counterReport.innerText = "Total DinoNuggies: " + counter;
app.append(counterReport)

button.addEventListener("click", function (e) {
    counter++;
    counterReport.innerText = "Total DinoNuggies: " + counter;
});
