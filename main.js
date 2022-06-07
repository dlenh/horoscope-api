document.querySelector("button").addEventListener("click", apiRequest);

arr = ["monkey", "rooster", "dog", "pig", "rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat"];

function apiRequest() {
    const year = document.querySelector("input").value
    document.querySelector("h2").innerText = arr[year%12];
    return false;
}