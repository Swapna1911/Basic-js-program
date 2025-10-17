// function getsecondlargestlargest(arr){
//     let largest=-1,secondlargest=-1;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]> largest)
//             largest=arr[1];
//     }
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>secondlargest && arr[i] !== largest)
//             secondlargest=arr[i];
//         console.log(secondlargest)

//     }
//     return secondlargest;
// }
// console.log(getsecondlargestlargest([2,3,6,6,5]));



// let arr = [1, 2, 3, 4, 5, 6, 7];
// let reversedArr = arr.reverse();
// console.log(reversedArr); // Output: [7, 6, 5, 4, 3, 2, 1]


// function reverseArray(arr0){
//   let left = 0, right=arr0.lenght-1;
//   while(left < right){
//     arr[[left],arr[right]]=[arr[right],arr[left]]
//   }
//   left ++;
//   right--;

// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// reverseArray(arr)
// console.log(arr.join(""))


// function reverseArray(arr){
//   let n=arr.length;
//   for(let i=0; i<arr.length/2;i++){
//     let temp=arr[i];  //temp=1
//     arr[i]=arr[n-i-1]; //arr[i]=7 
//     arr[n-i-1]=temp;  //arr[n-i-1]=1
//   }

// }
// const arr=[1,2,3,4,5,6,7]
// reverseArray(arr);
// console.log(arr.join(""))

