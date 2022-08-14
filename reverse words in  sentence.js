const reverseWord = (sentence) => {
    const words = sentence.split(" ")
    console.log(words)
    const revWords = words.reverse()
    console.log(revWords)
    return revWords.join(" ")
}
    let sentence= "india is my Country"
    console.log(reverseWord(sentence));