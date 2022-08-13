function reverse(str) {
    let arr = [];
    for (let i of str) {
        arr.push(i)
    }
    return arr.reverse().join('');
}

console.log(reverse('katak 😇 '))