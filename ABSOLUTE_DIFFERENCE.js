function diff(a, b) {
    return abs(a-b);
}
function abs(a) {
    if(a<0){
        return a*(-1)
    }
    return a;
}

console.log(diff(12, 4));
console.log(diff(4, 18));