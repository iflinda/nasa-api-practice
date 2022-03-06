function fizzBuzz(n) {
    for (let i = 0; i < n - 1; i += 1) {
        if (i % 3 === 0 && i % 5 === 0) {
            process.stdout.write("FizzBuzz \n");
        }
        if (i % 3 === 0) {
            process.stdout.write("Fizz\n");
        }
        if (i % 5 === 0) {
            process.stdout.write("Buzz\n");
        } else {
            process.stdout.write(`${i}\n`);
        }
    }
}

console.log(fizzBuzz(15));
