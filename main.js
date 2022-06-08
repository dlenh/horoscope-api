document.querySelector("button").addEventListener("click", apiRequest);

arr = ["Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat"];

function apiRequest() {
    const year = document.querySelector("input").value;
    const zodiac = document.querySelector("#zodiac");
    // try {
    //     const res = await fetch() 
    //     const data = await res.json()

    //     console.log(data)
    // }
    if (year === "") {
        zodiac.innerText = "";
    } else {
       zodiac.innerText = arr[year%12];
    }
    return false;
}