document.querySelector("button").addEventListener("click", apiRequest);


async function apiRequest() {
    arr = ["Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat"];

    const year = +document.querySelector("input").value;
    const zodiac = document.querySelector("#zodiac");
    const animal = arr[year%12];

    if (animal === undefined) {
        zodiac.innerText = "Please enter a valid year"
    } else {
        zodiac.innerText = arr[year%12];
    }

    try {
        const response = await fetch(`https://chinese-zodiac-api-demo.herokuapp.com/api/${animal}`)
        const data = await response.json()

        console.log(data);
    }
    catch(error) {
        console.log(error)
    }
    return false;
}