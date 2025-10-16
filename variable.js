// variable
const x=1
console.log(x)
x=2
console.log(x)

var x=1
console.log(x)
x=2
console.log(x)

let x=1
console.log(x)
x=2
console.log(x)



for(let i=1;i<=100;i++){
    if(i%2 !==0){
        console.log(i);
    }
 }   

 for(let i=1;i<=100;i=i+2){
    {
        console.log(i);
    }
 }   


 let result =2**18;
console.log(result)
console.log(2**18);

for (let i = 1;i<=20;i++){
    console.log(`2^${i} = ${ 2 ** i} `);
}

for(let i=0;i<=10;i++){
    if(i===6){
       continue;
    }
    console.log(result);
}
