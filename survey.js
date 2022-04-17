const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let questions = [
  "What is your name?",
  "What is your favourite genre of music?",
  "What is your dream car?",
  "What is your favourite country that you've visited?"
]

rl.question(questions[0], (userName) => {
  rl.question(questions[1], (musicGenre) => {
    rl.question(questions[2], (dreamCar) => {
      rl.question(questions[3], (bestPlace) => {
        console.log(`Hi everyone!. My name is ${userName} and I love ${musicGenre}! It is my favourite genre of music. I would love to own a ${dreamCar} one day. I have been to ${bestPlace} and it was amazing!`);

        rl.close();
      })
    })
  })
})