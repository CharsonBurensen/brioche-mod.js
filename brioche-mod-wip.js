elements.syrup = {
    color: "#a13d08",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 100000,
    state: "liquid",
    density: 720,
	}
};

elements.brioche_steam = {
    color: "#ab8c60",
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    density: 720,
    temp: 80,
    tempLow: 0,
    stateLow: ["ice"]
	}
};

elements.fancy_dough = {
    color: "#d1c0a5",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 999999,
    state: "liquid",
    density: 720,
    temp: 30,
    tempHigh: 50,
    stateHigh: ["steam", "brioche_steam"],
	}
};

elements.brioche = {
    color: "#c2440e", "#ffbc82",
    behavior: behaviors.STURDYPOWDER,
    category: "food",
    temp: 30,
    tempHigh: 80,
    stateHigh: ["fragrance", "ash"],
};

elements.fancy_flour = {
    color: "#f5e9b5",
    behavior: behaviors.POWDER,
    category: "powder",
    temp: 20,
    tempHigh: 70,
    stateHigh: ["fragrance", "smoke"],

};

elements.melted_butter.reactions.bread = { "elem1": null, "elem2":"brioche" }
elements.fancy_flour.reactions.water = { "elem1": null, "elem2":"fancy_dough" }
elements.brioche.breakInto = "fancy_flour"
