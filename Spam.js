const Kahoot = require("kahoot.js-updated"); 
const client = new Kahoot();

for (let step = 0; step < 1000; step++) {
  client.join('06612757', Math.random() + "- FOOD");
}