function reverse_string(str) {
    let new_str= "";
    for (let i = str.length - 1; i >= 0; i--) {
        new_str += str[i];
    }
    return new_str;
}
console.log(reverse_string('hello'));



function reverse_string1(str1) {
    let length = str1.length;
    for (let i = 0; i < (str1.length - 1)/2; ++i) {
        str1[i] ^= str1[length - i - 1];
        str1[length - i - 1] ^= str1[i];
        str1[i] ^= str1[length - i - 1]
    }
    return str1;
}

