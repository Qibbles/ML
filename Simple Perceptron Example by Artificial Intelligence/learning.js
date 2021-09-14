// Perceptron is created with n weights and learning constant
class Perceptron {
  constructor(n, c) {
    // Array of weights for inputs
    this.weights = new Array(n);
    // Start with random weights
    for (let i = 0; i < this.weights.length; i++) {
