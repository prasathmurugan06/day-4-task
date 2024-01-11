// odd number using annoymous function

var result=[]
var a=function(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(a([1,2,3,4,5,6,7,8,9,10]));

// odd number using iife function

var result1=[];
(function(arr1){
    for(var i=0;i<arr1.length;i++){
        if(arr1[i]%2!==0){
            result1.push(arr1[i]);
        }
    }
    console.log(result1);
})([11,12,13,14,15,16,17,18,19,20])

// odd number using arrow function

var result2=[];
var odd=(arr2)=>{
    for(var i=0;i<arr2.length;i++){
        if(arr2[i]%2!==0){
            result2.push(arr2[i]);
        }
    }
    return result2
}

console.log(odd([21,22,23,24,25,26,27,28,29,30]));






