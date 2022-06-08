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
        "bad traits": ["overambitious at times", "easily agitated"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f4/OMBRE_CHINOISE_RAT.jpg"
    },
    "ox": {
        "compatible": ["snake", "rooster", "ox"],
        "incompatible": ["goat", "horse"],
        "element": "earth",
        "good traits": ["calm", "dependable", "patient"],
        "bad traits": ["stubborn", "naive"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/1a/OMBRE_CHINOISE_BUFFLE.jpg"
    },
    "tiger": {
        "compatible": ["horse", "dog", "tiger"],
        "incompatible": ["monkey", "snake"],
        "element": "wood",
        "good traits": ["passionate", "daring", "adventurous"],
        "bad traits": ["impulsive", "reckless", "rebellious"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/3/33/OMBRE_CHINOISE_TIGRE.jpg"
    },
    "rabbit": {
        "compatible": ["pig", "goat", "rabbit"],
        "incompatible": ["rooster", "dragon"],
        "element": "wood",
        "good traits": ["artistic", "strong-willed", "graceful"],
        "bad traits": ["soft-spoken", "ruthless"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/92/OMBRE_CHINOISE_LIEVRE_2.jpg"
    },
    "dragon": {
        "compatible": ["rat", "monkey", "dragon"],
        "incompatible": ["dog", "rabbit"],
        "element": "earth",
        "good traits": ["energetic", "loyal", "whimsical"],
        "bad traits": ["prone to burnout", "egoistical"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f7/OMBRE_CHINOISE_DRAGON.jpg"
    },
    "snake": {
        "compatible": ["ox", "rooster", "snake"],
        "incompatible": ["pig", "tiger"],
        "element": "fire",
        "good traits": ["tenacious", "wise"],
        "bad traits": ["possessive", "demanding"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/91/OMBRE_CHINOISE_SERPENT.jpg"
    },
    "horse": {
        "compatible": ["dog", "tiger", "horse"],
        "incompatible": ["rat", "ox"],
        "element": "fire",
        "good traits": ["cheerful", "quick-witted"],
        "bad traits": ["hot-tempered", "impulsive"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/8f/OMBRE_CHINOISE_CHEVAL.jpg"
    },
    "goat": {
        "compatible": ["rabbit", "pig", "goat"],
        "incompatible": ["ox", "rat"],
        "element": "earth",
        "good traits": ["righteous", "creative", "generous"],
        "bad traits": ["withdrawn", "indecisive", "pessimistic"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/0c/OMBRE_CHINOISE_CHEVRE.jpg"
    },
    "monkey": {
        "compatible": ["dragon", "rat", "monkey"],
        "incompatible": ["tiger", "pig"],
        "element": "metal",
        "good traits": ["innovative", "quick-witted", "sociable"],
        "bad traits": ["egocentric", "docile"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/7d/OMBRE_CHINOISE_SINGE.jpg"
    },
    "rooster": {
        "compatible": ["ox", "snake", "rooster"],
        "incompatible": ["rabbit", "dog"],
        "element": "metal",
        "good traits": ["decisive", "meticulous"],
        "bad traits": ["talkative", "aggressive"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/27/OMBRE_CHINOISE_COQ.jpg"
    },
    "dog": {
        "compatible": ["tiger", "horse", "dog"],
        "incompatible": ["dragon", "rooster"],
        "element": "earth",
        "good traits": ["honest", "straightfoward", "loyal"],
        "bad traits": ["selfless", "outspoken"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/2b/OMBRE_CHINOISE_CHIEN.jpg"
    },
    "pig": {
        "compatible": ["rabbit", "goat", "pig"],
        "incompatible": ["snake", "monkey"],
        "element": "water",
        "good traits": ["courageous", "thoughtful", "determined"],
        "bad traits": ["gullible", "naive"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/58/OMBRE_CHINOISE_SANGLIER.jpg"
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

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})