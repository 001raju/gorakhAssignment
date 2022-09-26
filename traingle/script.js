console.log("hello fro js");
let addString = "";

for (let i = 1; i <= 7; i++) {
  //  console.log(i, "ivalue");

  for (let j = 0; j < i; j++) {
    addString += "*";
  }
  addString += "\n";
  // console.log("--------");
}
console.log(addString);

let display = "";
for (let i = 1; i <= 8;i++){
  // console.log(i, "ival");
  for(let j = i-1; j <= i+6; j++){
    if(j%2==0){
      display+= "#";
    }else{
      display += " "
    }
  }
  display += "\n";
}
console.log(display);

//  Write a function min that takes two arguments and returns their minimum.
//  Checks whether the input is number or not and returns the lower of the two number

function minimum(x,y){
  if(typeof x == "number" && typeof y == "number"){
    if(x>y){
      console.log(y, "is the minimum");
    }else if(x<y){
      console.log(x, "is the minimum");
    }else if(x===y){
      console.log(x, "&", y, " are equal.");
    }
  }else{
    console.log("wrong entry");
  };
} 
       
   

minimum(3,5);
minimum(5,1);
minimum("a", 1);
minimum(3,3)
minimum(1,"b")


// 2. Define a recursive function isEven to determine whether a number is completely divisible by 2.
// The function should accept a single parameter (a positive, anegative or whole number) and return a Boolean.
console.log("-----------------------------------------------------");
function isEven(num){
  if(typeof num=="string"){
    console.log("worong entery")
  }else{
  if(num%2==0){
    console.log(true);
  }else{
    console.log(false); 
  }
}}

isEven(4);
isEven(-4);
isEven("hello");

// 3. Write a function countBs that takes a string as its only argument and 
//     returns a number that indicates how many uppercase “B” characters there are in the string.
//     Next, write a function called countChar that behaves like countBs, 
//     except it takes a second argument that indicates the character that
//      is to be counted (rather than counting only uppercase “B” characters). 
//      Rewrite countBs to make use of this new function.

function countBs(text) {
  let charB = "B";
  let count = 0;

  for (let i = 0; i <= text.length; i++) {
    if (text.charAt(i) === charB) {
      count++;
    }
  }
  console.log("the number of 'B' = ", count);
}

countBs("BBasb");
countBs(123);
countBs("BBBBBkljafjlkjbb");

function countChar(text, inputChar) {
  let charB = "B";
  let givenChar = inputChar;
  let count = 0;
  let countNext = 0;

  for (let i = 0; i <= text.length; i++) {
    if (text.charAt(i) === charB) {
      count++;
    }
  }
  console.log("the number of 'B' = ", count);

  for(let j=0; j<=text.length; j++){
    if(text.charAt(j) === givenChar){
      countNext++;
    }

  }
  console.log("the number of ", givenChar , "=", countNext);
}

countChar("BBBBBkljafjlkjbb","j");


// 1. The sum of a range
//     console.log(sum(range(1, 10)));
//     Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
//     Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
//     As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. 
//     If no step is given, the elements go up by increments of one, corresponding to the old behavior. 
//     The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 
//     Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
//      Your code here.
//     console.log(range(1, 10));
//      → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     console.log(range(5, 2, -1));
//      → [5, 4, 3, 2]
//     console.log(sum(range(1, 10)));
//      → 55

function range(start, end){
  let arr = [];
 
  for(let i=start;i<=end;i++){
    arr.push(i);
  }
  console.log("the array is",arr);
 
}
range(1,10);

function sum(start, end){
  let arr = [];
  let sum = 0;
  for(let i = start; i<=end; i++){
    arr.push(i); 
  }
  for(let j = 0; j<arr.length;j++){
    sum = sum + arr[j];
  }
  console.log(sum);
}
sum(1,10);