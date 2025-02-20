elements.thiquovite = {
    color: "#e3f9ff",
    behavior: behaviors.POWDER,
    category: "special",
    state: "solid",
    density: 100,
    desc: "Sounds familliar.",
    temp: -5,
	  reactions: {
        "screen": { elem2:"ring" },
        "ring": { elem2:"pen" },
        "pen": { elem2:"king" },
    }
};

elements.screen = {
    color: ["#505e4c", "#4b6943"],
    behavior: behaviors.WALL,
    behaviorOn: [
    "XX|XX|XX",
    "SW:screen|XX|SW:screen",
    "XX|CR:light|XX",
],
    category: "machines",
    state: "solid",
    conduct: 1,
    breakInto: ["glass_shard", "electric"],
};

elements.ring = {
    color: "#9ab3b1",
    behavior: [
    "XX|XX|CR:diamond_block",
    "XX|XX|XX",
    "XX|XX|XX",
],
    category: "special",
    state: "solid",
    density: 100,
    conduct: 1,
    breakInto: ["silver", "diamond"],
};

elements.diamond_block = {
    color: ["#28d8de", "#03f4fc"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    density: 100,
    breakInto: ["diamond"],
    tempHigh: 540,    
    stateHigh: "diamond",
};
elements.pen = {
    color: "#454545",
    behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "XX|CR:pen,pen_tip%5|XX",
],
    category: "machines",
    state: "solid",
    density: 100,
    conduct: 1,
    breakInto: ["ink", "metal_scrap"],
};

elements.red_pen = {
    color: "#801f1f",
    behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "XX|CR:red_pen,red_pen_tip%5|XX",
],
    category: "machines",
    state: "solid",
    density: 100,
    conduct: 1,
    breakInto: ["ink", "metal_scrap"],
};

elements.blue_pen = {
    color: "#19235e",
    behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "XX|CR:blue_pen,blue_pen_tip%5|XX",
],
    category: "machines",
    state: "solid",
    density: 100,
    conduct: 1,
    breakInto: ["ink", "metal_scrap"],
};

elements.pen_tip = {
    color: "#b3b4bd",
    behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "XX|CR:ink%2|XX",
],
    category: "machines",
    state: "solid",
    density: 100,
    conduct: 1,
    breakInto: ["ink", "metal_scrap"],
};

elements.red_pen_tip = {
    color: "#eb4444",
    behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "XX|CR:red_ink%1|XX",
],
    category: "machines",
    state: "solid",
    density: 100,
    conduct: 1,
    breakInto: ["red_ink", "metal_scrap"],
};

elements.blue_pen_tip = {
    color: "#737ee6",
    behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "XX|CR:blue_ink%1|XX",
],
    category: "machines",
    state: "solid",
    density: 100,
    conduct: 1,
    breakInto: ["blue_ink", "metal_scrap"],
};

elements.blue_ink = {
    color: "#1421db",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    stain: 0.3,
    breakInto: ["ink", "copper_sulfate"],
    burn: 115,
    burnInto: "dioxin",
    tempHigh: 350,
    stateHigh: "dioxin",
    reactions: {
        "alcohol": { elem2:"acid" },
	"head": { elem2:"bone", func: behaviors.KILLPIXEL2 },
    }
};

elements.red_ink = {
    color: "#db1414",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    stain: 0.3,
    breakInto: ["ink", "brick_rubble"],
    burn: 115,
    burnInto: "dioxin",
    tempHigh: 350,
    stateHigh: "dioxin",
    reactions: {
        "alcohol": { elem2:"acid" },
	"head": { elem2:"bone", func: behaviors.KILLPIXEL2 },
    }
};

elements.king = {
    color: ["#7d2074", "#63207d", "#9e2626"],
    behavior: [
    "XX|CR:king_head AND CH:thiquovite>king_head|XX",
    "CR:wall|XX|CR:wall",
    "XX|M1|XX",
],
    category: "life",
    state: "solid",
    density: 100,
    breakInto: ["meat", "bone_meal"],
};

elements.king_head = {
    color: ["#998148", "#7a6431", "#bf993f", "#d1b269"],
    behavior: [
    "CR:brick|CR:gold_coin AND CH:king_head>foam|CR:brick",
    "CR:gold|XX|CR:gold",
    "XX|M1|XX",
],
    category: "life",
    state: "solid",
    density: 100,
    breakInto: ["meat", "bone_meal"],
};

