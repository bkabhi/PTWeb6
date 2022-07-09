function isOdd(num) {
    if(num%2!=0){
        return true;
    }
    return false;
}
var n = 5;
for(var i=0; i<=5; i++){
    if(isOdd(i)){
        console.log(i);
    }
}