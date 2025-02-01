// Question 1: Extract the First Character of Each Word
// Write a JavaScript function that uses charAt to extract the first character of each word in the array ["apple", "banana", "cherry"]. What is the resulting array?
// o/p: ['a', 'b', 'c']

let fruits=["apple", "banana", "cherry"]
let op1=fruits.map((arr=>{
     return arr.charAt((0))
}))
console.log(op1)

// Question 2: Get Unicode Values of Last Characters
// Use charCodeAt to find the Unicode value of the last character in each word of the array ["dog", "cat", "bird"]. What does the resulting array look like?
// o/p: [103, 116, 100]

let  animal=["dog", "cat", "bird"]
let op2=animal.map((animal=>{
    return animal.charCodeAt((animal.length-1))
}))
console.log(op2)


// Question 3: Shift the First Character of Each Word
// Use charCodeAt and String.fromCharCode to replace the first character of each word in ["frog", "duck", "goose"] with the next letter in the alphabet. What is the modified array?
// o/p: ['grog', 'euck', 'hoose']

let birds= ["frog", "duck", "goose"]
let op3=birds.map(birds=>{
    let firstChar=birds.charCodeAt(0)
    let nextchar=String.fromCharCode(firstChar+1)
    return nextchar+birds.slice(1)

})
console.log(op3)


// Question 4: Capitalize Even Unicode Characters
// Write a JavaScript program that iterates through each character of words in the array
//  ["zebra", "lion", "tiger"]. Use charCodeAt to check if the Unicode value of a character 
// is even, and convert such characters to uppercase. What does the transformed array look like?

let arr = ["zebra", "lion", "tiger"];

let op4 = arr.map(word => 
    word.split('').map(char => {
        let unicode = char.charCodeAt(0);
        return unicode % 2 === 0 ? char.toUpperCase() : char;
    }).join('')  
);

console.log(op4);



// Question 5: Reverse Characters in Each Word
// Using charAt, reverse the characters in each word of the array ["bat", "cat", "hat"]. What is the final array after the reversal?
// o/p: ['tab', 'tac', 'tah'] 

let words=["bat", "cat", "hat"]
let op5=words.map(words=>
    words.split('').reverse().join('')
    // words.split('').reverse()
)
console.log(op5)