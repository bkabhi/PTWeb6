function toLowerCase(a) {
    if(a.charCodeAt()>96){
        return a;
    }
    return String.fromCharCode(a.charCodeAt() + 32);
}
function strToLowerCase(str) {
    var ans = "";
    for(var i=0; i<str.length; i++){
        ans += toLowerCase(str[i]);
    }
    return ans;
}

// console.log(strToLowerCase("MASAI"));

var arr =  ["MA", "SA", "I", "SCH", "OOL"];
for(var i=0; i<arr.length; i++){
    arr[i] = strToLowerCase(arr[i]);
}
console.log(arr);