document.querySelector("button").addEventListener("click", apiRequest);
const zodiac = document.querySelector("#zodiac");
const element = document.querySelector("#element");
const compatible = document.querySelector("#compatible");
const incompatible = document.querySelector("#incompatible");
const goodTraits = document.querySelector("#goodTraits");
const badTraits = document.querySelector("#badTraits");
const image = document.querySelector("#image");


function reset() {
    zodiac.innerText = "Zodiac: ";
    element.innerText = "Element: ";
    compatible.innerText = "Compatible with: ";
    incompatible.innerText = "Incompatible with: ";
    goodTraits.innerText = "Good traits: ";
    badTraits.innerText = "Bad traits: ";
}

async function apiRequest() {
    reset();
    arr = ["Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat"];

    const year = +document.querySelector("input").value;
    
    const animal = arr[year%12];

    if (animal === undefined) {
        zodiac.innerText = "Please enter a valid year"
    } else {
        zodiac.innerText += " " + arr[year%12];
    }

    try {
        const response = await fetch(`https://chinese-zodiac-api-demo.herokuapp.com/api/${animal}`)
        const data = await response.json()

        console.log(data);
        element.innerText += " " + data.element[0].toUpperCase() + data.element.slice(1);
        compatible.innerText += " " + data.compatible.map(x => " " + x[0].toUpperCase() + x.slice(1));
        incompatible.innerText += " " + data.incompatible.map(x => " " + x[0].toUpperCase() + x.slice(1));
        goodTraits.innerText += " " + data["good traits"].map(x => " " + x[0].toUpperCase() + x.slice(1));
        badTraits.innerText += " " + data["bad traits"].map(x => " " + x[0].toUpperCase() + x.slice(1));
        image.src = data.image;
    }
    catch(error) {
        console.log(error)
    }
    return false;
}