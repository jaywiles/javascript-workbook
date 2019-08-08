// July 30, 2019
// Jay Wiles
// Kevin Jenkins
// Matt Hartman

let str = "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day";

let wordSplit = str.toLowerCase().split(" ");

let test = (map) = {};
wordSplit.join("").split("").sort().forEach(e => map[e] = (map[e] || 0)+1);
console.log(test);