function fibonacci(num) {
    let n1 = 0;
    let n2 = 1;

    if (num === n1 || num === n2) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    }

    let proximo = n1 + n2;
    while (proximo <= num) {
        if (proximo === num) {
            return `O número ${num} pertence à sequência de Fibonacci.`;
        }
        n1 = n2;
        n2 = proximo;
        proximo = n1 + n2;
    }
    return `O número ${num} não pertence à sequência de Fibonacci.`;
}

const num = 6;
console.log(fibonacci(num));
