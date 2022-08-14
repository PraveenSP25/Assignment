const arraysum=(array,sum)=>{
    for(i =0; i<array.length; i++){
        let first=array[i]
        for(j=0; j<array.length; j++){
            let second=array[j]
            if ((first+second)==sum){
               // ('first '+first+' second '+second)
                console.log('first '+first+' second '+second)

            }
        }
    }
}
var a=[1,2,3,6,30,25,21]
arraysum(a,27)