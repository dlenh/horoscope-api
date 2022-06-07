const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

arr = ["rooster", "dog", "pig", "rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey"];

const horoscope = {
    "rat": {
        "compatible": ["dragon", "monkey", "rat"],
        "incompatible": ["horse", "goat"],
        "element": "water",
        "traits":
    },
    "ox": {
        "compatible": ["snake", "rooster", "ox"],
        "incompatible": ["goat", "horse"],
        "element": "earth",
        "traits":
    },
    "tiger": {
        "compatible": ["horse", "dog", "tiger"],
        "incompatible": ["monkey", "snake"],
        "element": "wood",
        "traits":
    },
    "rabbit": {
        "compatible": ["pig", "goat", "rabbit"],
        "incompatible": ["rooster", "dragon"],
        "element": "wood",
        "traits":
    },
    "dragon": {
        "compatible": ["rat", "monkey", "dragon"],
        "incompatible": ["dog", "rabbit"],
        "element": "earth",
        "traits":
    },
    "snake": {
        "compatible": ["ox", "rooster", "snake"],
        "incompatible": ["pig", "tiger"],
        "element": "fire",
        "traits":
    },
    "horse": {
        "compatible": ["dog", "tiger", "horse"],
        "incompatible": ["rat", "ox"],
        "element": "fire",
        "traits":
    },
    "goat": {
        "compatible": ["rabbit", "pig", "goat"],
        "incompatible": ["ox", "rat"],
        "element": "earth",
        "traits":
    },
    "monkey": {
        "compatible": ["dragon", "rat", "monkey"],
        "incompatible": ["tiger", "pig"],
        "element": "metal",
        "traits":
    },
    "rooster": {
        "compatible": ["ox", "snake", "rooster"],
        "incompatible": ["rabbit", "dog"],
        "element": "metal",
        "traits":
    },
    "dog": {
        "compatible": ["tiger", "horse", "dog"],
        "incompatible": ["dragon", "rooster"],
        "element": "earth",
        "traits":
    },
    "pig": {
        "compatible": ["rabbit", "goat", "pig"],
        "incompatible": ["snake", "monkey"],
        "element": "water",
        "traits":
    }
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