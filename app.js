'use strict';

const express = require('express');
const app = express();
let ingredients = ["bun", "protein", "cheese", "sauce", "toppings", "sides"];
let bun = [
  {
    "type": "Brioche",
    "cal": 210,
    "gf": false
  },
  {
    "type": "Multigrain",
    "cal": 350,
    "gf": false
  },
  {
    "type": "Hawaiian",
    "cal": 210,
    "gf": false
  },
  {
    "type": "English Muffin",
    "cal": 190,
    "gf": false
  },
  {
    "type": "Ciabatta",
    "cal": 230,
    "gf": false
  },
  {
    "type": "Pretzel",
    "cal": 300,
    "gf": false
  },
  {
    "type": "Gluten Free",
    "cal": 230,
    "gf": true
  }
];
let protein = [
  {
    "type": "All-Natural Beef",
    "cal": 420,
    "gf": true
  },
  {
    "type": "Turkey",
    "cal": 370,
    "gf": true
  },
  {
    "type": "Chicken Breast",
    "cal": 240,
    "gf": true
  },
  {
    "type": "Black Bean",
    "cal": 240,
    "gf": false
  },
  {
    "type": "Bison",
    "cal": 270,
    "gf": true
  },
  {
    "type": "Fried Chicken",
    "cal": 330,
    "gf": false
  },
  {
    "type": "Mahi Mahi Filet",
    "cal": 180,
    "gf": true
  },
  {
    "type": "Impossible Burger",
    "cal": 430,
    "gf": false
  }
];
let cheese = [
  {
    "type": "Tillamook Cheddar",
    "cal": 90,
    "gf": true
  },
  {
    "type": "Provolone",
    "cal": 80,
    "gf": true
  },
  {
    "type": "American",
    "cal": 80,
    "gf": true
  },
  {
    "type": "Swiss",
    "cal": 90,
    "gf": true
  },
  {
    "type": "Smoked Gouda",
    "cal": 80,
    "gf": true
  },
  {
    "type": "Feta",
    "cal": 80,
    "gf": true
  },
  {
    "type": "Mozzarella",
    "cal": 70,
    "gf": true
  },
  {
    "type": "Herbed Goat Cheese",
    "cal": 80,
    "gf": true
  },
  {
    "type": "Jalapeño Jack",
    "cal": 90,
    "gf": true
  },
  {
    "type": "Danish Blue Cheese",
    "cal": 100,
    "gf": false
  },
  {
    "type": "Pimento",
    "cal": 110,
    "gf": true
  },
  {
    "type": "Vegan Cheese",
    "cal": 60,
    "gf": false
  }
];
let sauce = [
  {
    "type": "Garlic Aioli",
    "cal": 160,
    "gf": true
  },
  {
    "type": "Chipotle Aioli",
    "cal": 140,
    "gf": true
  },
  {
    "type": "Horseradish Ailoli",
    "cal": 150,
    "gf": false
  },
  {
    "type": "Hickory BBQ",
    "cal": 30,
    "gf": false
  },
  {
    "type": "Relish",
    "cal": 35,
    "gf": false
  },
  {
    "type": "Apricot Sauce",
    "cal": 70,
    "gf": false
  },
  {
    "type": "Sweet Sriracha",
    "cal": 60,
    "gf": false
  },
  {
    "type": "Mustard",
    "cal": 80,
    "gf": false
  },
  {
    "type": "Hot Wing Sauce",
    "cal": 70,
    "gf": true
  },
  {
    "type": "Mayo",
    "cal": 200,
    "gf": true
  },
  {
    "type": "Basil Pesto",
    "cal": 90,
    "gf": false
  },
  {
    "type": "Tzatiki",
    "cal": 30,
    "gf": true
  },
  {
    "type": "Buttermilk Ranch",
    "cal": 110,
    "gf": false
  },
  {
    "type": "Honey Djon",
    "cal": 150,
    "gf": false
  },
  {
    "type": "Thousand Island",
    "cal": 180,
    "gf": false
  },
  {
    "type": "Habanero Salsa",
    "cal": 10,
    "gf": true
  },
  {
    "type": "Sauceless",
    "cal": 0,
    "gf": true
  }
];
let toppings = [
  {
    "type": "Lettuce Blend",
    "cal": 0,
    "gf": true
  },
  {
    "type": "Mixed Greens",
    "cal": 0,
    "gf": true
  },
  {
    "type": "Kale",
    "cal": 0,
    "gf": true
  },
  {
    "type": "Baby Spinach",
    "cal": 0,
    "gf": true
  },
  {
    "type": "Tomatoes",
    "cal": 5,
    "gf": true
  },
  {
    "type": "Roasted Grape Tomatoes",
    "cal": 50,
    "gf": true
  },
  {
    "type": "Dried Cranberries",
    "cal": 100,
    "gf": true
  },
  {
    "type": "Cucumbers",
    "cal": 4,
    "gf": true
  },
  {
    "type": "Carrot Strings",
    "cal": 5,
    "gf": true
  },
  {
    "type": "Alfalfa Sprouts",
    "cal": 5,
    "gf": true
  },
  {
    "type": "Red Onions",
    "cal": 5,
    "gf": true
  },
  {
    "type": "Grilled Red Onions",
    "cal": 40,
    "gf": true
  },
  {
    "type": "Scallions",
    "cal": 5,
    "gf": true
  },
  {
    "type": "Hard-Boiled Egg",
    "cal": 80,
    "gf": true
  },
  {
    "type": "Fresh Jalapeño",
    "cal": 5,
    "gf": true
  },
  {
    "type": "Dill Pickles",
    "cal": 5,
    "gf": true
  },
  {
    "type": "Pepperonicinis",
    "cal": 4,
    "gf": false
  },
  {
    "type": "Mixed Olives",
    "cal": 35,
    "gf": false
  },
  {
    "type": "Roasted Red Peppers",
    "cal": 5,
    "gf": true
  },
  {
    "type": "Grilled Pineapple",
    "cal": 30,
    "gf": true
  },
  {
    "type": "Coleslaw",
    "cal": 35,
    "gf": false
  },
  {
    "type": "Quinoa",
    "cal": 70,
    "gf": false
  },
  {
    "type": "Marinated Artichoke",
    "cal": 25,
    "gf": false
  },
  {
    "type": "Avocado",
    "cal": 60,
    "gf": true
  },
  {
    "type": "Applewood Smoked Bacon",
    "cal": 100,
    "gf": true
  },
  {
    "type": "Bacon Onion Jam",
    "cal": 120,
    "gf": true
  },
  {
    "type": "Sautéed Mushrooms",
    "cal": 20,
    "gf": true
  },
  {
    "type": "Fried Onion Strings",
    "cal": 210,
    "gf": false
  },
  {
    "type": "Guacamole",
    "cal": 140,
    "gf": true
  }
];
let sides = [
  {
    "type": "Shoestring Fries",
    "cal": 340,
    "gf": true
  },
  {
    "type": "Sweet Potato Fries",
    "cal": 360,
    "gf": true
  },
  {
    "type": "Veggie Skewers",
    "cal": 80,
    "gf": true
  },
  {
    "type": "Side Salad",
    "cal": 80,
    "gf": true
  },
  {
    "type": "Coleslaw",
    "cal": 90,
    "gf": false
  },
  {
    "type": "Fried Onion Strings",
    "cal": 600,
    "gf": false
  },
  {
    "type": "Beef Chili",
    "cal": 290,
    "gf": true
  },
  {
    "type": "Turkey Chili",
    "cal": 150,
    "gf": false
  },
  {
    "type": "Quiona Salad",
    "cal": 70,
    "gf": false
  }
];

