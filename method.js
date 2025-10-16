 console.log("hello swapna")
let a = "swapna"
console.log("the value of a:",a)
console.log(typeof a)

let b = 4;
console.log("the value of b:",b)
console.log(typeof b)

let s = {
    myname : "swapna",
    regd : "081",
    clg : "nit"
}
console.log("it is a small ",s)
 console.log(typeof s)


 // divisible by 3 and 5
let num = 45 ;
if (num % 3 == 0 && num % 5 === 0 && num % 10 !==0) {
  console.log (true);
} else {
  console.log (false);
}

// disstructure
let a = 10, b = 20;
[a,b] = [b,a]
console.log(a,b)


// vowel
  function countvowel(str){
    return str.match(/[aeiou]/gi)?.lenght || 0;
  }
  console.log(countvowel("NIT COLLEGE"));


// address
  const str=`
  NIT,
  Chandaka,
  khurda,
  `
// anotherin vowel
function countVowels(word){
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let i = 0 ; i < word.length; i++)
{
  if (vowels.includes(word[i])){
    count++;
  }
}
return count;
}
  console.log(countVowels("Apple"));











