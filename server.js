const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

arr = ["rooster", "dog", "pig", "rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey"];

const horoscope = {
    "rat": {},
    "ox": {},
    "tiger": {},
    "rabbit": {},
    "dragon": {},
    "snake": {},
    "horse": {},
    "goat": {},
    "monkey": {},
    "rooster": {},
    "dog": {},
    "pig": {}
}


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/main.js", (req, res) => {
    res.sendFile(__dirname + "/main.js")
})

app.get("/api/:name", (req, res) => {
    const sign = req.params.name.toLowerCase();
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})