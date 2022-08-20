const num=[1,2,3,4,5,6,2,3,5,6,7]
let newnum=[]
for(i of num)
if(newnum.indexOf(i)===-1){
    newnum.push(i)
}
console.log(newnum)
