const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {
  name: "",
  activity: "",
  activityMusic: "",
  favouriteMeal: "",
  favouriteFood: "",
  favouriteSport: "",
  superPower: ""
};

const returnOutput = function(person) {
  console.log(`${person.name} loves listening to ${person.activityMusic} while ${person.activity}, devouring ${person.favouriteFood} for ${person.favouriteMeal}, prefers ${person.favouriteSport} over any other sport, and is amazing at ${person.superPower}`);
};


rl.question("What is your name? Nicknames also accepted! ", (answer) => {
  console.log(`Input: ${answer}`);
  profile.name = answer;
  rl.question("What's an activity you like doing? ", (answer) => {
    console.log(`Input: ${answer}`);
    profile.activity = answer;
    rl.question("What do you listen to while doing that activity? ", (answer) => {
      console.log(`Input: ${answer}`);
      profile.activityMusic = answer;
      rl.question("Which meal is your favourite? (breakfast, lunch, dinner, etc.) ", (answer) => {
        console.log(`Input: ${answer}`);
        profile.favouriteMeal = answer;
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          console.log(`Input: ${answer}`);
          profile.favouriteFood = answer;
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            console.log(`Input: ${answer}`);
            profile.favouriteSport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              console.log(`Input: ${answer}`);
              profile.superPower = answer;
              returnOutput(profile);
              rl.close();
            })
          })
        })
      })
    })
  })
});



