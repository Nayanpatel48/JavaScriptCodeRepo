function getTotalX(a, b) {
    // Helper function to get the greatest common divisor (GCD)
    function gcd(x, y) {
        while (y !== 0) {
            [x, y] = [y, x % y];
        }
        return x;
    }

    // Helper function to get the least common multiple (LCM)
    function lcm(x, y) {
        return (x * y) / gcd(x, y);
    }

    // Find the LCM of array a
    let lcmA = a[0];
    for (let i = 1; i < a.length; i++) {
        lcmA = lcm(lcmA, a[i]);
    }

    // Find the GCD of array b
    let gcdB = b[0];
    for (let i = 1; i < b.length; i++) {
        gcdB = gcd(gcdB, b[i]);
    }

    // Count the numbers between the two sets
    let count = 0;
    for (let x = lcmA; x <= gcdB; x += lcmA) {
        if (gcdB % x === 0) {
            count++;
        }
    }

    return count;
}

// Example usage
const a = [2, 4];
const b = [16, 32, 96];
console.log(getTotalX(a, b)); // Output: 3