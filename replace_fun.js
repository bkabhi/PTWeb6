// function name(params) {
    
// }


var p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
var arr = [];
var word = "";
for(var i=0; i<p.length; i++){
    if(p[i]==' '){
        arr.push(word);
        word = "";
    }else{
        word+=p[i];
    }
}
arr.push(word)
console.log(arr);



