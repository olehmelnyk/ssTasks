'use strict';

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('text.txt')
});

lineReader.on('line', function (line) {
    if (line.length > 60) {
        console.log(line);
    }
});
