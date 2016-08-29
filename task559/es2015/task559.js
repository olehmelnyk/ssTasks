'use strict';

/**
 * Rational n number given. Find all Mersenne numbers which are smaller than n.
 * @param n (number)
 * @returns {Array|String}
 */
function getAllSmallerMersenneNumbers(n){

    if(!isRational(n)){
        return `This function accepts rational number and return array of Mersenne numbers smaller than n, "${n}" received`;
    }

    // Right now there are only 49(?) known Mersenne numbers, but most of them are too big to work in JS,
    // (JS can handle only first 14 Mersenne numbers). New Mersenne numbers are discovered every few years,
    // which means that this is not an easy task, so, instead of writing a complex algorithm that will generate
    // 14 well known Mersenne numbers, I decided just to hard-code them as constant to save human
    // and computer resources.
    //
    // http://mathworld.wolfram.com/news/2009-06-07/mersenne-47/

    const SIMPLE_MERSENNE_NUMBERS = [
        3,
        7,
        31,
        127,
        8191,
        131071,
        524287,
        2147483647,
        2305843009213693951,
        618970019642690137449562111,
        162259276829213363391578010288127,
        170141183460469231731687303715884105727, /* 39 digits */
        68647976601306097149e137, /* 157 digits */
        53113799281676709868e163, /* 183 digits - max number JS able to handle */
        10407932194664399081e366, /* 386 digits - this number is too big for JS */
    ];

    // algorithm (SIMPLE_MERSENNE_NUMBERS.filter) checks every item in array, but we can stop once we got first false value...
    // return SIMPLE_MERSENNE_NUMBERS.filter((element) => { return element < n; });

    let mersenneNumbers = [];

    for(let i = 0; i < SIMPLE_MERSENNE_NUMBERS.length; i++){
        if(SIMPLE_MERSENNE_NUMBERS[i] < n){
            mersenneNumbers.push(SIMPLE_MERSENNE_NUMBERS[i]);
        }else{
            return mersenneNumbers;
        }
    }
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
 * @type {Array|String}
 */
console.log(
    getAllSmallerMersenneNumbers(524288),       // [3, 7, 31, 127, 8191, 131071, 524287]
    getAllSmallerMersenneNumbers("Hello world") // This function accepts rational number and return array of Mersenne numbers smaller than n, "Hello world" received
);