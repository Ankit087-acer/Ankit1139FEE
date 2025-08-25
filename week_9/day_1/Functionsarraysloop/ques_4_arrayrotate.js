   let arr=[1,2,3,4,5,6];
    let n=2;
       function rotate_the_array(arr,n){
        let n = arr.length;
        k = k % n; 
        for (let i = 0; i < k; i++) {
        let first = arr[0];
        for (let j = 0; j < n - 1; j++) {
            arr[j] = arr[j + 1];
        }
        arr[n - 1] = first;
    }
    return arr;
       }
    