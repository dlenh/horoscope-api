document.querySelector("button").addEventListener("click", apiRequest);

arr = ["Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat"];

function apiRequest() {
    const year = document.querySelector("input").value
    document.querySelector("h2").innerText = arr[year%12];
    return false;
}