'use strict';

const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('text.txt'),
});

lineReader.on('line', (line) => {
    if (line.length > 60) {
        console.log(line);
    }
});