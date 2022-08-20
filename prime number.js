function isPrime(n){
if(n<=1)
return false
for(i=2; i<n; i++){
    if(n%i===0)
    return false
}
return true
}
function printPrime(n){
for(i=2; i<=n; i++){
if(isPrime(i))
console.log(`${i}"is a prime number"`)

}
}
let n=(1,2,3,4,5,6,7,8,9)
console.log(printPrime(n))
