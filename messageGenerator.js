//Arrays containing different parts of the message
const beginning = [
    "Believe in yourself",
    "You are capable of amazing things",
    "Dream big and dare to fail",
    "Success is not final, failure is not fatal",
    "The only limit is your imagination"
];

const middle = [
    "you can achieve anything",
    "small steps lead to big changes",
    "every setback is an opportunity for growth",
    "you have the power to change the world",
    "every accomplishment starts with the decision to try"
];

const ending = [
    "if you believe in yourself",
    "just keep going",
    "you've got this",
    "never give up",
    "anything is possible"
];

//Function to generate a random inspirational message
function generateMessage() {
    const randomBeginning = beginning[Math.floor(Math.random() * beginning.length)];
    const randomMiddle = middle[Math.floor(Math.random() * middle.length)];
    const randomEnding = ending[Math.floor(Math.random() * ending.length)];

    return `${randomBeginning}, ${randomMiddle}, ${randomEnding}.`;
}

console.log(generateMessage())