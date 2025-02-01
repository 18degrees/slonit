const add = function(a, b) {
    return a + b
}
const subtract = function(a, b) {
    return a - b
}
const multiply  = function(a, b) {
    return a * b
}
const divide = function(a, b) {
    return a / b
}
const operations = {
    add,
    subtract,
    multiply,
    divide
}

function calculate(a, b, operation) {
    return operation(a, b)
}

const selectedOperation = 'multiply'

console.log(calculate(5, 6, operations[selectedOperation]))