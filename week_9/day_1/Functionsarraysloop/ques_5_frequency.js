function frequency(arr){
            let found={};
            for(let v in arr){
                if(found[v]){
                    found[v]++;
                }
                else{
                    found[v]=1;
                }
                
            }
            return found;
        }
        let arr=[1,2,2,3,4,5,5]
        console.log(frequency(arr))
   