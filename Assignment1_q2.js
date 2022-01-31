//Printing numbers from 1 to 30 and if the number is divisible by 15 then Printing "Hello World" and if the number is divisible by 3 then Printing "Hello"
//and if the number is divisible by 5 then "World".

let result = "" 

for(let i = 1; i <=30 ;i++) { 
   // if dividing i by 3 and 5  
   // number is divisible by both 3 and 5 
   if(i % 3 == 0 && i % 5 == 0) { 
      result = " Hello World"
      console.log(result); 
   // else if number is divisible only by 3 
   } 
   else if(i % 3 == 0) {  
      result =  " Hello "
      console.log(result); 
   // else if number is divisible only by 5 
   } else if(i % 5 == 0) { 
      result =  " World"
      console.log(result); 
   }
   // else print the number itself 
   else{
   result = i;
   console.log(result); 
   }
}
