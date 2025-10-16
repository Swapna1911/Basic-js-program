// CheckOddEven
function CheckOddEven (number){
    if(number%2==0){
        console.log("even")
    } else {
        console.log("odd")
    }
}
CheckOddEven(55)
CheckOddEven(76)
CheckOddEven(52)

function xyz(a,b,c){
    if(a>=b && a>=c){
        console.log("A is greater") 
    }
    else if(b>=a && b>=c) {
        console.log("B is greater")

    } else if (c>=a && c>=b){
        console.log("C is greater")

    }
}
xyz(44,56,94)

// evenodd
for (let i= 1;i<=49; i++){
  if (i % 2 === 0 ) {
    console.log(i + " is even")
  } else{
    console.log(i + " is odd")
  }
}