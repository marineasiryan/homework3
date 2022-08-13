function createVector(num) {
    let elem = Math.ceil(num / 31);
    let vector = new Array(elem);
    for (let i = 0; i < elem; ++i) {
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

function get(vector, i) {
    let bigIndex = Math.floor(i / 31);
    let smallIndex = i % 31;
    let value = vector[bigIndex] & (1 << smallIndex);
    return value !== 0;
}

function sortedNum(vec) {
    for (let j = 0; j < vec.length; ++j) {
        if (vec[j] !== 0) {
            let bin = vec[j].toString(2).split('').reverse().join('');
            for (let i = 0; i < bin.length; ++i) {
                if (bin[i] === '1') console.log(i + j * 31);
            }
        }
    }
}

let vec = createVector(100);
console.log(set(vec, 16));
console.log(set(vec, 36));
console.log(get(vec, 36));
console.log(get(vec, 19));
sortedNum(vec)