app.get("/burger/random", function(req, res) {
  res.json(genBurger(ingredients));
});

app.get("/burger/order/:order", function(req, res) {
  let ingrArray = splitQuery(req.params.order);
  ingrArray.pop();
  res.json(genBurger(ingrArray));
});

/**
 * generates a completely random burger
 *
 * @param {Array} ingrArray - array of ingredients that make up the order
 * @return {Array} random burger object
 */
function genBurger(ingrArray) {
  let result = [];
  let cal = 0;
  let gf = true;
  for (let i = 0; i < ingrArray.length; i++) {
    let ingr = ingrArray[i];
    let randIng = genRandIngr(ingr);
    let type = randIng.type;
    cal = cal + randIng.cal;
    if (!randIng.gf) {
      gf = false;
    }
    let obj = "{\"" + ingr + "\": \"" + type + "\"}";
    result.push(JSON.parse(obj));
  }
  result.push({"calories": cal});
  result.push({"gluten free": gf});
  return result;
}

/**
 * generates a completely random burger
 *
 * @param {String} ingr - what kind of ingredient is being requested
 * @return {json} random ingredient object
 */
function genRandIngr(ingr) {
  if (ingr === "bun") {
    return bun[Math.floor(Math.random() * bun.length)];
  } else if (ingr === "protein") {
    return protein[Math.floor(Math.random() * protein.length)];
  } else if (ingr === "cheese") {
    return cheese[Math.floor(Math.random() * cheese.length)];
  } else if (ingr === "sauce") {
    return sauce[Math.floor(Math.random() * sauce.length)];
  } else if (ingr === "toppings") {
    return toppings[Math.floor(Math.random() * toppings.length)];
  } else if (ingr === "sides") {
    return sides[Math.floor(Math.random() * sides.length)];
  }
}

/**
 * Returns an array resulting from splitting text response by newline characters.
 * @param {string} text - text to split by new lines
 * @returns {string[]} - array of strings split by newline
 */
function splitQuery(text) {
  return text.split("-");
}

app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);
