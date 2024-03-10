
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


function unique(array){
    const result =[];
    for(let i=0; i<addArray.length; i++){
        const word = array[i];

        if(findIndex(result, word) === -1){
            result.push(word);
        }
    }
    return result;
}

console.log(unique(['green', 'red', 'blue', 'red']));
console.log(unique(['green', 'red', 'blue', 'red']));


function removeEgg(foods){
   const result = [];
   let totalEggs = 0;

   // to remove the last 2 'eggs', reverse the array first and 
   // method to reverse the order
   const reverseFood = foods.reverse(); 

   for(let i=0; i<reverseFood.length; i++){
      if(reverseFood[i] === 'egg' && totalEggs < 2){
           totalEggs++;
           continue;
      } else {
      // no need to use else, the only way to reach this code is if the if-state above is false
         result.push(reverseFood[i]);
      }
   }
   return result.reverse();
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));


function removeEggs(food){
   const foodsCopy = food.slice();
   const reverseFood = foodsCopy.reverse();

   const result = [];
   let totalEggs = 0;

   for(let i=0; i<reverseFood.length; i++){
      if(reverseFood[i] === 'egg' && totalEggs < 2){
         totalEggs++;
         continue;
      } else {
         result.push(reverseFood[i]);
      }
      
   }
   return result.reverse();
}

   const food = ['egg', 'apple', 'egg', 'egg', 'ham'];
   console.log(removeEggs(food));
   console.log(food);

// FizzBuzz problem


for(var i=1; i<=20; i++){

   if (i % 3 === 0 && i % 5 === 0){
      console.log('FizzBuzz')
   } else if ((i % 3) === 0){
      console.log('Fizz');
   } else if((i % 5) === 0) {
      console.log('Buzz');
   } else {
      console.log(i);
   }
}
