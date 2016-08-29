'use strict';

/**
 * Method accepts two rational numbers (n, m) and return sum of last m digits of n number
 * @param n (number)
 * @param m (number)
 * @returns {number}
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function getMSumFromN(n, m) {
    validateInput(n, m);
    return String(n).slice(-m).split('').reduce(function (a, b) {
        return +a + +b;
    }, 0);
}

/**
 * Alternative algorithm to get sum of last m digits of n number
 * @param n (number)
 * @param m (number)
 * @returns {number}
 */
// function getMSumFromNAltVer(n, m){
//     validateInput(n, m);
//     let sum = 0;
//     for(let i = m; i; i--){
//         sum += parseInt(n % Number('1e' + i) / Number('1e' + (i-1)));
//     }
//     return sum;
// }

/**
 * Check if passed param is rational number
 * @param param (number)
 * @returns {boolean}
 */
function isRational(param) {
    return typeof param === 'number' && parseInt(param) === param;
}

/**
 * Validation of passed params
 * @param n (number)
 * @param m (number)
 */
function validateInput(n, m) {
    if (!isRational(n)) {
        throw new TypeError('n should be a rational number, ' + n + ' received');
    }

    if (!isRational(m)) {
        throw new TypeError('m should be a rational number, ' + m + ' received');
    }

    if (m < 2 || m > n) {
        throw new RangeError('m (' + m + ') should be bigger than 2 but smaller than n (' + n + ')');
    }
}

/**
 * Universal module loader, that makes this code work in NodeJS and browser environments
 */
if ((typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object') {
    // ok, this is NodeJS...

    var args = process.argv.slice(2);

    (function () {
        switch (args.length) {

            // call with no args - we need to prompt user for n and m numbers
            case 0:
                var readline = require('readline');

                var rl = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout
                });

                rl.question('Enter rational n and m numbers (you can use any separator, for example space or comma): ', function (userInput) {
                    var n = +userInput.split(/\D+/)[0];
                    var m = +userInput.split(/\D+/)[1];
                    console.log(getMSumFromN(n, m));
                    rl.close();
                    process.exit();
                });
                break;

            // call from console with 2 params passed:
            // >> node MODULE_NAME 123456 3
            // << 15
            case 2:
                console.log(getMSumFromN(+args[0], +args[1]));
                break;

            default:
                throw new RangeError('This method accepts 2 rational numbers (n and m) and returns sum of last m numbers of n');
        }
    })();
} else if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
    // browser here...

    var n = void 0,
        m = void 0;

    // check if user passed get params
    if (location.search) {
        var params = location.search.slice(1).split('&');

        if (params.length === 2) {
            n = +params[0].split('=')[1];
            m = +params[1].split('=')[1];
        }
        // nope, then we need to prompt user...
    } else {
        n = +prompt('Enter n number', '');
        m = +prompt('Enter m number', '');
    }
    console.log(getMSumFromN(n, m));
}
