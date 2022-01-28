const factorial = (value = 0, total = 1) => {
    if (value <= 0) {
        return total;
    }

    return factorial(value - 1, total * value);
}

console.log(factorial(2))