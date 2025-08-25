let arr=[2,4,6,8,10];
let max=arr[0];
for(let v in arr){
    if(arr[v]>max){
        max=arr[v];
    }
}
console.log("The largest number in the array is ",max);