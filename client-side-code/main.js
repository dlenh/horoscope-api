document.querySelector("button").addEventListener("click", apiRequest);

function reset() {
    document.querySelector("#zodiac").innerText = "Zodiac: ";
    document.querySelector("#element").innerText = "Element: ";
}

async function apiRequest() {
    reset();
    arr = ["Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat"];

    const year = +document.querySelector("input").value;
    const zodiac = document.querySelector("#zodiac");
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
        document.querySelector("#element").innerText += " " + data.element;
        document.querySelector("#image").src = data.image;
    }
    catch(error) {
        console.log(error)
    }
    return false;
}