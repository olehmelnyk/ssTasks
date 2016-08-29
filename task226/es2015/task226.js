'use strict';

/**
 * Returns array of common multiples (or string that there's no common multiples for passed numbers)
 * @param m (number)
 * @param n (number)
 * @returns (array|string)
 */
function getCommonMultiples(m, n) {
    if (!isRational(m) || !isRational(n)) {
        return `m and n should be rational numbers, "${m}" and "${n}" received`;
    }

    const max = m * n;
    const gcd = greatestCommonDivisor(m, n);
    const minCommonMultiple = max / gcd;

    let commonMultiples = [];
    let i = 1;

    /**
     * Calculates the greatest common divisor
     * @param a (number)
     * @param b (number)
     * @returns (number)
     */
    function greatestCommonDivisor(a, b) {
        if (!a) return b;
        if (!b) return a;

        while (true) {
            a %= b;
            if (!a) return b;

            b %= a;
            if (!b) return a;
        }
    }

    while (minCommonMultiple * i < max) {
        commonMultiples.push(minCommonMultiple * i++);
    }

    return commonMultiples.length ? commonMultiples : `No common multiples for ${m} and ${n}`;
}

/**
 * Check if passed param is rational number
 * @param param (number)
 * @returns {boolean}
 */
function isRational(param) {
    return typeof param === 'number' && parseInt(param) === param;
}

/**
 * Tests
 */
{
    console.log(
        getCommonMultiples(8, 120),             // [120, 240, 360, 480, 600, 720, 840]
        getCommonMultiples(35, 620),            // [4340, 8680, 13020, 17360]
        getCommonMultiples(7, 13),              // 'No common multiples for 7 and 13'
        getCommonMultiples("Hello", "world")    // m and n should be rational numbers, "Hello" and "world" received
    );
}