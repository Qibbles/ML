// Simple Perceptron Example
// See: http://en.wikipedia.org/wiki/Perceptron

// Code based on text "Artificial Intelligence", George Luger

// A list of points we will use to "train" the perceptron
let training = new Array(2000);
// A perceptron object
let ptron;

// We will train the perceptron with one "Point" object at a time
let count = 0;

// Coordinate space
let xmin = -1;
let ymin = -1;
let xmax = 1;
let ymax = 1;

// The function to describe a line
function f(x) {
    let y = 0.3 * x + 0.4;
    return y;
}

function setup() {
    createCanvas(400,400);

    // The perceptron has 3 inputs -- x, y, and bias
    // Second value is "Learning Constant"
    ptron = new Perceptron (3, 0.001); // Learning constant is low just because it's fun to watch, this is not necessarily optimal

    // Create a random set of training points and calculate the "known" answer
    for (let i = 0; i < training.length; i++) {
        let x = random(xmin, xmax);
        let y = random(ymin, ymax);
        let answer = 1;
        if (y < f(x)) answer = -1;
        training[i] = {
            input: [x, y, 1],
            output: answer
        };
    }
}
