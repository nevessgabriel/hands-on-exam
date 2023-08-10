function fibonacciSeries(limit) {
    let fiboSeries = [1, 1];

    for (let i = 2; i < limit; i++) {
        const nextFibo = fiboSeries[i - 1] + fiboSeries[i - 2];
        if (nextFibo <= limit) {
            fiboSeries.push(nextFibo);
        } else {
            break;
        }
    }

    return fiboSeries;
}

const limit = 10000; // You can change this limit
const fiboSeries = fibonacciSeries(limit);

console.log("Fibonacci Series up to", limit, ":", fiboSeries.join(" "));