elements.tiger = {
    color: ["#c4711d", "#d16813", "#ff7300"],
    behavior: [
    "M1%10|XX|M1%10",
    "M1%20|XX|M1%20",
    "M1|CH:water>foam AND M1|M1",
],
    foodNeed: 12,
    egg: "newborn",
    baby: "baby_tiger",
    category: "life",
    burn: 95,
    burnInto: "cooked_meat",
    tempHigh: 160,
    stateHigh: ["cooked_meat", "ash"],
    state: "solid",
    breakInto: ["meat", "bone_meal"],
    reactions: {
        "rat": { elem2: null, chance: 0.2, func: behaviors.KILLPIXEL2 },
	"head": { elem2:"bone", chance: 0.01, func: behaviors.KILLPIXEL2 },
	"body": { elem2:"bone", chance: 0.01, func: behaviors.FEEDPIXEL },
	"bird": { elem2:"feather", chance: 0.3, func: behaviors.FEEDPIXEL },
	"ant": { elem2: null, func: behaviors.KILLPIXEL2 },
	"spider": { elem2: null, func: behaviors.KILLPIXEL2 },
	"fish": { elem2: null, func: behaviors.FEEDPIXEL },
        "plant": { elem2: "dead_plant" },
	"grass": { elem2: "dead_plant" },
	"radiation": { elem1: "rotten_meat", chance: 0.1 },
	"bone": { elem1: "blood", chance: 0.3 },
	"blood": { elem2: null, chance: 0.3 },
	"infection": { elem1: "rotten_meat", chance: 0.01 },
	"rotten_meat": { elem1: "rotten_meat", chance: 0.01 },
    }
};

elements.baby_tiger = {
    color: ["#b88f74", "#e39764"],
    behavior: [
    "M1%30|XX|M1%30",
    "M1%10|CH:tiger%0.2|M1%10",
    "M1|CH:water>foam AND M1|M1",
],
    category: "life",
    state: "solid",
    breakInto: ["meat", "bone_meal"],
    burn: 95,
    burnInto: "cooked_meat",
    tempHigh: 160,
    stateHigh: ["cooked_meat", "ash"],
    reactions: {
        "rat": { elem1: "tiger", chance: 0.3, elem2:"blood", func: behaviors.KILLPIXEL2 },
	"ant": { elem2: null, chance: 0.3, func: behaviors.KILLPIXEL2 },
	"spider": { elem2: null, chance: 0.3, func: behaviors.KILLPIXEL2 },
	"fish": { elem1: "tiger", chance: 0.3, elem2: null, func: behaviors.KILLPIXEL2 },
	"grass": { elem2: "dead_plant" },
	"radiation": { elem1: "rotten_meat", chance: 0.1 },
	"infection": { elem1: "rotten_meat", chance: 0.01 },
	"rotten_meat": { elem1: "rotten_meat", chance: 0.01 },
    }
};

elements.newborn = {
    color: ["#f5c4d3", "#dbae7f"],
    behavior: [
    "XX|XX|XX",
    "M1%0.1|CH:baby_tiger%0.2|M1%0.1",
    "XX|M1|XX",
],
    category: "life",
    state: "solid",
    breakInto: ["meat", "bone_meal"],
    burn: 95,
    burnInto: "cooked_meat",
    tempHigh: 160,
    stateHigh: ["cooked_meat", "ash"],
    reactions: {
	"radiation": { elem1: "rotten_meat", chance: 0.1 },
	"infection": { elem1: "infection", chance: 0.01 },
	"rotten_meat": { elem1: "rotten_meat", chance: 0.01 },
    }
};

elements.rad_spider = {
    color: ["#6f21ff", "#ae21ff", "#d621ff"],
    behavior: [
    "M1%5 AND CR:rad_web%1|XX|M1%5 AND CR:rad_web%1",
    "CR:radiation%2|CO:2|CR:radiation%2",
    "M1%5 AND CR:rad_web%1|M1 AND CR:rad_web|M1%5 AND CR:rad_web%1",
],
    category: "life",
    state: "solid",
    breakInto: ["dead_bug", "hot_bomb"],
    burn: 1,
    burnInto: "radiation",
    tempHigh: 5000,
    stateHigh: ["radiation", "ash"],
    reactions: {
	"spider": { elem2: "rad_spider", chance: 0.1 },
	"dna": { elem2: "rad_spider", chance: 0.01 },
	"cell": { elem2: "rad_spider", chance: 0.01 },
	"radiation": { elem2: "rad_spider", chance: 0.01 },
	"rotten_meat": { elem1: "rotten_meat", chance: 0.01 },
    }
};

if (!elements.radiation.reactions) { // Include this block once
    elements.radiation.reactions = {} // This creates the property if it doesn't exist
}
elements.radiation.reactions.web = { elem2: "rad_web" }
elements.radiation.reactions.spider = { elem2: "rad_spider" }

elements.rad_web = {
    color: ["#7de387", "#b4d1b7", "#8f9c90"],
    behavior: [
    "CR:rad_web%1|CR:radiation%0.1|CR:rad_web%1",
    "CR:radiation%0.1|CH:radiation%0.1|CR:radiation%0.1",
    "CR:rad_web%1|CR:rad_web%1|CR:rad_web%1",
],
    category: "life",
    hidden: true,
    state: "solid",
    breakInto: ["dust", "rad_shard"],
    burn: 80,
    burnInto: "radiation",
    tempHigh: 5000,
    stateHigh: ["radiation", "ash"],
    reactions: {
	"spider": { elem2: "rad_spider", chance: 0.1 },
	"dna": { elem2: "rad_spider", chance: 0.01 },
	"cell": { elem2: "rad_spider", chance: 0.01 },
	"radiation": { elem1: "rad_spider", chance: 0.01 },
    }
};
