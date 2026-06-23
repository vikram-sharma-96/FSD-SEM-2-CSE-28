function sum(x,y){
    s=x+y ;
    return s;
}
let valv = sum(1,3);
console.log(valv);

//finding no. of vowel in array using *function*
function countvowel(str){
    let count=0;
    for(const char of str){
        if(char === "a" ||char === "e" ||char === "i" ||char === "o" ||char === "u"){
            count++;
        }
            
    }
    return count;
}
console.log(countvowel("helloworld"))