const Kahoot = require("kahoot.js-updated"); 
const client = new Kahoot();

for (let step = 0; step < 1000; step++) {
  client.join('06612757', Math.random() + "- FOOD");
}

for (let step = 0; step < 1000; step++) {
  const lyrics = `never gonna give you up
  Never gonna let you down
  Never gonna run around and desert you
  Never gonna make you cry
  Never gonna say goodbye
  Never gonna tell a lie and hurt you
  Never gonna give you up
  Never gonna let you down
  Never gonna run around and desert you
  Never gonna make you cry
  Never gonna say goodbye
  Never gonna tell a lie and hurt you
  Never gonna give you up
  Never gonna let you down
  Never gonna run around and desert you
  Never gonna make you cry
  Never gonna say goodbye
  Never gonna tell a lie and hurt you`
  
  const lyricsArray = lyrics.split("\n")
  
  client.setMaxListeners(100)
  
  lyricsArray.forEach(element => client.join('06612757', element));
}