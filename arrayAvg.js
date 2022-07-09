function arraySum(arr) {
    var sum=0;
    for(var i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return average(arr, sum);
}
function average(arr, sum) {
    if(arr.length==0){
        return 0;
    }
    return sum/arr.length;
}
var arr = [1, 2, 3, 4, 5];
var avg = arraySum(arr);
console.log(avg);
