const word=(sentence)=>{
    // let newword=sentence.split("")
    // console.log(newword)
    let newsentence=""
    for(let i=sentence.length -1; i>=0; i--){
    newsentence+=sentence[i]
    
    }
    return newsentence
}
let sentence="i love my india"
console.log(word(sentence))