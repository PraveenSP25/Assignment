function addtwonumber(a,b){
    return new Promise((resolve,reject)=>{
        let sum=(a+b)
        if(sum==7){
            resolve("success")
        }else {
            reject("failled")
        }

    })
}
addtwonumber(2,9).then((message)=>{
    console.log("the adding two number is "+message)
}).catch((message)=>{
    console.log("the adding two number is "+message)
})