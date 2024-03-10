const nums = [10, 20, 30];
nums.push(99);
console.log(nums);

let array = [];
function getLastValue(array){
   let lastIndex = (array.length-1);
   return array[lastIndex];
}
console.log(getLastValue([1,20,33,23]));
console.log(getLastValue(['hi', 'hello', 'good']));

let n = [1,2,3,4,5];
let a = n.length-1;
console.log(n[a]);

function arraySwap(array){
   const lastIndex = array.length - 1;

   const lastValue = array[lastIndex];
   const firstValue = array[0];

   array[0] = lastValue;
   array[lastIndex] = firstValue;

   return array;
}
console.log([1,20,33,23]);
console.log(arraySwap([1,20,33,23]));
console.log(arraySwap(['hi', 'hello', 'good']))

// for-loop counts up from 0 to 10, but counts up by 2
for(var i=0; i<=10; i+=2){
   console.log(i);
}


// for-loop counts down from 5 to 0
for(var j=5; j>=0; j-=1){
   console.log(j);
}

var i=0;
while(i<=10){
   console.log(i);
   i+=2;
}

var j=5;
while(j>=0){
   console.log(j);
   j--;
}

const number = [1,2,3];
for(let i=0; i<number.length; i++){
   console.log(number[i]+1);
}


function addOne(array){
   // saving the result as an array
   // you can also save it without array
   const result = [];
   for(let i=0; i<array.length; i++){
      result.push(array[i]+1);
   }
   // return the result
   return result;
}
console.log(addOne([2,3,4]));
console.log(addOne([-2, -1, 0, 99]));


function addNum(array, num){
   const result = [];
   for(let i=0; i<array.length; i++){
      result.push(array[i]+num);
   }
   return result;
}
console.log(addNum([1,2,3],2));
console.log(addNum([1,2,3],3));
console.log(addNum([-2, -1, 0, 99], 2));


function addArray(array1, array2){
   const result = [];
   for(let i=0; i<array1.length; i++){
      for(let j=0; j<array2.length; j++){
         if(i == j){
            result.push((array1[i] + array2[j]));
         }
      }
   }
   return result;
}
console.log(addArray([1, 1, 2],[1, 1, 3]));
console.log(addArray([1, 2, 3],[4, 5,  6]));

/*
// This code is äquiv 
function addArray(array1, array2){
   const result = [];
   for(let i=0; i<array1.length; i++){
      result.push(array1[i] + array2[i]);
   }
   return result;
}
console.log(addArray([1, 1, 2],[1, 1, 3]));
console.log(addArray([1, 2, 3],[4, 5,  6]));
*/

function countPositive(nums){
   const result = [];
   for(var i=0; i<=nums.length; i++){
      if(nums[i] > 0){
         result.push(nums[i]);
         // this code äquiv
         // result++;
      }
   }
   return result;
}
console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

function minMax(nums){
   // set the start values
   // for minMax without null []
   /*
   const result = {
      min: nums[0],
      max: nums[0]
   };
   */

   const result = {
      min: null,
      max: null
   };

   for(var i=0; i<nums.length; i++){
     if(result.min === null || nums[i] < result.min){
         result.min = nums[i];
     }
     if(result.max === null || nums[i] > result.max){
         result.max = nums[i];
     }
   }
   return result;
}
console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));
console.log(minMax([]));
console.log(minMax([3]));

function countWords(words){
   const result = {};
   for(var i=0; i<words.length; i++){
      if(!result[words[i]]){
         result[words[i]] = 1;
      } else {
         result[words[i]]++;
      }
   }
   return result;
}
console.log(countWords(['apple', 'grape', 'apple', 'apple']));

let words = ['hello', 'world', ' search', 'good'];
let index = -1;
for(let i=0; i<words.length; i++){
   if(words[i] === 'search' && words[i] > 1){
      index = i;
      break;
   }
}
console.log(index);

words = ['not', 'found'];
index = -1;

for(let i=0; i<words.length; i++){
   if(words[i] === 'search'){
      index = i;
      break;
   }
}
console.log(index);

function findIndex(array, word){
   for(var i=0; i<array.length; i++){
      if(array[i] === word){
         return i;
      }
   }
   return -1;
}
console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));

