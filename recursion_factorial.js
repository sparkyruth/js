/**
 * code to find the factorial of a number
 * recursion must have a  base condition, otherwise it will run non-stop
 */

 function factorial(x){
     if(x<=0){
         return 1;
     }
     else{
         return x * factorial(x-1)
     }
 }

 let num=6

 if(num>0){
     //call the factorial function
     let result= factorial(num)
    //  console.log(result,"recursion")
 }

 /**
  * alternatively, instead of using recursion, you can do the long way using loops
  */
let arr=[1,2,3,4,5,6]

loopProduct(arr)
 function loopProduct(arr){
     let product=1;

     for(let i=0; i<arr.length; i++){
        // product=product*arr[i]
        product*=arr[i]
     }
    //  console.log(product, "loops")
 }

 /**
  * using recursion to print numbers in a countdown from 10
  */
 

 function countDown(number){
    //  console.log(number)
     let newNum=number-1
    //  console.log(newNum)
    if(newNum>0){
        countDown(newNum)
    }
  
 }
 countDown(10)

 /**
  * Write a recursive function that takes a number and returns the sum of all the numbers from zero to that number.
  */

  
  const arr=[1,2,3,4,5,6,7,8,9,10]
  sumOfNumbers(arr, 5)
 function sumOfNumbers(array , n){
    if (n <= 0) {
        return 1;
      } 
      else {
        return sumOfNumbers(arr, n - 1) * arr[n - 1];
      }
    
     
 }
 

