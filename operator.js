// operator
function calculator(a,b)
{
    return{
      sum: a + b,
      substract: a - b,
      division:a/b,
      multiplication:a*b,
      square: a**b,
      remainder: a%b
    }
}
console.log(calculator(36,2))