const roleController = require("./modules/controllers/roles");
const helpController = require("./modules/controllers/help");

const getBotName = (config) => {
    return config.botName;
};

const config = {
    "botName": "Muggle Contraption",
    "prefixes": ["$", "!", ".", "&"],
    "commands": {
        "iam": {
            "aliases": ["iam"],
            "description": `will assign a location role for you.`,
            "callback": roleController.addLocation
        },
        "iamnot": {
            "aliases": ["iamnot"],
            "description": `will remove a location role for you.`,
            "callback": roleController.removeLocation
        },
        "house": {
            "aliases": ["house", "h"],
            "description": `will assign a team role for you.`,
            "callback": roleController.addHouse
        },
        "profession": {
            "aliases": ["profession", "p"],
            "description": `will assign a profession role for you.`,
            "callback": roleController.addProfession
        },
        "help": {
            "aliases": ["help"],
            "description": `will show this help message.`,
            "callback": helpController.showCommands
        },
        "lsar": {
            "aliases": ["lsar"],
            "description": `will show a list of area roles which are self-assignable.`,
            "callback": helpController.showAreas
        }
    },
    "colors": {
        "error": 0xEF2D19,
        "general": 0x000099,
        "success": 0x7FDF37
    },
    "houses": {
        "Gryffindor": {
            "symbol": ""
        },
        "Slytherin": {
            "symbol": ""
        },
        "Hufflepuff": {
            "symbol": ""
        },
        "Ravenclaw": {
            "symbol": ""
        }
    },
    "professions": {
        "Auror": {
            "symbol": ""
        },
        "Magizoologist": {
            "symbol": ""
        },
        "Professor": {
            "symbol": ""
        }
    },
    "municipalities": [
        "trevose/feasterville",
        "bristol" ,
        "morrisville",
        "‌‌fallsington",
        "yardley",
        "croydon",
        "falls",
        "langhorne",
        "‌bensalem",
        "newtown",
        "williamson",
        "tullytown",
        "middletown",
        "fairless hills",
        "levittown",
        "neshaminy",
        "tyler",
        "doylestown",
        "dublin"
    ]
};

module.exports = config;