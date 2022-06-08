const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

const zodiac = {
    "rat": {
        "compatible": ["dragon", "monkey", "rat"],
        "incompatible": ["horse", "goat"],
        "element": "water",
        "good traits": ["charming", "intelligent", "easy to get along with"],
        "bad traits": ["overambitious at times", "easily agitated"]
    },
    "ox": {
        "compatible": ["snake", "rooster", "ox"],
        "incompatible": ["goat", "horse"],
        "element": "earth",
        "good traits": ["calm", "dependable", "patient"],
        "bad traits": ["stubborn", "naive"]
    },
    "tiger": {
        "compatible": ["horse", "dog", "tiger"],
        "incompatible": ["monkey", "snake"],
        "element": "wood",
        "good traits": ["passionate", "daring", "adventurous"],
        "bad traits": ["impulsive", "reckless", "rebellious"]
    },
    "rabbit": {
        "compatible": ["pig", "goat", "rabbit"],
        "incompatible": ["rooster", "dragon"],
        "element": "wood",
        "good traits": ["artistic", "strong-willed", "graceful"],
        "bad traits": ["soft-spoken", "ruthless"]
    },
    "dragon": {
        "compatible": ["rat", "monkey", "dragon"],
        "incompatible": ["dog", "rabbit"],
        "element": "earth",
        "good traits": ["energetic", "loyal", "whimsical"],
        "bad traits": ["prone to burnout", "egoistical"]
    },
    "snake": {
        "compatible": ["ox", "rooster", "snake"],
        "incompatible": ["pig", "tiger"],
        "element": "fire",
        "good traits": ["tenacious", "wise"],
        "bad traits": ["possessive", "demanding"]
    },
    "horse": {
        "compatible": ["dog", "tiger", "horse"],
        "incompatible": ["rat", "ox"],
        "element": "fire",
        "good traits": ["cheerful", "quick-witted"],
        "bad traits": ["hot-tempered", "impulsive"]
    },
    "goat": {
        "compatible": ["rabbit", "pig", "goat"],
        "incompatible": ["ox", "rat"],
        "element": "earth",
        "good traits": ["righteous", "creative", "generous"],
        "bad traits": ["withdrawn", "indecisive", "pessimistic"]
    },
    "monkey": {
        "compatible": ["dragon", "rat", "monkey"],
        "incompatible": ["tiger", "pig"],
        "element": "metal",
        "good traits": ["innovative", "quick-witted", "sociable"],
        "bad traits": ["egocentric", "docile"]
    },
    "rooster": {
        "compatible": ["ox", "snake", "rooster"],
        "incompatible": ["rabbit", "dog"],
        "element": "metal",
        "good traits": ["decisive", "meticulous"],
        "bad traits": ["talkative", "aggressive"]
    },
    "dog": {
        "compatible": ["tiger", "horse", "dog"],
        "incompatible": ["dragon", "rooster"],
        "element": "earth",
        "good traits": ["honest", "straightfoward", "loyal"],
        "bad traits": ["selfless", "outspoken"]
    },
    "pig": {
        "compatible": ["rabbit", "goat", "pig"],
        "incompatible": ["snake", "monkey"],
        "element": "water",
        "good traits": ["courageous", "thoughtful", "determined"],
        "bad traits": ["gullible", "naive"]
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
    if (zodiac[sign]) {
        res.json(zodiac[sign]);
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})