let arr = [];
for (let i = 0; i < 255; i++) {
    arr[i] = 0;
}
function check(str) {
    for (let i = 0; i < str.length; ++i) {
        if (arr[str.charCodeAt(i)] === 1) {
            return false;
        }
        arr[str.charCodeAt(i)] = 1;
    }
    return true;
}
console.log(check("tatul"));
