const fs = require("fs");
let vec = createVector(2000000);

const lineReader = require('readline').createInterface({
    input: fs.createReadStream(`${__dirname}/numbers.txt`)
});
let writeStream = fs.createWriteStream('sorted.txt', {encoding: 'utf-8'});

function createVector(num) {
    let elem = Math.ceil(num / 31);
    let vector = new Array(elem);
    for (let i = 0; i < elem; i++) {
        vector[i] = 0;
    }
    return vector;
}

function set(vector, i) {
    let bigIndex = Math.floor(i / 31);
    let smallIndex = i % 31;
    vector[bigIndex] = vector[bigIndex] | (1 << smallIndex);
    return vector;
}

function sortedNum(vec) {
    for (let j = 0; j < vec.length; ++j) {
        if (vec[j] !== 0) {
            let bin = vec[j].toString(2).split('').reverse().join('');
            for (let i = 0; i < bin.length; ++i) {
                if (bin[i] === '1') {
                    let str = i + j * 31
                    writeStream.write(`${str.toString()}\n`, 'utf-8')                    ;
                }
            }
        }
    }
}

lineReader.on('line', function (line) {
    set(vec, +line)
}).on('close', () => {
    sortedNum(vec);
});
